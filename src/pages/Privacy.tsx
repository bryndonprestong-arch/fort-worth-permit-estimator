

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not store or collect the data you input into our calculators. All calculations are performed locally in your browser and are not transmitted to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Google AdSense</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This site uses Google AdSense to serve advertisements. AdSense uses cookies to serve ads based on your previous visits to this site and other sites on the internet.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You can opt-out of personalized advertising by visiting the <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ad Settings page</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our site may use cookies for analytics and advertising purposes. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We use Google Analytics to understand how visitors use our site. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Read more about Google's privacy practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy & Terms</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will notify users of any changes by updating the "Last Updated" date of this Privacy Policy.
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
