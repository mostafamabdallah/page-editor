// puck.config.tsx
import { type Config } from "@measured/puck";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const config: Config = {

  components: {
    Text: {
      fields: {
        text: {
          type: "text",
          label: "Text Content"
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        fontSize: {
          type: "select",
          label: "Font Size",
          options: [
            { label: "Small", value: "14px" },
            { label: "Medium", value: "16px" },
            { label: "Large", value: "18px" },
            { label: "Extra Large", value: "20px" },
          ],
        },
        color: { type: "text", label: "Text Color" },
        fontWeight: {
          type: "select",
          label: "Font Weight",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Light", value: "300" },
          ],
        },
      },
      defaultProps: {
        text: "Hello world",
        align: "left",
        fontSize: "16px",
        color: "#333",
        fontWeight: "normal",
      },
      render: ({ text, align, fontSize, color, fontWeight }) => (
        <p style={{ 
          margin: "10px 0", 
          lineHeight: "1.6",
          textAlign: align,
          fontSize,
          color,
          fontWeight,
        }}>{text}</p>
      ),
    },

    Heading: {
      fields: {
        text: {
          type: "text",
          label: "Heading Text"
        },
        level: {
          type: "select",
          label: "Heading Level",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
          ],
        },
      },
      defaultProps: {
        text: "Heading",
        level: "h2",
      },
      render: ({ text, level }) => {
        const Tag = level as "h1" | "h2" | "h3";
        return (
          <Tag style={{ margin: "20px 0", fontWeight: "bold" }}>
            {text}
          </Tag>
        );
      },
    },

    Button: {
      fields: {
        text: {
          type: "text",
          label: "Button Text"
        },
        link: {
          type: "text",
          label: "Link URL"
        },
        variant: {
          type: "select",
          label: "Button Variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Secondary", value: "secondary" },
            { label: "Ghost", value: "ghost" },
            { label: "Link", value: "link" },
          ],
        },
        size: {
          type: "select",
          label: "Button Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Default", value: "default" },
            { label: "Large", value: "lg" },
            { label: "Icon", value: "icon" },
          ],
        },
      },
      defaultProps: {
        text: "Click Me",
        link: "#",
        variant: "default",
        size: "default",
      },
      render: ({ text, link, variant, size }) => {
        return (
          <a href={link} style={{ textDecoration: "none" }}>
            <Button variant={variant as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} size={size as "default" | "sm" | "lg" | "icon"}>
              {text}
            </Button>
          </a>
        );
      },
    },

    Image: {
      fields: {
        src: {
          type: "text",
          label: "Image URL"
        },
        alt: {
          type: "text",
          label: "Alt Text"
        },
        width: {
          type: "select",
          label: "Width",
          options: [
            { label: "Small (200px)", value: "200px" },
            { label: "Medium (400px)", value: "400px" },
            { label: "Large (600px)", value: "600px" },
            { label: "Full Width", value: "100%" },
          ],
        },
      },
      defaultProps: {
        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
        alt: "Image",
        width: "400px",
      },
      render: ({ src, alt, width }) => (
        <img
          src={src}
          alt={alt}
          style={{
            width,
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            margin: "10px 0",
          }}
        />
      ),
    },

    Card: {
      fields: {
        title: {
          type: "text",
          label: "Card Title"
        },
        content: {
          type: "textarea",
          label: "Card Content"
        },
        imageUrl: {
          type: "text",
          label: "Image URL"
        },
      },
      defaultProps: {
        title: "Card Title",
        content: "This is a card component with title, content, and image.",
        imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcmQ8L3RleHQ+PC9zdmc+",
      },
      render: ({ title, content, imageUrl }) => (
        <div style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          maxWidth: "350px",
          margin: "10px 0",
        }}>
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <div style={{ padding: "20px" }}>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>
              {title}
            </h3>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
              {content}
            </p>
          </div>
        </div>
      ),
    },

    Container: {
      fields: {
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f5f5f5" },
            { label: "Blue", value: "#e6f3ff" },
            { label: "Green", value: "#e6ffe6" },
          ],
        },
        padding: {
          type: "select",
          label: "Padding",
          options: [
            { label: "Small", value: "20px" },
            { label: "Medium", value: "40px" },
            { label: "Large", value: "60px" },
          ],
        },
      },
      defaultProps: {
        backgroundColor: "#ffffff",
        padding: "40px",
      },
      render: ({ children, backgroundColor, padding }) => (
        <div style={{
          backgroundColor,
          padding,
          margin: "10px 0",
          borderRadius: "8px",
        }}>
          {children}
        </div>
      ),
    },

    // Advanced Components
    Hero: {
      fields: {
        title: {
          type: "text",
          label: "Hero Title"
        },
        subtitle: {
          type: "textarea",
          label: "Hero Subtitle"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        buttonLink: {
          type: "text",
          label: "Button Link"
        },
        backgroundColor: {
          type: "text",
          label: "Background Color"
        },
        textColor: {
          type: "text",
          label: "Text Color"
        },
        backgroundImage: {
          type: "text",
          label: "Background Image URL"
        },
        height: {
          type: "select",
          label: "Hero Height",
          options: [
            { label: "Small (300px)", value: "300px" },
            { label: "Medium (500px)", value: "500px" },
            { label: "Large (700px)", value: "700px" },
          ],
        },
      },
      defaultProps: {
        title: "Welcome to Our Platform",
        subtitle: "Build amazing landing pages with our powerful drag-and-drop editor. Create, customize, and deploy in minutes.",
        buttonText: "Get Started",
        buttonLink: "#",
        backgroundColor: "#007bff",
        textColor: "#ffffff",
        backgroundImage: "",
        height: "500px",
      },
      render: ({ title, subtitle, buttonText, buttonLink, backgroundColor, textColor, backgroundImage, height }) => (
        <div style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: textColor,
          padding: "60px 20px",
          textAlign: "center",
          minHeight: height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
            {title}
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", maxWidth: "600px", lineHeight: "1.6" }}>
            {subtitle}
          </p>
          <a
            href={buttonLink}
            style={{
              backgroundColor: "white",
              color: "#333",
              padding: "15px 30px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "inline-block",
            }}
          >
            {buttonText}
          </a>
        </div>
      ),
    },

    Grid: {
      fields: {
        columns: {
          type: "select",
          label: "Number of Columns",
          options: [
            { label: "1 Column", value: "1" },
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" },
          ],
        },
        gap: {
          type: "select",
          label: "Gap Between Items",
          options: [
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (30px)", value: "30px" },
          ],
        },
        responsive: {
          type: "radio",
          label: "Responsive Layout",
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ],
        },
        children: { type: "slot", label: "Grid Items" },
      },
      defaultProps: {
        columns: "3",
        gap: "20px",
        responsive: "true",
      },

      render: ({ children, columns, gap, responsive }) => (
        <div style={{
          display: "grid",
          gridTemplateColumns: responsive === "true"
            ? `repeat(auto-fit, minmax(250px, 1fr))`
            : `repeat(${columns}, 1fr)`,
          gap,
          width: "100%",
          margin: "10px 0",
        }}>
          {children}
        </div>
      ),
    },

    Flex: {
      fields: {
        direction: {
          type: "select",
          label: "Flex Direction",
          options: [
            { label: "Row (Horizontal)", value: "row" },
            { label: "Column (Vertical)", value: "column" },
          ],
        },
        justify: {
          type: "select",
          label: "Justify Content",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Space Between", value: "space-between" },
            { label: "Space Around", value: "space-around" },
            { label: "Space Evenly", value: "space-evenly" },
          ],
        },
        align: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Stretch", value: "stretch" },
            { label: "Baseline", value: "baseline" },
          ],
        },
        gap: {
          type: "select",
          label: "Gap Between Items",
          options: [
            { label: "None", value: "0" },
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (30px)", value: "30px" },
          ],
        },
        wrap: {
          type: "radio",
          label: "Wrap Items",
          options: [
            { label: "Yes", value: "wrap" },
            { label: "No", value: "nowrap" },
          ],
        },
        children: { type: "slot", label: "Flex Items" },
      },
      defaultProps: {
        direction: "row",
        justify: "flex-start",
        align: "center",
        gap: "20px",
        wrap: "wrap",
      },

      render: ({ children, direction, justify, align, gap, wrap }) => (
        <div style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap,
          flexWrap: wrap,
          width: "100%",
          margin: "10px 0",
        }}>
          {children}
        </div>
      ),
    },

    Divider: {
      fields: {
        type: {
          type: "select",
          label: "Divider Type",
          options: [
            { label: "Horizontal Line", value: "horizontal" },
            { label: "Vertical Line", value: "vertical" },
            { label: "Text Separator", value: "text" },
          ],
        },
        text: {
          type: "text",
          label: "Divider Text",
        },
        style: {
          type: "select",
          label: "Line Style",
          options: [
            { label: "Solid", value: "solid" },
            { label: "Dashed", value: "dashed" },
            { label: "Dotted", value: "dotted" },
          ],
        },
        color: {
          type: "select",
          label: "Color",
          options: [
            { label: "Gray", value: "#e0e0e0" },
            { label: "Dark Gray", value: "#666666" },
            { label: "Blue", value: "#007bff" },
            { label: "Green", value: "#28a745" },
          ],
        },
        thickness: {
          type: "select",
          label: "Line Thickness",
          options: [
            { label: "Thin (1px)", value: "1px" },
            { label: "Medium (2px)", value: "2px" },
            { label: "Thick (3px)", value: "3px" },
          ],
        },
        margin: {
          type: "select",
          label: "Margin",
          options: [
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (40px)", value: "40px" },
          ],
        },
      },
      defaultProps: {
        type: "horizontal",
        text: "OR",
        style: "solid",
        color: "#e0e0e0",
        thickness: "1px",
        margin: "20px",
      },
      render: ({ type, text, style, color, thickness, margin }) => {
        if (type === "vertical") {
          return (
            <div style={{
              width: thickness,
              backgroundColor: color,
              borderStyle: style,
              margin: `0 ${margin}`,
              alignSelf: "stretch",
            }} />
          );
        }

        if (type === "text") {
          return (
            <div style={{
              display: "flex",
              alignItems: "center",
              margin: `${margin} 0`,
            }}>
              <div style={{
                flex: 1,
                height: thickness,
                backgroundColor: color,
                borderStyle: style,
              }} />
              <span style={{
                margin: "0 15px",
                color: "#666",
                fontWeight: "bold",
                fontSize: "14px",
              }}>
                {text}
              </span>
              <div style={{
                flex: 1,
                height: thickness,
                backgroundColor: color,
                borderStyle: style,
              }} />
            </div>
          );
        }

        return (
          <div style={{
            height: thickness,
            backgroundColor: color,
            borderStyle: style,
            margin: `${margin} 0`,
            width: "100%",
          }} />
        );
      },
    },

    Spacer: {
      fields: {
        height: {
          type: "select",
          label: "Height",
          options: [
            { label: "Small (20px)", value: "20px" },
            { label: "Medium (40px)", value: "40px" },
            { label: "Large (60px)", value: "60px" },
            { label: "Extra Large (100px)", value: "100px" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "Transparent", value: "transparent" },
            { label: "Light Gray", value: "#f5f5f5" },
            { label: "Blue", value: "#e3f2fd" },
            { label: "Green", value: "#e8f5e8" },
          ],
        },
      },
      defaultProps: {
        height: "40px",
        backgroundColor: "transparent",
      },
      render: ({ height, backgroundColor }) => (
        <div style={{
          height,
          backgroundColor,
          width: "100%",
        }} />
      ),
    },

    FeatureCard: {
      fields: {
        icon: {
          type: "text",
          label: "Icon (emoji or text)"
        },
        title: {
          type: "text",
          label: "Feature Title"
        },
        description: {
          type: "textarea",
          label: "Feature Description"
        },
        color: {
          type: "select",
          label: "Card Color",
          options: [
            { label: "Blue", value: "#e3f2fd" },
            { label: "Green", value: "#e8f5e8" },
            { label: "Purple", value: "#f3e5f5" },
            { label: "Orange", value: "#fff3e0" },
          ],
        },
      },
      defaultProps: {
        icon: "🚀",
        title: "Amazing Feature",
        description: "This is a feature card that highlights key benefits and features of your product or service.",
        color: "#e3f2fd",
      },
      render: ({ icon, title, description, color }) => (
        <Card style={{ backgroundColor: color, textAlign: "center" }}>
          <CardHeader>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {icon}
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription style={{ color: "#666", lineHeight: "1.6" }}>
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      ),
    },

    Testimonial: {
      fields: {
        quote: {
          type: "textarea",
          label: "Testimonial Quote"
        },
        author: {
          type: "text",
          label: "Author Name"
        },
        role: {
          type: "text",
          label: "Author Role/Company"
        },
        avatar: {
          type: "text",
          label: "Avatar Image URL"
        },
        rating: {
          type: "select",
          label: "Star Rating",
          options: [
            { label: "5 Stars", value: "5" },
            { label: "4 Stars", value: "4" },
            { label: "3 Stars", value: "3" },
          ],
        },
      },
      defaultProps: {
        quote: "This platform has completely transformed how we build our landing pages. The drag-and-drop interface is intuitive and powerful.",
        author: "John Smith",
        role: "CEO, TechCorp",
        avatar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM2NjY2NjYiLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5KUzwvdGV4dD4KPC9zdmc+",
        rating: "5",
      },
      render: ({ quote, author, role, avatar, rating }) => (
        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid #e9ecef",
          margin: "10px 0",
        }}>
          <div style={{ marginBottom: "20px" }}>
            {Array.from({ length: parseInt(rating) }, (_, i) => (
              <span key={i} style={{ color: "#ffc107", fontSize: "1.2rem" }}>★</span>
            ))}
          </div>
          <blockquote style={{
            fontSize: "1.1rem",
            fontStyle: "italic",
            margin: "0 0 20px 0",
            lineHeight: "1.6",
            color: "#333",
          }}>
            "{quote}"
          </blockquote>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={avatar}
              alt={author}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: "bold", color: "#333" }}>{author}</div>
              <div style={{ color: "#666", fontSize: "0.9rem" }}>{role}</div>
            </div>
          </div>
        </div>
      ),
    },

    PricingCard: {
      fields: {
        planName: {
          type: "text",
          label: "Plan Name"
        },
        price: {
          type: "text",
          label: "Price"
        },
        period: {
          type: "text",
          label: "Billing Period"
        },
        features: {
          type: "textarea",
          label: "Features (one per line)"
        },
        buttonText: {
          type: "text",
          label: "Button Text"
        },
        buttonLink: {
          type: "text",
          label: "Button Link"
        },
        popular: {
          type: "radio",
          label: "Popular Plan",
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ],
        },
      },
      defaultProps: {
        planName: "Pro Plan",
        price: "$29",
        period: "/month",
        features: "Unlimited pages\nCustom domains\nAdvanced analytics\nPriority support",
        buttonText: "Get Started",
        buttonLink: "#",
        popular: "false",
      },
      render: ({ planName, price, period, features, buttonText, buttonLink, popular }) => (
        <div style={{
          border: popular === "true" ? "2px solid #007bff" : "1px solid #e0e0e0",
          borderRadius: "12px",
          padding: "30px",
          backgroundColor: "white",
          position: "relative",
          margin: "10px 0",
          boxShadow: popular === "true" ? "0 4px 12px rgba(0,123,255,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
        }}>
          {popular === "true" && (
            <div style={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#007bff",
              color: "white",
              padding: "5px 20px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}>
              Most Popular
            </div>
          )}
          <h3 style={{ margin: "0 0 10px 0", fontSize: "1.5rem", textAlign: "center" }}>
            {planName}
          </h3>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#007bff" }}>
              {price}
            </span>
            <span style={{ color: "#666" }}>{period}</span>
          </div>
          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0 0 30px 0",
          }}>
            {features.split('\n').map((feature: string, index: number) => (
              <li key={index} style={{
                padding: "8px 0",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
              }}>
                <span style={{ color: "#28a745", marginRight: "10px" }}>✓</span>
                {feature.trim()}
              </li>
            ))}
          </ul>
          <a
            href={buttonLink}
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: popular === "true" ? "#007bff" : "#6c757d",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {buttonText}
          </a>
        </div>
      ),
    },

    ContactForm: {
      fields: {
        title: {
          type: "text",
          label: "Form Title"
        },
        submitText: {
          type: "text",
          label: "Submit Button Text"
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f8f9fa" },
            { label: "Blue", value: "#e3f2fd" },
          ],
        },
      },
      defaultProps: {
        title: "Get in Touch",
        submitText: "Send Message",
        backgroundColor: "#f8f9fa",
      },
      render: ({ title, submitText, backgroundColor }) => (
        <div style={{
          backgroundColor,
          padding: "40px",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          margin: "10px 0",
        }}>
          <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
            {title}
          </h3>
          <form style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <textarea
                placeholder="Your Message"
                rows={4}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#007bff",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {submitText}
            </button>
          </form>
        </div>
      ),
    },

    // Multi-column Layout Components
    TwoColumn: {
      fields: {
        leftColumn: {
          type: "slot",
        },
        rightColumn: {
          type: "slot",
        },
        gap: {
          type: "select",
          label: "Gap Between Columns",
          options: [
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (30px)", value: "30px" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "Transparent", value: "transparent" },
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f8f9fa" },
            { label: "Blue", value: "#e3f2fd" },
          ],
        },
      },
      defaultProps: {
        gap: "20px",
        backgroundColor: "transparent",
      },
      render: ({ leftColumn: LeftColumn, rightColumn: RightColumn, gap, backgroundColor }) => (
        <div style={{
          backgroundColor,
          padding: "20px",
          margin: "10px 0",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap,
            maxWidth: "1200px",
            margin: "0 auto",
          }}>
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
      ),
    },

    ThreeColumn: {
      fields: {
        leftColumn: {
          type: "slot",
        },
        middleColumn: {
          type: "slot",
        },
        rightColumn: {
          type: "slot",
        },
        gap: {
          type: "select",
          label: "Gap Between Columns",
          options: [
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (30px)", value: "30px" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "Transparent", value: "transparent" },
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f8f9fa" },
            { label: "Blue", value: "#e3f2fd" },
          ],
        },
      },
      defaultProps: {
        gap: "20px",
        backgroundColor: "transparent",
      },
      render: ({ leftColumn: LeftColumn, middleColumn: MiddleColumn, rightColumn: RightColumn, gap, backgroundColor }) => (
        <div style={{
          backgroundColor,
          padding: "20px",
          margin: "10px 0",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap,
            maxWidth: "1200px",
            margin: "0 auto",
          }}>
            <LeftColumn />
            <MiddleColumn />
            <RightColumn />
          </div>
        </div>
      ),
    },

    FlexContainer: {
      fields: {
        content: {
          type: "slot",
        },
        direction: {
          type: "select",
          label: "Flex Direction",
          options: [
            { label: "Row (Horizontal)", value: "row" },
            { label: "Column (Vertical)", value: "column" },
          ],
        },
        gap: {
          type: "select",
          label: "Gap Between Items",
          options: [
            { label: "None", value: "0" },
            { label: "Small (10px)", value: "10px" },
            { label: "Medium (20px)", value: "20px" },
            { label: "Large (30px)", value: "30px" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Space Between", value: "space-between" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "Transparent", value: "transparent" },
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f8f9fa" },
            { label: "Blue", value: "#e3f2fd" },
          ],
        },
      },
      defaultProps: {
        direction: "row",
        gap: "20px",
        align: "center",
        backgroundColor: "transparent",
      },
      render: ({ content: Content, direction, gap, align, backgroundColor }) => (
        <div style={{
          backgroundColor,
          padding: "20px",
          margin: "10px 0",
        }}>
          <Content
            style={{
              display: "flex",
              flexDirection: direction,
              alignItems: align,
              gap,
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          />
        </div>
      ),
    },

    // Advanced Grid Component (following Puck documentation example)
    AdvancedGrid: {
      fields: {
        content: {
          type: "slot",
        },
        columns: {
          type: "select",
          label: "Number of Columns",
          options: [
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" },
            { label: "5 Columns", value: "5" },
          ],
        },
        rows: {
          type: "select",
          label: "Number of Rows",
          options: [
            { label: "1 Rows", value: "1" },
            { label: "2 Rows", value: "2" },
            { label: "3 Rows", value: "3" },
            { label: "4 Rows", value: "4" },
            { label: "5 Rows", value: "5" },
          ],
        },
        gap: {
          type: "select",
          label: "Gap Between Items",
          options: [
            { label: "Small (8px)", value: "8" },
            { label: "Medium (16px)", value: "16" },
            { label: "Large (24px)", value: "24" },
            { label: "Extra Large (32px)", value: "32" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "Transparent", value: "transparent" },
            { label: "White", value: "#ffffff" },
            { label: "Light Gray", value: "#f8f9fa" },
            { label: "Blue", value: "#e3f2fd" },
          ],
        },
      },
      defaultProps: {
        columns: "4",
        rows: "4",
        gap: "16",
        backgroundColor: "transparent",
      },
      render: ({ content: Content, columns, rows, gap, backgroundColor }) => (
        <div style={{
          backgroundColor,
          padding: "20px",
          margin: "10px 0",
        }}>
          <Content
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gap: `${gap}px`,
              maxWidth: "1200px",
              margin: "0 auto",
              minHeight: "400px",
            }}
          />
        </div>
      ),
    },

    // Grid Card Component (inline mode for advanced grid)
    GridCard: {
      inline: true, // Enable inline mode, removing the Puck wrapper
      fields: {
        text: {
          type: "text",
          label: "Card Text"
        },
        spanCol: {
          type: "select",
          label: "Column Span",
          options: [
            { label: "1 Column", value: "1" },
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" },
          ],
        },
        spanRow: {
          type: "select",
          label: "Row Span",
          options: [
            { label: "1 Row", value: "1" },
            { label: "2 Rows", value: "2" },
            { label: "3 Rows", value: "3" },
            { label: "4 Rows", value: "4" },
          ],
        },
        backgroundColor: {
          type: "select",
          label: "Background Color",
          options: [
            { label: "White", value: "#ffffff" },
            { label: "Light Blue", value: "#e3f2fd" },
            { label: "Light Green", value: "#e8f5e8" },
            { label: "Light Purple", value: "#f3e5f5" },
            { label: "Light Orange", value: "#fff3e0" },
          ],
        },
        textColor: {
          type: "select",
          label: "Text Color",
          options: [
            { label: "Black", value: "#000000" },
            { label: "Dark Gray", value: "#333333" },
            { label: "Blue", value: "#1976d2" },
            { label: "Green", value: "#388e3c" },
            { label: "Purple", value: "#7b1fa2" },
          ],
        },
      },
      defaultProps: {
        text: "Grid Card",
        spanCol: "1",
        spanRow: "1",
        backgroundColor: "#ffffff",
        textColor: "#333333",
      },
      render: ({ text, spanCol, spanRow, backgroundColor, textColor, puck }) => (
        <div
          ref={puck.dragRef} // Let Puck know this element is draggable
          style={{
            gridColumn: `span ${spanCol}`,
            gridRow: `span ${spanRow}`,
            backgroundColor,
            color: textColor,
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease",
          }}
        >
          {text}
        </div>
      ),
    },

    // ========== LAYOUT COMPONENTS ==========
    LayoutContainer: {
      fields: {
        backgroundColor: { type: "text", label: "Background Color" },
        padding: { type: "text", label: "Padding (e.g. 20px)" },
        margin: { type: "text", label: "Margin (e.g. 10px)" },
        borderRadius: { type: "text", label: "Border Radius (e.g. 8px)" },
        border: { type: "text", label: "Border (e.g. 1px solid #ccc)" },
        maxWidth: { type: "text", label: "Max Width (e.g. 1200px)" },
        textAlign: {
          type: "select",
          label: "Text Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        children: { type: "slot", label: "Container Content" },
      },
      defaultProps: {
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "0",
        borderRadius: "0",
        border: "none",
        maxWidth: "100%",
        textAlign: "left",
      },
      render: ({ backgroundColor, padding, margin, borderRadius, border, maxWidth, textAlign, children }) => (
        <div style={{
          backgroundColor,
          padding,
          margin,
          borderRadius,
          border,
          maxWidth,
          textAlign,
          width: "100%",
        }}>
          {children}
        </div>
      ),
    },

    Section: {
      fields: {
        backgroundColor: { type: "text", label: "Background Color" },
        padding: { type: "text", label: "Padding (e.g. 60px 20px)" },
        margin: { type: "text", label: "Margin (e.g. 0)" },
        minHeight: { type: "text", label: "Min Height (e.g. 400px)" },
        backgroundImage: { type: "text", label: "Background Image URL" },
        backgroundSize: {
          type: "select",
          label: "Background Size",
          options: [
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Auto", value: "auto" },
          ],
        },
        children: { type: "slot", label: "Section Content" },
      },
      defaultProps: {
        backgroundColor: "#f8f9fa",
        padding: "60px 20px",
        margin: "0",
        minHeight: "auto",
        backgroundImage: "",
        backgroundSize: "cover",
      },
      render: ({ backgroundColor, padding, margin, minHeight, backgroundImage, backgroundSize, children }) => (
        <section style={{
          backgroundColor,
          padding,
          margin,
          minHeight,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}>
          {children}
        </section>
      ),
    },

    Row: {
      fields: {
        gap: { type: "text", label: "Gap (e.g. 20px)" },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Stretch", value: "stretch" },
          ],
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Space Between", value: "space-between" },
            { label: "Space Around", value: "space-around" },
          ],
        },
        wrap: {
          type: "radio",
          label: "Wrap",
          options: [
            { label: "Yes", value: "wrap" },
            { label: "No", value: "nowrap" },
          ],
        },
        children: { type: "slot", label: "Row Items" },
      },
      defaultProps: {
        gap: "20px",
        alignItems: "center",
        justifyContent: "flex-start",
        wrap: "wrap",
      },
      render: ({ gap, alignItems, justifyContent, wrap, children }) => (
        <div style={{
          display: "flex",
          gap,
          alignItems,
          justifyContent,
          flexWrap: wrap,
          width: "100%",
        }}>
          {children}
        </div>
      ),
    },

    Column: {
      fields: {
        gap: { type: "text", label: "Gap (e.g. 20px)" },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Stretch", value: "stretch" },
          ],
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: [
            { label: "Start", value: "flex-start" },
            { label: "Center", value: "center" },
            { label: "End", value: "flex-end" },
            { label: "Space Between", value: "space-between" },
            { label: "Space Around", value: "space-around" },
          ],
        },
        children: { type: "slot", label: "Column Items" },
      },
      defaultProps: {
        gap: "20px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      },
      render: ({ gap, alignItems, justifyContent, children }) => (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap,
          alignItems,
          justifyContent,
          width: "100%",
        }}>
          {children}
        </div>
      ),
    },

    // ========== FORM COMPONENTS ==========
    Input: {
      fields: {
        type: {
          type: "select",
          label: "Input Type",
          options: [
            { label: "Text", value: "text" },
            { label: "Email", value: "email" },
            { label: "Password", value: "password" },
            { label: "Number", value: "number" },
          ],
        },
        placeholder: { type: "text", label: "Placeholder" },
        name: { type: "text", label: "Name" },
        required: {
          type: "radio",
          label: "Required",
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ],
        },
      },
      defaultProps: {
        type: "text",
        placeholder: "Enter text...",
        name: "input",
        required: "false",
      },
      render: ({ type, placeholder, name, required }) => (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          required={required === "true"}
          style={{ width: "100%" }}
        />
      ),
    },

    Textarea: {
      fields: {
        placeholder: { type: "text", label: "Placeholder" },
        name: { type: "text", label: "Name" },
        rows: { type: "number", label: "Rows" },
        required: {
          type: "radio",
          label: "Required",
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ],
        },
      },
      defaultProps: {
        placeholder: "Enter your message...",
        name: "textarea",
        rows: 4,
        required: "false",
      },
      render: ({ placeholder, name, rows, required }) => (
        <Textarea
          placeholder={placeholder}
          name={name}
          rows={rows}
          required={required === "true"}
          style={{ width: "100%" }}
        />
      ),
    },

    // ========== SHADCN/UI COMPONENTS ==========
    Badge: {
      fields: {
        text: { type: "text", label: "Badge Text" },
        variant: {
          type: "select",
          label: "Badge Variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
          ],
        },
      },
      defaultProps: {
        text: "Badge",
        variant: "default",
      },
      render: ({ text, variant }) => (
        <Badge variant={variant as "default" | "secondary" | "destructive" | "outline"}>
          {text}
        </Badge>
      ),
    },

    Alert: {
      fields: {
        variant: {
          type: "select",
          label: "Alert Variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
          ],
        },
        children: { type: "slot", label: "Alert Content" },
      },
      defaultProps: {
        variant: "default",
      },
      render: ({ variant, children }) => (
        <Alert variant={variant as "default" | "destructive"}>
          {children}
        </Alert>
      ),
    },

    AlertTitle: {
      fields: {
        text: { type: "text", label: "Alert Title" },
      },
      defaultProps: {
        text: "Alert Title",
      },
      render: ({ text }) => (
        <AlertTitle>{text}</AlertTitle>
      ),
    },

    AlertDescription: {
      fields: {
        text: { type: "text", label: "Alert Description" },
      },
      defaultProps: {
        text: "Alert description text goes here.",
      },
      render: ({ text }) => (
        <AlertDescription>{text}</AlertDescription>
      ),
    },

    Separator: {
      fields: {
        orientation: {
          type: "select",
          label: "Orientation",
          options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
        },
      },
      defaultProps: {
        orientation: "horizontal",
      },
      render: ({ orientation }) => (
        <Separator orientation={orientation as "horizontal" | "vertical"} />
      ),
    },

    Avatar: {
      fields: {
        src: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt Text" },
        fallback: { type: "text", label: "Fallback Text" },
      },
      defaultProps: {
        src: "",
        alt: "Avatar",
        fallback: "AV",
      },
      render: ({ src, alt, fallback }) => (
        <Avatar>
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      ),
    },

    UICard: {
      fields: {
        children: { type: "slot", label: "Card Content" },
      },
      defaultProps: {},
      render: ({ children }) => (
        <Card>{children}</Card>
      ),
    },

    UICardHeader: {
      fields: {
        children: { type: "slot", label: "Header Content" },
      },
      defaultProps: {},
      render: ({ children }) => (
        <CardHeader>{children}</CardHeader>
      ),
    },

    UICardTitle: {
      fields: {
        text: { type: "text", label: "Title Text" },
      },
      defaultProps: {
        text: "Card Title",
      },
      render: ({ text }) => (
        <CardTitle>{text}</CardTitle>
      ),
    },

    UICardDescription: {
      fields: {
        text: { type: "text", label: "Description Text" },
      },
      defaultProps: {
        text: "Card description goes here.",
      },
      render: ({ text }) => (
        <CardDescription>{text}</CardDescription>
      ),
    },

    UICardContent: {
      fields: {
        children: { type: "slot", label: "Content" },
      },
      defaultProps: {},
      render: ({ children }) => (
        <CardContent>{children}</CardContent>
      ),
    },

    // ========== MEDIA COMPONENTS ==========
    Video: {
      fields: {
        src: { type: "text", label: "Video URL" },
        poster: { type: "text", label: "Poster Image URL" },
        width: { type: "text", label: "Width (e.g. 100%)" },
        height: { type: "text", label: "Height (e.g. 400px)" },
        controls: {
          type: "radio",
          label: "Show Controls",
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ],
        },
      },
      defaultProps: {
        src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        poster: "",
        width: "100%",
        height: "400px",
        controls: "true",
      },
      render: ({ src, poster, width, height, controls }) => (
        <video
          src={src}
          poster={poster || undefined}
          width={width}
          height={height}
          controls={controls === "true"}
          style={{
            width,
            height,
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      ),
    },

    // ========== NAVIGATION COMPONENTS ==========
    Navbar: {
      fields: {
        logo: { type: "text", label: "Logo Text" },
        logoUrl: { type: "text", label: "Logo Link" },
        links: { type: "textarea", label: "Navigation Links (one per line)" },
        backgroundColor: { type: "text", label: "Background Color" },
        textColor: { type: "text", label: "Text Color" },
      },
      defaultProps: {
        logo: "Brand",
        logoUrl: "#",
        links: "Home\nAbout\nServices\nContact",
        backgroundColor: "#ffffff",
        textColor: "#333333",
      },
      render: ({ logo, logoUrl, links, backgroundColor, textColor }) => (
        <nav style={{
          backgroundColor,
          color: textColor,
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}>
            <a href={logoUrl} style={{ color: textColor, textDecoration: "none", fontWeight: "bold", fontSize: "1.5rem" }}>
              {logo}
            </a>
            <div style={{ display: "flex", gap: "30px" }}>
              {links.split('\n').map((link: string, index: number) => (
                <a key={index} href="#" style={{ color: textColor, textDecoration: "none" }}>
                  {link.trim()}
                </a>
              ))}
            </div>
          </div>
        </nav>
      ),
    },

    // ========== UTILITY COMPONENTS ==========
    LayoutSpacer: {
      fields: {
        height: { type: "text", label: "Height (e.g. 40px)" },
        backgroundColor: { type: "text", label: "Background Color" },
      },
      defaultProps: {
        height: "40px",
        backgroundColor: "transparent",
      },
      render: ({ height, backgroundColor }) => (
        <div style={{
          height,
          backgroundColor,
          width: "100%",
        }} />
      ),
    },

    LayoutDivider: {
      fields: {
        color: { type: "text", label: "Color" },
        thickness: { type: "text", label: "Thickness (e.g. 1px)" },
        margin: { type: "text", label: "Margin (e.g. 20px)" },
      },
      defaultProps: {
        color: "#e0e0e0",
        thickness: "1px",
        margin: "20px",
      },
      render: ({ color, thickness, margin }) => (
        <div style={{
          height: thickness,
          backgroundColor: color,
          margin: `${margin} 0`,
          width: "100%",
        }} />
      ),
    },

    ProgressBar: {
      fields: {
        progress: { type: "number", label: "Progress (%)" },
        height: { type: "text", label: "Height (e.g. 20px)" },
        backgroundColor: { type: "text", label: "Background Color" },
        fillColor: { type: "text", label: "Fill Color" },
      },
      defaultProps: {
        progress: 75,
        height: "20px",
        backgroundColor: "#e0e0e0",
        fillColor: "#007bff",
      },
      render: ({ progress, height, backgroundColor, fillColor }) => (
        <div style={{
          width: "100%",
          backgroundColor,
          borderRadius: "10px",
          overflow: "hidden",
        }}>
          <div style={{
            height,
            width: `${Math.min(100, Math.max(0, progress))}%`,
            backgroundColor: fillColor,
            transition: "width 0.3s ease",
            borderRadius: "10px",
          }} />
        </div>
      ),
    },
  },
};

export default config;
