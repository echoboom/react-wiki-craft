import React from 'react';
import WikipediaPageLayout from '@/components/WikipediaPageLayout';

// Example of how to use the WikipediaPageLayout component with custom content
const ExampleUsage = () => {
  // Example content for a different person/topic
  const exampleContent = (
    <>
      <p className="italic text-wiki-text-muted mb-6">
        For other uses, see <a href="#" className="text-wiki-link hover:underline">Example Person (disambiguation)</a>.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1">
          <p>
            <strong>Example Person</strong> is a fictional character created to demonstrate the reusable WikipediaPageLayout component. This example shows how to structure content and metadata for the component.
          </p>
        </div>
        
        <div className="lg:w-80">
          <div className="bg-muted p-4 rounded border">
            <div className="text-center mb-4">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded mx-auto mb-2 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Photo placeholder</span>
              </div>
              <h3 className="font-semibold">Example Person</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div><strong>Born:</strong> January 1, 1990</div>
              <div><strong>Nationality:</strong> Example</div>
              <div><strong>Occupation:</strong> Example Professional</div>
              <div><strong>Known for:</strong> Being an example</div>
            </div>
          </div>
        </div>
      </div>

      <details open>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Early life
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Example Person was born on January 1, 1990, in Example City. This section demonstrates how to structure biographical content within the WikipediaPageLayout component.
          </p>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Career
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Example Person's career demonstrates the flexibility of the WikipediaPageLayout component for displaying various types of professional information.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Notable achievements</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Example Achievement</strong> (2020) - Description of achievement</li>
            <li><strong>Another Achievement</strong> (2021) - Description of achievement</li>
          </ul>
        </div>
      </details>

      <h2 id="legacy">Legacy</h2>
      <p>
        Example Person's legacy demonstrates how to conclude articles within the WikipediaPageLayout component.
      </p>
    </>
  );

  const exampleTableOfContents = [
    { id: 'early-life', title: 'Early life', level: 1 },
    { id: 'career', title: 'Career', level: 1 },
    { id: 'legacy', title: 'Legacy', level: 1 },
  ];

  const exampleMetadata = {
    tags: ['example', 'demonstration', 'template'],
    notes: '<p>This is an example article demonstrating the WikipediaPageLayout component usage.</p>',
    externalLinks: [
      { title: 'Example Website', url: 'https://example.com' },
      { title: 'Another Example', url: 'https://example.org' }
    ]
  };

  const exampleCategories = [
    'Example people',
    'Fictional characters',
    'Component demonstrations'
  ];

  return (
    <WikipediaPageLayout
      title="Example Person"
      subtitle="From Example.wiki, the demonstration encyclopedia"
      content={exampleContent}
      categories={exampleCategories}
      metadata={exampleMetadata}
      tableOfContents={exampleTableOfContents}
    />
  );
};

export default ExampleUsage;