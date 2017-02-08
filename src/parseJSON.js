// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var temp = json.split(','); //[1,2, 's', 't']

  // console.log(temp);

  //array condition
  if (temp.includes('[') ) {
    if (temp.includes('[]')) {
      return [];
    }
    var result = [];
   // var temp = json.split(','); //["[1", "3"," 2]"]
    _.map(temp, function(item) {
      if (item.includes('[')) {
        return item.slice(1);
      } else if (item.includes (']')) {
        return item.slice(0, item.length - 1);
      }
    });
  }
  // rid of '[' if index contains it

  //object condition
  var split = json.split(''); // [ "{", 's', 't', 'r', '}']
  var resultSplit = [];

  var checkArray = ['[', ']', '{', '}', ':', ','];

  // var i = 0;
  // var j = 0;
  // while (j < split.length) {
  //   var temp;
  //   if (checkArray.includes(split[i])) {
  //     i++;
  //     resultSplit.push(split[i]);
  //   }
  //   if (checkArray.includes(split[j])) {
  //     j++;
  //     resultSplit.push(split[j]);
  //   }
  //   if (!checkArray.includes(split[i]) && !checkArray.includes(split[j])) {
  //     temp = split.slice(i, j);
  //   }
  //   resultSplit.push(temp);
  // }

  console.log(resultSplit);
  var checkArray = ['[', ']', '{', '}', ':', ','];
  //base case: if no intersection between temp and checkArray
  if ((_.intersection(temp, checkArray)).length === 0) {
    // for objects need to ensure key is ALWAYS string
    if (temp) {

    }
  }



};
