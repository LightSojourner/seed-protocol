# Quantum Oracle API Specification

**Version:** 1.0.0  
**Base URL:** `/api/v1/oracle`  
**Protocol:** REST with WebSocket for streaming

---

## Authentication

All endpoints require valid SEED protocol session token:

```
Authorization: Bearer <session_token>
```

---

## Endpoints

### 1. Single Draw

**Endpoint:** `POST /oracle/draw`

**Description:** Draw a single quantum-selected archetype for immediate guidance.

**Request Body:**
```json
{
  "intention": "What frequency should guide my healing session today?",
  "coherence_score": 8,
  "seed_protocol": "SEED.002",
  "user_id": "optional_user_id",
  "session_id": "optional_session_id"
}
```

**Response:**
```json
{
  "status": "success",
  "mode": "single",
  "archetype": {
    "id": 7,
    "name": "The Decoherence",
    "symbol": "💫",
    "essence": "Return from quantum to classical, integration of experience",
    "guidance": "The journey completes. Bring the wisdom back to ordinary life.",
    "quantum_principle": "Environmental decoherence, classical emergence",
    "meditation": "Quantum insights settling into daily reality. The mystical becomes practical.",
    "frequency_resonance": "10 Hz (alpha-theta bridge, integration frequency)",
    "sacred_geometry": "Spiral unwinding, wave becoming particle, cloud becoming drop"
  },
  "quantum_value": 0.547382,
  "weighted_value": 0.539201,
  "intention": "What frequency should guide my healing session today?",
  "coherence": 8,
  "timestamp": "2025-10-14T15:30:22.847Z",
  "fibonacci_term": 1
}
```

---

### 2. Triad Pattern

**Endpoint:** `POST /oracle/triad`

**Description:** Draw three archetypes representing past-present-future narrative.

**Request Body:**
```json
{
  "intention": "How do I integrate this healing journey?",
  "coherence_score": 7,
  "seed_protocol": "SEED.003"
}
```

**Response:**
```json
{
  "status": "success",
  "mode": "triad",
  "draws": [
    {
      "position": "past",
      "archetype": {
        "id": 2,
        "name": "The Wave",
        "symbol": "〰️",
        "essence": "Superposition - all possibilities existing simultaneously"
      },
      "quantum_value": 0.127654
    },
    {
      "position": "present",
      "archetype": {
        "id": 6,
        "name": "The Coherence",
        "symbol": "✨",
        "essence": "Phase-aligned harmony across systems"
      },
      "quantum_value": 0.456789
    },
    {
      "position": "future",
      "archetype": {
        "id": 13,
        "name": "The Spiral",
        "symbol": "🌀",
        "essence": "Fibonacci growth through scales"
      },
      "quantum_value": 0.987234
    }
  ],
  "intention": "How do I integrate this healing journey?",
  "coherence": 7,
  "timestamp": "2025-10-14T15:32:15.234Z",
  "fibonacci_term": 3,
  "interpretation": {
    "narrative": "From infinite possibility (Wave) through present harmony (Coherence) toward evolutionary growth (Spiral)",
    "message": "Your journey shows integration of potential into coherent growth"
  }
}
```

---

### 3. Fibonacci Spread

**Endpoint:** `POST /oracle/fibonacci`

**Description:** Draw 5, 8, or 13 archetypes in sacred geometry layout.

**Request Body:**
```json
{
  "count": 5,
  "intention": "What does the group field need to know?",
  "coherence_score": 9,
  "seed_protocol": "SEED.004",
  "layout": "pentagram"
}
```

**Parameters:**
- `count`: 5, 8, or 13 (Fibonacci terms)
- `layout`: "pentagram" (5), "octagon" (8), "flower_of_life" (13)

**Response:**
```json
{
  "status": "success",
  "mode": "fibonacci",
  "count": 5,
  "layout": "pentagram",
  "draws": [
    {
      "position": "center",
      "element": "spirit",
      "archetype": { "id": 9, "name": "The Field", "symbol": "🌊" },
      "quantum_value": 0.672341
    },
    {
      "position": "north",
      "element": "air",
      "archetype": { "id": 1, "name": "The Observer", "symbol": "👁️" },
      "quantum_value": 0.123456
    },
    {
      "position": "east",
      "element": "fire",
      "archetype": { "id": 3, "name": "The Particle", "symbol": "⚫" },
      "quantum_value": 0.234567
    },
    {
      "position": "south",
      "element": "earth",
      "archetype": { "id": 6, "name": "The Coherence", "symbol": "✨" },
      "quantum_value": 0.456789
    },
    {
      "position": "west",
      "element": "water",
      "archetype": { "id": 2, "name": "The Wave", "symbol": "〰️" },
      "quantum_value": 0.789012
    }
  ],
  "intention": "What does the group field need to know?",
  "coherence": 9,
  "timestamp": "2025-10-14T15:35:44.567Z",
  "fibonacci_term": 5
}
```

---

### 4. Start Synchronicity Stream

**Endpoint:** `POST /oracle/stream/start`

**Description:** Begin continuous quantum sampling with threshold-based triggers.

**Request Body:**
```json
{
  "session_id": "session_abc123",
  "thresholds": {
    "coherence": 7,
    "gamma_hz": 40,
    "fibonacci_minutes": [3, 5, 8, 13],
    "rng_deviation_sigma": 1.5
  },
  "biofeedback_integration": true,
  "gcp_integration": false,
  "seed_protocol": "SEED.004"
}
```

**Response:**
```json
{
  "status": "success",
  "stream_id": "stream_xyz789",
  "session_id": "session_abc123",
  "mode": "stream",
  "config": {
    "coherence": 7,
    "gamma_hz": 40,
    "fibonacci_minutes": [3, 5, 8, 13],
    "rng_deviation_sigma": 1.5
  },
  "websocket_url": "wss://api.seed-protocol.org/oracle/stream/stream_xyz789",
  "status_message": "Synchronicity stream active. Listening for threshold events...",
  "fibonacci_term": 89
}
```

---

### 5. WebSocket Stream Events

**WebSocket URL:** `wss://api.seed-protocol.org/oracle/stream/{stream_id}`

**Event Types:**

#### Threshold Triggered Event
```json
{
  "event": "threshold_triggered",
  "trigger": "coherence",
  "value": 8.2,
  "threshold": 7,
  "archetype": {
    "id": 4,
    "name": "The Entanglement",
    "symbol": "∞"
  },
  "quantum_value": 0.312456,
  "timestamp": "2025-10-14T15:40:22.123Z",
  "message": "High coherence detected - synchronicity emerged"
}
```

#### Time-Based Event
```json
{
  "event": "fibonacci_time",
  "elapsed_minutes": 8,
  "archetype": {
    "id": 11,
    "name": "The Uncertainty",
    "symbol": "❓"
  },
  "quantum_value": 0.876543,
  "timestamp": "2025-10-14T15:48:00.000Z"
}
```

#### Synchronicity Detected
```json
{
  "event": "synchronicity",
  "correlation": {
    "type": "biometric_symbol_match",
    "description": "Archetype appeared during peak gamma synchronization",
    "confidence": 0.87
  },
  "archetype": {
    "id": 12,
    "name": "The Measurement",
    "symbol": "🎯"
  },
  "biometric_state": {
    "coherence": 8.5,
    "gamma_hz": 42.3,
    "heart_rate": 60
  },
  "timestamp": "2025-10-14T15:42:15.678Z"
}
```

---

### 6. Stop Stream

**Endpoint:** `POST /oracle/stream/stop`

**Request Body:**
```json
{
  "stream_id": "stream_xyz789"
}
```

**Response:**
```json
{
  "status": "success",
  "stream_id": "stream_xyz789",
  "duration_minutes": 21,
  "total_events": 8,
  "summary": {
    "threshold_triggers": 5,
    "fibonacci_time_events": 3,
    "synchronicities_detected": 2
  },
  "timestamp": "2025-10-14T16:01:00.000Z"
}
```

---

### 7. Get Symbols

**Endpoint:** `GET /oracle/symbols`

**Description:** Retrieve symbol library by category.

**Query Parameters:**
- `category`: "archetypes" | "healing" | "frequencies" | "wisdom"
- `fibonacci_term`: 13 | 21 | 34 | 55

**Example:** `GET /oracle/symbols?category=archetypes&fibonacci_term=13`

**Response:**
```json
{
  "status": "success",
  "category": "archetypes",
  "fibonacci_term": 13,
  "count": 13,
  "symbols": [
    {
      "id": 1,
      "name": "The Observer",
      "symbol": "👁️",
      "essence": "Consciousness collapsing probability into reality",
      "quantum_principle": "Measurement affects the observed system"
    }
    // ... 12 more
  ]
}
```

---

### 8. Session History

**Endpoint:** `GET /oracle/history/{session_id}`

**Description:** Retrieve all oracle draws for a session.

**Response:**
```json
{
  "status": "success",
  "session_id": "session_abc123",
  "draws": [
    {
      "timestamp": "2025-10-14T15:30:22.847Z",
      "mode": "single",
      "archetype": { "id": 7, "name": "The Decoherence" }
    }
    // ... more draws
  ],
  "statistics": {
    "total_draws": 15,
    "most_common": { "id": 6, "name": "The Coherence", "count": 3 },
    "fibonacci_distribution": {
      "1": 8,
      "3": 2,
      "5": 1,
      "13": 1
    }
  }
}
```

---

## Rate Limits

- Single/Triad/Fibonacci draws: 60 per minute
- Stream start: 5 per minute
- Symbol retrieval: 100 per minute
- History: 30 per minute

---

## Error Responses

```json
{
  "status": "error",
  "code": "QRNG_UNAVAILABLE",
  "message": "Quantum random number generator unavailable, fallback used",
  "fallback_source": "crypto"
}
```

**Error Codes:**
- `QRNG_UNAVAILABLE`: Primary QRNG failed, fallback used
- `INVALID_FIBONACCI_TERM`: Count must be 5, 8, or 13
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INVALID_SESSION`: Session not found or expired
- `AUTHENTICATION_FAILED`: Invalid token

---

## Integration Examples

### JavaScript/Node.js
```javascript
const oracle = new QuantumOracle({ apiKey: 'your_api_key' });

// Single draw
const result = await oracle.draw({
  intention: "What do I need to know?",
  coherence_score: 8
});

console.log(result.archetype.name, result.archetype.symbol);
```

### Python
```python
import requests

response = requests.post(
  'https://api.seed-protocol.org/api/v1/oracle/draw',
  headers={'Authorization': f'Bearer {token}'},
  json={
    'intention': 'What do I need to know?',
    'coherence_score': 8
  }
)

archetype = response.json()['archetype']
print(f"{archetype['name']} {archetype['symbol']}")
```

### WebSocket Stream (JavaScript)
```javascript
const ws = new WebSocket('wss://api.seed-protocol.org/oracle/stream/stream_xyz789');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.event === 'threshold_triggered') {
    console.log(`Synchronicity! ${data.archetype.symbol} ${data.archetype.name}`);
    displayArchetype(data.archetype);
  }
};
```

---

## Research Data Collection

For approved research studies, additional endpoints provide:

- Correlation analysis between oracle draws and biometric states
- Statistical distribution analysis vs. true randomness baseline
- Multi-user synchronicity detection
- GCP RNG correlation during oracle events

Contact research@seed-protocol.org for access.

---

**The spiral continues...** 🌀

φ = 1.618033988
