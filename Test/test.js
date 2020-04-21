let margin = 0.9;

let widths = [100, 500, 1000];
let heights = [200, 400, 5000];

let packer, boxes;
console.log("--- Testing Area function ---");
for (let i = 0; i < widths.length; i++) {
  if (Area(widths[i], heights[i]) == widths[i] * heights[i]) {
    console.log(`Test ${i + 1}:`);
    console.log(true);
  }
}

console.log("--- Testing regular expression ---");
let beforeRegex = ["2mx2mx2m", "3mx3mx3m", "7mx5mx6m"];
let afterRegex = [];
let correctAnswer = [
  [2, 2, 2],
  [3, 3, 3],
  [7, 5, 6],
];

for (let i = 0; i < beforeRegex.length; i++) {
  if (beforeRegex[i] != undefined) {
    d = beforeRegex[i].split("x");
    for (let index = 0; index < d.length; index++) {
      // d[index] = parseInt(d[index].replace(/[^0-9\.]/g, ""), 10);
      //console.log(d[index].replace(/^[+-]?\d+(\.\d+)?$/g, ""));
      d[index] = parseFloat(d[index].replace(/^[+-]?\d+(\.\d+)?$/g, ""));
      //console.log(d[index]);
    }
    afterRegex.push(d);
  }
}

for (let i = 0; i < afterRegex.length; i++) {
  if (JSON.stringify(afterRegex[i] == JSON.stringify(correctAnswer[i]))) {
    console.log(`Test ${i + 1}:`);
    console.log(true);
  }
}

/*
  Initialise variables to be used for ArrayMaker testing
*/
let functionCheckerArray = [];
functionCheckerArray.push(new Rect(undefined, undefined, 8, 9, 2, 1));
functionCheckerArray.push(new Rect(undefined, undefined, 4, 7, 1, 3));
functionCheckerArray.push(new Rect(undefined, undefined, 3, 8, 3, 55));

let throwError = [];
throwError.push(new Rect(undefined, undefined, 8, 9, -2, 1));
throwError.push(new Rect(undefined, undefined, 4, 7, 1, 3));
throwError.push(new Rect(undefined, undefined, 3, 8, 3, 55));

let rlistWith2x2 = [];
rlistWith2x2.push(new Rect(undefined, undefined, 2, 2, 1, 3));
rlistWith2x2.push(new Rect(undefined, undefined, 2, 2, 2, 1));
rlistWith2x2.push(new Rect(undefined, undefined, 2, 2, 3, 55));

let correctPreppedBigListWith2x2 = [
  [
    [new Rect(undefined, undefined, 2, 2, 1, 3)],
    [new Rect(undefined, undefined, 2, 2, 2, 1)],
    [new Rect(undefined, undefined, 2, 2, 3, 55)],
  ],
  [],
  [],
  [],
];

let correctMax = 3;
let correctFillingUp = [
  [new Rect(undefined, undefined, 2, 2, 1, 3)],
  [new Rect(undefined, undefined, 2, 2, 2, 1)],
  [new Rect(undefined, undefined, 2, 2, 3, 55)],
];
let max = 3;
let correctBigListWithout2x2 = [[], [], []];
let correctBigListWith2x2 = [[], [], [], []];
let correctSmallerList = [[], [], []];
let correctTwoTwoList = [
  new Rect(undefined, undefined, 2, 2, 1, 3),
  new Rect(undefined, undefined, 2, 2, 2, 1),
  new Rect(undefined, undefined, 2, 2, 3, 55),
];
let correctEmptyTwoTwoList = [];

console.log("--- Testing getMax function ---");
function getMax(rlist) {
  let max = 0;
  for (let index = 0; index < rlist.length; index++) {
    const element = rlist[index];
    let n = parseInt(element.tag);
    if (n % 1 != 0 || n < 0) {
      return undefined;
    } else {
      if (n >= max) {
        max = n;
      }
    }
  }
  return max;
}
let getmax = getMax(functionCheckerArray);

if (getmax == correctMax) {
  console.log(true);
}
console.log("Test 2:");
let catchError = getMax(throwError);

if (catchError == undefined) {
  console.log(true);
}

// Test: result[0] is 2D array with max number of empty array, result[1] is 3D array with max + 1 number of empty array, result[1][0] is result[0]
console.log("--- Testing intializeEmptyListWith2x2 function ---");
console.log("Test 1:");
function intializeEmptyListWith2x2(max) {
  let bigList = [];
  let smallerList = [];

  for (let i = 0; i < parseInt(max) + parseInt(1); i++) {
    bigList[i] = [];
  }

  for (let i = 0; i < max; i++) {
    smallerList[i] = [];
  }

  return [bigList, smallerList];
}

let tempOutputFromIntializationWith2x2 = intializeEmptyListWith2x2(max);
if (
  JSON.stringify(tempOutputFromIntializationWith2x2[0]) ==
  JSON.stringify(correctBigListWith2x2)
) {
  console.log(true);
}

if (
  JSON.stringify(tempOutputFromIntializationWith2x2[1]) ==
  JSON.stringify(correctSmallerList)
) {
  console.log(true);
}

// Test: rlist without 2by2 should return empty array
// Test: rlist with 2by2 should return an array with all the 2by2 in it
console.log("--- Testing get2x2 function ---");
console.log("Test 1:");
function get2x2(rlist) {
  let twotwoList = [];
  for (let i = 0; i < rlist.length; i++) {
    if (rlist[i].width == 2 && rlist[i].height == 2) {
      twotwoList.push(rlist[i]);
    }
  }
  return twotwoList;
}

let extractTwoTwoList = get2x2(rlistWith2x2);

if (JSON.stringify(extractTwoTwoList) == JSON.stringify(correctTwoTwoList)) {
  // console.log("extracts the 2x2 objects correctly");
  console.log(true);
}
console.log("Test 2:");
let extractEmptyTwoTwoList = get2x2(functionCheckerArray);

if (
  JSON.stringify(extractEmptyTwoTwoList) ==
  JSON.stringify(correctEmptyTwoTwoList)
) {
  // console.log("extracts no 2x2 objects correctly");
  console.log(true);
}

//test to see if the 2d array contains the same number of empty arrays as the max integer
console.log("--- Testing intializeEmptyListWithout2x2 function ---");
console.log("Test 1:");
function intializeEmptyListWithout2x2(max) {
  let List = [];
  for (let i = 0; i < max; i++) {
    List[i] = [];
  }
  return List;
}

let tempOutputFromIntializationWithout2x2 = intializeEmptyListWithout2x2(max);

if (
  JSON.stringify(tempOutputFromIntializationWithout2x2) ==
  JSON.stringify(correctBigListWithout2x2)
) {
  // console.log(
  //   "the number of empty arrays made for the case without any 2x2, the allocation of tags is correct"
  // );
  console.log(true);
}

// Test: result is 2D array object separated by its tag
console.log("--- Testing separateListByTag function ---");
console.log("Test 1:");
function separateListByTag(after, before) {
  for (let i = 0; i < before.length; i++) {
    after[before[i].tag - 1].push(before[i]);
  }
  return after;
}

let afterFillUpSmallList = separateListByTag(correctSmallerList, rlistWith2x2);
//console.log("afterFillUpSmallList", afterFillUpSmallList)
if (JSON.stringify(afterFillUpSmallList) == JSON.stringify(correctFillingUp)) {
  // console.log("the array was filled up correctly according to tag");
  console.log(true);
}

// Test: biglist[0] should be smallerlist, else should be separated by tag

//SHINJIE

// function fillEmptyList(rlist, bigList, smallerList, twoTwoList) {
//   console.log("twoTwoList",twoTwoList)
//   let copyList = [...rlist];
//   for (let i = 0; i < rlist.length; i++) {
//     for (let j = 0; j < twoTwoList.length; j++)
//       if (JSON.stringify(twoTwoList[j]) == JSON.stringify(copyList[i])) {
//         console.log("I come here")
//         copyList = copyList.filter(function (element) {
//           return element != twoTwoList[j];
//         });
//         //copyList.splice(i, 1);
//       }
//   }
//   console.log("copyList",copyList)
//   bigList[0] = smallerList;

//   for (let i = 0; i < copyList.length; i++) {
//     bigList[copyList[i].tag].push(copyList[i]);
//   }
//   console.log(bigList);
//   return bigList;
// }

// let preppedBigListContaining2x2 = fillEmptyList(rlistWith2x2, correctBigListWith2x2, correctSmallerList, correctTwoTwoList)

// if(JSON.stringify(preppedBigListContaining2x2) == JSON.stringify(correctPreppedBigListWith2x2)){
//   console.log("rlist containing 2x2 was prepped properly into bigList")
// }

//-----------------------------------------------------------------------------------------//

// for (let index = 0; index < widths.length; index++) {
//   let test = [];
//   packer = new BinPack(widths[index], heights[index]);
//   fitW = widths[index] * margin;
//   fitH = heights[index];
//   notFitW = fitW + 1;
//   notFitH = fitH + 1;
//   sureFitW = fitW - 1;
//   sureFitH = fitH - 1;
//   test.push(new Rect(undefined, undefined, sureFitW, sureFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, notFitW, notFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, fitW, fitH, 1, 1));
//   packer.addAll(test);
//   if (
//     packer.positioned[0].width == sureFitW &&
//     packer.positioned[0].height == sureFitH
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// for (let index = 0; index < widths.length; index++) {
//   let test = [];
//   packer = new BinPack(widths[index], heights[index]);
//   fitW = widths[index];
//   fitH = heights[index] * margin;
//   notFitW = fitW + 1;
//   notFitH = fitH + 1;
//   sureFitW = fitW - 1;
//   sureFitH = fitH - 1;
//   test.push(new Rect(undefined, undefined, sureFitW, sureFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, notFitW, notFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, fitW, fitH, 1, 1));
//   packer.addAll(test);
//   if (
//     packer.positioned[0].width == sureFitW &&
//     packer.positioned[0].height == sureFitH
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// for (let index = 0; index < widths.length; index++) {
//   let test = [];
//   packer = new BinPack(widths[index], heights[index]);
//   fitW = widths[index];
//   fitH = heights[index] * margin;
//   notFitW = fitW + 1;
//   notFitH = fitH + 1;
//   sureFitW = fitW - 1;
//   sureFitH = fitH - 1;
//   test.push(new Rect(undefined, undefined, notFitW, notFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, sureFitW, sureFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, fitW, fitH, 1, 1));
//   packer.addAll(test);
//   if (
//     packer.positioned[0].width == sureFitW &&
//     packer.positioned[0].height == sureFitH
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// for (let index = 0; index < widths.length; index++) {
//   let test = [];
//   packer = new BinPack(widths[index], heights[index]);
//   fitW = widths[index];
//   fitH = heights[index] * margin;
//   notFitW = fitW + 1;
//   notFitH = fitH + 1;
//   sureFitW = fitW - 1;
//   sureFitH = fitH - 1;
//   test.push(new Rect(undefined, undefined, fitW, fitH, 1, 1));
//   test.push(new Rect(undefined, undefined, notFitW, notFitH, 1, 1));
//   test.push(new Rect(undefined, undefined, sureFitW, sureFitH, 1, 1));
//   packer.addAll(test);
//   if (
//     packer.positioned[0].width == fitW &&
//     packer.positioned[0].height == fitH
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// packer = new BinPack(0, 0);
// boxes = [new Rect(undefined, undefined, 10, 10, 1, 1)];
// packer.addAll(boxes);
// if (packer.positioned.length == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// packer = new BinPack(20, 20);
// boxes = [new Rect(undefined, undefined, 10, 10, 1, 1)];
// packer.addAll(boxes);
// if (packer.positioned[0].x == 0 && packer.positioned[0].y == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// packer = new BinPack(200, 200);
// boxes = [
//   new Rect(undefined, undefined, 10, 10, 1, 1),
//   new Rect(undefined, undefined, 10, 10, 1, 1),
// ];
// packer.addAll(boxes);
// if (packer.positioned[1].x == 0 && packer.positioned[1].y == 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// packer = new BinPack(200, 15);
// boxes = [
//   new Rect(undefined, undefined, 10, 10, 1, 1),
//   new Rect(undefined, undefined, 10, 10, 1, 1),
// ];
// packer.addAll(boxes);
// if (packer.positioned[1].x == 10 && packer.positioned[1].y == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// //---------BRANCH COVERAGE---------------//

// packer = new BinPack(200, 15);
// boxes = [
//   new Rect(undefined, undefined, 10, 10, 1, 1),
//   new Rect(undefined, undefined, 10, 10, 1, 1),
// ];
// values = packer.addAll(boxes);
// if (values[2] == "else") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// packer = new BinPack(200, 15);
// boxes = [
//   new Rect(undefined, undefined, 10, 10, 1, 1),
//   new Rect(undefined, undefined, 10, 10, 2, 2),
// ];
// values = packer.addAll(boxes);
// if (values[2] == "if") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// packer = new BinPack(200, 15);
// boxes = [];
// packer.addAll(boxes);
// console.log(packer.positioned);
// if (packer.positioned.length == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
