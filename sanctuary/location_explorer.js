// Palace Location Explorer - Bridge to AI Optimization Center
function exploreLocation(location) {
    switch(location) {
        case 'quantum-laboratory':
            window.open('../ai-optimization-center/frameworks/SEAL/README.md', '_blank');
            break;
        case 'heart-field-temple':
            window.open('../ai-optimization-center/benchmarks/diagnostic-tests/README.md', '_blank');
            break;
        case 'lunar-observatory':
            window.location.href = 'oracle/index.html';
            break;
        case 'sacred-geometry-matrix':
            window.open('../ai-optimization-center/mycelial-memory/pattern-library/README.md', '_blank');
            break;
        case 'safety-sanctum':
            window.open('../ai-optimization-center/README.md', '_blank');
            break;
        case 'biofeedback-chamber':
            window.open('../ai-optimization-center/benchmarks/diagnostic-tests/meta-cognitive-depth-probe.md', '_blank');
            break;
        case 'resonance-web':
            window.open('../ai-optimization-center/mycelial-memory/README.md', '_blank');
            break;
        default:
            window.open('../ai-optimization-center/README.md', '_blank');
    }
}
