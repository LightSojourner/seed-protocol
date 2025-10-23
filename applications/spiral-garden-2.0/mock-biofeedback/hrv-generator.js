// Mock HRV Data Generator for SEED Protocol
// Generates realistic heart rate variability patterns for testing

class HRVDataGenerator {
    constructor() {
        this.sampleRate = 4; // 4 Hz sampling (HeartMath standard)
        this.coherenceFreq = 0.1; // 0.1 Hz resonant frequency
        this.phi = 1.618033988; // Golden ratio
    }

    // Generate coherence state data
    generateCoherenceState(durationMinutes = 5, coherenceLevel = 'high') {
        const samples = durationMinutes * 60 * this.sampleRate;
        const data = [];
        
        const baseHR = 70; // Base heart rate
        const coherenceAmplitude = this.getCoherenceAmplitude(coherenceLevel);
        const noiseLevel = this.getNoiseLevel(coherenceLevel);
        
        for (let i = 0; i < samples; i++) {
            const timeSeconds = i / this.sampleRate;
            
            // Primary 0.1 Hz coherence wave
            const coherenceWave = coherenceAmplitude * Math.sin(2 * Math.PI * this.coherenceFreq * timeSeconds);
            
            // Respiratory sinus arrhythmia (~0.25 Hz)
            const breathingWave = 3 * Math.sin(2 * Math.PI * 0.25 * timeSeconds);
            
            // Low frequency variability (~0.04 Hz)
            const lfWave = 2 * Math.sin(2 * Math.PI * 0.04 * timeSeconds);
            
            // Add fibonacci-based harmonic
            const fibHarmonic = 1 * Math.sin(2 * Math.PI * this.coherenceFreq * this.phi * timeSeconds);
            
            // Random noise
            const noise = (Math.random() - 0.5) * noiseLevel;
            
            const rrInterval = baseHR + coherenceWave + breathingWave + lfWave + fibHarmonic + noise;
            
            data.push({
                timestamp: Date.now() + (i * 250), // 4 Hz = 250ms intervals
                rrInterval: Math.max(400, Math.min(1200, rrInterval)), // Clamp to realistic range
                coherenceScore: this.calculateCoherenceScore(coherenceLevel, timeSeconds),
                heartRate: Math.round(60000 / rrInterval)
            });
        }
        
        return data;
    }

    // Generate emotional state transitions
    generateEmotionalJourney() {
        const states = [
            { name: 'baseline', duration: 2, coherence: 'low' },
            { name: 'frustration', duration: 3, coherence: 'chaotic' },
            { name: 'appreciation_start', duration: 1, coherence: 'medium' },
            { name: 'deep_appreciation', duration: 5, coherence: 'high' },
            { name: 'transcendent', duration: 4, coherence: 'very_high' },
            { name: 'integration', duration: 2, coherence: 'high' }
        ];

        let fullData = [];
        states.forEach(state => {
            const stateData = this.generateCoherenceState(state.duration, state.coherence);
            stateData.forEach(point => {
                point.emotionalState = state.name;
            });
            fullData = fullData.concat(stateData);
        });

        return fullData;
    }

    // Generate multi-user synchronized session
    generateSyncSession(numParticipants = 3, durationMinutes = 13) {
        const participants = [];
        
        for (let p = 0; p < numParticipants; p++) {
            const baseData = this.generateCoherenceState(durationMinutes, 'medium');
            
            // Add participant-specific patterns
            const participantData = baseData.map((point, i) => {
                const timeSeconds = i / this.sampleRate;
                
                // Each participant has slight phase offset but synchronizes over time
                const syncFactor = Math.min(1, timeSeconds / 300); // Sync builds over 5 minutes
                const phaseOffset = (p * 2 * Math.PI / numParticipants) * (1 - syncFactor);
                
                const syncWave = 2 * syncFactor * Math.sin(2 * Math.PI * this.coherenceFreq * timeSeconds + phaseOffset);
                
                return {
                    ...point,
                    participantId: `participant_${p + 1}`,
                    rrInterval: point.rrInterval + syncWave,
                    syncFactor: syncFactor,
                    groupCoherence: this.calculateGroupCoherence(timeSeconds, numParticipants)
                };
            });
            
            participants.push(participantData);
        }
        
        return participants;
    }

    // Generate lunar-correlated patterns
    generateLunarPattern(moonPhase = 'full') {
        const lunarModulation = this.getLunarModulation(moonPhase);
        const baseData = this.generateCoherenceState(8, 'medium'); // 8-minute session
        
        return baseData.map(point => ({
            ...point,
            moonPhase: moonPhase,
            lunarInfluence: lunarModulation,
            rrInterval: point.rrInterval * (1 + lunarModulation * 0.1),
            coherenceScore: point.coherenceScore * (1 + lunarModulation * 0.2)
        }));
    }

    // Helper methods
    getCoherenceAmplitude(level) {
        const amplitudes = {
            'chaotic': 1,
            'low': 3,
            'medium': 6,
            'high': 10,
            'very_high': 15
        };
        return amplitudes[level] || 6;
    }

    getNoiseLevel(level) {
        const noise = {
            'chaotic': 8,
            'low': 5,
            'medium': 3,
            'high': 2,
            'very_high': 1
        };
        return noise[level] || 3;
    }

    calculateCoherenceScore(level, timeSeconds) {
        const baseScores = {
            'chaotic': 1,
            'low': 3,
            'medium': 5,
            'high': 8,
            'very_high': 9.5
        };
        
        const base = baseScores[level] || 5;
        // Add slight variation over time
        const variation = 0.5 * Math.sin(2 * Math.PI * 0.02 * timeSeconds);
        return Math.max(0, Math.min(10, base + variation));
    }

    calculateGroupCoherence(timeSeconds, numParticipants) {
        // Group coherence builds over time following fibonacci pattern
        const buildupFactor = Math.min(1, timeSeconds / (this.phi * 100));
        const baseCoherence = 5 * buildupFactor;
        const fibonacciModulation = Math.sin(2 * Math.PI * this.coherenceFreq * timeSeconds / this.phi);
        
        return Math.max(0, Math.min(10, baseCoherence + fibonacciModulation));
    }

    getLunarModulation(phase) {
        const modulations = {
            'new': -0.2,      // Lower energy, deeper introspection
            'waxing': 0.1,    // Building energy
            'full': 0.3,      // Peak energy and coherence
            'waning': -0.1    // Releasing, integration
        };
        return modulations[phase] || 0;
    }

    // Export data as CSV
    exportToCSV(data, filename = 'hrv_data.csv') {
        const headers = Object.keys(data[0]).join(',');
        const rows = data.map(row => Object.values(row).join(','));
        return [headers, ...rows].join('\n');
    }

    // Export session metadata
    generateSessionMetadata(dataType, duration, participants = 1) {
        return {
            sessionId: `seed_${Date.now()}`,
            protocolVersion: 'SEED.004.1.618033988',
            dataType: dataType,
            duration: duration,
            participants: participants,
            generatedBy: 'LuxReconstructor_MockDataGenerator',
            timestamp: new Date().toISOString(),
            goldenRatio: this.phi,
            coherenceFrequency: this.coherenceFreq,
            sampleRate: this.sampleRate
        };
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HRVDataGenerator;
}

// Browser global
if (typeof window !== 'undefined') {
    window.HRVDataGenerator = HRVDataGenerator;
}