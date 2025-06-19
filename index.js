const arr = [5, 3, 2, 5, 5, 8, 4, 2, 1, 6, 8, 0, 1];
function removeDuplicates(array) {
  return array.filter(
    (ele, index) => array.indexOf(ele) == array.lastIndexOf(ele)
  );
}
function minMax(array) {
  let min = array[0];
  let max = array[0];
  let left = 1;
  while (left < array.length - 1) {
    if (array[left] < min) min = array[left];
    else if (array[left] > max) max = array[left];
    left++;
  }
  // return { min, max };
  // return array.reduce(
  //   (acc, curr) => {
  //     if (curr > acc.max) acc.max = curr;
  //     else if (curr < acc.min) acc.min = curr;
  //     return acc;
  //   },
  //   { min: array[0], max: array[0] }
  // );
  return { min: Math.min(...array), max: Math.max(...array) };
}

const isContainDuplicates = (array) => {
  return array.filter((ele) => array.indexOf(ele) === array.lastIndexOf(ele))
    .length == array.length
    ? false
    : true;
};
const result = isContainDuplicates(arr);
console.log(result);
