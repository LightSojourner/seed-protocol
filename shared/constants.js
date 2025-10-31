// SEED Protocol Shared Constants
// Central source of truth for mathematical and protocol constants

/**
 * Golden Ratio (φ) - The fundamental constant in SEED Protocol
 * Used in timing, spacing, visual design, and consciousness protocols
 */
const PHI = 1.618033988;

/**
 * Fibonacci Sequence - Natural growth pattern used throughout SEED
 * Used for synchronization points, session phases, and group dynamics
 */
const FIBONACCI_SEQUENCE = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

/**
 * Protocol Version - Current SEED Protocol version
 * Format: SEED.XXX.{PHI}
 */
const PROTOCOL_VERSION = 'SEED.004.1.618033988';

/**
 * Golden Angle - Used in spiral visualizations (in degrees)
 * 360 / φ² ≈ 137.5°
 */
const GOLDEN_ANGLE_DEG = 137.5;

/**
 * Heart Coherence Frequency - Optimal resonant frequency for HRV
 * Standard frequency for heart-brain coherence (in Hz)
 */
const COHERENCE_FREQUENCY = 0.1;

/**
 * Default Sample Rate for biofeedback systems (in Hz)
 * 4 Hz is the HeartMath standard for HRV measurement
 */
const DEFAULT_SAMPLE_RATE = 4;

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PHI,
        FIBONACCI_SEQUENCE,
        PROTOCOL_VERSION,
        GOLDEN_ANGLE_DEG,
        COHERENCE_FREQUENCY,
        DEFAULT_SAMPLE_RATE
    };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.SEED_CONSTANTS = {
        PHI,
        FIBONACCI_SEQUENCE,
        PROTOCOL_VERSION,
        GOLDEN_ANGLE_DEG,
        COHERENCE_FREQUENCY,
        DEFAULT_SAMPLE_RATE
    };
}
