const captureWebsite = require('capture-website');

const BASE_URL = 'https://google.com/maps/place';

// load coordinates as 'lat' and 'lng' parameters
const lat = process.argv[2];
const lng = process.argv[3];

const coordinates = `${lat}+${lng}`;
console.log(`Screenshot for coordinates ${coordinates}`);

// craft url and execute
const URL = `${BASE_URL}/${coordinates}`;

(async () => {
    await captureWebsite.file(URL, `photos/img-${coordinates}.png`);
})();
