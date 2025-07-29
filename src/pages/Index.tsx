import WikipediaPageLayout from '@/components/WikipediaPageLayout';

const Index = () => {
  // Julian Picaza content - now demonstrates the reusable component structure
  const julianPicazaContent = (
    <>
      <p className="italic text-wiki-text-muted mb-6">
        For other uses, see <a href="#" className="text-wiki-link hover:underline">Julian Picaza (disambiguation)</a>.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1">
          <p>
            <strong>Julian Picaza</strong> (born May 20, 1977) is a <a href="#" className="text-wiki-link hover:underline">Basque</a>/<a href="#" className="text-wiki-link hover:underline">Cuban-American</a> systems integrator, <a href="#" className="text-wiki-link hover:underline">convergence specialist</a>, and <a href="#" className="text-wiki-link hover:underline">digital nomad</a> known for his work bridging creative and technical domains across emerging technologies, <a href="#" className="text-wiki-link hover:underline">product management</a>, <a href="#" className="text-wiki-link hover:underline">digital fabrication</a>, <a href="#" className="text-wiki-link hover:underline">film/VFX production</a>, and <a href="#" className="text-wiki-link hover:underline">contemporary fine arts</a>. Currently operating as an independent consultant, he is recognized for his ability to translate between creative vision and technical execution across disparate industries.
          </p>
        </div>
        
        <div className="lg:w-80">
          <div className="bg-muted p-4 rounded border">
            <div className="text-center mb-4">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded mx-auto mb-2 overflow-hidden">
                <img 
                  src="/lovable-uploads/86f0b0ce-1720-43fd-a784-ff699a4e7519.png" 
                  alt="Julian Picaza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">Julian Picaza</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div><strong>Born:</strong> May 20, 1977</div>
              <div><strong>Nationality:</strong> Basque/Cuban-American</div>
              <div><strong>Occupation:</strong> Systems integrator, Convergence specialist</div>
              <div><strong>Known for:</strong> Cross-domain technical integration</div>
            </div>
          </div>
        </div>
      </div>

      <details open>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Early life and education
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian's intellectual foundation was shaped by early exposure to <a href="#" className="text-wiki-link hover:underline">systems thinking</a> through voracious reading that spanned <a href="#" className="text-wiki-link hover:underline">Taoist philosophy</a>, <a href="#" className="text-wiki-link hover:underline">complexity science</a>, and cognitive frameworks. Works like Douglas Hofstadter's <em><a href="#" className="text-wiki-link hover:underline">Gödel, Escher, Bach</a></em> and research from the <a href="#" className="text-wiki-link hover:underline">Santa Fe Institute</a> on emergent systems planted seeds that would quietly influence his thinking for decades before emerging as conscious methodology.
          </p>
          <p className="mt-4">
            Growing up in a Basque/Cuban-American household, Julian developed an intuitive understanding of cultural convergence and the fluid nature of identity and meaning—concepts that would later inform his professional approach to bridging seemingly disparate domains.
          </p>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Contemporary fine arts
        </summary>
        <div className="mt-4 pl-4">
          <p className="italic text-muted-foreground">
            [Section to be developed - Julian's ongoing artistic practice and how it informs his systems thinking approach]
          </p>
          <h3 className="font-semibold mt-4 mb-2">Notable works and exhibitions</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>[Project Name]</strong> (Year) - Medium and significance</li>
            <li><strong>[Project Name]</strong> (Year) - Medium and significance</li>
          </ul>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Film and VFX career
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian's technical career began in <a href="#" className="text-wiki-link hover:underline">film production</a>, where his roles expanded from Camera Operator to <a href="#" className="text-wiki-link hover:underline">VFX Supervisor</a> across [comprehensive filmography to be detailed]. His ability to understand both the creative requirements of directors and the technical constraints of post-production workflows established his reputation for "signal flow" thinking—tracking how creative intent moves through complex technical systems.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Notable projects</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>[Project Name]</strong> (Year) - Role and key contribution</li>
            <li><strong>[Project Name]</strong> (Year) - Role and key contribution</li>
          </ul>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Digital fabrication and manufacturing
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian's journey in <a href="#" className="text-wiki-link hover:underline">digital fabrication</a> began during his studies in the Product Design track of Industrial Design at <a href="#" className="text-wiki-link hover:underline">Art Center College of Design</a> in Pasadena. This foundation led to managing multiple fabrication shops over many years, primarily focusing on <a href="#" className="text-wiki-link hover:underline">CNC</a> and <a href="#" className="text-wiki-link hover:underline">laser cutting</a> operations.
          </p>
          <p className="mt-4">
            His expertise culminated at <strong>SmartMFG</strong>, where he led cross-functional teams developing digital fabrication workflows. His work focused on bridging the gap between digital design concepts and physical production realities, developing systematic approaches to complex manufacturing challenges.
          </p>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Product management and operations
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian's convergence approach proved valuable in <a href="#" className="text-wiki-link hover:underline">product management</a> roles, where his ability to understand creative vision, technical feasibility, and business requirements simultaneously allowed him to navigate complex cross-functional challenges. His work at <strong>SyncFab</strong> and subsequent role at <strong>SmartMFG</strong> demonstrated his capacity to translate between stakeholder needs and technical delivery.
          </p>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Systems thinking and philosophy
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian's approach is influenced by <a href="#" className="text-wiki-link hover:underline">Taoist</a> concepts of interconnectedness, particularly the idea of "Goblet Words"—meaning that flows between different conceptual vessels rather than being trapped in rigid categories. He rejects traditional field boundaries, seeing creative and technical domains as naturally overlapping systems.
          </p>
          <p className="mt-4">
            This philosophical foundation, first encountered in his early reading but operating quietly beneath his thinking for decades, eventually emerged as conscious methodology in his professional work. The integration of Eastern philosophy with Western <a href="#" className="text-wiki-link hover:underline">complexity science</a> creates his distinctive approach to problem-solving and systems integration.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Key frameworks</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Signal Flow Analysis</strong> - Tracing how creative intent moves through technical systems</li>
            <li><strong>Epistemic Fluency</strong> - Moving between different ways of organizing knowledge</li>
            <li><strong>Convergence Integration</strong> - Finding value in liminal spaces between established fields</li>
          </ul>
        </div>
      </details>

      <details>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline mb-4">
          Current work
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Julian operates as an independent consultant specializing in convergence projects that require both creative vision and technical execution. Working remotely from various locations, he develops both client work and speculative projects aimed at sustainable income generation while maintaining his nomadic lifestyle.
          </p>
          <h3 className="font-semibold mt-4 mb-2">Active projects</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong><a href="http://syntactic.studio" className="text-wiki-link hover:underline">Syntactic Studio</a></strong> - Creative technology consulting</li>
            <li><strong><a href="http://flowconnector.dev" className="text-wiki-link hover:underline">FlowConnector</a></strong> - Systems integration services</li>
            <li><strong>Knowledge graph development</strong> - This site and related research</li>
          </ul>
        </div>
      </details>

      <h2 id="selected-projects">Selected projects</h2>
      <p className="italic text-muted-foreground">[To be developed across all domains]</p>

      <h2 id="publications">Publications and talks</h2>
      <p className="italic text-muted-foreground">[To be developed]</p>

      <h2 id="references">References</h2>
      <p className="italic text-muted-foreground">[To be developed]</p>
    </>
  );

  const tableOfContents = [
    { id: 'early-life', title: 'Early life and education', level: 1 },
    { id: 'fine-arts', title: 'Contemporary fine arts', level: 1 },
    { id: 'film-vfx', title: 'Film and VFX career', level: 1 },
    { id: 'digital-fab', title: 'Digital fabrication and manufacturing', level: 1 },
    { id: 'product-mgmt', title: 'Product management and operations', level: 1 },
    { id: 'systems', title: 'Systems thinking and philosophy', level: 1 },
    { id: 'current', title: 'Current work', level: 1 },
    { id: 'selected-projects', title: 'Selected projects', level: 1 },
    { id: 'publications', title: 'Publications and talks', level: 1 },
    { id: 'references', title: 'References', level: 1 },
  ];

  const julianPicazaMetadata = {
    tags: [
      'Systems thinking', 
      'Digital fabrication', 
      'VFX production', 
      'Product management', 
      'Convergence theory', 
      'Creative technology'
    ],
    notes: '<p>This article covers Julian Picaza\'s multidisciplinary career spanning creative and technical domains, with emphasis on his systems integration approach and convergence methodology.</p>',
    externalLinks: [
      { title: 'Syntactic Studio - Official website', url: 'http://syntactic.studio' },
      { title: 'FlowConnector - Systems integration services', url: 'http://flowconnector.dev' }
    ]
  };

  const julianPicazaCategories = [
    'American systems theorists', 
    'Film industry workers', 
    'Digital fabrication', 
    'Product managers', 
    'Complexity science', 
    'Game B movement', 
    'Metamodernism'
  ];

  return (
    <WikipediaPageLayout
      title="Julian Picaza"
      subtitle="From Julian.wiki, the convergence encyclopedia"
      content={julianPicazaContent}
      categories={julianPicazaCategories}
      metadata={julianPicazaMetadata}
      tableOfContents={tableOfContents}
    />
  );
};

export default Index;
