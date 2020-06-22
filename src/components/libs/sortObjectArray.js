import moment from "moment";
import { path } from "ramda";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const dateSubstr = (str) => str.toLowerCase().substring(0, 3);

// In sample data the dates are formatted: "November 5, 2019 3:41 AM"
// moment 'LLL' format
const areDateStrings = (aKey, bKey) =>
  months.indexOf(dateSubstr(aKey)) != -1 &&
  months.indexOf(dateSubstr(bKey)) != -1;

const areNumbers = (aKey, bKey) =>
  !isNaN(parseFloat(aKey)) && !isNaN(parseFloat(bKey));

const sortFunction = (direction, aKey, bKey) => {
  if (direction === 1) {
    if (aKey < bKey) return -1;
    if (aKey > bKey) return 1;
  } else if (direction === -1) {
    if (aKey < bKey) return 1;
    if (aKey > bKey) return -1;
  }
  return 0;
};

const dateSortFunction = (direction, aKey, bKey) => {
  aKey = moment(aKey, "LLL");
  bKey = moment(bKey, "LLL");
  if (direction === 1) {
    if (aKey.isBefore(bKey)) return -1;
    if (aKey.isAfter(bKey)) return 1;
  } else if (direction === -1) {
    if (aKey.isBefore(bKey)) return 1;
    if (aKey.isAfter(bKey)) return -1;
  }
  return 0;
};

export const sortObjectArray = (sortPath, direction, arry) =>
  arry.sort((a, b) => {
    let aKey = path(sortPath, a),
      bKey = path(sortPath, b);

    if (areNumbers(aKey, bKey)) {
      // Keep numbers from being compared as strings
      aKey = parseFloat(aKey);
      bKey = parseFloat(bKey);
    } else {
      // Handle dates specially
      // Nested to keep from checking isNumber again
      if (areDateStrings(aKey, bKey)) {
        return dateSortFunction(direction, aKey, bKey);
      }
    }

    // Numbers and strings
    return sortFunction(direction, aKey, bKey);
  });
