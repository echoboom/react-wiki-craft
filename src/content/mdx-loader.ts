// Simple MDX content loader utility
// This would typically use a proper MDX processor, but for now we'll simulate it

export interface MDXMetadata {
  title: string;
  tags: string[];
  categories: string[];
  notes: string;
  externalLinks: Array<{ title: string; url: string }>;
}

export interface MDXContent {
  metadata: MDXMetadata;
  content: React.ReactNode;
  tableOfContents: Array<{ id: string; title: string; level: number }>;
}

// This is a placeholder - in a real implementation you'd use @mdx-js/rollup
// or similar to process the MDX file
export const loadMDXContent = async (path: string): Promise<MDXContent> => {
  // This would load and process the actual MDX file
  // For now, returning the Julian Picaza content as an example
  throw new Error('MDX loader not implemented - use direct props instead');
};