// SEED Protocol Shared Utilities
// Common helper functions used across SEED Protocol applications

/**
 * Safely import shared constants in both Node.js and browser environments
 * @returns {Object} SEED_CONSTANTS object with PHI, FIBONACCI_SEQUENCE, etc.
 */
function getSeedConstants() {
    // Node.js environment
    if (typeof require !== 'undefined' && typeof module !== 'undefined') {
        try {
            return require('./constants.js');
        } catch (e) {
            // Fallback if constants.js not found
            return {};
        }
    }
    
    // Browser environment
    if (typeof window !== 'undefined' && window.SEED_CONSTANTS) {
        return window.SEED_CONSTANTS;
    }
    
    // Fallback empty object
    return {};
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getSeedConstants
    };
}

// Export for browser
if (typeof window !== 'undefined') {
    window.SEED_UTILS = {
        getSeedConstants
    };
}
