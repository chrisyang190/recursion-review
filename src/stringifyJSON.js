// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // primitive conditions

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj + '';
  //strings
  } else if (typeof obj === 'string'){
    return '\"' + obj + '\"';
  }


  //arrays
  else if (Array.isArray(obj)){
    var results = [];
    obj.forEach(function(s){
      results.push(stringifyJSON(s));
    });

    return '[' + results + ']';
  }


  //objects
  else if (typeof obj === 'object') {
    var result = [];
    for (var key in obj) { 
      if (typeof obj[key] === 'function' || obj[key] === undefined){
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    } // [key: value1, key2: value2]

    return '{' + result.join(',') + '}';
  }
};
