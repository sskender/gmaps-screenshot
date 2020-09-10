const captureWebsite = require('capture-website');

const BASE_URL = 'https://google.com/maps/place';

// load coordinates as 'lat+lng' parameter
const coordinates = process.argv[2];
console.log(`Screenshot for coordinates ${coordinates}`);

// craft url and execute
const URL = `${BASE_URL}/${coordinates}`;
(async () => {
    await captureWebsite.file(URL, `photos/img-${coordinates}.png`);
})();
