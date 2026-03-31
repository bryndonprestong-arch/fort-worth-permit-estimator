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
    <div className="max-w-md mx-auto my-8 p-8 border border-gray-200 rounded-2xl bg-white shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-600 pb-3 mb-6">
        Fort Worth Permit Fee Estimator
      </h2>
      <p className="text-sm text-gray-600 mb-6">Estimated Residential Fees (Updated Feb 2026)</p>

      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-2">Project Type:</label>
        <select
          value={projectType}
          onChange={handleProjectTypeChange}
          className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="new">New Single-Family / Addition</option>
          <option value="remodel">Interior Remodel / Repair</option>
          <option value="shed">Shed or Detached Structure</option>
        </select>
      </div>

      {projectType !== 'remodel' && (
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">Living Area (Square Footage):</label>
          <input
            type="number"
            placeholder="e.g. 2400"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      )}

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
      >
        Calculate Estimated Fee
      </button>

      {showResult && (
        <div className="mt-8 p-5 bg-green-50 border-l-6 border-green-500">
          <p className="text-green-900 font-semibold text-sm mb-2">Estimated Building Fee:</p>
          <div className="text-4xl font-black text-green-900 mb-3">
            ${estimatedFee?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-gray-700">*Estimates exclude impact fees and trade permits (Plumbing/Electric).</p>
        </div>
      )}
    </div>
  );
};
