import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { type Data } from "@measured/puck";
import "@measured/puck/puck.css";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function PreviewPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [previewData, setPreviewData] = useState<Data | null>(null);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("puck-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setPreviewData(parsedData);
      } catch (error) {
        console.error("Error loading preview data:", error);
      }
    }
  }, []);

  // Force re-render when language changes
  useEffect(() => {
    // Re-load data when language changes to get localized content
    const saved = localStorage.getItem("puck-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setPreviewData(parsedData);
      } catch (error) {
        console.error("Error loading preview data:", error);
      }
    }
  }, [i18n.language]);

  const handleBackToEditor = () => {
    navigate("/editor");
  };

  const handlePublish = () => {
    if (!previewData) return;
    
    // Generate HTML content
    const htmlContent = generateHTML(previewData);
    
    // Create and download HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateHTML = (data: Data) => {
    return `<!DOCTYPE html>
<html lang="${i18n.language}" dir="${i18n.language === 'ar' ? 'rtl' : 'ltr'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
        .puck-preview { min-height: 100vh; }
        [dir="rtl"] { text-align: right; }
        [dir="ltr"] { text-align: left; }
    </style>
</head>
<body>
    <div class="puck-preview">
        ${generateComponentHTML(data.content)}
    </div>
</body>
</html>`;
  };

  const generateComponentHTML = (components: Array<{ type: string; props?: Record<string, unknown> }>) => {
    if (!components || components.length === 0) {
      return '<div style="padding: 40px; text-align: center; color: #666;">No content to display</div>';
    }
    
    return components.map((component) => {
      if (!component || !component.type) return '';
      
      switch (component.type) {
        case 'Text':
          return `<div style="text-align: ${component.props?.align || 'left'}; font-size: ${component.props?.fontSize || '16px'}; color: ${component.props?.color || '#333'}; font-weight: ${component.props?.fontWeight || 'normal'}; padding: 20px; line-height: 1.6;">${component.props?.text || ''}</div>`;
        
        case 'Heading': {
          const level = component.props?.level || 'h1';
          const headingStyles = {
            h1: 'font-size: 2.5rem; font-weight: bold; margin: 0 0 20px 0;',
            h2: 'font-size: 2rem; font-weight: bold; margin: 0 0 16px 0;',
            h3: 'font-size: 1.5rem; font-weight: bold; margin: 0 0 12px 0;',
            h4: 'font-size: 1.25rem; font-weight: bold; margin: 0 0 8px 0;',
            h5: 'font-size: 1.125rem; font-weight: bold; margin: 0 0 6px 0;',
            h6: 'font-size: 1rem; font-weight: bold; margin: 0 0 4px 0;'
          };
          return `<${level} style="padding: 20px; ${headingStyles[level as keyof typeof headingStyles]}">${component.props?.text || ''}</${level}>`;
        }
        
        case 'Button': {
          const buttonStyle = component.props?.variant === 'outline' 
            ? 'background-color: transparent; border: 2px solid #007bff; color: #007bff;'
            : 'background-color: #007bff; border: none; color: white;';
          return `<div style="padding: 20px; text-align: center;"><a href="${component.props?.linkUrl || '#'}" style="display: inline-block; padding: 12px 24px; ${buttonStyle} text-decoration: none; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">${component.props?.text || 'Button'}</a></div>`;
        }
        
        case 'Image': {
          const widthStyle = component.props?.width === 'small' ? 'width: 200px;' : 
                           component.props?.width === 'medium' ? 'width: 400px;' : 
                           component.props?.width === 'large' ? 'width: 600px;' : 'width: 100%; max-width: 800px;';
          return `<div style="padding: 20px; text-align: center;"><img src="${component.props?.imageUrl || ''}" alt="${component.props?.altText || ''}" style="${widthStyle} height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"></div>`;
        }
        
        case 'Card':
          return `<div style="padding: 20px;"><div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
            <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: bold; color: #1f2937;">${component.props?.title || 'Card Title'}</h3>
            <p style="margin: 0; color: #6b7280; line-height: 1.6;">${component.props?.content || 'Card content'}</p>
          </div></div>`;
        
        case 'Hero':
          return `<div style="background: linear-gradient(135deg, ${component.props?.backgroundColor || '#667eea'} 0%, ${component.props?.backgroundColor || '#667eea'}dd 100%); color: ${component.props?.textColor || '#ffffff'}; padding: 80px 20px; text-align: center; min-height: ${component.props?.height || '500px'}; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden;">
            ${component.props?.backgroundImage ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('${component.props.backgroundImage}'); background-size: cover; background-position: center; opacity: 0.3; z-index: 0;"></div>` : ''}
            <div style="position: relative; z-index: 1;">
              <h1 style="font-size: 3.5rem; margin: 0 0 24px 0; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${component.props?.title || 'Hero Title'}</h1>
              <p style="font-size: 1.25rem; margin: 0 0 32px 0; opacity: 0.95; max-width: 600px; margin-left: auto; margin-right: auto;">${component.props?.subtitle || 'Hero Subtitle'}</p>
              <a href="${component.props?.buttonLink || '#'}" style="display: inline-block; padding: 16px 32px; background-color: rgba(255,255,255,0.2); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; border: 2px solid white; transition: all 0.3s ease; backdrop-filter: blur(10px);">${component.props?.buttonText || 'Get Started'}</a>
            </div>
          </div>`;
        
        case 'FeatureCard':
          return `<div style="padding: 20px;"><div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; text-align: center; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease; height: 100%;">
            <div style="font-size: 3rem; margin-bottom: 20px;">${component.props?.iconEmoji || '🚀'}</div>
            <h3 style="margin: 0 0 16px 0; font-size: 22px; font-weight: bold; color: #1f2937;">${component.props?.title || 'Feature Title'}</h3>
            <p style="margin: 0; color: #6b7280; line-height: 1.6;">${component.props?.description || 'Feature description'}</p>
          </div></div>`;
        
        case 'Testimonial':
          return `<div style="padding: 20px;"><div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
            <p style="font-size: 1.125rem; font-style: italic; margin: 0 0 24px 0; color: #374151; line-height: 1.6;">"${component.props?.quote || 'Testimonial quote'}"</p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
              ${component.props?.avatarImage ? `<img src="${component.props.avatarImage}" alt="${component.props.author}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">` : ''}
              <div>
                <div style="font-weight: bold; color: #1f2937;">${component.props?.author || 'Author Name'}</div>
                <div style="color: #6b7280; font-size: 0.875rem;">${component.props?.role || 'Author Role'}</div>
              </div>
            </div>
          </div></div>`;
        
        case 'PricingCard':
          return `<div style="padding: 20px;"><div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; position: relative; height: 100%;">
            ${component.props?.popular ? '<div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #007bff; color: white; padding: 6px 16px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;">Most Popular</div>' : ''}
            <h3 style="margin: 0 0 12px 0; font-size: 24px; font-weight: bold; color: #1f2937;">${component.props?.planName || 'Plan Name'}</h3>
            <div style="font-size: 2.5rem; font-weight: bold; margin: 20px 0; color: #1f2937;">${component.props?.price || '$29'}<span style="font-size: 1rem; color: #6b7280;">${component.props?.billingPeriod || '/month'}</span></div>
            <ul style="list-style: none; padding: 0; margin: 24px 0; text-align: left;">
              ${String(component.props?.features || '').split('\n').filter((f: string) => f.trim()).map((feature: string) => `<li style="padding: 8px 0; color: #6b7280; display: flex; align-items: center;"><span style="color: #10b981; margin-right: 8px;">✓</span> ${feature}</li>`).join('')}
            </ul>
            <a href="${component.props?.buttonLink || '#'}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; width: 100%; text-align: center; transition: background-color 0.3s ease;">${component.props?.buttonText || 'Get Started'}</a>
          </div></div>`;
        
        case 'ContactForm':
          return `<div style="padding: 40px 20px; background: ${component.props?.backgroundColor || '#f8fafc'};">
            <h2 style="text-align: center; margin: 0 0 32px 0; font-size: 32px; font-weight: bold; color: #1f2937;">${component.props?.formTitle || 'Get in Touch'}</h2>
            <form style="max-width: 500px; margin: 0 auto;">
              <div style="margin-bottom: 20px;">
                <input type="text" placeholder="${component.props?.namePlaceholder || 'Your Name'}" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; transition: border-color 0.3s ease; box-sizing: border-box;">
              </div>
              <div style="margin-bottom: 20px;">
                <input type="email" placeholder="${component.props?.emailPlaceholder || 'Your Email'}" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; transition: border-color 0.3s ease; box-sizing: border-box;">
              </div>
              <div style="margin-bottom: 24px;">
                <textarea placeholder="${component.props?.messagePlaceholder || 'Your Message'}" rows="5" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; resize: vertical; transition: border-color 0.3s ease; box-sizing: border-box;"></textarea>
              </div>
              <button type="submit" style="width: 100%; padding: 12px; background-color: #007bff; color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease;">${component.props?.submitButtonText || 'Send Message'}</button>
            </form>
          </div>`;
        
        default:
          return `<div style="padding: 20px; border: 2px dashed #d1d5db; text-align: center; color: #6b7280; border-radius: 8px;">Unknown component: ${component.type}</div>`;
      }
    }).join('');
  };

  if (!previewData) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>No preview data available</h2>
        <button onClick={handleBackToEditor} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Back to Editor
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Preview Header */}
      <div style={{
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleBackToEditor}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ✏️ {t('editor.backToEditor')}
          </button>
          <button
            onClick={handlePublish}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📄 {t('editor.publish')}
          </button>
        </div>
        
        <LanguageSwitcher />
      </div>

      {/* Preview Content */}
      <div style={{ minHeight: "100vh" }}>
        <div dangerouslySetInnerHTML={{ __html: generateComponentHTML(previewData.content) }} />
      </div>
    </div>
  );
}
