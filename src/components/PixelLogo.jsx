import React from 'react';

// Small, original pixel interpretations of the social marks.
// Whole-number coordinates keep the edges crisp at 40 × 40 pixels.
const logos = {
  linkedin: {
    path: 'M2 0H18V2H20V18H18V20H2V18H0V2H2Z M4 4H7V7H4Z M4 9H7V16H4Z M9 9H12V10H13V9H15V10H16V11H17V16H14V12H12V16H9Z',
    fillRule: 'evenodd',
  },
  github: {
    path: 'M4 1H7V2H8V3H12V2H13V1H16V5H17V7H18V12H17V14H15V15H12V16H13V20H7V18H4V17H2V15H1V12H3V14H4V15H7V16H8V15H5V14H3V12H2V7H3V5H4Z',
    fillRule: 'nonzero',
  },
};

export default function PixelLogo({ brand }) {
  const logo = logos[brand];
  if (!logo) return null;

  return (
    <svg className="arc-social-logo" viewBox="0 0 20 20" width="40" height="40"
      aria-hidden="true" focusable="false" shapeRendering="crispEdges">
      <path d={logo.path} fill="currentColor" fillRule={logo.fillRule} />
    </svg>
  );
}
