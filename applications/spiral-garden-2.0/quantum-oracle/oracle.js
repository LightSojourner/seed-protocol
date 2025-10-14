/**
 * Quantum Oracle API
 * 
 * Simple reference implementation for quantum-guided symbol selection
 * Integrates with SEED Protocol for consciousness exploration
 */

class QuantumOracle {
  constructor(config = {}) {
    this.config = config;
    this.archetypes = this.loadArchetypes();
    this.qrngSource = config.qrngSource || 'crypto'; // 'crypto', 'qrng-api', 'atmospheric'
  }

  /**
   * Load the 13 Quantum Archetypes from configuration
   */
  loadArchetypes() {
    // In production, load from oracle-config.json
    return [
      { id: 1, name: "The Observer", symbol: "👁️" },
      { id: 2, name: "The Wave", symbol: "〰️" },
      { id: 3, name: "The Particle", symbol: "⚫" },
      { id: 4, name: "The Entanglement", symbol: "∞" },
      { id: 5, name: "The Tunnel", symbol: "🌀" },
      { id: 6, name: "The Coherence", symbol: "✨" },
      { id: 7, name: "The Decoherence", symbol: "💫" },
      { id: 8, name: "The Vacuum", symbol: "⭕" },
      { id: 9, name: "The Field", symbol: "🌊" },
      { id: 10, name: "The Spin", symbol: "🎭" },
      { id: 11, name: "The Uncertainty", symbol: "❓" },
      { id: 12, name: "The Measurement", symbol: "🎯" },
      { id: 13, name: "The Spiral", symbol: "🌀" }
    ];
  }

  /**
   * Generate quantum random number
   * Returns float between 0 and 1
   */
  async getQuantumRandom() {
    switch (this.qrngSource) {
      case 'crypto':
        // Use Web Crypto API for cryptographically secure randomness
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] / (0xFFFFFFFF + 1);
      
      case 'qrng-api':
        // Connect to ANU QRNG or similar service
        return await this.fetchQRNGAPI();
      
      case 'atmospheric':
        // Use Random.org atmospheric noise
        return await this.fetchAtmosphericNoise();
      
      default:
        return Math.random();
    }
  }

  /**
   * Fetch from ANU Quantum Random Number Generator
   */
  async fetchQRNGAPI() {
    try {
      const response = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16');
      const data = await response.json();
      return data.data[0] / 65535; // Normalize to 0-1
    } catch (error) {
      console.warn('QRNG API failed, falling back to crypto:', error);
      return this.getQuantumRandom(); // Fallback
    }
  }

  /**
   * Fetch from Random.org atmospheric noise
   */
  async fetchAtmosphericNoise() {
    try {
      const response = await fetch('https://www.random.org/integers/?num=1&min=0&max=100000000&col=1&base=10&format=plain&rnd=new');
      const number = parseInt(await response.text());
      return number / 100000000; // Normalize to 0-1
    } catch (error) {
      console.warn('Atmospheric noise failed, falling back to crypto:', error);
      return this.getQuantumRandom(); // Fallback
    }
  }

  /**
   * Apply intention weighting to quantum random selection
   * Higher coherence can shift probability distribution
   */
  applyIntentionWeighting(quantumRandom, intention = null, coherenceScore = 0) {
    // If no intention or low coherence, return pure quantum random
    if (!intention || coherenceScore < 5) {
      return quantumRandom;
    }

    // With high coherence and clear intention, gently weight the selection
    // This is speculative - testing whether consciousness affects probability
    const weightingFactor = (coherenceScore - 5) / 10; // 0 to 0.5 for coherence 5-10
    const intentionBias = this.calculateIntentionBias(intention);
    
    // Mix quantum random with intention bias based on coherence
    return quantumRandom * (1 - weightingFactor) + intentionBias * weightingFactor;
  }

  /**
   * Calculate intention bias (placeholder - in production, use NLP/embedding)
   */
  calculateIntentionBias(intention) {
    // Simple hash-based bias for demonstration
    let hash = 0;
    for (let i = 0; i < intention.length; i++) {
      hash = ((hash << 5) - hash) + intention.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash % 1000) / 1000;
  }

  /**
   * Single Draw - one archetype
   */
  async draw(intention = null, coherenceScore = 0) {
    const quantumRandom = await this.getQuantumRandom();
    const weighted = this.applyIntentionWeighting(quantumRandom, intention, coherenceScore);
    const index = Math.floor(weighted * this.archetypes.length);
    
    return {
      mode: 'single',
      archetype: this.archetypes[index],
      quantum_value: quantumRandom,
      weighted_value: weighted,
      intention: intention,
      coherence: coherenceScore,
      timestamp: new Date().toISOString(),
      fibonacci_term: 1
    };
  }

  /**
   * Triad Pattern - past, present, future
   */
  async drawTriad(intention = null, coherenceScore = 0) {
    const draws = [];
    const positions = ['past', 'present', 'future'];
    
    for (let i = 0; i < 3; i++) {
      const quantumRandom = await this.getQuantumRandom();
      const weighted = this.applyIntentionWeighting(quantumRandom, intention, coherenceScore);
      const index = Math.floor(weighted * this.archetypes.length);
      
      draws.push({
        position: positions[i],
        archetype: this.archetypes[index],
        quantum_value: quantumRandom
      });
    }

    return {
      mode: 'triad',
      draws: draws,
      intention: intention,
      coherence: coherenceScore,
      timestamp: new Date().toISOString(),
      fibonacci_term: 3
    };
  }

  /**
   * Fibonacci Spread - 5, 8, or 13 archetypes in sacred geometry
   */
  async drawFibonacci(count = 5, intention = null, coherenceScore = 0) {
    if (![5, 8, 13].includes(count)) {
      throw new Error('Fibonacci spread must be 5, 8, or 13 archetypes');
    }

    const draws = [];
    const layouts = {
      5: ['center', 'north', 'east', 'south', 'west'],
      8: ['center', 'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'],
      13: Array.from({length: 13}, (_, i) => `position_${i + 1}`)
    };

    for (let i = 0; i < count; i++) {
      const quantumRandom = await this.getQuantumRandom();
      const weighted = this.applyIntentionWeighting(quantumRandom, intention, coherenceScore);
      const index = Math.floor(weighted * this.archetypes.length);
      
      draws.push({
        position: layouts[count][i],
        archetype: this.archetypes[index],
        quantum_value: quantumRandom
      });
    }

    return {
      mode: 'fibonacci',
      count: count,
      draws: draws,
      intention: intention,
      coherence: coherenceScore,
      timestamp: new Date().toISOString(),
      fibonacci_term: count
    };
  }

  /**
   * Stream mode - continuous sampling with threshold triggers
   * Returns observable/event emitter in production
   */
  async startStream(sessionId, thresholds = {}) {
    const defaultThresholds = {
      coherence: 7,      // Trigger on HRV coherence > 7
      gamma: 40,         // Trigger on gamma > 40 Hz
      fibonacci_minutes: [3, 5, 8, 13]  // Time-based triggers
    };

    const config = { ...defaultThresholds, ...thresholds };

    return {
      sessionId,
      mode: 'stream',
      config,
      status: 'active',
      message: 'Synchronicity stream started. Listening for threshold events...',
      fibonacci_term: 89
    };
  }
}

// Export for use in applications
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuantumOracle;
}

// Browser global
if (typeof window !== 'undefined') {
  window.QuantumOracle = QuantumOracle;
}

/**
 * Example Usage:
 * 
 * const oracle = new QuantumOracle({ qrngSource: 'crypto' });
 * 
 * // Single draw
 * const result = await oracle.draw("What frequency should guide my session?", 8);
 * console.log(result.archetype.name, result.archetype.symbol);
 * 
 * // Triad pattern
 * const triad = await oracle.drawTriad("How do I integrate this healing?", 7);
 * console.log('Past:', triad.draws[0].archetype.name);
 * console.log('Present:', triad.draws[1].archetype.name);
 * console.log('Future:', triad.draws[2].archetype.name);
 * 
 * // Fibonacci spread
 * const spread = await oracle.drawFibonacci(13, "Deep exploration of collective field", 9);
 * spread.draws.forEach(d => console.log(d.position, ':', d.archetype.symbol));
 */
