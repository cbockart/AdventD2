/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  //maxLength is found with seperator operator and .maop to itterate through the names array 
  const maxLength = Math.max(...names.map(name => name.length));

  //I think this will make room for a space and a star with 2 on each side
  const frameWidth = maxLength + 2 + 2; 

  // Create the frame
  const topBorder = '*'.repeat(frameWidth);
  const nameLines = names.map(name => `* ${name.padEnd(maxLength)} *`);
  const bottomBorder = '*'.repeat(frameWidth);

  // Combine the borders with name array creates a new line after itterating through returns
  return [topBorder, ...nameLines, bottomBorder].join('\n');
}
