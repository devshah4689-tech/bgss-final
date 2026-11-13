/**
 * BGSS & Associates – Cinematic Logo Reveal Video Intro
 * intro-animation.js | High-performance HTML5 Video + Motion Engine
 * Plays bgss_logo_reveal.mp4 on website arrival with audio controls & smooth exit
 */

'use strict';

(function () {
  const overlay     = document.getElementById('logo-intro-overlay');
  if (!overlay) return;

  const video       = document.getElementById('intro-video');
  const skipBtn     = document.getElementById('intro-skip-btn');
  const soundBtn    = document.getElementById('intro-sound-btn');
  const progressBar = overlay.querySelector('.intro-progress-bar');

  let introFinished = false;

  function finishIntro() {
    if (introFinished) return;
    introFinished = true;

    // Pause video to free up decoding resources
    if (video) {
      try { video.pause(); } catch (e) {}
    }

    // Smooth cinematic dissolve
    if (typeof gsap !== 'undefined') {
      gsap.to(overlay, {
        opacity: 0,
        scale: 1.03,
        filter: 'blur(8px)',
        duration: 0.65,
        ease: 'power2.out',
        onComplete: () => {
          overlay.classList.add('is-finished');
          document.body.classList.remove('js-loading');
          document.body.classList.add('js-ready');
          document.dispatchEvent(new CustomEvent('site:loaded'));
        }
      });
    } else {
      overlay.style.transition = 'opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease';
      overlay.style.opacity = '0';
      overlay.style.transform = 'scale(1.03)';
      overlay.style.filter = 'blur(8px)';
      setTimeout(() => {
        overlay.classList.add('is-finished');
        document.body.classList.remove('js-loading');
        document.body.classList.add('js-ready');
        document.dispatchEvent(new CustomEvent('site:loaded'));
      }, 620);
    }
  }

  // If no video found, finish immediately
  if (!video) {
    finishIntro();
    return;
  }

  // Hard safety timeout: if video fails to load or stalls, unveil site after 8 seconds max
  const failsafeTimer = setTimeout(() => {
    if (!introFinished) {
      console.warn('Video intro failsafe triggered');
      finishIntro();
    }
  }, 8000);

  // Video progress update
  video.addEventListener('timeupdate', () => {
    if (progressBar && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${pct}%`;
    }
  });

  // When video naturally finishes playing
  video.addEventListener('ended', () => {
    clearTimeout(failsafeTimer);
    finishIntro();
  });

  // If video errors out, reveal site immediately
  video.addEventListener('error', () => {
    clearTimeout(failsafeTimer);
    console.warn('Video intro failed to load, dismissing');
    finishIntro();
  });

  // Autoplay attempt (muted is required for cross-browser autoplay)
  video.muted = true;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If autoplay was completely prevented, listen for first touch/click
      const startOnTouch = () => {
        video.play().catch(() => finishIntro());
        document.removeEventListener('touchstart', startOnTouch);
        document.removeEventListener('click', startOnTouch);
      };
      document.addEventListener('touchstart', startOnTouch, { once: true, passive: true });
      document.addEventListener('click', startOnTouch, { once: true, passive: true });
    });
  }

  // Sound toggle button
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      const icon = soundBtn.querySelector('i');
      const text = soundBtn.querySelector('.intro-btn-text');

      if (!video.muted) {
        soundBtn.classList.add('is-unmuted');
        if (icon) icon.className = 'fa-solid fa-volume-high';
        if (text) text.textContent = 'Mute';
      } else {
        soundBtn.classList.remove('is-unmuted');
        if (icon) icon.className = 'fa-solid fa-volume-xmark';
        if (text) text.textContent = 'Sound';
      }
    });
  }

  // Tap video to toggle sound
  video.addEventListener('click', (e) => {
    if (soundBtn) {
      soundBtn.click();
    } else {
      video.muted = !video.muted;
    }
  });

  // Skip button handler
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(failsafeTimer);
      finishIntro();
    });
  }

  // Escape key skip handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !introFinished) {
      clearTimeout(failsafeTimer);
      finishIntro();
    }
  });
})();
