// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];

  var body = document.body;

  var walkDom = function(node){
    // base case
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    // recursive case
    node = node.firstChild
    while (node) {
      //node = node.firstChild;
      walkDom(node);
      node = node.nextSibling;
    }


  };
  walkDom(body);

  return result;
};
