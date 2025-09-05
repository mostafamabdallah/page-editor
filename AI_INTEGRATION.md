# 🤖 AI Website Generator Integration

This project now includes a powerful AI-powered website generator that uses Claude AI to create complete websites based on your requirements.

## 🚀 Features

- **AI-Powered Generation**: Uses Claude 3.5 Sonnet to generate complete websites
- **Puck Integration**: Generates components that work seamlessly with the Puck editor
- **Customizable Requirements**: Specify title, description, style, colors, and sections
- **Real-time Editing**: Generated websites can be immediately edited in Puck
- **Persistent Storage**: Save and load your generated websites

## 🛠️ Setup

### 1. API Key Configuration

The Claude API key is configured in `src/api/claudeApi.ts`:

```typescript
const anthropic = new Anthropic({
  apiKey: 'your-claude-api-key-here',
});
```

**⚠️ Security Note**: In production, move the API key to environment variables:

```typescript
const anthropic = new Anthropic({
  apiKey: process.env.REACT_APP_CLAUDE_API_KEY,
});
```

### 2. Dependencies

The following packages are required:

```bash
npm install @anthropic-ai/sdk
```

## 📋 Usage

### 1. Access the AI Generator

Click the **"🤖 AI Website Generator"** button at the top of the editor.

### 2. Fill in Requirements

- **Website Title** (required): The main title of your website
- **Description** (required): What your website is about
- **Target Audience**: Who your website is for
- **Design Style**: Choose from Modern, Classic, Minimal, or Bold
- **Primary Color**: Pick your brand color
- **Main Call to Action**: The primary action you want visitors to take
- **Website Sections**: Add multiple sections (About, Services, Portfolio, etc.)

### 3. Generate Website

Click **"🚀 Generate Website"** and wait for Claude AI to create your website.

### 4. Edit and Customize

The generated website will appear in the Puck editor where you can:
- Drag and drop additional components
- Edit text, colors, and styling
- Rearrange sections
- Add new content

## 🎯 Generated Components

The AI generator creates websites using these Puck components:

- **Hero**: Main banner with title, subtitle, and CTA button
- **FeatureCard**: Highlight key features or services
- **Testimonial**: Customer reviews and testimonials
- **ContactForm**: Lead generation forms
- **TwoColumn/ThreeColumn**: Multi-column layouts
- **Text/Heading/Button**: Basic content elements
- **Card**: Content cards with images and descriptions

## 🔧 API Functions

### `generateWebsiteContent(requirements)`

Generates a complete website based on requirements.

```typescript
const requirements = {
  title: "My Awesome Website",
  description: "A website about amazing products",
  sections: ["About", "Services", "Contact"],
  style: "modern",
  colorScheme: "#007bff",
  targetAudience: "Small business owners",
  callToAction: "Get Started"
};

const result = await generateWebsiteContent(requirements);
// Returns: { html, css, puckComponents }
```

### `generateComponentFromDescription(description)`

Generates a single Puck component from a description.

```typescript
const component = await generateComponentFromDescription(
  "A hero section for a tech startup"
);
// Returns: { type: "Hero", props: {...} }
```

## 🎨 Customization

### Adding New Component Types

To add support for new component types, update the prompt in `claudeApi.ts`:

```typescript
const prompt = `
...
Use the existing component types: Text, Heading, Button, Image, Card, Hero, FeatureCard, Testimonial, ContactForm, TwoColumn, ThreeColumn, FlexContainer, YourNewComponent
...
`;
```

### Modifying the Generator UI

Edit `src/components/AIWebsiteGenerator.tsx` to:
- Add new requirement fields
- Change the styling
- Add validation rules
- Customize the form layout

## 🔒 Security Considerations

1. **API Key Protection**: Never commit API keys to version control
2. **Rate Limiting**: Implement rate limiting for production use
3. **Input Validation**: Validate user inputs before sending to Claude
4. **Error Handling**: Handle API failures gracefully

## 🚀 Production Deployment

### Environment Variables

Create a `.env` file:

```env
REACT_APP_CLAUDE_API_KEY=your-api-key-here
```

### API Key Management

Update `src/api/claudeApi.ts`:

```typescript
const anthropic = new Anthropic({
  apiKey: process.env.REACT_APP_CLAUDE_API_KEY || '',
});
```

### Error Handling

Add comprehensive error handling:

```typescript
try {
  const result = await generateWebsiteContent(requirements);
  return result;
} catch (error) {
  if (error.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.');
  } else if (error.status === 401) {
    throw new Error('Invalid API key. Please check your configuration.');
  } else {
    throw new Error('Failed to generate website. Please try again.');
  }
}
```

## 📊 Cost Management

- Claude API charges per token used
- Monitor usage in the Anthropic console
- Implement usage limits for production
- Consider caching generated content

## 🎉 Example Generated Website

Here's what a generated website might look like:

```json
{
  "content": [
    {
      "type": "Hero",
      "props": {
        "title": "TechStart Solutions",
        "subtitle": "We help startups build amazing digital products",
        "buttonText": "Get Started",
        "buttonLink": "#contact",
        "backgroundColor": "#007bff",
        "textColor": "#ffffff"
      }
    },
    {
      "type": "TwoColumn",
      "props": {
        "gap": "30px",
        "backgroundColor": "#f8f9fa"
      }
    }
  ]
}
```

## 🔄 Future Enhancements

- **Template Library**: Pre-built website templates
- **Brand Integration**: Upload logos and brand assets
- **SEO Optimization**: Generate SEO-friendly content
- **Multi-language Support**: Generate content in different languages
- **A/B Testing**: Generate multiple variations
- **Analytics Integration**: Built-in analytics setup

---

**Happy Building! 🚀**

The AI Website Generator makes it incredibly easy to create professional websites in minutes. Simply describe what you want, and Claude AI will generate a complete, editable website for you!

