# Lakshay Code Components

A collection of React components designed for Webflow using DevLink. This library provides reusable, customizable components that can be imported directly into your Webflow projects.

## 🚀 Features

- **Modern Landing Page Component** - A beautiful, minimalist landing page inspired by INSIA.ai
- **Badge Component** - Simple badge component with light/dark variants
- **Fully Customizable** - All components are configurable through Webflow's designer interface
- **Type-Safe** - Built with TypeScript for better developer experience
- **Webflow Integration** - Seamlessly import components into Webflow using DevLink

## 📦 Components

### Landing Page
A comprehensive landing page component featuring:
- Hero section with customizable title, subtitle, and tagline
- Trusted by section
- Platform features showcase
- Function cards (Sales, Marketing, Operations, etc.)
- Old vs New comparison section
- Statistics/metrics section
- Integration showcase
- Customer testimonials
- Security certifications
- Footer with navigation links

**Props:**
- `companyName` - Your company name
- `heroTagline` - Hero section tagline/badge text
- `heroTitle` - Main hero headline
- `heroSubtitle` - Hero section description
- `ctaText` - Call-to-action button text
- `ctaLink` - Call-to-action button link
- `primaryColor` - Primary brand color (hex code)
- `secondaryColor` - Secondary brand color (hex code)

### Badge
A simple badge component with variants.

**Props:**
- `text` - Badge text content
- `variant` - Style variant (Light or Dark)

## 🛠️ Setup

### Prerequisites

- Node.js 20+ and npm 10+
- A Webflow account with:
  - Workspace on Freelancer, Core, Growth, Agency, or Enterprise plan, OR
  - Webflow site with CMS, Business, or Enterprise plan
- Basic familiarity with React and TypeScript

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Lakshay-Code-Components
```

2. Install dependencies:
```bash
npm install
```

3. Configure Webflow:
   - Ensure `webflow.json` is properly configured
   - The configuration should point to your component files (`.webflow.tsx`)

## 🎨 Development

### Local Development

Run the development server to preview components locally:

```bash
npm run dev
```

This will start a Vite development server where you can test your components.

### Building Components

Build the project for production:

```bash
npm run build
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📤 Sharing to Webflow

To share your component library to Webflow:

```bash
npx webflow library share
```

The Webflow CLI will:
1. **Authorize your workspace** - If not authenticated, it will prompt you to authorize
2. **Bundle your library** - Compiles and bundles all components
3. **Upload to Webflow** - Makes your components available in your Webflow workspace

## 🔧 Using Components in Webflow

1. **Install the Library:**
   - Open your Webflow site
   - Press `L` or click the Resources icon in the left sidebar
   - Find your library and click **Install**

2. **Add Components:**
   - Press `⇧C` or click the Components icon
   - Find your component in the list
   - Drag and drop it onto your canvas

3. **Customize Props:**
   - Select the component on the canvas
   - Use the Properties panel on the right to customize all configurable props
   - Changes update in real-time

## 📁 Project Structure

```
src/
├── components/
│   ├── Badge.tsx              # Badge React component
│   ├── Badge.webflow.tsx     # Badge Webflow definition
│   ├── LandingPage.tsx       # Landing Page React component
│   └── LandingPage.webflow.tsx # Landing Page Webflow definition
├── App.tsx                    # Main app component (for local testing)
├── main.tsx                   # Entry point
└── ...

webflow.json                   # Webflow library configuration
package.json                   # Dependencies and scripts
```

## 🎯 Component Development Guide

### Creating a New Component

1. **Create the React Component** (`ComponentName.tsx`):
```tsx
interface ComponentNameProps {
  // Define your props
}

export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  return (
    // Your component JSX
  );
};
```

2. **Create the Webflow Definition** (`ComponentName.webflow.tsx`):
```tsx
import { ComponentName } from './ComponentName';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

export default declareComponent(ComponentName, {
    name: 'Component Name',
    description: 'Component description',
    group: 'Layout', // or 'Info', 'Forms', etc.
    props: {
        prop1: props.Text({
            name: 'Prop 1',
            defaultValue: 'Default value',
        }),
        // Add more props...
    },
});
```

3. **Update `webflow.json`** (if needed):
   - The default configuration should automatically pick up `.webflow.tsx` files
   - Ensure your component path matches the pattern in `webflow.json`

4. **Test Locally:**
   - Import and use your component in `App.tsx`
   - Run `npm run dev` to preview

5. **Share to Webflow:**
   - Run `npx webflow library share`
   - Install and use in your Webflow projects

## 📚 Available Prop Types

Webflow provides several prop types you can use:

- `props.Text()` - Text input field
- `props.RichText()` - Rich text editor
- `props.Number()` - Number input
- `props.Boolean()` - Checkbox/toggle
- `props.Variant()` - Dropdown with predefined options
- `props.Link()` - Link picker
- `props.Image()` - Image picker
- `props.Visibility()` - Visibility toggle
- `props.Slot()` - Content slot
- `props.Id()` - Element ID

For more details, see the [Webflow Prop Types Documentation](https://developers.webflow.com/code-components/reference/prop-types).

## 🔗 Resources

- [Webflow Code Components Documentation](https://developers.webflow.com/code-components/introduction)
- [Webflow CLI Reference](https://developers.webflow.com/code-components/reference/cli)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📝 License

This project is private and proprietary.

## 👤 Author

Lakshay

---

**Note:** Make sure to keep your Webflow workspace authenticated and your `webflow.json` configuration up to date when adding new components.
