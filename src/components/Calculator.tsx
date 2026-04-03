import { useState } from 'react';

export const Calculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'new' | 'remodel' | 'shed'>('new');
  const [sqft, setSqft] = useState<string>('');
  const [estimatedFee, setEstimatedFee] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    const sqftValue = parseFloat(sqft) || 0;
    let fee = 0;

    if (projectType === 'new' || projectType === 'shed') {
      fee = sqftValue * 1.2; // 2026 Estimated Rate
    } else {
      fee = 120.0; // 2026 Base Remodel Rate
    }

    setEstimatedFee(fee);
    setShowResult(true);
  };

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value as 'new' | 'remodel' | 'shed');
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-12 border border-gray-200 rounded-3xl bg-white shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-3xl">🏗️</div>
        <h2 className="text-4xl font-bold text-gray-800 pb-4" style={{ borderBottom: '4px solid #14b8a6' }}>
          Calculate Your Permit Fee
        </h2>
      </div>
      <p className="text-base text-gray-600 mb-12 leading-relaxed">
        Estimated Residential Fees (Updated February 2026)
      </p>

      {/* Project Type Selection */}
      <div className="mb-12">
        <label className="block font-bold text-gray-800 mb-4 text-lg">
          Project Type:
        </label>
        <select
          value={projectType}
          onChange={handleProjectTypeChange}
          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl bg-gray-50 focus:outline-none text-lg font-semibold"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#14b8a6';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#d1d5db';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <option value="new">New Single-Family / Addition</option>
          <option value="remodel">Interior Remodel / Repair</option>
          <option value="shed">Shed or Detached Structure</option>
        </select>
      </div>

      {/* Square Footage Input */}
      {projectType !== 'remodel' && (
        <div className="mb-12">
          <label className="block font-bold text-gray-800 mb-4 text-lg">
            Living Area (Square Footage):
          </label>
          <input
            type="number"
            placeholder="e.g. 2400"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg font-semibold"
            style={{
              backgroundColor: '#f9fafb',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#14b8a6';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          <p className="text-sm text-gray-500 mt-3">Enter the total square footage of your project</p>
        </div>
      )}

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full text-white py-5 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl mb-12"
        style={{
          background: 'linear-gradient(to right, #14b8a6, #0d9488)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(to right, #0d9488, #0f766e)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(to right, #14b8a6, #0d9488)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Calculate Estimated Fee
      </button>

      {/* Result Display */}
      {showResult && (
        <div className="p-10 rounded-2xl mb-12 animate-fadeIn" style={{
          background: 'linear-gradient(to bottom right, #f0fdfa, #e0faf7)',
          borderLeft: '8px solid #14b8a6',
        }}>
          <p className="font-bold text-lg mb-4" style={{ color: '#134e4a' }}>
            ✓ Estimated Building Fee:
          </p>
          <div className="text-6xl font-black mb-8" style={{ color: '#0d9488' }}>
            ${estimatedFee?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Note:</strong> This estimate is based on the 2026 Fort Worth residential permit fee structure.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              *Estimates exclude impact fees and trade permits (Plumbing/Electric). Always verify with the Fort Worth Building Department for the most current rates.
            </p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="p-8 rounded-lg" style={{
        backgroundColor: '#f0fdfa',
        borderLeft: '4px solid #14b8a6',
      }}>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong style={{ color: '#134e4a' }}>How it works:</strong> Fort Worth calculates residential permit fees based on square footage at $1.20 per square foot for new builds and sheds. Interior remodels have a flat rate of $120.00.
        </p>
      </div>
    </div>
  );
};
