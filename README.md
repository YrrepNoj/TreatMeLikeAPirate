### Overview
This project serves as a fun Hackathon / learning project to become more familiar with React and web based technologies. The goal of this project was create a tool that can help people find cool landmarks that would otherwise be hard to locate. The original goal of the project was to map the locations of ship wrecks, plane crashes, and UFO sightings and provide a breif description of each event.

This project gets it data using the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)
The specific articles used include:
 * https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_in_international_waters
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_in_the_Pacific_Ocean
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_in_the_Indian_Ocean
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_of_the_United_States
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_of_North_America
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_of_Australia
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_of_South_America
 * https://en.wikipedia.org/wiki/List_of_shipwrecks_of_Asia


### Examples / Demo
The probject can be seen at: https://yrrepnoj.github.io/TreatMeLikeAPirate/

### Getting Started
To run this project, 
 1) clone the reposity
 2) run `npm install` (if you are curious about npm or have not yet installed it, more information can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
 3) run `npm run`  -  This should then open a new browser tab that will load with the project!
 
 
 ### Technologies Used
  * [react-grid-layout](https://github.com/STRML/react-grid-layout) - Draggable and resizable grid layout for our different components
  * [redux](https://redux.js.org/) - Centralized state managment 
  * [redux-saga](https://github.com/redux-saga/redux-saga) - Async middleware for API calls
  * [react-leaflet](https://react-leaflet.js.org/) - open-source library for interactive maps built upon [OpenStreetMap](https://www.openstreetmap.org/#map=4/38.01/-95.84)
  * [vis-timeline](https://visjs.github.io/vis-timeline/docs/timeline/) - Interactive charts to visualize data in time
 
 
 ### Future Posibilities 
  * Clean up the UFO data so we can plot the data points on the map
  * Add a geolocation feature to notify users if they are close to a shipwreck/plane crash/ufo sighting
  * Allow users to add pictures of the landmarks and view pictures other users have added
 
 
 
