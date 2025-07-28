import WikipediaPageLayout from '@/components/WikipediaPageLayout';

const Index = () => {
  // Sample content with semantic diagram
  const sampleContent = (
    <>
      <p>
        From Julian.wiki, the convergence encyclopedia
      </p>
      
      <p className="italic text-wiki-text-muted mb-6">
        For other uses, see <a href="#" className="text-wiki-link hover:underline">Semantics (disambiguation)</a>.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1">
          <p>
            <strong>Semantics</strong> is the study of linguistic <a href="#" className="text-wiki-link hover:underline">meaning</a>. 
            It examines what meaning is, how words get their meaning, and how the meaning of a complex expression 
            depends on its parts. Part of this process involves the distinction between{' '}
            <a href="#" className="text-wiki-link hover:underline">sense and reference</a>. 
            Sense is given by the ideas and concepts associated with an expression while reference is the object 
            to which an expression points. Semantics contrasts with{' '}
            <a href="#" className="text-wiki-link hover:underline">syntax</a>, which studies the rules that 
            dictate how to create <a href="#" className="text-wiki-link hover:underline">grammatically</a> correct 
            sentences, and <a href="#" className="text-wiki-link hover:underline">pragmatics</a>, which investigates 
            how people use language in communication. Semantics, together with syntactics and pragmatics, is a part of{' '}
            <a href="#" className="text-wiki-link hover:underline">semiotics</a>.
          </p>
        </div>
        
        {/* Semantic Triangle Diagram */}
        <div className="lg:w-80">
          <div className="bg-muted p-4 rounded border">
            <div className="relative h-64 flex items-center justify-center">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Triangle */}
                <path
                  d="M150 30 L50 170 L250 170 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                
                {/* Arrows */}
                <path
                  d="M150 50 L150 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <path
                  d="M130 100 L70 150"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <path
                  d="M170 100 L230 150"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Arrow marker */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="10"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="currentColor"
                    />
                  </marker>
                </defs>
                
                {/* Labels */}
                <text x="150" y="25" textAnchor="middle" className="text-sm font-semibold">
                  apple
                </text>
                <text x="50" y="185" textAnchor="middle" className="text-sm">
                  🍎
                </text>
                <text x="250" y="185" textAnchor="middle" className="text-sm">
                  🍏
                </text>
              </svg>
            </div>
            <p className="text-xs text-center text-wiki-text-muted mt-2">
              A central topic in semantics concerns the relation between language, world, and mental concepts.
            </p>
          </div>
        </div>
      </div>

      <p>
        <a href="#" className="text-wiki-link hover:underline">Lexical semantics</a> is the branch of semantics 
        that studies <a href="#" className="text-wiki-link hover:underline">word meaning</a>. It examines whether 
        words have one or several meanings and in what{' '}
        <a href="#" className="text-wiki-link hover:underline">lexical relations</a> they stand to one another. 
        Phrasal semantics studies the meaning of sentences by exploring the phenomenon of{' '}
        <a href="#" className="text-wiki-link hover:underline">compositionality</a> or how new meanings can be 
        created by arranging words. <a href="#" className="text-wiki-link hover:underline">Formal semantics</a> relies 
        on <a href="#" className="text-wiki-link hover:underline">logic</a> and{' '}
        <a href="#" className="text-wiki-link hover:underline">mathematics</a> to provide precise frameworks of the 
        relation between language and meaning. <a href="#" className="text-wiki-link hover:underline">Cognitive semantics</a> examines 
        meaning from a psychological perspective and assumes a close relation between language ability and the 
        conceptual structures used to understand the world. Other branches of semantics include{' '}
        <a href="#" className="text-wiki-link hover:underline">conceptual semantics</a>,{' '}
        <a href="#" className="text-wiki-link hover:underline">computational semantics</a>, and cultural semantics.
      </p>

      <h2>Definition and related fields</h2>
      <details open>
        <summary className="cursor-pointer text-lg font-semibold text-primary hover:underline">
          Basic concepts
        </summary>
        <div className="mt-4 pl-4">
          <p>
            Semantics is the study of meaning in language. It is concerned with the relationship between signifiers 
            like words, phrases, signs, and symbols and what they stand for in reality, their denotation.
          </p>
        </div>
      </details>

      <h2>Branches</h2>
      <p>
        Semantics is a diverse field with many different approaches and sub-disciplines. The main branches include 
        lexical semantics, phrasal semantics, and formal semantics.
      </p>

      <h3>Lexical semantics</h3>
      <p>
        Lexical semantics focuses on the meaning of individual words and the relationships between them.
      </p>

      <h3>Formal semantics</h3>
      <p>
        Formal semantics uses mathematical and logical tools to analyze meaning in natural language.
      </p>
    </>
  );

  const tableOfContents = [
    { id: 'definition', title: 'Definition and related fields', level: 1 },
    { id: 'basic-concepts', title: 'Basic concepts', level: 2 },
    { id: 'branches', title: 'Branches', level: 1 },
    { id: 'lexical', title: 'Lexical semantics', level: 2 },
    { id: 'formal', title: 'Formal semantics', level: 2 },
  ];

  return (
    <WikipediaPageLayout
      title="Semantics"
      content={sampleContent}
      categories={['Semantics', 'Philosophy of language', 'Linguistics', 'Semiotics']}
      metadata={{
        tags: ['Meaning', 'Language', 'Philosophy', 'Cognitive science'],
        notes: '<p>This article covers the basic principles of semantics in linguistics and philosophy.</p>',
        externalLinks: [
          { title: 'Stanford Encyclopedia of Philosophy: Semantics', url: 'https://plato.stanford.edu/entries/semantics/' },
          { title: 'Linguistics Society: Semantic Theory', url: 'https://example.com/semantics' }
        ]
      }}
      tableOfContents={tableOfContents}
    />
  );
};

export default Index;
