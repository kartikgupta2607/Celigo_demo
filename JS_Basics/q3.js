// Write a function groupObjectsBy which takes as an input an array of JSON objects and returns a grouped object by a key. Eg
// groupObjectsBy([ 
//   {
//     "channel": "A",
//     "name": "shoe"
//   },
//   {
//     "channel": "A",
//     "name": "electronics"
//   },
//   {
//     "channel": "B",
//     "name": "apparel"
//   },
//   {
//     "channel": "C",
//     "name": "electronics"
//   }
// ], ‘channel’)
// Will return
// {
//   "A":[{"channel":"A","name":"shoe"},{"channel":"A","name":"electronics"}],
//   "B":[{"channel":"B","name":"apparel"}],
//   "C":[{"channel":"C","name":"electronics"}]
  
// }

function groupObjectsBy(arr, key) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i][key]] == undefined) {
            obj[arr[i][key]] = [];
        }
        obj[arr[i][key]].push(arr[i]);
    }
    return obj;
}

console.log(groupObjectsBy([
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
], 'channel'));
