// Simple favicon creation script
// This creates the favicon data that can be used

const createFaviconSVG = () => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3b82f6"/>
        <stop offset="100%" style="stop-color:#8b5cf6"/>
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="16" fill="url(#grad)"/>
    <text x="16" y="20" font-family="Arial,sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="white">OI</text>
  </svg>`;
};

console.log('Favicon SVG created');
console.log(createFaviconSVG());