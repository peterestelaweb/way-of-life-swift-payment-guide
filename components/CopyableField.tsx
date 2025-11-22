import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyableFieldProps {
  label: string;
  value: string;
  isCode?: boolean;
  highlight?: boolean;
}

export const CopyableField: React.FC<CopyableFieldProps> = ({ label, value, isCode = false, highlight = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-col gap-1 mb-4 ${highlight ? 'bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm' : ''}`}>
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">{label}</span>
      <div className="flex items-center gap-2">
        <div className={`flex-1 break-all ${isCode ? 'font-mono text-sm bg-gray-100 p-2 rounded border border-gray-200' : 'text-lg font-medium text-gray-900'}`}>
          {value}
        </div>
        <button
          onClick={handleCopy}
          className={`p-2 rounded-md transition-all duration-200 flex items-center justify-center min-w-[44px] min-h-[44px]
            ${copied 
              ? 'bg-green-100 text-green-700' 
              : 'bg-gray-100 text-gray-600 hover:bg-brand-primary hover:text-white'
            }`}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
      {highlight && copied && (
        <p className="text-xs text-green-600 font-medium mt-1 animate-pulse">¡Copiado al portapapeles!</p>
      )}
    </div>
  );
};