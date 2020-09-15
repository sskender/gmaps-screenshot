# gmaps-screenshot

Save a screenshot from Google Maps of given coordinates without opening browser!

### Why this exists?

I have a large pool of latitude and longitude data sets.
After processing that data only a few (a dozen) coordinates are interesting for further analysis.
Google Maps is a great tool to get a general idea where those locations are.
It is rather complicated to open and search for each location by hand, so I created this tool where I can pass latitude and longitude as arguments and get satellite image from Google Maps.

### How to use

Install dependencies.

```bash
npm install
```

Run script with latitude and longitude as arguments.

```bash
node index.js <lat> <lng>
```

Image will be saved to [photos](photos/) folder.
