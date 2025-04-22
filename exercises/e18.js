/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  function maxBy(array, cb) {
    let max = -Infinity,
      maxStr = "A",
      target = undefined;
    for (let i of array) {
      if (cb(i) > max || cb(i) > maxStr) {
        max = maxStr = cb(i);
        target = i;
      }
    }
    return target;
  }

  let set = {};

  const dYrs = data.asteroids.map((d) => d.discoveryYear);

  let targetYr = dYrs[0],
    count = 1;

  const yearMode = maxBy(dYrs, (m) => {
    if (!set[m]) {
      set[m] = 1;
    }
    set[m]++;
    if (set[m] > count) {
      count = set[m];
      targetYr = m;
    }
  });

  return targetYr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
