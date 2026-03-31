
import { Calculator } from '../components/Calculator';
import { Article } from '../components/Article';
import { AdSense } from '../components/AdSense';

export const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Fort Worth Permit Fee Estimator</h1>
          <p className="text-xl opacity-90">
            Get instant estimates for residential building permits in Fort Worth, Texas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Calculator Section */}
        <Calculator />

        {/* Ad Space 1 - After Calculator */}
        <AdSense slot="1234567890" format="horizontal" />

        {/* Article Section */}
        <Article />

        {/* Ad Space 2 - After Article */}
        <AdSense slot="0987654321" format="vertical" />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <p className="text-sm">
                Independent permit fee estimation tool for North Texas homeowners.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#about" className="hover:text-white">About & Contact</a></li>
                <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Official Resources</h3>
              <ul className="text-sm space-y-2">
                <li><a href="tel:817-392-2222" className="hover:text-white">817-392-2222</a></li>
                <li><a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" className="hover:text-white">Fort Worth Official Site</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm">
              © 2026 Fort Worth Permit Estimator. Not affiliated with the City of Fort Worth. 
              <br />
              Estimates are for informational purposes only. Always verify with official city sources.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
