import { useEffect, useRef, useState } from 'react';
import { codeToHtml } from 'shiki';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CodePreviewProps {
  component: React.ComponentType<{ options: Record<string, string> }>;
  generateCode: (options: Record<string, string>) => string;
  codeOptions: Array<{
    key: string;
    label: string;
    value: string;
    options?: Array<{ value: string; label: string }>;
  }>;
  language?: string;
  theme?: string;
}

export default function CodePreview({
  component: Component,
  generateCode,
  codeOptions,
  language = 'tsx',
  theme = 'github-dark',
}: CodePreviewProps) {
  const [options, setOptions] = useState<Record<string, string>>(() => 
    codeOptions.reduce((acc, option) => ({
      ...acc,
      [option.key]: option.options?.[0]?.value || option.value
    }), {})
  );
  
  const [highlightedCode, setHighlightedCode] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [changedOption, setChangedOption] = useState<string | null>(null);
  const prevOptions = useRef(options);

  useEffect(() => {
    const loadHighlighter = async () => {
      const codeString = generateCode(options);
      
      const decorations = highlight && changedOption ? [{
        start: codeString.indexOf(options[changedOption]),
        end: codeString.indexOf(options[changedOption]) + options[changedOption].length,
        properties: { class: 'highlighted-code' }
      }] : [];

      const html = await codeToHtml(codeString, {
        lang: language,
        theme: theme,
        decorations
      });
      
      setHighlightedCode(html);
    };

    loadHighlighter();
    prevOptions.current = options;
  }, [options, language, theme, generateCode, highlight, changedOption]);

  const handleOptionChange = (key: string, value: string) => {
    setHighlight(true);
    setChangedOption(key);
    setOptions(prev => ({ ...prev, [key]: value }));
    
    setTimeout(() => {
      setHighlight(false);
      setChangedOption(null);
    }, 1000);
  };

  const handleCopyCode = async () => {
    const code = generateCode(options);
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-6 border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div className={highlight ? 'preview-highlight' : ''}>
          <Component options={options} />
        </div>
      </div>

      <div className="col-span-6 border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Code</h3>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md 
              bg-gray-100 hover:bg-gray-200 transition-colors duration-200
              text-sm font-medium text-gray-600"
          >
            {isCopied ? (
              <>
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <ClipboardIcon className="w-4 h-4" />
                <span>Copy code</span>
              </>
            )}
          </button>
        </div>
        <div
          className={`code-preview ${highlight ? 'code-highlight' : ''}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>

      <div className="col-span-12 border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Options</h3>
        <div className="flex flex-wrap gap-4">
          {codeOptions.map(option => (
            <div key={option.key} className="flex flex-col min-w-[150px]">
              <label className="text-sm font-medium mb-1">{option.label}</label>
              <select
                value={options[option.key]}
                onChange={(e) => handleOptionChange(option.key, e.target.value)}
                className="border rounded px-2 py-1 text-sm"
              >
                {option.options?.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 