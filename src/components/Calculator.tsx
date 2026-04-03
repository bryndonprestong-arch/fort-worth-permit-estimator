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
        <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-teal-600 pb-4">
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
          className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-lg font-semibold hover:border-teal-300 transition-colors"
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
            className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-lg font-semibold hover:border-teal-300 transition-colors"
          />
          <p className="text-sm text-gray-500 mt-3">Enter the total square footage of your project</p>
        </div>
      )}

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-5 rounded-xl text-xl font-bold hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl mb-12"
      >
        Calculate Estimated Fee
      </button>

      {/* Result Display */}
      {showResult && (
        <div className="p-10 bg-gradient-to-br from-teal-50 to-teal-100 border-l-8 border-teal-600 rounded-2xl animate-fadeIn mb-12">
          <p className="text-teal-900 font-bold text-lg mb-4">
            ✓ Estimated Building Fee:
          </p>
          <div className="text-6xl font-black text-teal-700 mb-8">
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
      <div className="p-8 bg-teal-50 border-l-4 border-teal-600 rounded-lg">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong className="text-teal-900">How it works:</strong> Fort Worth calculates residential permit fees based on square footage at $1.20 per square foot for new builds and sheds. Interior remodels have a flat rate of $120.00.
        </p>
      </div>
    </div>
  );
};
