// puck-localized.config.tsx
import { type Config } from "@measured/puck";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Create a function that returns a localized config
export const createLocalizedPuckConfig = (t: (key: string) => string): Config => {

  return {
    components: {
      Text: {
        fields: {
          text: {
            type: "text",
            label: t('puck.components.text.textContent')
          },
          align: {
            type: "select",
            label: t('puck.components.text.alignment'),
            options: [
              { label: t('puck.components.text.left'), value: "left" },
              { label: t('puck.components.text.center'), value: "center" },
              { label: t('puck.components.text.right'), value: "right" },
            ],
          },
          fontSize: {
            type: "select",
            label: t('puck.components.text.fontSize'),
            options: [
              { label: t('puck.components.text.small'), value: "14px" },
              { label: t('puck.components.text.medium'), value: "16px" },
              { label: t('puck.components.text.large'), value: "18px" },
              { label: t('puck.components.text.extraLarge'), value: "20px" },
            ],
          },
          color: { type: "text", label: t('puck.components.text.textColor') },
          fontWeight: {
            type: "select",
            label: t('puck.components.text.fontWeight'),
            options: [
              { label: t('puck.components.text.normal'), value: "normal" },
              { label: t('puck.components.text.bold'), value: "bold" },
              { label: t('puck.components.text.light'), value: "300" },
            ],
          },
        },
        defaultProps: {
          text: t('puck.components.text.helloWorld'),
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
            label: t('puck.components.heading.headingText')
          },
          level: {
            type: "select",
            label: t('puck.components.heading.headingLevel'),
            options: [
              { label: "H1", value: "h1" },
              { label: "H2", value: "h2" },
              { label: "H3", value: "h3" },
            ],
          },
        },
        defaultProps: {
          text: t('puck.components.heading.heading'),
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
            label: t('puck.components.button.buttonText')
          },
          link: {
            type: "text",
            label: t('puck.components.button.linkUrl')
          },
          variant: {
            type: "select",
            label: t('puck.components.button.buttonVariant'),
            options: [
              { label: t('puck.components.button.default'), value: "default" },
              { label: t('puck.components.button.destructive'), value: "destructive" },
              { label: t('puck.components.button.outline'), value: "outline" },
              { label: t('puck.components.button.secondary'), value: "secondary" },
              { label: t('puck.components.button.ghost'), value: "ghost" },
              { label: t('puck.components.button.link'), value: "link" },
            ],
          },
          size: {
            type: "select",
            label: t('puck.components.button.buttonSize'),
            options: [
              { label: t('puck.components.button.small'), value: "sm" },
              { label: t('puck.components.button.default'), value: "default" },
              { label: t('puck.components.button.large'), value: "lg" },
              { label: t('puck.components.button.icon'), value: "icon" },
            ],
          },
        },
        defaultProps: {
          text: t('puck.components.button.clickMe'),
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
            label: t('puck.components.image.imageUrl')
          },
          alt: {
            type: "text",
            label: t('puck.components.image.altText')
          },
          width: {
            type: "select",
            label: t('puck.components.image.width'),
            options: [
              { label: t('puck.components.image.small200px'), value: "200px" },
              { label: t('puck.components.image.medium400px'), value: "400px" },
              { label: t('puck.components.image.large600px'), value: "600px" },
              { label: t('puck.components.image.fullWidth'), value: "100%" },
            ],
          },
        },
        defaultProps: {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==",
          alt: t('puck.components.image.image'),
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
            label: t('puck.components.card.cardTitle')
          },
          content: {
            type: "textarea",
            label: t('puck.components.card.cardContent')
          },
          imageUrl: {
            type: "text",
            label: t('puck.components.image.imageUrl')
          },
        },
        defaultProps: {
          title: t('puck.components.card.cardTitleDefault'),
          content: t('puck.components.card.cardContentDefault'),
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

      Hero: {
        fields: {
          title: {
            type: "text",
            label: t('puck.components.hero.heroTitle')
          },
          subtitle: {
            type: "textarea",
            label: t('puck.components.hero.heroSubtitle')
          },
          buttonText: {
            type: "text",
            label: t('puck.components.hero.buttonText')
          },
          buttonLink: {
            type: "text",
            label: t('puck.components.hero.buttonLink')
          },
          backgroundColor: {
            type: "text",
            label: t('puck.components.hero.backgroundColor')
          },
          textColor: {
            type: "text",
            label: t('puck.components.hero.textColor')
          },
          backgroundImage: {
            type: "text",
            label: t('puck.components.hero.backgroundImage')
          },
          height: {
            type: "select",
            label: t('puck.components.hero.heroHeight'),
            options: [
              { label: t('puck.components.hero.small300px'), value: "300px" },
              { label: t('puck.components.hero.medium500px'), value: "500px" },
              { label: t('puck.components.hero.large700px'), value: "700px" },
            ],
          },
        },
        defaultProps: {
          title: t('puck.components.hero.welcomeTitle'),
          subtitle: t('puck.components.hero.welcomeSubtitle'),
          buttonText: t('puck.components.hero.getStarted'),
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

      FeatureCard: {
        fields: {
          icon: {
            type: "text",
            label: t('puck.components.featureCard.iconEmoji')
          },
          title: {
            type: "text",
            label: t('puck.components.featureCard.featureTitle')
          },
          description: {
            type: "textarea",
            label: t('puck.components.featureCard.featureDescription')
          },
          color: {
            type: "select",
            label: t('puck.components.featureCard.cardColor'),
            options: [
              { label: t('puck.components.container.blue'), value: "#e3f2fd" },
              { label: t('puck.components.container.green'), value: "#e8f5e8" },
              { label: t('puck.components.featureCard.purple'), value: "#f3e5f5" },
              { label: t('puck.components.featureCard.orange'), value: "#fff3e0" },
            ],
          },
        },
        defaultProps: {
          icon: "🚀",
          title: t('puck.components.featureCard.amazingFeature'),
          description: t('puck.components.featureCard.amazingFeatureDesc'),
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
            label: t('puck.components.testimonial.testimonialQuote')
          },
          author: {
            type: "text",
            label: t('puck.components.testimonial.authorName')
          },
          role: {
            type: "text",
            label: t('puck.components.testimonial.authorRole')
          },
          avatar: {
            type: "text",
            label: t('puck.components.testimonial.avatarImage')
          },
          rating: {
            type: "select",
            label: t('puck.components.testimonial.starRating'),
            options: [
              { label: t('puck.components.testimonial.fiveStars'), value: "5" },
              { label: t('puck.components.testimonial.fourStars'), value: "4" },
              { label: t('puck.components.testimonial.threeStars'), value: "3" },
            ],
          },
        },
        defaultProps: {
          quote: t('puck.components.testimonial.defaultQuote'),
          author: t('puck.components.testimonial.defaultAuthor'),
          role: t('puck.components.testimonial.defaultRole'),
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
            label: t('puck.components.pricingCard.planName')
          },
          price: {
            type: "text",
            label: t('puck.components.pricingCard.price')
          },
          period: {
            type: "text",
            label: t('puck.components.pricingCard.billingPeriod')
          },
          features: {
            type: "textarea",
            label: t('puck.components.pricingCard.featuresOnePerLine')
          },
          buttonText: {
            type: "text",
            label: t('puck.components.pricingCard.buttonText')
          },
          buttonLink: {
            type: "text",
            label: t('puck.components.pricingCard.buttonLink')
          },
          popular: {
            type: "radio",
            label: t('puck.components.pricingCard.popularPlan'),
            options: [
              { label: t('puck.components.grid.yes'), value: "true" },
              { label: t('puck.components.grid.no'), value: "false" },
            ],
          },
        },
        defaultProps: {
          planName: t('puck.components.pricingCard.proPlan'),
          price: t('puck.components.pricingCard.defaultPrice'),
          period: t('puck.components.pricingCard.defaultPeriod'),
          features: t('puck.components.pricingCard.defaultFeatures'),
          buttonText: t('puck.components.pricingCard.getStarted'),
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
                {t('puck.components.pricingCard.mostPopular')}
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
            label: t('puck.components.contactForm.formTitle')
          },
          submitText: {
            type: "text",
            label: t('puck.components.contactForm.submitButtonText')
          },
          backgroundColor: {
            type: "select",
            label: t('puck.components.contactForm.backgroundColor'),
            options: [
              { label: t('puck.components.container.white'), value: "#ffffff" },
              { label: t('puck.components.contactForm.lightGray'), value: "#f8f9fa" },
              { label: t('puck.components.container.blue'), value: "#e3f2fd" },
            ],
          },
        },
        defaultProps: {
          title: t('puck.components.contactForm.getInTouch'),
          submitText: t('puck.components.contactForm.sendMessage'),
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
                  placeholder={t('puck.components.contactForm.yourName')}
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
                  placeholder={t('puck.components.contactForm.yourEmail')}
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
                  placeholder={t('puck.components.contactForm.yourMessage')}
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
    },
  };
};
