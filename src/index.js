/**
 * 
 * @param {array} arrayElements - The original array of numbers
 * @param {number} numberToGroupBy - The number that the array should be grouped by
 * @returns {array} A new array of grouped elements
 */
const groupArrayElements = (arrayElements, numberToGroupBy) => {
  let groupedArrayElements = [];
  const arrayElementsLength = arrayElements.length;
  const groupSize = Math.ceil(arrayElementsLength / numberToGroupBy);

  for (let i = 0; i < numberToGroupBy; i += 1) {
    const start = i * groupSize;
    const end = (i + 1) * groupSize;
    const group = arrayElements.slice(start, end);

    groupedArrayElements.push(group);
  }

  return groupedArrayElements;
}

module.exports = groupArrayElements;