(function() {
  // Palace Location Explorer - Bridge to AI Optimization Center
  function exploreLocation(location) {
    const base = '/ai-optimization-center';
    const allowed = new Set([
      'quantum-laboratory',
      'heart-field-temple',
      'lunar-observatory',
      'sacred-geometry-matrix',
      'safety-sanctum',
      'biofeedback-chamber',
      'resonance-web'
    ]);

    if (!allowed.has(location)) {
      // fallback to the center home
      window.location.href = base + '/';
      return;
    }

    switch (location) {
      case 'quantum-laboratory':
        window.location.href = `${base}/frameworks/SEAL/`;
        break;
      case 'heart-field-temple':
        window.location.href = `${base}/benchmarks/diagnostic-tests/`;
        break;
      case 'lunar-observatory':
        // navigates in same tab to an internal page
        window.location.href = '/oracle/index.html';
        break;
      case 'sacred-geometry-matrix':
        window.location.href = `${base}/mycelial-memory/pattern-library/`;
        break;
      case 'safety-sanctum':
        window.location.href = `${base}/`;
        break;
      case 'biofeedback-chamber':
        window.location.href = `${base}/benchmarks/diagnostic-tests/meta-cognitive-depth-probe/`;
        break;
      case 'resonance-web':
        window.location.href = `${base}/mycelial-memory/`;
        break;
      default:
        window.location.href = base + '/';
    }
  }

  // Expose for global usage (if needed)
  window.exploreLocation = exploreLocation;
})();
