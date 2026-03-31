

export const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The calculations and estimates provided on this site are for informational purposes only. They are not official quotes or final determinations from the City of Fort Worth Building Department.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Municipal fees change frequently and may vary based on specific project details, location, and current city ordinances. Always verify current rates with the Fort Worth Building Department before submitting your project budget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are not a government agency and are not liable for differences between our estimates and final city billing. Users rely on this calculator at their own risk.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In no event shall this site or its creators be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the calculator or any content on this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accuracy of Information</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            While we strive to provide accurate information based on publicly available Fort Worth fee schedules, we do not guarantee the accuracy, completeness, or timeliness of any information on this site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Users should independently verify all information with official city sources before relying on it for decision-making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Use License</h2>
          <p className="text-gray-700 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on this site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on this site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            The materials on this site are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations</h2>
          <p className="text-gray-700 leading-relaxed">
            In no event shall this site or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this site, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Accuracy of Calculator</h2>
          <p className="text-gray-700 leading-relaxed">
            The Fort Worth Permit Fee Estimator calculator is based on 2026 fee schedules and Texas State Law (HB 852). Fees are calculated using square footage for new builds and a flat rate for remodels. This calculator does not account for impact fees, trade permits (Plumbing/Electric), or other potential charges that may apply to your specific project.
          </p>
        </section>

        <section className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
          <p className="text-gray-700 text-sm">
            For official permit information and accurate fee quotes, contact the Fort Worth Building Department at 817-392-2222 or visit their Citizen Access Portal.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600">
            Last Updated: February 2026
          </p>
        </section>
      </div>
    </div>
  );
};
