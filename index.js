function removeDuplicates(array) {
  return array.filter(
    (ele, index) => array.indexOf(ele) == array.lastIndexOf(ele)
  );
}
function removeDuplicates1(array) {
  return array.filter(
    (ele, index) => index == array.lastIndexOf(ele)
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
  return { min:  Math.min(...array), max: Math.max(...array) };
}

const isContainDuplicates = (array) => {
  return array.filter((ele) => array.indexOf(ele) === array.lastIndexOf(ele))
    .length == array.length
    ? false
    : true;
};
const reverse=(arr)=>{
  let left=0,right=arr.length-1;
  while(left<right){
    const temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    right--;
    left++;
  }
  return arr;
}
const intersection =(arr1,arr2)=>{
  const res=[];
  arr1=removeDuplicates1(arr1);
  arr2=removeDuplicates1(arr2);
  let small, big;
if (arr1.length <= arr2.length) {
  small = arr1;
  big = arr2;
} else {
  small = arr2;
  big = arr1;
}
for(let ele of small){
  if(big.includes(ele))res.push(ele);
}
return res;
}
const union=(arr1,arr2)=>{
return [...new Set([...arr1,...arr2])];
}
const rotate=(arr,t)=>{
  for (let i =0;i<t;i++){
const ele=arr.pop();
arr.unshift(ele);
  }
  return arr;
}
const reverseStr=(str)=>{
if(str.length==1) return str;
else return str[str.length-1]+reverseStr(str.substring(0,str.length-1))
}
const arr = [5, 3, 2, 5, 5, 8, 4, 2, 1, 6, 8, 0, 1];
// const result =rotate([1,1,4,5,7,3,3],2)
const result=reverseStr("abc")
console.log(result);
