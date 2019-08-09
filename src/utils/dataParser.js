import OBSERVATION_TYPES from "../utils/observation_types";
import uuidv4 from "uuid";
export function parseUFOData(rawData) {
  let stringToParse = "";

  Object.values(rawData.query.pages).map(function(wikiJSON) {
    stringToParse = wikiJSON.revisions[0]["*"];
  });

  var data = stringToParse.split("-\n");

  let allObservations = [];

  var i;
  for (i = 1; i < data.length; i++) {
    data[i] = data[i].substr(1);
    let item = data[i];
    const pieces = item.split("\n");

    if (pieces[1]) {
      pieces[1].replace("[", "");
    }
    if (pieces[4]) {
      pieces[4] = pieces[4].substr(1);
    }
    if (pieces[6]) {
      pieces[6] = pieces[6].substr(1);
    }
    let observation = {
      id: uuidv4(),
      name: pieces[1],
      type: OBSERVATION_TYPES.UFO,
      year: pieces[0],
      description: pieces[4],
      coord: { lat: 49.1234, long: 12.001 },
      hynekScale: pieces[6],
    };

    //coords
    allObservations.push(observation);
  }
  return allObservations;
}

export function parseShipwreckData(rawData) {
  let stringToParse = "";
  let allObservations = [];

  rawData.forEach(function(item, index) {
    Object.values(item.query.pages).map(function(wikiJSON) {
      stringToParse = wikiJSON.revisions[0]["*"];
    });

    var data = stringToParse.split("-\n");
    var i;
    var getData = data;
    for (i = 1; i < data.length; i++) {
      data[i] = data[i].substr(1);
      item = data[i];

      const pieces = item.split("\n");

      // name
      pieces[0] = pieces[0].substr(2, pieces[0].length - 4);

      // date
      pieces[1] = pieces[1].substr(1);
      if (pieces[1].length > 4) {
        pieces[1] = pieces[1].substring(pieces[1].length - 4);
      }
      var date = pieces[1];

      // notes
      pieces[2] = pieces[2].split("[[").join("");
      pieces[2] = pieces[2].split("]]").join("");
      pieces[2] = pieces[2].split("{{").join("");
      pieces[2] = pieces[2].split("}}").join("");
      pieces[2] = pieces[2].split("((").join("");
      pieces[2] = pieces[2].split("))").join("");
      pieces[2] = pieces[2].split("|").join("");
      var removeQuote = pieces[2].split("''");
      pieces[2] = removeQuote[0] + removeQuote[2];
      // console.log("going to location")

      //coords
      pieces[3] = pieces[3].substring(1);
      if (pieces[3].length > 0) {
        var splitLocation = pieces[3].split("|");
        if (splitLocation[3] == "N" || splitLocation[3] == "S") {
          var lat = ConvertDMSToDD(
            splitLocation[1],
            splitLocation[2],
            0,
            splitLocation[3],
          );
          var lng = ConvertDMSToDD(
            splitLocation[4],
            splitLocation[5],
            0,
            splitLocation[6],
          );
          var toDecimal = [Number(lat), Number(lng)];
          pieces[3] = toDecimal;
        } else if (splitLocation[4] == "N" || splitLocation[4] == "S") {
          var lat = ConvertDMSToDD(
            splitLocation[1],
            splitLocation[2],
            splitLocation[3],
            splitLocation[4],
          );
          var lng = ConvertDMSToDD(
            splitLocation[5],
            splitLocation[6],
            splitLocation[7],
            splitLocation[8],
          );
          var toDecimal = [Number(lat), Number(lng)];
          pieces[3] = toDecimal;
        } else {
          var alreadyDecimal = [splitLocation[1], splitLocation[2]];
          pieces[3] = alreadyDecimal;
        }
      }
      let observation = {
        id: uuidv4(),
        name: pieces[0],
        type: OBSERVATION_TYPES.SHIPWRECK,
        year: pieces[1],
        description: pieces[2],
        coord: pieces[3],
        hynekScale: 1,
      };

      allObservations.push(observation);
    }
  });

  allObservations = allObservations.filter(
    el =>
      Array.isArray(el.coord) &&
      typeof el.coord[0] === "number" &&
      typeof el.coord[1] === "number",
  );

  return allObservations;
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = degrees * 1 + minutes / 60 + seconds / (60 * 60);
  if (direction == "S" || direction == "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}
