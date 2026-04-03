
export const Article: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-lg my-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
        Residential Building Permits in Fort Worth: 2026 Guide
      </h1>

      <p className="text-xl text-gray-700 mb-12 leading-relaxed">
        As Fort Worth experiences record-breaking growth in 2026, the building department has streamlined the permitting process. Whether you are building a new home in North Fort Worth or remodeling a historic bungalow in Fairmount, understanding the fees is the first step to a successful project.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 pb-4 border-b-4 border-teal-600">
        How Fees are Calculated
      </h2>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Under Texas State Law (HB 852), cities cannot charge residential permit fees based on the dollar value of your project. Instead, Fort Worth utilizes a Square Footage model.
      </p>

      <div className="bg-teal-50 border-l-6 border-teal-600 p-10 my-12 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-8 text-lg">Fee Structure:</h3>
        <ul className="space-y-6 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold text-teal-600 mr-4 text-2xl">•</span>
            <span className="text-lg"><strong className="text-teal-900">New Builds:</strong> Fees currently average $1.20 per square foot for living areas.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-teal-600 mr-4 text-2xl">•</span>
            <span className="text-lg"><strong className="text-teal-900">Remodels:</strong> Interior repairs that do not alter the building's exterior footprint usually qualify for a flat-rate base fee of $120.00.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 pb-4 border-b-4 border-teal-600">
        The "200 Square Foot" Rule for Sheds
      </h2>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Many homeowners ask if they need a permit for a backyard shed. In Fort Worth, detached accessory structures under 200 square feet are generally exempt from building permits, provided they do not have running water or electricity. However, you must still adhere to "setback" requirements—usually 5 feet from side and rear property lines.
      </p>

      <div className="bg-amber-50 border-l-6 border-amber-600 p-10 my-12 rounded-lg">
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong className="text-amber-900">⚠️ Important:</strong> Municipal fees change frequently. Always verify current rates with the Fort Worth Building Department before submitting your project budget.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 pb-4 border-b-4 border-teal-600">
        Official Fort Worth Resources
      </h2>
      <div className="bg-teal-50 p-10 rounded-lg border-2 border-teal-200">
        <ul className="space-y-6 text-gray-700">
          <li className="text-lg">
            <strong className="text-gray-900">📞 Phone:</strong> <a href="tel:817-392-2222" className="text-teal-600 hover:text-teal-800 hover:underline font-semibold">817-392-2222</a>
          </li>
          <li className="text-lg">
            <strong className="text-gray-900">🌐 Portal:</strong> <a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 hover:underline font-semibold">Fort Worth Accela Citizen Access</a>
          </li>
          <li className="text-lg">
            <strong className="text-gray-900">📍 Office:</strong> 200 Texas Street, Fort Worth, TX 76102
          </li>
        </ul>
      </div>

      <p className="text-base text-gray-600 mt-14 pt-10 border-t-2 border-gray-200 leading-relaxed">
        <em>Last updated: February 2026. This article is for informational purposes only and does not constitute professional advice. Always verify information with official Fort Worth city sources.</em>
      </p>
    </article>
  );
};
