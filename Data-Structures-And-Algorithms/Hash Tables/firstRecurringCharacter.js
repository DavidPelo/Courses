//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4];
//It should return 1

function findDuplicate(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
      if(map[arr[i]] !== undefined) {
          return arr[i];
      } else {
          map[arr[i]] = i;
      }
  }
}

const arr1 = [2,1,1,2,3,5,1,2,4];

console.log(findDuplicate(arr1)); //0(n)