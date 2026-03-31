

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About This Site</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We provide independent cost estimation tools for North Texas homeowners. While city portals can be complex, our goal is to provide a "one-click" estimate to help you budget for your residential project.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This site is not affiliated with the City of Fort Worth or any government agency. We are a private resource designed to simplify the permit fee estimation process.
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Official Fort Worth Resources</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Building Department Phone:</h3>
            <a href="tel:817-392-2222" className="text-blue-600 hover:underline text-lg">
              817-392-2222
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Citizen Access Portal:</h3>
            <a 
              href="https://fortworthtexas.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg"
            >
              Fort Worth Accela Citizen Access
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Office Address:</h3>
            <p className="text-gray-700">
              200 Texas Street<br />
              Fort Worth, TX 76102
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have questions or feedback about our estimator? We'd love to hear from you.
        </p>
        <p className="text-gray-700">
          For official permit inquiries, please contact the Fort Worth Building Department directly at the phone number above.
        </p>
      </div>
    </div>
  );
};
