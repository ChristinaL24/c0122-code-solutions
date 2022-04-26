/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) // constant time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1) // initialization expression happens once and only once
    i < words.length;               // 2 * n = O(n) // simple operations = property access and comparison
    i++                             // 2 * n = O(n) // linear time; assignment and addition operation
  ) {
    const word = words[i];          // 2 * n = O(n)
    if (!seen[word]) {              // 3 * n = O(n) // operations = index access, not, and truth test
      seen[word] = true;            // 2 * n = 0(n) // operations = index accesss, comparisons of #'s & booleans
      unique[unique.length] = word; // 3 * n = O(n) // operations = index access, property access, and assignment
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)
// The big O is the statement with the worst big O notation

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) // constant time
  for (
    let i = 0;                      // 1 * n = O(1)
    i < words.length;               // 2 * n = O(n) // this is n because the condition expression executes after each iteration; if the loop executes n times, the condition must be checked n times
    i++                             // 2 * n = O(n) // linear time; operations = addition and assignment
  ) {
    const word = words[i];          // 2 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 1 * n^2 = O(n^2) // n * n = one time for outer loop and one time for inner loop
      c++                           // 2 * n^2 = O(n^2) // quadratic time
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2) // operations = assignment and index access
      if (comparing === word) {     // 2 * n^2 = O(n^2) // operations = truth test and comparison
        isUnique = false;           // 1 * n^2 = O(n^2) // operation = assignment
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(n) // operation = assignment, index access, and property access
    }
  }
  return unique;                    // 1 * 1 = O(1) // will only run once w/ respect to input size because it's outside the loop
} // Big O Notation for uniqueQuadratic: O(n^2)
