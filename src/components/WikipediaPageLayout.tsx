import React, { useState, useEffect, ReactNode } from 'react';
import { Search, Menu, Globe, ChevronDown, ChevronRight, Sun, Moon, Monitor } from 'lucide-react';

interface WikipediaPageLayoutProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
  categories?: string[];
  metadata?: {
    tags?: string[];
    notes?: string;
    externalLinks?: Array<{title: string, url: string}>;
  };
  tableOfContents?: Array<{id: string, title: string, level: number}>;
}

type Theme = 'light' | 'dark' | 'auto';
type TextSize = 'small' | 'standard' | 'large';
type Width = 'standard' | 'wide';
type ActiveTab = 'article' | 'related' | 'notes' | 'links';

const WikipediaPageLayout: React.FC<WikipediaPageLayoutProps> = ({
  title,
  subtitle,
  content,
  categories = [],
  metadata = {},
  tableOfContents = []
}) => {
  // User preferences state
  const [theme, setTheme] = useState<Theme>('auto');
  const [textSize, setTextSize] = useState<TextSize>('standard');
  const [width, setWidth] = useState<Width>('standard');
  const [activeTab, setActiveTab] = useState<ActiveTab>('article');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [contextDropdownOpen, setContextDropdownOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['contents']));

  // Load preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('wiki-theme') as Theme;
    const savedTextSize = localStorage.getItem('wiki-text-size') as TextSize;
    const savedWidth = localStorage.getItem('wiki-width') as Width;
    
    if (savedTheme) setTheme(savedTheme);
    if (savedTextSize) setTextSize(savedTextSize);
    if (savedWidth) setWidth(savedWidth);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('wiki-theme', theme);
  }, [theme]);

  // Save other preferences
  useEffect(() => {
    localStorage.setItem('wiki-text-size', textSize);
    localStorage.setItem('wiki-width', width);
  }, [textSize, width]);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const renderTableOfContents = () => {
    if (tableOfContents.length === 0) return null;
    
    return (
      <ul className="space-y-1">
        {tableOfContents.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${item.level * 0.75}rem` }}>
            <a 
              href={`#${item.id}`}
              className="text-wiki-link hover:text-wiki-link-hover hover:underline text-sm"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'related':
        return (
          <div className="wiki-content">
            <h2>Related Articles</h2>
            {metadata.tags && metadata.tags.length > 0 ? (
              <ul className="space-y-2">
                {metadata.tags.map((tag, index) => (
                  <li key={index}>
                    <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-wiki-text-muted">No related articles found.</p>
            )}
          </div>
        );
      case 'notes':
        return (
          <div className="wiki-content">
            <h2>Notes</h2>
            {metadata.notes ? (
              <div dangerouslySetInnerHTML={{ __html: metadata.notes }} />
            ) : (
              <p className="text-wiki-text-muted">No notes available.</p>
            )}
          </div>
        );
      case 'links':
        return (
          <div className="wiki-content">
            <h2>External Links</h2>
            {metadata.externalLinks && metadata.externalLinks.length > 0 ? (
              <ul className="space-y-2">
                {metadata.externalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wiki-link hover:text-wiki-link-hover hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-wiki-text-muted">No external links available.</p>
            )}
          </div>
        );
      default:
        return <div className="wiki-content">{content}</div>;
    }
  };

  return (
    <div className={`min-h-screen bg-wiki-content-bg ${width === 'wide' ? 'wiki-width-wide' : 'wiki-width-standard'} mx-auto`}>
      {/* Header */}
      <header className="bg-wiki-header-bg border-b border-wiki-border sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center space-x-4 flex-1">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1 hover:bg-muted rounded"
                aria-label="Toggle navigation"
              >
                <Menu size={20} />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">J</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">JULIAN.WIKI</div>
                  <div className="text-xs text-wiki-text-muted">The convergence encyclopedia</div>
                </div>
              </div>

              <div className="flex-1 max-w-md mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted" size={16} />
                  <input
                    type="text"
                    placeholder="Search Julian.wiki"
                    className="w-full pl-10 pr-12 py-2 border border-wiki-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:bg-primary/90">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center space-x-4">
              <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Contact</a>
              <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Projects</a>
              <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Graph</a>
              <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Random</a>
              
              {/* Context Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setContextDropdownOpen(!contextDropdownOpen)}
                  className="flex items-center space-x-1 text-wiki-link hover:text-wiki-link-hover hover:underline"
                >
                  <Globe size={16} />
                  <span>Contexts</span>
                  <ChevronDown size={16} />
                </button>
                
                {contextDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-popover border border-wiki-border rounded shadow-lg z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 hover:bg-muted">Technical</a>
                      <a href="#" className="block px-4 py-2 hover:bg-muted">Creative</a>
                      <a href="#" className="block px-4 py-2 hover:bg-muted">Business</a>
                      <a href="#" className="block px-4 py-2 hover:bg-muted">Systems</a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Article Tabs */}
        <div className="border-t border-wiki-border">
          <div className="px-4">
            <div className="flex space-x-0">
              {[
                { id: 'article', label: 'Article' },
                { id: 'related', label: 'Related' },
                { id: 'notes', label: 'Notes' },
                { id: 'links', label: 'Links' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ActiveTab)}
                  className={`px-4 py-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary bg-background'
                      : 'border-transparent text-wiki-text-muted hover:text-foreground hover:border-wiki-border'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-0' : 'w-64'} transition-all duration-300 overflow-hidden bg-wiki-sidebar-bg border-r border-wiki-border`}>
          <div className="p-4">
            {/* Contents */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('contents')}
                className="flex items-center space-x-2 text-sm font-semibold mb-3 hover:text-primary"
              >
                {expandedSections.has('contents') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <span>Contents</span>
              </button>
              
              {expandedSections.has('contents') && (
                <div>
                  {renderTableOfContents()}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('navigation')}
                className="flex items-center space-x-2 text-sm font-semibold mb-3 hover:text-primary"
              >
                {expandedSections.has('navigation') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <span>Navigation</span>
              </button>
              
              {expandedSections.has('navigation') && (
                <ul className="space-y-1 text-sm">
                  <li><a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Main page</a></li>
                  <li><a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Recent changes</a></li>
                  <li><a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">Random article</a></li>
                </ul>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          <div className="flex-1 p-6">
            <div className={`${textSize === 'small' ? 'wiki-text-small' : textSize === 'large' ? 'wiki-text-large' : 'wiki-text-standard'}`}>
              {/* Article Title */}
              {activeTab === 'article' && (
                <div className="mb-6">
                  <h1 className="text-4xl font-normal border-b-3 border-wiki-border pb-2 mb-2">{title}</h1>
                  {subtitle && <p className="text-wiki-text-muted italic">{subtitle}</p>}
                </div>
              )}

              {/* Tab Content */}
              {renderTabContent()}

              {/* Categories */}
              {activeTab === 'article' && categories.length > 0 && (
                <div className="mt-12 pt-6 border-t border-wiki-border">
                  <div className="text-sm">
                    <span className="text-wiki-text-muted">Categories: </span>
                    {categories.map((category, index) => (
                      <span key={category}>
                        <a href="#" className="text-wiki-link hover:text-wiki-link-hover hover:underline">
                          {category}
                        </a>
                        {index < categories.length - 1 && ' | '}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Visual Tools Container */}
            <div id="visual-tools-container" className="mt-8"></div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-48 p-4 bg-wiki-sidebar-bg border-l border-wiki-border">
            <div className="space-y-6">
              {/* Text Size */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Text</h4>
                <div className="space-y-2">
                  {[
                    { value: 'small' as TextSize, label: 'Small' },
                    { value: 'standard' as TextSize, label: 'Standard' },
                    { value: 'large' as TextSize, label: 'Large' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="textSize"
                        value={option.value}
                        checked={textSize === option.value}
                        onChange={(e) => setTextSize(e.target.value as TextSize)}
                        className="text-primary"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Width */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Width</h4>
                <div className="space-y-2">
                  {[
                    { value: 'standard' as Width, label: 'Standard' },
                    { value: 'wide' as Width, label: 'Wide' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="width"
                        value={option.value}
                        checked={width === option.value}
                        onChange={(e) => setWidth(e.target.value as Width)}
                        className="text-primary"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Theme */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Color (beta)</h4>
                <div className="space-y-2">
                  {[
                    { value: 'auto' as Theme, label: 'Automatic', icon: Monitor },
                    { value: 'light' as Theme, label: 'Light', icon: Sun },
                    { value: 'dark' as Theme, label: 'Dark', icon: Moon }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="theme"
                        value={option.value}
                        checked={theme === option.value}
                        onChange={(e) => setTheme(e.target.value as Theme)}
                        className="text-primary"
                      />
                      <option.icon size={14} className="text-wiki-text-muted" />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default WikipediaPageLayout;