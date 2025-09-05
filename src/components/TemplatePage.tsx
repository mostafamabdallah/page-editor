import { useNavigate } from "react-router-dom";

// Helper function to generate unique IDs
const generateId = (type: string, index: number) => `${type}-${Date.now()}-${index}`;

// Helper function to add IDs to template data
const addIdsToTemplate = (templateData: { content: Array<{ type: string; props: Record<string, unknown> }>; root: { props: Record<string, unknown> }; zones: Record<string, unknown> }) => {
  const content = templateData.content.map((item: { type: string; props: Record<string, unknown> }, index: number) => ({
    ...item,
    props: {
      ...item.props,
      id: generateId(item.type, index)
    }
  }));
  
  return {
    ...templateData,
    content
  };
};

// Template data structures
const templates = [
  {
    id: "startup",
    name: "Startup Landing",
    description: "Perfect for startups and tech companies",
    preview: "🚀",
    data: {
      content: [
        {
          type: "Hero",
          props: {
            title: "Revolutionize Your Business",
            subtitle: "The all-in-one platform that helps startups scale faster and smarter. Join thousands of companies already growing with us.",
            buttonText: "Get Started Free",
            buttonLink: "#",
            backgroundColor: "#667eea",
            textColor: "#ffffff",
            height: "500px",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Why Choose Us?",
            level: "h2",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "⚡",
            title: "Lightning Fast",
            description: "Built for speed and performance. Your users will love the experience.",
            color: "#e3f2fd",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "🔒",
            title: "Secure & Reliable",
            description: "Enterprise-grade security with 99.9% uptime guarantee.",
            color: "#e8f5e8",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "📈",
            title: "Scale Easily",
            description: "Grows with your business. No limits, no compromises.",
            color: "#fff3e0",
          },
        },
        {
          type: "Testimonial",
          props: {
            quote: "This platform transformed our business. We've seen 300% growth in just 6 months!",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
            rating: "5",
          },
        },
        {
          type: "Button",
          props: {
            text: "Start Free Trial",
            link: "#",
            style: "primary",
          },
        },
      ],
      root: { props: {} },
      zones: {},
    },
  },
  {
    id: "portfolio",
    name: "Portfolio Showcase",
    description: "Ideal for designers, developers, and creatives",
    preview: "🎨",
    data: {
      content: [
        {
          type: "Hero",
          props: {
            title: "Creative Portfolio",
            subtitle: "Showcasing innovative design and development work that makes a difference.",
            buttonText: "View My Work",
            buttonLink: "#portfolio",
            backgroundColor: "#764ba2",
            textColor: "#ffffff",
            height: "500px",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Featured Projects",
            level: "h2",
          },
        },
        {
          type: "Card",
          props: {
            title: "E-commerce Platform",
            content: "A modern, responsive e-commerce solution built with cutting-edge technology.",
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVjb21tZXJjZTwvdGV4dD4KPC9zdmc+",
          },
        },
        {
          type: "Card",
          props: {
            title: "Mobile App Design",
            content: "User-centered mobile application with intuitive interface and smooth interactions.",
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vYmlsZTwvdGV4dD4KPC9zdmc+",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Skills & Expertise",
            level: "h2",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "💻",
            title: "Frontend Development",
            description: "React, Vue, Angular",
            color: "#e3f2fd",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Figma, Sketch, Adobe XD",
            color: "#f3e5f5",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "📱",
            title: "Mobile Development",
            description: "React Native, Flutter",
            color: "#e8f5e8",
          },
        },
      ],
      root: { props: {} },
      zones: {},
    },
  },
  {
    id: "business",
    name: "Business Landing",
    description: "Professional template for corporate websites",
    preview: "🏢",
    data: {
      content: [
        {
          type: "Hero",
          props: {
            title: "Professional Business Solutions",
            subtitle: "Empowering businesses with innovative technology and expert consulting services.",
            buttonText: "Contact Us",
            buttonLink: "#contact",
            backgroundColor: "#2c3e50",
            textColor: "#ffffff",
            height: "500px",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Our Services",
            level: "h2",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "💼",
            title: "Business Consulting",
            description: "Strategic planning and business development services.",
            color: "#e3f2fd",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "🔧",
            title: "Technical Solutions",
            description: "Custom software development and system integration.",
            color: "#e8f5e8",
          },
        },
        {
          type: "FeatureCard",
          props: {
            icon: "📊",
            title: "Analytics & Insights",
            description: "Data-driven insights to optimize your business performance.",
            color: "#fff3e0",
          },
        },
        {
          type: "Testimonial",
          props: {
            quote: "Outstanding service and expertise. They helped us streamline our operations significantly.",
            author: "Michael Chen",
            role: "Operations Director, CorpTech",
            rating: "5",
          },
        },
        {
          type: "ContactForm",
          props: {
            title: "Get In Touch",
            submitText: "Send Message",
            backgroundColor: "#ffffff",
          },
        },
      ],
      root: { props: {} },
      zones: {},
    },
  },
  {
    id: "saas",
    name: "SaaS Product",
    description: "Perfect for software-as-a-service companies",
    preview: "⚡",
    data: {
      content: [
        {
          type: "Hero",
          props: {
            title: "The Future of Productivity",
            subtitle: "Streamline your workflow with our powerful SaaS platform. Join 10,000+ teams already using our solution.",
            buttonText: "Start Free Trial",
            buttonLink: "#trial",
            backgroundColor: "#667eea",
            textColor: "#ffffff",
            height: "500px",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Pricing Plans",
            level: "h2",
          },
        },
        {
          type: "PricingCard",
          props: {
            planName: "Starter",
            price: "$9",
            period: "/month",
            features: "Up to 5 projects\nBasic support\nStandard templates\n5GB storage",
            buttonText: "Get Started",
            buttonLink: "#",
            popular: "false",
          },
        },
        {
          type: "PricingCard",
          props: {
            planName: "Professional",
            price: "$29",
            period: "/month",
            features: "Unlimited projects\nPriority support\nPremium templates\n50GB storage\nAdvanced analytics",
            buttonText: "Most Popular",
            buttonLink: "#",
            popular: "true",
          },
        },
        {
          type: "PricingCard",
          props: {
            planName: "Enterprise",
            price: "$99",
            period: "/month",
            features: "Everything in Pro\nCustom integrations\nDedicated support\nUnlimited storage\nWhite-label options",
            buttonText: "Contact Sales",
            buttonLink: "#",
            popular: "false",
          },
        },
        {
          type: "Heading",
          props: {
            text: "Trusted by Industry Leaders",
            level: "h2",
          },
        },
        {
          type: "Text",
          props: {
            text: "🏢 TechCorp • 🚀 StartupInc • 💼 BusinessPro • ⚡ FastCompany",
          },
        },
      ],
      root: { props: {} },
      zones: {},
    },
  },
].map(template => ({
  ...template,
  data: addIdsToTemplate(template.data)
}));

export function TemplatePage() {
  const navigate = useNavigate();

  const handleTemplateSelect = (template: typeof templates[0]) => {
    // Save template data to localStorage
    localStorage.setItem("puck-data", JSON.stringify(template.data));
    // Navigate to editor
    navigate("/editor");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "20px",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
          padding: "20px 0",
        }}>
          <button
            onClick={handleBackToHome}
            style={{
              backgroundColor: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ← Back to Home
          </button>
          
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            margin: "0",
          }}>
            Choose Your Template
          </h1>
          
          <div style={{ width: "120px" }}></div> {/* Spacer for centering */}
        </div>

        {/* Templates Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginBottom: "40px",
        }}>
          {templates.map((template) => (
            <div
              key={template.id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "2px solid transparent",
              }}
              onClick={() => handleTemplateSelect(template)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                e.currentTarget.style.borderColor = "#667eea";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <div style={{
                fontSize: "4rem",
                textAlign: "center",
                marginBottom: "20px",
              }}>
                {template.preview}
              </div>
              
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
                textAlign: "center",
              }}>
                {template.name}
              </h3>
              
              <p style={{
                color: "#666",
                textAlign: "center",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}>
                {template.description}
              </p>
              
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#5a6fd8";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#667eea";
                }}
              >
                Use This Template
              </button>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}>
          <h3 style={{
            color: "#333",
            marginBottom: "15px",
          }}>
            ✨ All Templates Include
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            color: "#666",
          }}>
            <div>📱 Fully Responsive</div>
            <div>🎨 Modern Design</div>
            <div>⚡ Fast Loading</div>
            <div>🔧 Easy to Customize</div>
          </div>
        </div>
      </div>
    </div>
  );
}
