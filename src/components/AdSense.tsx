import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
}

export const AdSense: React.FC<AdSenseProps> = ({ slot, format = 'auto', responsive = true }) => {
  useEffect(() => {
    // Push AdSense ads when component mounts
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: format === 'vertical' ? '600px' : '250px',
        }}
        data-ad-client="ca-pub-3007484055680406"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

// Declare global window type for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
