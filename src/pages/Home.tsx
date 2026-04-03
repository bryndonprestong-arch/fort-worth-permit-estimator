
import { Calculator } from '../components/Calculator';
import { Article } from '../components/Article';
import { AdSense } from '../components/AdSense';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 px-6 text-white overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700"
        style={{
          backgroundImage: 'url(/fort-worth-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-7xl font-bold mb-8 drop-shadow-lg leading-tight">
            Fort Worth Permit Fee Estimator
          </h1>
          <p className="text-2xl opacity-95 drop-shadow-md mb-6 font-semibold">
            Get Instant Estimates for Residential Building Permits
          </p>
          <p className="text-lg opacity-90 drop-shadow-md">
            Enter your project details below and get an accurate fee estimate in seconds
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Calculator Section - Prominent */}
        <div className="py-16">
          <Calculator />
        </div>

        {/* Ad Space 1 - After Calculator */}
        <div className="my-12">
          <AdSense slot="1234567890" format="horizontal" />
        </div>

        {/* Article Section */}
        <div className="py-16">
          <Article />
        </div>

        {/* Ad Space 2 - After Article */}
        <div className="my-12">
          <AdSense slot="0987654321" format="vertical" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-900 text-teal-100 py-20 mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-white font-bold text-lg mb-6">About</h3>
              <p className="text-sm leading-relaxed text-teal-100">
                Independent permit fee estimation tool for North Texas homeowners. Providing accurate, up-to-date information for Fort Worth residential building permits.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="text-sm space-y-4">
                <li><a href="#about" className="text-teal-100 hover:text-white transition-colors">About & Contact</a></li>
                <li><a href="#privacy" className="text-teal-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-teal-100 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Official Resources</h3>
              <ul className="text-sm space-y-4">
                <li><a href="tel:817-392-2222" className="text-teal-100 hover:text-white transition-colors">📞 817-392-2222</a></li>
                <li><a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors">Fort Worth Official Site</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-teal-700 pt-12">
            <p className="text-center text-sm leading-relaxed text-teal-100">
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
