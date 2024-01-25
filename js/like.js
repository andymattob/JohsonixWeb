var color1 = document.getElementsByClassName('fa-thumbs-up')[0];
var color2 = document.getElementsByClassName('fa-thumbs-down')[0];

function like() {
  if(color1.style.color == "blue") {
    color1.style.color = "black";
  } else {
    color1.style.color = "blue";
  }
  color2.style.color = "black";
}

function dislike() {
  if (color2.style.color == "blue") {
    color2.style.color = "black";
  } else {
    color2.style.color = "blue";
  }
  color1.style.color = "black";
}

}