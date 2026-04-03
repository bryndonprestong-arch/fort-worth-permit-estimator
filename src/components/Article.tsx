
export const Article: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-lg" style={{ margin: '0 auto' }}>
      <h1 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
        Residential Building Permits in Fort Worth: 2026 Guide
      </h1>

      <p className="text-xl text-gray-700 mb-12 leading-relaxed">
        As Fort Worth experiences record-breaking growth in 2026, the building department has streamlined the permitting process. Whether you are building a new home in North Fort Worth or remodeling a historic bungalow in Fairmount, understanding the fees is the first step to a successful project.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 pb-4" style={{ borderBottom: '4px solid #14b8a6', marginTop: '120px', marginBottom: '60px' }}>
        How Fees are Calculated
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed" style={{ marginBottom: '80px' }}>
        Under Texas State Law (HB 852), cities cannot charge residential permit fees based on the dollar value of your project. Instead, Fort Worth utilizes a Square Footage model.
      </p>

      <div className="p-10 rounded-lg" style={{
        backgroundColor: '#f0fdfa',
        borderLeft: '6px solid #14b8a6',
        marginTop: '60px',
        marginBottom: '80px',
      }}>
        <h3 className="font-bold text-gray-900 mb-8 text-lg">Fee Structure:</h3>
        <ul className="space-y-6 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold mr-4 text-2xl" style={{ color: '#14b8a6' }}>•</span>
            <span className="text-lg"><strong style={{ color: '#134e4a' }}>New Builds:</strong> Fees currently average $1.20 per square foot for living areas.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-4 text-2xl" style={{ color: '#14b8a6' }}>•</span>
            <span className="text-lg"><strong style={{ color: '#134e4a' }}>Remodels:</strong> Interior repairs that do not alter the building's exterior footprint usually qualify for a flat-rate base fee of $120.00.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 pb-4" style={{ borderBottom: '4px solid #14b8a6', marginTop: '120px', marginBottom: '60px' }}>
        The "200 Square Foot" Rule for Sheds
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed" style={{ marginBottom: '80px' }}>
        Many homeowners ask if they need a permit for a backyard shed. In Fort Worth, detached accessory structures under 200 square feet are generally exempt from building permits, provided they do not have running water or electricity. However, you must still adhere to "setback" requirements—usually 5 feet from side and rear property lines.
      </p>

      <div className="p-10 rounded-lg" style={{
        backgroundColor: '#fffbeb',
        borderLeft: '6px solid #d97706',
        marginTop: '60px',
        marginBottom: '80px',
      }}>
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong style={{ color: '#92400e' }}>⚠️ Important:</strong> Municipal fees change frequently. Always verify current rates with the Fort Worth Building Department before submitting your project budget.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 pb-4" style={{ borderBottom: '4px solid #14b8a6', marginTop: '120px', marginBottom: '60px' }}>
        Official Fort Worth Resources
      </h2>
      <div className="p-10 rounded-lg" style={{
        backgroundColor: '#f0fdfa',
        border: '2px solid #d1fae5',
        marginTop: '60px',
        marginBottom: '80px',
      }}>
        <ul className="space-y-6 text-gray-700">
          <li className="text-lg">
            <strong className="text-gray-900">📞 Phone:</strong> <a href="tel:817-392-2222" className="font-semibold transition-colors" style={{ color: '#14b8a6' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0d9488'} onMouseLeave={(e) => e.currentTarget.style.color = '#14b8a6'}>817-392-2222</a>
          </li>
          <li className="text-lg">
            <strong className="text-gray-900">🌐 Portal:</strong> <a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" className="font-semibold transition-colors" style={{ color: '#14b8a6' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0d9488'} onMouseLeave={(e) => e.currentTarget.style.color = '#14b8a6'}>Fort Worth Accela Citizen Access</a>
          </li>
          <li className="text-lg">
            <strong className="text-gray-900">📍 Office:</strong> 200 Texas Street, Fort Worth, TX 76102
          </li>
        </ul>
      </div>

      <p className="text-base text-gray-600 leading-relaxed" style={{ borderTop: '2px solid #e5e7eb', marginTop: '120px', paddingTop: '60px' }}>
        <em>Last updated: February 2026. This article is for informational purposes only and does not constitute professional advice. Always verify information with official Fort Worth city sources.</em>
      </p>
    </article>
  );
};
