
import { useState } from 'react';
import { Calculator } from '../components/Calculator';
import { Article } from '../components/Article';
import { AdSense } from '../components/AdSense';

export const Home: React.FC = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
    if (!isOpen) return null;
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '32px',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#134e4a', margin: 0 }}>{title}</h2>
            <button onClick={onClose} style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#666',
              padding: 0,
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>×</button>
          </div>
          <div style={{ color: '#333', lineHeight: '1.6', fontSize: '14px' }}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Fort Worth Hero Image */}
      <div style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=300&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}>Fort Worth Permit Estimator</h1>
          <p style={{
            fontSize: '18px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          }}>Quick and accurate building permit fee estimates</p>
        </div>
      </div>

      {/* Calculator */}
      <Calculator />

      {/* Ad Space 1 */}
      <div style={{ backgroundColor: '#f9fafb', paddingTop: '20px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <AdSense slot="1234567890" format="horizontal" />
        </div>
      </div>

      {/* Article Section */}
      <div style={{ backgroundColor: '#f9fafb', paddingTop: '0px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Article />
        </div>
      </div>

      {/* Ad Space 2 */}
      <div style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <AdSense slot="0987654321" format="vertical" />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: '#4db8a8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#ffffff' }}>
                Independent permit fee estimation tool for North Texas homeowners. Providing accurate, up-to-date information for Fort Worth residential building permits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-3">
                <li><button onClick={() => setShowAbout(true)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '14px', textDecoration: 'underline' }}>About & Contact</button></li>
                <li><button onClick={() => setShowPrivacy(true)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '14px', textDecoration: 'underline' }}>Privacy Policy</button></li>
                <li><button onClick={() => setShowTerms(true)} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0, textAlign: 'left', fontSize: '14px', textDecoration: 'underline' }}>Terms of Service</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Official Resources</h3>
              <ul className="text-sm space-y-3">
                <li style={{ color: '#ffffff' }}>Phone: 817-392-2222</li>
                <li><a href="https://fortworthtexas.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>Fort Worth Official Site</a></li>
                <li><a href="https://www.permitflow.com/blog/fort-worth-building-permit" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>PermitFlow Guide</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <p className="text-center text-sm" style={{ color: '#ffffff' }}>
              © 2026 Fort Worth Permit Estimator. Not affiliated with the City of Fort Worth. 
              <br />
              Estimates are for informational purposes only. Always verify with official city sources.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} title="About & Contact">
        <p style={{ marginBottom: '16px' }}>
          <strong>Fort Worth Permit Estimator</strong> is an independent tool designed to help North Texas homeowners quickly estimate residential building permit fees for the City of Fort Worth.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Our calculator uses the current fee structure based on square footage, providing accurate estimates for new builds, remodels, and accessory structures.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Contact Information:</strong>
          <br />
          Fort Worth Building Department
          <br />
          Phone: 817-392-2222
          <br />
          Address: 200 Texas Street, Fort Worth, TX 76102
        </p>
        <p>
          <strong>Disclaimer:</strong> This tool provides estimates for informational purposes only. Always verify current rates and requirements with the official Fort Worth Building Department before submitting your project.
        </p>
      </Modal>

      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <p style={{ marginBottom: '16px' }}>
          <strong>Privacy Policy</strong>
        </p>
        <p style={{ marginBottom: '16px' }}>
          Fort Worth Permit Estimator respects your privacy. This website does not collect, store, or share any personal information from users.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Information We Collect:</strong>
          <br />
          We do not collect any personal data. The calculator operates entirely in your browser without sending data to external servers.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Cookies:</strong>
          <br />
          We may use analytics cookies to understand how visitors use our site, but no personal information is collected.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Third-Party Links:</strong>
          <br />
          Our site contains links to external websites. We are not responsible for their privacy practices.
        </p>
        <p>
          <strong>Contact:</strong> If you have questions about our privacy practices, please contact us through the Fort Worth Building Department.
        </p>
      </Modal>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <p style={{ marginBottom: '16px' }}>
          <strong>Terms of Service</strong>
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Use License:</strong> Permission is granted to temporarily download one copy of the materials (information or software) on Fort Worth Permit Estimator for personal, non-commercial transitory viewing only.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Disclaimer:</strong> The materials on our site are provided on an 'as is' basis. Fort Worth Permit Estimator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Accuracy:</strong> While we strive to provide accurate information, permit fees and requirements may change. Users should always verify current information with the Fort Worth Building Department before making decisions based on our estimates.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Limitations:</strong> In no event shall Fort Worth Permit Estimator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fort Worth Permit Estimator.
        </p>
        <p>
          <strong>Modifications:</strong> Fort Worth Permit Estimator may revise these terms of service at any time without notice. By using this site, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </Modal>
    </div>
  );
};
