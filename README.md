# Landing Page Builder with Puck

A powerful drag-and-drop landing page builder built with React, TypeScript, and Puck editor.

## 🚀 Features

- **Drag & Drop Interface**: Intuitive visual editor for building landing pages
- **Rich Component Library**: 15+ pre-built components including layouts, forms, and content blocks
- **Slot-Based Layouts**: Advanced multi-column layouts using Puck's slot system
- **Responsive Design**: All components are mobile-friendly and responsive
- **Real-time Preview**: See changes instantly as you build
- **TypeScript Support**: Full type safety throughout the application

## 📁 Project Structure

```
src/
├── components/
│   └── Editor.tsx          # Main Puck editor component
├── config/
│   ├── puckConfig.ts       # Puck configuration with all components
│   └── initialData.ts      # Initial data structure for the editor
├── main.tsx               # Application entry point
└── App.tsx                # Root application component
```

## 🧩 Available Components

### Basic Components
- **Text**: Paragraph text with styling options
- **Heading**: H1-H6 headings with alignment and color options
- **Button**: Interactive buttons with multiple styles and sizes
- **Image**: Images with width and border radius controls
- **Card**: Content cards with images, titles, and descriptions

### Layout Components
- **Container**: Wrapper with background and padding options
- **TwoColumn**: Two-column grid layout with slots
- **ThreeColumn**: Three-column grid layout with slots
- **FlexContainer**: Flexible layout with row/column direction

### Advanced Components
- **Hero**: Hero section with background, title, subtitle, and CTA
- **FeatureCard**: Feature highlights with icons and descriptions
- **Testimonial**: Customer testimonials with ratings and avatars
- **PricingCard**: Pricing tables with features and popular badges
- **ContactForm**: Contact forms with customizable styling
- **Divider**: Visual separators with multiple styles
- **Spacer**: Vertical spacing components

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📖 Usage

### Using the Editor

1. **Drag Components**: Drag components from the left sidebar to the canvas
2. **Edit Properties**: Click on any component to edit its properties in the right sidebar
3. **Nested Layouts**: Use TwoColumn, ThreeColumn, or FlexContainer to create complex layouts
4. **Save Changes**: Changes are automatically saved to localStorage

### Adding New Components

To add a new component:

1. Open `src/config/puckConfig.ts`
2. Add your component definition to the `components` object
3. Define fields, defaultProps, and render function
4. The component will automatically appear in the editor

### Example Component Structure

```typescript
MyComponent: {
  fields: {
    title: { type: "text", label: "Title" },
    content: { type: "textarea", label: "Content" },
  },
  defaultProps: {
    title: "Default Title",
    content: "Default content",
  },
  render: ({ title, content }) => (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  ),
},
```

### Slot-Based Layouts

For nested layouts, use the `slot` field type:

```typescript
TwoColumn: {
  fields: {
    leftColumn: { type: "slot" },
    rightColumn: { type: "slot" },
  },
  render: ({ leftColumn: LeftColumn, rightColumn: RightColumn }) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <LeftColumn />
      <RightColumn />
    </div>
  ),
},
```

## 🎨 Customization

### Styling Components

All components use inline styles for easy customization. You can modify colors, spacing, and layout by editing the style objects in the render functions.

### Adding Custom Fields

Puck supports various field types:
- `text`: Single line text input
- `textarea`: Multi-line text input
- `select`: Dropdown with options
- `radio`: Radio button group
- `slot`: Area for nested components

### Data Persistence

The editor automatically saves data to localStorage. For production, implement your own save function in the `save` callback.

## 🔧 Configuration

### Puck Configuration

The main configuration is in `src/config/puckConfig.ts`. This file contains:
- Component definitions
- Field configurations
- Default props
- Render functions

### Initial Data

The initial page structure is defined in `src/config/initialData.ts`. You can:
- Set up a default page layout
- Pre-populate content
- Define the root page properties

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your hosting provider

## 📝 License

MIT License - feel free to use this project for your own landing page builder!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have questions or need help, please open an issue on GitHub.
