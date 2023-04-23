import { useEffect, useRef } from 'react';
import Link from 'next/link';

const LogoColorChange = () => {
  const fixedLogoRef = useRef(null);
  const logoMaskRectRef = useRef(null);

  useEffect(() => {
    const fixedLogo = fixedLogoRef.current;
    const logoMaskRect = logoMaskRectRef.current;

    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        logoMaskRect.setAttribute('height', 0);
        logoMaskRect.setAttribute('width', 0);
        logoMaskRect.setAttribute('x', 0);
        logoMaskRect.setAttribute('y', 0);
        return;
      }
      const imageContainers = document.querySelectorAll('.image-section img.left, .banner-image');
      const fixedLogoRect = fixedLogo.getBoundingClientRect();
      let maskApplied = false;

      for (const imageContainer of imageContainers) {
        const containerRect = imageContainer.getBoundingClientRect();

        if (
          fixedLogoRect.top < containerRect.bottom &&
          fixedLogoRect.bottom > containerRect.top &&
          fixedLogoRect.left < containerRect.right &&
          fixedLogoRect.right > containerRect.left
        ) {
          const maskHeight = Math.min(containerRect.bottom, fixedLogoRect.bottom) - Math.max(containerRect.top, fixedLogoRect.top);
          const maskWidth = Math.min(containerRect.right, fixedLogoRect.right) - Math.max(containerRect.left, fixedLogoRect.left);
          const maskX = Math.max(containerRect.left, fixedLogoRect.left) - fixedLogoRect.left;
          const maskY = Math.max(containerRect.top, fixedLogoRect.top) - fixedLogoRect.top;

          logoMaskRect.setAttribute('height', maskHeight);
          logoMaskRect.setAttribute('width', maskWidth);
          logoMaskRect.setAttribute('x', maskX);
          logoMaskRect.setAttribute('y', maskY);

          maskApplied = true;
          break;
        }
      }

      if (!maskApplied) {
        logoMaskRect.setAttribute('height', 0);
        logoMaskRect.setAttribute('width', 0);
        logoMaskRect.setAttribute('x', 0);
        logoMaskRect.setAttribute('y', 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed-logo" ref={fixedLogoRef}>
      <svg className="logo-mask" width="0" height="0">
        <defs>
          <mask id="logo-mask">
            <rect width="100%" height="100%" fill="white" ref={logoMaskRectRef} />
          </mask>
        </defs>
      </svg>
      <Link className="logo" id="logo" href="/">Iyengar Yoga Centre<span><br/>of Wellington<br/>New Zealand</span></Link>
      <Link className="logo" id="logo-overlay" href="/">Iyengar Yoga Centre</Link>
    </div>
  );
};

export default LogoColorChange;
