/**
 * 
 * @param {array} arrayElements - The original array of numbers
 * @param {number} groupedInto - The number that the array should be grouped by
 * @returns {array} A new array of grouped elements
 */
const groupArrayElements = (arrayElements, groupedInto) => {
  let groupedArrayElements = [];
  const arrayElementsLength = arrayElements.length;
  const groupSize = Math.ceil(arrayElementsLength / groupedInto);

  for (let i = 0; i < groupedInto; i += 1) {
    const start = i * groupSize;
    const end = (i + 1) * groupSize;
    const group = arrayElements.slice(start, end);

    groupedArrayElements.push(group);
  }

  return groupedArrayElements;
}

module.exports = groupArrayElements;