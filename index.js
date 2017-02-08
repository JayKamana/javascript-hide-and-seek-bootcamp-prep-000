var getFirstSelector = function (selector){

return document.querySelector(selector);
  
}

var nestedTarget = function (){

return document.querySelector("#nested .target");
  
}

var increaseRankBy = function(n){


var list = document.querySelectorAll("ul.ranked-list li");

    for(var i = 0; i<list.length; i++){
        var newValue = parseInt(list[i].innerHTML) + n;
        list[i].innerHTML = newValue; 
      }
}

var deepestChild = function(){
return document.querySelector("div#grand-node div div div div");  
}