// Code your solution here
// Returns all drivers that match the passed in name (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Returns drivers if the beginning of their name matches the provided string
function fuzzyMatch(drivers, partial) {
  return drivers.filter(driver => driver.startsWith(partial));
}

// Returns drivers whose `name` property matches the passed in string
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

