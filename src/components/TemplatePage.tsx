import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Helper function to generate unique IDs
const generateId = (type: string, index: number) => `${type}-${Date.now()}-${index}`;

// Helper function to add IDs to template data (preserves existing IDs)
const addIdsToTemplate = (templateData: { content: Array<{ type: string; props: Record<string, unknown> }>; root: { props: Record<string, unknown> }; zones: Record<string, unknown> }) => {
  const processContent = (contentArray: Array<{ type: string; props: Record<string, unknown> }>, parentIndex: number = 0) => {
    return contentArray.map((item: { type: string; props: Record<string, unknown> }, index: number) => {
      const processedItem = {
        ...item,
        props: {
          ...item.props,
          // Only add ID if it doesn't already exist
          id: item.props.id || generateId(item.type, parentIndex * 1000 + index)
        } as Record<string, unknown>
      };

      // Handle nested content in Grid and Flex components
      if (item.props.content && Array.isArray(item.props.content)) {
        (processedItem.props as Record<string, unknown>).content = processContent(item.props.content as Array<{ type: string; props: Record<string, unknown> }>, parentIndex * 1000 + index);
      }

      return processedItem;
    });
  };

  const content = processContent(templateData.content);
  
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
            id: "hero-1",
            title: "Smart Application For Modern People",
            subtitle: "Transform your business with our cutting-edge platform. Join thousands of companies already growing with us. Experience the future of productivity today.",
            buttonText: "Explore Options",
            buttonLink: "#",
            backgroundColor: "#000000",
            textColor: "#ffffff",
            height: "600px",
            backgroundImage: "/images/hero-bg.jpg",
          },
        },
        {
          type: "AppMockup",
          props: {
            id: "app-mockup-1",
            imageUrl: "/images/app-mockup.png",
            altText: "App Mockup",
            width: "300px",
            position: "right",
          },
        },
        {
          type: "Heading",
          props: {
            id: "heading-1",
            text: "Condimentum Mattis Pellentesque Dnibus Tortyga",
            level: "h2",
          },
        },
        {
          type: "Text",
          props: {
            id: "text-1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            align: "center",
            fontSize: "18px",
            color: "#666666",
          },
        },
        {
          type: "Grid",
          props: {
            id: "features-grid-1",
            columns: "3",
            gap: "24px",
            content: [
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-1",
                  icon: "🚀",
                  title: "Smart and Intuitive",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  color: "#f8f9fa",
                },
              },
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-2",
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Built for speed and performance. Your users will love the experience. Enterprise-grade security with 99.9% uptime guarantee.",
                  color: "#f8f9fa",
                },
              },
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-3",
                  icon: "🔒",
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security with 99.9% uptime guarantee. Grows with your business. No limits, no compromises.",
                  color: "#f8f9fa",
                },
              },
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-4",
                  icon: "📈",
                  title: "Scale Easily",
                  description: "Grows with your business. No limits, no compromises. Built for speed and performance. Your users will love the experience.",
                  color: "#f8f9fa",
                },
              },
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-5",
                  icon: "🌱",
                  title: "Eco Friendly",
                  description: "Sustainable technology solutions that help reduce your carbon footprint while maintaining top performance.",
                  color: "#f8f9fa",
                },
              },
              {
                type: "FeatureCard",
                props: {
                  id: "feature-card-6",
                  icon: "⚙️",
                  title: "Easy Setup",
                  description: "Get started in minutes with our intuitive setup process. No technical expertise required.",
                  color: "#f8f9fa",
                },
              },
            ],
          },
        },
        {
          type: "Heading",
          props: {
            id: "heading-2",
            text: "How The App Works",
            level: "h2",
          },
        },
        {
          type: "Text",
          props: {
            id: "text-2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            align: "center",
            fontSize: "18px",
            color: "#666666",
          },
        },
        {
          type: "Grid",
          props: {
            id: "steps-grid-1",
            columns: "2",
            gap: "32px",
            content: [
              {
                type: "Card",
                props: {
                  id: "step-card-1",
                  title: "1. Turpis egestas sed",
                  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  imageUrl: "/images/step1.jpg",
                },
              },
              {
                type: "Card",
                props: {
                  id: "step-card-2",
                  title: "2. Egestas diam in dignissim",
                  content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  imageUrl: "/images/step2.jpg",
                },
              },
              {
                type: "Card",
                props: {
                  id: "step-card-3",
                  title: "3. Bibendum at varius",
                  content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  imageUrl: "/images/step3.jpg",
                },
              },
              {
                type: "Card",
                props: {
                  id: "step-card-4",
                  title: "4. Fermentum leo vel orci",
                  content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  imageUrl: "/images/step4.jpg",
                },
              },
            ],
          },
        },
        {
          type: "StatsSection",
          props: {
            id: "stats-section-1",
            title: "Some Tech Specs",
            subtitle: "Numbers that speak for themselves",
            backgroundColor: "#f8f9fa",
            stats: "90% Massa dictum convallis\n85% Pellentesque habitant morbi\n95% Tristique senectus et netus\n88% Malesuada fames ac turpis",
          },
        },
        {
          type: "Heading",
          props: {
            id: "heading-3",
            text: "Our Simple Straight-Forward Pricing",
            level: "h2",
          },
        },
        {
          type: "Text",
          props: {
            id: "text-3",
            text: "Choose the plan that works best for your business. No hidden fees, no surprises.",
            align: "center",
            fontSize: "18px",
            color: "#666666",
          },
        },
        {
          type: "Flex",
          props: {
            id: "pricing-flex-1",
            direction: "row",
            justify: "center",
            align: "stretch",
            gap: "32px",
            wrap: "wrap",
            content: [
              {
                type: "PricingCard",
                props: {
                  id: "pricing-card-1",
                  planName: "Free Plan",
                  price: "$0",
                  period: "Forever",
                  features: "100GB Storage\nLimited Bandwidth\nBasic Support\nStandard Templates",
                  buttonText: "Get Started",
                  buttonLink: "#",
                  popular: "false",
                },
              },
              {
                type: "PricingCard",
                props: {
                  id: "pricing-card-2",
                  planName: "Pro Plan",
                  price: "$30",
                  period: "per month",
                  features: "500GB Storage\nUnlimited Bandwidth\nPriority Support\nPremium Templates\nAdvanced Analytics",
                  buttonText: "Get Started",
                  buttonLink: "#",
                  popular: "true",
                },
              },
            ],
          },
        },
        {
          type: "Heading",
          props: {
            id: "heading-4",
            text: "Our Users Love Our App!",
            level: "h2",
          },
        },
        {
          type: "Grid",
          props: {
            id: "testimonials-grid-1",
            columns: "3",
            gap: "24px",
            content: [
              {
                type: "Testimonial",
                props: {
                  id: "testimonial-1",
                  quote: "This platform transformed our business. We've seen 300% growth in just 6 months!",
                  author: "Anna Pearson",
                  role: "App Developer",
                  rating: "5",
                  avatar: "/images/avatar1.jpg",
                },
              },
              {
                type: "Testimonial",
                props: {
                  id: "testimonial-2",
                  quote: "Outstanding service and expertise. They helped us streamline our operations significantly.",
                  author: "Michael Anderson",
                  role: "Great Support",
                  rating: "5",
                  avatar: "/images/avatar2.jpg",
                },
              },
              {
                type: "Testimonial",
                props: {
                  id: "testimonial-3",
                  quote: "The best investment we've made for our startup. Highly recommended!",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart",
                  rating: "5",
                  avatar: "/images/avatar3.jpg",
                },
              },
            ],
          },
        },
        {
          type: "DownloadSection",
          props: {
            id: "download-section-1",
            title: "Download Our App Now",
            subtitle: "Available on iOS and Android. Get started today and experience the future of productivity.",
            backgroundColor: "#f8f9fa",
            appStoreUrl: "#",
            playStoreUrl: "#",
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
  const { t, i18n } = useTranslation();

  // Function to create localized template data
  const createLocalizedTemplateData = (templateId: string) => {
    const content = t(`templatePage.templates.${templateId}.content`, { returnObjects: true }) as Record<string, string>;
    
    switch (templateId) {
      case "startup":
        return {
          content: [
            {
              type: "Hero",
              props: {
                id: "hero-1",
                title: "Smart Application For Modern People",
                subtitle: "Transform your business with our cutting-edge platform. Join thousands of companies already growing with us. Experience the future of productivity today.",
                buttonText: "Explore Options",
                buttonLink: "#",
                backgroundColor: "#000000",
                textColor: "#ffffff",
                height: "600px",
                backgroundImage: "/images/hero-bg.jpg",
              },
            },
            {
              type: "AppMockup",
              props: {
                id: "app-mockup-1",
                imageUrl: "/images/app-mockup.png",
                altText: "App Mockup",
                width: "300px",
                position: "right",
              },
            },
            {
              type: "Heading",
              props: {
                id: "heading-1",
                text: "Condimentum Mattis Pellentesque Dnibus Tortyga",
                level: "h2",
              },
            },
            {
              type: "Text",
              props: {
                id: "text-1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                align: "center",
                fontSize: "18px",
                color: "#666666",
              },
            },
            {
              type: "Grid",
              props: {
                id: "features-grid-1",
                columns: "3",
                gap: "24px",
                content: [
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "🚀",
                      title: "Smart and Intuitive",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      color: "#f8f9fa",
                    },
                  },
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "⚡",
                      title: "Lightning Fast",
                      description: "Built for speed and performance. Your users will love the experience. Enterprise-grade security with 99.9% uptime guarantee.",
                      color: "#f8f9fa",
                    },
                  },
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "🔒",
                      title: "Secure & Reliable",
                      description: "Enterprise-grade security with 99.9% uptime guarantee. Grows with your business. No limits, no compromises.",
                      color: "#f8f9fa",
                    },
                  },
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "📈",
                      title: "Scale Easily",
                      description: "Grows with your business. No limits, no compromises. Built for speed and performance. Your users will love the experience.",
                      color: "#f8f9fa",
                    },
                  },
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "🌱",
                      title: "Eco Friendly",
                      description: "Sustainable technology solutions that help reduce your carbon footprint while maintaining top performance.",
                      color: "#f8f9fa",
                    },
                  },
                  {
                    type: "FeatureCard",
                    props: {
                      icon: "⚙️",
                      title: "Easy Setup",
                      description: "Get started in minutes with our intuitive setup process. No technical expertise required.",
                      color: "#f8f9fa",
                    },
                  },
                ],
              },
            },
            {
              type: "Heading",
              props: {
                id: "heading-2",
                text: "How The App Works",
                level: "h2",
              },
            },
            {
              type: "Text",
              props: {
                id: "text-2",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                align: "center",
                fontSize: "18px",
                color: "#666666",
              },
            },
            {
              type: "Grid",
              props: {
                id: "steps-grid-1",
                columns: "2",
                gap: "32px",
                content: [
                  {
                    type: "Card",
                    props: {
                      title: "1. Turpis egestas sed",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      imageUrl: "/images/step1.jpg",
                    },
                  },
                  {
                    type: "Card",
                    props: {
                      title: "2. Egestas diam in dignissim",
                      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                      imageUrl: "/images/step2.jpg",
                    },
                  },
                  {
                    type: "Card",
                    props: {
                      title: "3. Bibendum at varius",
                      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                      imageUrl: "/images/step3.jpg",
                    },
                  },
                  {
                    type: "Card",
                    props: {
                      title: "4. Fermentum leo vel orci",
                      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      imageUrl: "/images/step4.jpg",
                    },
                  },
                ],
              },
            },
            {
              type: "StatsSection",
              props: {
                id: "stats-section-1",
                title: "Some Tech Specs",
                subtitle: "Numbers that speak for themselves",
                backgroundColor: "#f8f9fa",
                stats: "90% Massa dictum convallis\n85% Pellentesque habitant morbi\n95% Tristique senectus et netus\n88% Malesuada fames ac turpis",
              },
            },
            {
              type: "Heading",
              props: {
                id: "heading-3",
                text: "Our Simple Straight-Forward Pricing",
                level: "h2",
              },
            },
            {
              type: "Text",
              props: {
                id: "text-3",
                text: "Choose the plan that works best for your business. No hidden fees, no surprises.",
                align: "center",
                fontSize: "18px",
                color: "#666666",
              },
            },
            {
              type: "Flex",
              props: {
                id: "pricing-flex-1",
                direction: "row",
                justify: "center",
                align: "stretch",
                gap: "32px",
                wrap: "wrap",
                content: [
                  {
                    type: "PricingCard",
                    props: {
                      planName: "Free Plan",
                      price: "$0",
                      period: "Forever",
                      features: "100GB Storage\nLimited Bandwidth\nBasic Support\nStandard Templates",
                      buttonText: "Get Started",
                      buttonLink: "#",
                      popular: "false",
                    },
                  },
                  {
                    type: "PricingCard",
                    props: {
                      planName: "Pro Plan",
                      price: "$30",
                      period: "per month",
                      features: "500GB Storage\nUnlimited Bandwidth\nPriority Support\nPremium Templates\nAdvanced Analytics",
                      buttonText: "Get Started",
                      buttonLink: "#",
                      popular: "true",
                    },
                  },
                ],
              },
            },
            {
              type: "Heading",
              props: {
                id: "heading-4",
                text: "Our Users Love Our App!",
                level: "h2",
              },
            },
            {
              type: "Grid",
              props: {
                id: "testimonials-grid-1",
                columns: "3",
                gap: "24px",
                content: [
                  {
                    type: "Testimonial",
                    props: {
                      quote: "This platform transformed our business. We've seen 300% growth in just 6 months!",
                      author: "Anna Pearson",
                      role: "App Developer",
                      rating: "5",
                      avatar: "/images/avatar1.jpg",
                    },
                  },
                  {
                    type: "Testimonial",
                    props: {
                      quote: "Outstanding service and expertise. They helped us streamline our operations significantly.",
                      author: "Michael Anderson",
                      role: "Great Support",
                      rating: "5",
                      avatar: "/images/avatar2.jpg",
                    },
                  },
                  {
                    type: "Testimonial",
                    props: {
                      quote: "The best investment we've made for our startup. Highly recommended!",
                      author: "Sarah Johnson",
                      role: "CEO, TechStart",
                      rating: "5",
                      avatar: "/images/avatar3.jpg",
                    },
                  },
                ],
              },
            },
            {
              type: "DownloadSection",
              props: {
                id: "download-section-1",
                title: "Download Our App Now",
                subtitle: "Available on iOS and Android. Get started today and experience the future of productivity.",
                backgroundColor: "#f8f9fa",
                appStoreUrl: "#",
                playStoreUrl: "#",
              },
            },
          ],
          root: { props: {} },
          zones: {},
        };
      
      case "portfolio":
        return {
          content: [
            {
              type: "Hero",
              props: {
                title: content.heroTitle,
                subtitle: content.heroSubtitle,
                buttonText: content.heroButton,
                buttonLink: "#portfolio",
                backgroundColor: "#764ba2",
                textColor: "#ffffff",
                height: "500px",
              },
            },
            {
              type: "Heading",
              props: {
                text: content.featuredProjects,
                level: "h2",
              },
            },
            {
              type: "Card",
              props: {
                title: content.ecommercePlatform,
                content: content.ecommerceDesc,
                imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVjb21tZXJjZTwvdGV4dD4KPC9zdmc+",
              },
            },
            {
              type: "Card",
              props: {
                title: content.mobileAppDesign,
                content: content.mobileAppDesc,
                imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vYmlsZTwvdGV4dD4KPC9zdmc+",
              },
            },
            {
              type: "Heading",
              props: {
                text: content.skillsExpertise,
                level: "h2",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "💻",
                title: content.frontendDev,
                description: content.frontendTech,
                color: "#e3f2fd",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "🎨",
                title: content.uiuxDesign,
                description: content.uiuxTech,
                color: "#f3e5f5",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "📱",
                title: content.mobileDev,
                description: content.mobileTech,
                color: "#e8f5e8",
              },
            },
          ],
          root: { props: {} },
          zones: {},
        };
      
      case "business":
        return {
          content: [
            {
              type: "Hero",
              props: {
                title: content.heroTitle,
                subtitle: content.heroSubtitle,
                buttonText: content.heroButton,
                buttonLink: "#contact",
                backgroundColor: "#2c3e50",
                textColor: "#ffffff",
                height: "500px",
              },
            },
            {
              type: "Heading",
              props: {
                text: content.ourServices,
                level: "h2",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "💼",
                title: content.businessConsulting,
                description: content.businessConsultingDesc,
                color: "#e3f2fd",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "🔧",
                title: content.technicalSolutions,
                description: content.technicalSolutionsDesc,
                color: "#e8f5e8",
              },
            },
            {
              type: "FeatureCard",
              props: {
                icon: "📊",
                title: content.analyticsInsights,
                description: content.analyticsInsightsDesc,
                color: "#fff3e0",
              },
            },
            {
              type: "Testimonial",
              props: {
                quote: content.testimonialQuote,
                author: content.testimonialAuthor,
                role: content.testimonialRole,
                rating: "5",
              },
            },
            {
              type: "ContactForm",
              props: {
                title: content.getInTouch,
                submitText: content.sendMessage,
                backgroundColor: "#ffffff",
              },
            },
          ],
          root: { props: {} },
          zones: {},
        };
      
      case "saas":
        return {
          content: [
            {
              type: "Hero",
              props: {
                title: content.heroTitle,
                subtitle: content.heroSubtitle,
                buttonText: content.heroButton,
                buttonLink: "#trial",
                backgroundColor: "#667eea",
                textColor: "#ffffff",
                height: "500px",
              },
            },
            {
              type: "Heading",
              props: {
                text: content.pricingPlans,
                level: "h2",
              },
            },
            {
              type: "PricingCard",
              props: {
                planName: content.starterPlan,
                price: content.starterPrice,
                period: content.starterPeriod,
                features: content.starterFeatures,
                buttonText: content.starterButton,
                buttonLink: "#",
                popular: "false",
              },
            },
            {
              type: "PricingCard",
              props: {
                planName: content.professionalPlan,
                price: content.professionalPrice,
                period: content.professionalPeriod,
                features: content.professionalFeatures,
                buttonText: content.professionalButton,
                buttonLink: "#",
                popular: "true",
              },
            },
            {
              type: "PricingCard",
              props: {
                planName: content.enterprisePlan,
                price: content.enterprisePrice,
                period: content.enterprisePeriod,
                features: content.enterpriseFeatures,
                buttonText: content.enterpriseButton,
                buttonLink: "#",
                popular: "false",
              },
            },
            {
              type: "Heading",
              props: {
                text: content.trustedByLeaders,
                level: "h2",
              },
            },
            {
              type: "Text",
              props: {
                text: content.trustedCompanies,
              },
            },
          ],
          root: { props: {} },
          zones: {},
        };
      
      default:
        return templates.find(t => t.id === templateId)?.data || { content: [], root: { props: {} }, zones: {} };
    }
  };

  const handleTemplateSelect = (template: typeof templates[0]) => {
    // Create localized template data
    const localizedData = createLocalizedTemplateData(template.id);
    const dataWithIds = addIdsToTemplate(localizedData);
    
    // Save localized template data to localStorage
    localStorage.setItem("puck-data", JSON.stringify(dataWithIds));
    // Navigate to editor
    navigate("/editor");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const isRTL = i18n.language === 'ar';

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "20px",
      direction: isRTL ? 'rtl' : 'ltr',
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
            ← {t('templatePage.backToHome')}
          </button>
          
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            margin: "0",
          }}>
            {t('templatePage.title')}
          </h1>
          
          <div style={{ width: "120px", display: "flex", justifyContent: isRTL ? "flex-start" : "flex-end" }}>
            <LanguageSwitcher />
          </div>
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
                {t(`templatePage.templates.${template.id}.name`)}
              </h3>
              
              <p style={{
                color: "#666",
                textAlign: "center",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}>
                {t(`templatePage.templates.${template.id}.description`)}
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
                {t('templatePage.useThisTemplate')}
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
            ✨ {t('templatePage.allTemplatesInclude')}
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            color: "#666",
          }}>
            <div>📱 {t('templatePage.fullyResponsive')}</div>
            <div>🎨 {t('templatePage.modernDesign')}</div>
            <div>⚡ {t('templatePage.fastLoading')}</div>
            <div>🔧 {t('templatePage.easyToCustomize')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
