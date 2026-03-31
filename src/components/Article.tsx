

export const Article: React.FC = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md my-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Residential Building Permits in Fort Worth: 2026 Guide
      </h1>

      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        As Fort Worth experiences record-breaking growth in 2026, the building department has streamlined the permitting process. Whether you are building a new home in North Fort Worth or remodeling a historic bungalow in Fairmount, understanding the fees is the first step to a successful project.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">How Fees are Calculated</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Under Texas State Law (HB 852), cities cannot charge residential permit fees based on the dollar value of your project. Instead, Fort Worth utilizes a Square Footage model.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
        <h3 className="font-semibold text-gray-900 mb-3">Fee Structure:</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">•</span>
            <span><strong>New Builds:</strong> Fees currently average $1.20 per square foot for living areas.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-blue-600 mr-3">•</span>
            <span><strong>Remodels:</strong> Interior repairs that do not alter the building's exterior footprint usually qualify for a flat-rate base fee of $120.00.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The "200 Square Foot" Rule for Sheds</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Many homeowners ask if they need a permit for a backyard shed. In Fort Worth, detached accessory structures under 200 square feet are generally exempt from building permits, provided they do not have running water or electricity. However, you must still adhere to "setback" requirements—usually 5 feet from side and rear property lines.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
        <p className="text-gray-800">
          <strong>Important:</strong> Municipal fees change frequently. Always verify current rates with the Fort Worth Building Department before submitting your project budget.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Official Fort Worth Resources</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ul className="space-y-3 text-gray-700">
          <li><strong>Phone:</strong> <a href="tel:817-392-2222" className="text-blue-600 hover:underline">817-392-2222</a></li>
          <li><strong>Portal:</strong> <a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fort Worth Accela Citizen Access</a></li>
          <li><strong>Office:</strong> 200 Texas Street, Fort Worth, TX 76102</li>
        </ul>
      </div>

      <p className="text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200">
        Last updated: February 2026. This article is for informational purposes only and does not constitute professional advice.
      </p>
    </article>
  );
};
