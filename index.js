function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n){
  var list = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < list.length; i++){
     list[i].innerHTML = parseInt(list[i].innerHTML) + 1;
  }
}

function deepestChild(){
  // check if there is a child element...

    var current = document.querySelector("#grand-node");

    while (current.hasChildNodes() == true){
      if(!current.children[0]) {
        return current;
      }
      current = current.children[0];
    }

  return current;
  }
