// Location Explorer - Handles navigation to different locations in the Sanctuary

function exploreLocation(locationId) {
    // Map location IDs to their corresponding pages or routes
    const locationMap = {
        'quantum-laboratory': 'locations/quantum-laboratory.html',
        'heart-field-temple': 'locations/heart-field-temple.html',
        'lunar-observatory': 'locations/lunar-observatory.html',
        'sacred-geometry-matrix': 'locations/sacred-geometry-matrix.html',
        'safety-sanctum': 'locations/safety-sanctum.html',
        'biofeedback-chamber': 'locations/biofeedback-chamber.html',
        'resonance-web': 'locations/resonance-web.html'
    };

    // Get the path for this location
    const locationPath = locationMap[locationId];
    
    if (locationPath) {
        // Navigate to the location page
        window.location.href = locationPath;
    } else {
        // If location doesn't exist, show an alert or console message
        console.warn(`Location "${locationId}" not found in location map.`);
        alert(`Location "${locationId}" is coming soon!`);
    }
}

