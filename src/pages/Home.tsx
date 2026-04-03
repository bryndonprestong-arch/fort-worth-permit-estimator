
import { Calculator } from '../components/Calculator';
import { Article } from '../components/Article';
import { AdSense } from '../components/AdSense';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation Spacer */}
      <div style={{ height: '20px' }}></div>

      {/* Calculator - Main Content */}
      <Calculator />

      {/* Ad Space 1 */}
      <div className="py-8" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-6xl mx-auto px-6">
          <AdSense slot="1234567890" format="horizontal" />
        </div>
      </div>

      {/* Article Section */}
      <div style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Article />
        </div>
      </div>

      {/* Ad Space 2 */}
      <div className="py-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6">
          <AdSense slot="0987654321" format="vertical" />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-16 mt-12" style={{ backgroundColor: '#134e4a' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#d1fae5' }}>
                Independent permit fee estimation tool for North Texas homeowners. Providing accurate, up-to-date information for Fort Worth residential building permits.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-3">
                <li><a href="#about" style={{ color: '#d1fae5' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1fae5'}>About & Contact</a></li>
                <li><a href="#privacy" style={{ color: '#d1fae5' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1fae5'}>Privacy Policy</a></li>
                <li><a href="#terms" style={{ color: '#d1fae5' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1fae5'}>Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Official Resources</h3>
              <ul className="text-sm space-y-3">
                <li><a href="tel:817-392-2222" style={{ color: '#d1fae5' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1fae5'}>📞 817-392-2222</a></li>
                <li><a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#d1fae5' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#d1fae5'}>Fort Worth Official Site</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8" style={{ borderTop: '1px solid rgba(209, 250, 229, 0.3)' }}>
            <p className="text-center text-sm" style={{ color: '#d1fae5' }}>
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
