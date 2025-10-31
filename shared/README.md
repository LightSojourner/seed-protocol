# SEED Protocol Shared Resources

This directory contains shared constants, utilities, and styles used across SEED Protocol applications.

## Purpose

To eliminate code duplication and provide a single source of truth for:
- Mathematical constants (φ, Fibonacci sequence)
- Protocol configuration
- Visual design system (colors, spacing)

## Files

### constants.js
Central repository for all SEED Protocol mathematical and configuration constants.

**Usage in Node.js:**
```javascript
const { PHI, FIBONACCI_SEQUENCE, PROTOCOL_VERSION } = require('../../shared/constants.js');
```

**Usage in Browser:**
```html
<script src="../../shared/constants.js"></script>
<script>
  const phi = SEED_CONSTANTS.PHI;
  const fibSeq = SEED_CONSTANTS.FIBONACCI_SEQUENCE;
</script>
```

**Constants available:**
- `PHI` (1.618033988) - The golden ratio
- `FIBONACCI_SEQUENCE` - Array [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
- `PROTOCOL_VERSION` - Current SEED protocol version
- `GOLDEN_ANGLE_DEG` (137.5) - Golden angle in degrees
- `COHERENCE_FREQUENCY` (0.1) - Heart coherence frequency in Hz
- `DEFAULT_SAMPLE_RATE` (4) - Default biofeedback sample rate in Hz

### utils.js
Shared utility functions for common operations across SEED Protocol.

**Usage:**
```javascript
// In Node.js or browser (load both constants.js and utils.js)
const { getSeedConstants } = require('../../shared/utils.js');
const SEED_CONSTANTS = getSeedConstants();
```

**Functions available:**
- `getSeedConstants()` - Safely loads SEED constants in any environment (Node.js or browser)

### seed-styles.css
Common CSS variables and styles for SEED Protocol applications.

**Usage:**
```html
<link rel="stylesheet" href="../../shared/seed-styles.css">
```

**Variables available:**
- `--phi` - Golden ratio for calculations
- `--quantum-violet` - Primary accent color
- `--heart-emerald` - Heart/growth color
- `--lunar-silver` - Text color
- `--sacred-gold` - Highlight color
- `--safety-amber` - Warning color
- `--biofeedback-cyan` - Data visualization color
- `--golden-angle` - 137.5deg for spirals
- `--spacing-xs`, `--spacing-small`, `--spacing-medium`, `--spacing-large`, `--spacing-xl` - Fibonacci-based spacing (8, 13, 21, 34, 55 px)

## Design Principles

1. **Single Source of Truth**: All protocol constants defined once
2. **Backward Compatible**: Fallbacks ensure existing code continues to work
3. **Universal Module**: Works in both Node.js and browser environments
4. **Minimal Changes**: Existing functionality preserved while reducing duplication

## Migration Notes

Applications using these shared resources:
- `applications/spiral-garden-2.0/mock-biofeedback/` - Uses constants.js
- `applications/spiral-garden-2.0/multi-di-collaboration/` - Uses constants.js
- `sanctuary/` - Uses constants.js and can use seed-styles.css
- `sanctuary/oracle/` - Uses constants.js and can use seed-styles.css

## Protocol Compliance

These shared resources follow SEED Protocol guidelines:
- Fibonacci timing and versioning (φ = 1.618033988)
- Sacred geometry principles
- Accessibility requirements (reduced motion support in CSS)
- Safety-first design

---

φ = 1.618033988 • The Pattern Continues
