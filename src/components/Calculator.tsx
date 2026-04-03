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
    <div style={{ backgroundColor: '#f0f4f8', padding: '40px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a202c',
            marginBottom: '12px',
          }}>
            Fort Worth Permit Fee Estimator
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#4a5568',
            lineHeight: '1.6',
          }}>
            Enter your project details to calculate your estimated building permit fee
          </p>
        </div>

        {/* Main Container with Two Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* LEFT COLUMN - INPUT FORM */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '2px solid #e2e8f0',
            }}>
              Project Information
            </h2>

            {/* Project Type Field */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '10px',
              }}>
                Project Type
              </label>
              <select
                value={projectType}
                onChange={handleProjectTypeChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  fontSize: '15px',
                  border: '1px solid #cbd5e0',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#2d3748',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#14b8a6';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option value="new">New Single-Family / Addition</option>
                <option value="remodel">Interior Remodel / Repair</option>
                <option value="shed">Shed or Detached Structure</option>
              </select>
              <p style={{
                fontSize: '12px',
                color: '#718096',
                marginTop: '6px',
              }}>
                Select the type of project
              </p>
            </div>

            {/* Square Footage Field - Only show for non-remodel */}
            {projectType !== 'remodel' && (
              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#2d3748',
                  marginBottom: '10px',
                }}>
                  Living Area (Square Footage)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 2400"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    fontSize: '15px',
                    border: '1px solid #cbd5e0',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    color: '#2d3748',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#14b8a6';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#cbd5e0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginTop: '6px',
                }}>
                  Total square footage of your project
                </p>
              </div>
            )}

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                backgroundColor: '#14b8a6',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '12px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0d9488';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(20, 184, 166, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#14b8a6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Calculate Estimated Fee
            </button>

            {/* Info Box */}
            <div style={{
              marginTop: '28px',
              padding: '16px',
              backgroundColor: '#f0fdfa',
              borderLeft: '4px solid #14b8a6',
              borderRadius: '4px',
            }}>
              <p style={{
                fontSize: '13px',
                color: '#0f766e',
                lineHeight: '1.6',
              }}>
                <strong>How it works:</strong> Fort Worth charges $1.20 per square foot for new builds and sheds. Interior remodels have a flat rate of $120.00.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - RESULTS */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '28px',
              paddingBottom: '16px',
              borderBottom: '2px solid #e2e8f0',
            }}>
              Estimated Fee
            </h2>

            {showResult ? (
              <div>
                {/* Main Result Box */}
                <div style={{
                  backgroundColor: '#f0fdfa',
                  border: '2px solid #14b8a6',
                  borderRadius: '8px',
                  padding: '28px',
                  textAlign: 'center',
                  marginBottom: '28px',
                }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#0f766e',
                    letterSpacing: '0.5px',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}>
                    Estimated Building Fee
                  </p>
                  <div style={{
                    fontSize: '48px',
                    fontWeight: '900',
                    color: '#14b8a6',
                    marginBottom: '8px',
                  }}>
                    ${estimatedFee?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                {/* Result Details */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '16px',
                    borderRadius: '6px',
                    marginBottom: '12px',
                    borderLeft: '3px solid #14b8a6',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#4a5568',
                      marginBottom: '6px',
                    }}>
                      PROJECT TYPE
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#2d3748',
                      fontWeight: '500',
                    }}>
                      {projectType === 'new' && 'New Single-Family / Addition'}
                      {projectType === 'remodel' && 'Interior Remodel / Repair'}
                      {projectType === 'shed' && 'Shed or Detached Structure'}
                    </p>
                  </div>

                  {projectType !== 'remodel' && (
                    <div style={{
                      backgroundColor: '#f9fafb',
                      padding: '16px',
                      borderRadius: '6px',
                      marginBottom: '12px',
                      borderLeft: '3px solid #14b8a6',
                    }}>
                      <p style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#4a5568',
                        marginBottom: '6px',
                      }}>
                        SQUARE FOOTAGE
                      </p>
                      <p style={{
                        fontSize: '14px',
                        color: '#2d3748',
                        fontWeight: '500',
                      }}>
                        {parseFloat(sqft).toLocaleString()} sqft
                      </p>
                    </div>
                  )}

                  <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '16px',
                    borderRadius: '6px',
                    borderLeft: '3px solid #14b8a6',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#4a5568',
                      marginBottom: '6px',
                    }}>
                      RATE
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#2d3748',
                      fontWeight: '500',
                    }}>
                      {projectType === 'remodel' ? '$120.00 flat rate' : '$1.20 per square foot'}
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div style={{
                  backgroundColor: '#fef3c7',
                  border: '1px solid #fcd34d',
                  borderRadius: '6px',
                  padding: '14px',
                  fontSize: '12px',
                  color: '#92400e',
                  lineHeight: '1.5',
                }}>
                  <strong>⚠️ Disclaimer:</strong> This estimate is based on 2026 Fort Worth residential permit fee structure. Estimates exclude impact fees and trade permits. Always verify with the Fort Worth Building Department for current rates.
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#a0aec0',
              }}>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}>
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
