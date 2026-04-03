
import { Calculator } from '../components/Calculator';
import { Article } from '../components/Article';
import { AdSense } from '../components/AdSense';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ height: '20px' }}></div>

      <Calculator />

      <div style={{ backgroundColor: '#f9fafb', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <AdSense slot="1234567890" format="horizontal" />
        </div>
      </div>

      <div style={{ backgroundColor: '#f9fafb', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Article />
        </div>
      </div>

      <div style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <AdSense slot="0987654321" format="vertical" />
        </div>
      </div>

      <footer className="text-white" style={{ backgroundColor: '#134e4a', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
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
                <li><a href="#about" style={{ color: '#d1fae5' }}>About & Contact</a></li>
                <li><a href="#privacy" style={{ color: '#d1fae5' }}>Privacy Policy</a></li>
                <li><a href="#terms" style={{ color: '#d1fae5' }}>Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Official Resources</h3>
              <ul className="text-sm space-y-3">
                <li><a href="tel:817-392-2222" style={{ color: '#d1fae5' }}>Phone: 817-392-2222</a></li>
                <li><a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#d1fae5' }}>Fort Worth Official Site</a></li>
                <li><a href="https://www.permitflow.com/blog/fort-worth-building-permit" target="_blank" rel="noopener noreferrer" style={{ color: '#d1fae5' }}>PermitFlow Guide</a></li>
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
