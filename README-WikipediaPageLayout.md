# WikipediaPageLayout Component

A fully reusable React component that provides a Wikipedia-style layout for knowledge articles. This component is designed to be content-agnostic and can display any structured content with proper metadata.

## Component Structure

The `WikipediaPageLayout` component is now completely reusable and accepts content as props rather than having hardcoded content.

### Props Interface

```typescript
interface WikipediaPageLayoutProps {
  title: string;                    // Main article title
  subtitle?: string;                // Optional subtitle
  content: ReactNode;               // Main article content (JSX)
  categories?: string[];            // Array of category strings
  metadata?: {                      // Optional metadata object
    tags?: string[];               // Tags for related articles tab
    notes?: string;                // HTML string for notes tab
    externalLinks?: Array<{        // External links for links tab
      title: string;
      url: string;
    }>;
  };
  tableOfContents?: Array<{         // Table of contents entries
    id: string;                    // Anchor ID
    title: string;                 // Display title
    level: number;                 // Nesting level (1-4)
  }>;
}
```

## Usage Examples

### Basic Usage

```tsx
import WikipediaPageLayout from '@/components/WikipediaPageLayout';

const MyArticle = () => {
  const content = (
    <div>
      <p>Your article content here...</p>
    </div>
  );

  return (
    <WikipediaPageLayout
      title="Article Title"
      subtitle="From YourWiki, the knowledge encyclopedia"
      content={content}
      categories={['Category 1', 'Category 2']}
    />
  );
};
```

### Full Example with All Props

```tsx
const FullExample = () => {
  const content = (
    <>
      <p>Article introduction...</p>
      
      <details open>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Section Title
        </summary>
        <div className="mt-4 pl-4">
          <p>Section content...</p>
        </div>
      </details>
      
      <h2 id="another-section">Another Section</h2>
      <p>More content...</p>
    </>
  );

  const tableOfContents = [
    { id: 'section-1', title: 'Section Title', level: 1 },
    { id: 'another-section', title: 'Another Section', level: 1 },
  ];

  const metadata = {
    tags: ['tag1', 'tag2', 'tag3'],
    notes: '<p>Additional notes about this article.</p>',
    externalLinks: [
      { title: 'Official Website', url: 'https://example.com' },
      { title: 'Related Resource', url: 'https://related.com' }
    ]
  };

  return (
    <WikipediaPageLayout
      title="Full Example"
      subtitle="From Example.wiki"
      content={content}
      categories={['Examples', 'Documentation']}
      metadata={metadata}
      tableOfContents={tableOfContents}
    />
  );
};
```

## Content Structure Guidelines

### Personal Info Boxes

For biographical articles, include a personal info box:

```tsx
<div className="lg:w-80">
  <div className="bg-muted p-4 rounded border">
    <div className="text-center mb-4">
      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded mx-auto mb-2 overflow-hidden">
        <img 
          src="/path/to/image.jpg" 
          alt="Person Name" 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold">Person Name</h3>
    </div>
    <div className="space-y-2 text-sm">
      <div><strong>Born:</strong> Date</div>
      <div><strong>Nationality:</strong> Country</div>
      <div><strong>Occupation:</strong> Job</div>
      <div><strong>Known for:</strong> Achievement</div>
    </div>
  </div>
</div>
```

### Section Structure

Use collapsible details elements for main sections:

```tsx
<details open>
  <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
    Section Title
  </summary>
  <div className="mt-4 pl-4">
    <p>Section content...</p>
    
    <h3 className="font-semibold mt-4 mb-2">Subsection</h3>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>Item</strong> (Year) - Description</li>
    </ul>
  </div>
</details>
```

### Links and Styling

Use Wikipedia-style links throughout content:

```tsx
<a href="#" className="text-wiki-link hover:underline">Linked Term</a>
```

## Features

### Built-in Functionality

- **Responsive Design**: Adapts to mobile, tablet, and desktop
- **Theme Support**: Light/dark/auto modes with localStorage persistence
- **Text Size Controls**: Small/standard/large text sizing
- **Width Controls**: Standard/wide layout options
- **Tab System**: Article/Related/Notes/Links tabs
- **Collapsible Sidebar**: Table of contents and navigation
- **Search Bar**: Integrated search interface (functionality to be implemented)

### Customization

The component uses CSS custom properties for theming and can be customized through:

- `index.css` for color tokens and design system
- `tailwind.config.ts` for additional styling configuration
- Component-level class overrides for specific styling needs

## File Structure

```
src/
├── components/
│   └── WikipediaPageLayout.tsx    # Main reusable component
├── pages/
│   ├── Index.tsx                  # Julian Picaza example
│   └── ExampleUsage.tsx          # Additional usage example
├── content/
│   └── julian-picaza.mdx         # MDX content file (for reference)
└── lib/
    └── utils.ts                  # Utility functions
```

## Content Files

### MDX Template

The `content/julian-picaza.mdx` file serves as a template for structuring knowledge articles:

```yaml
---
title: "Article Title"
tags: ["tag1", "tag2", "tag3"]
categories: ["Category 1", "Category 2"]
notes: "Article description for notes tab"
externalLinks: [
  { title: "Link Title", url: "https://example.com" }
]
---

Content goes here...
```

## Future Enhancements

- **MDX Integration**: Full MDX processing for content files
- **Search Functionality**: Implement search across articles
- **Cross-linking**: Automatic linking between related articles
- **Version History**: Track and display article revisions
- **Export Options**: PDF/print-friendly versions

## Contributing

When adding new content:

1. Create content following the established structure
2. Define proper metadata (tags, categories, external links)
3. Include table of contents for navigation
4. Use semantic HTML and proper accessibility attributes
5. Follow the Wikipedia-style linking conventions