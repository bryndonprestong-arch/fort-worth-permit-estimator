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
      fee = sqftValue * 1.2;
    } else {
      fee = 120.0;
    }

    setEstimatedFee(fee);
    setShowResult(true);
  };

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectType(e.target.value as 'new' | 'remodel' | 'shed');
    setShowResult(false);
  };

  return (
    <div className="w-full py-12" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#1f2937' }}>
            Fort Worth Permit Fee Estimator
          </h1>
          <p className="text-xl" style={{ color: '#6b7280' }}>
            Enter your project details to calculate your estimated building permit fee
          </p>
        </div>

        {/* Two-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px',
        }}>
          {/* LEFT COLUMN - INPUT FORM */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '32px',
          }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#1f2937' }}>
              Project Information
            </h2>

            {/* Project Type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3" style={{ color: '#374151' }}>
                Project Type
              </label>
              <select
                value={projectType}
                onChange={handleProjectTypeChange}
                className="w-full px-4 py-3 border rounded-lg text-base"
                style={{
                  borderColor: '#d1d5db',
                  backgroundColor: '#ffffff',
                }}
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
              <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>
                Select the type of project you're planning
              </p>
            </div>

            {/* Square Footage Input */}
            {projectType !== 'remodel' && (
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3" style={{ color: '#374151' }}>
                  Living Area (Square Footage)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2400"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-base"
                  style={{
                    borderColor: '#d1d5db',
                    backgroundColor: '#ffffff',
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
                <p className="text-xs mt-2" style={{ color: '#9ca3af' }}>
                  Total square footage of your project
                </p>
              </div>
            )}

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full py-4 rounded-lg text-lg font-bold text-white transition-all mt-4"
              style={{
                background: 'linear-gradient(to right, #14b8a6, #0d9488)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #0d9488, #0f766e)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(20, 184, 166, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #14b8a6, #0d9488)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Calculate Estimated Fee
            </button>

            {/* Info Box */}
            <div className="mt-8 p-6 rounded-lg" style={{
              backgroundColor: '#f0fdfa',
              borderLeft: '4px solid #14b8a6',
            }}>
              <p className="text-sm" style={{ color: '#0f766e' }}>
                <strong>How it works:</strong> Fort Worth charges $1.20 per square foot for new builds and sheds. Interior remodels have a flat rate of $120.00.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - RESULTS */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '32px',
          }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#1f2937' }}>
              Estimated Fee
            </h2>

            {showResult ? (
              <div className="space-y-8">
                {/* Main Result */}
                <div className="text-center py-8" style={{
                  backgroundColor: '#f0fdfa',
                  borderRadius: '8px',
                  border: '2px solid #14b8a6',
                }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#0f766e' }}>
                    ESTIMATED BUILDING FEE
                  </p>
                  <div className="text-6xl font-black" style={{ color: '#14b8a6' }}>
                    ${estimatedFee?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 text-sm" style={{ color: '#6b7280' }}>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
                    <p className="font-semibold mb-2" style={{ color: '#374151' }}>
                      📋 Project Type
                    </p>
                    <p>
                      {projectType === 'new' && 'New Single-Family / Addition'}
                      {projectType === 'remodel' && 'Interior Remodel / Repair'}
                      {projectType === 'shed' && 'Shed or Detached Structure'}
                    </p>
                  </div>

                  {projectType !== 'remodel' && (
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
                      <p className="font-semibold mb-2" style={{ color: '#374151' }}>
                        📐 Square Footage
                      </p>
                      <p>{parseFloat(sqft).toLocaleString()} sqft</p>
                    </div>
                  )}

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
                    <p className="font-semibold mb-2" style={{ color: '#374151' }}>
                      💰 Rate
                    </p>
                    <p>
                      {projectType === 'remodel' ? '$120.00 flat rate' : '$1.20 per square foot'}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs p-4 rounded-lg" style={{
                  backgroundColor: '#fef3c7',
                  borderLeft: '4px solid #f59e0b',
                  color: '#92400e',
                }}>
                  <p>
                    <strong>⚠️ Disclaimer:</strong> This estimate is based on 2026 Fort Worth residential permit fee structure. Estimates exclude impact fees and trade permits. Always verify with the Fort Worth Building Department for current rates.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12" style={{ color: '#9ca3af' }}>
                <p className="text-lg">
                  👆 Enter your project details and click "Calculate Estimated Fee" to see your results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
