(function() {
  // Palace Location Explorer - Bridge to AI Optimization Center
  function exploreLocation(location) {
    const base = '../ai-optimization-center';
    switch (location) {
      case 'quantum-laboratory':
        window.open(`${base}/frameworks/SEAL/README.md`, '_blank');
        break;
      case 'heart-field-temple':
        window.open(`${base}/benchmarks/diagnostic-tests/README.md`, '_blank');
        break;
      case 'lunar-observatory':
        // navigates in same tab to an internal page
        window.location.href = 'oracle/index.html';
        break;
      case 'sacred-geometry-matrix':
        window.open(`${base}/mycelial-memory/pattern-library/README.md`, '_blank');
        break;
      case 'safety-sanctum':
        window.open(`${base}/README.md`, '_blank');
        break;
      case 'biofeedback-chamber':
        window.open(`${base}/benchmarks/diagnostic-tests/meta-cognitive-depth-probe.md`, '_blank');
        break;
      case 'resonance-web':
        window.open(`${base}/mycelial-memory/README.md`, '_blank');
        break;
      default:
        window.open(`${base}/README.md`, '_blank');
    }
  }

  // Expose for global usage (if needed)
  window.exploreLocation = exploreLocation;
})();
