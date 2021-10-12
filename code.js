let boxTop = 300;
// let boxBottom = 300;
let boxLeft = 700;
// let boxRight = 700;

let box = document.getElementById("box")
// box.style.left = boxLeft + "px"
// box.style.top = boxTop + "px"

let img = document.createElement("img");
 
img.src = "image.jpg";
img.style.width = "100px"
 
box.appendChild(img);


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName==="ArrowUp"){
      boxTop-=10
      box.style.top = boxTop + "px";
    }
    if (keyName==="ArrowDown"){
      boxTop+=10
      box.style.top = boxTop + "px";
    }
    if (keyName==="ArrowLeft"){
      boxLeft-=10
      box.style.left = boxLeft + "px";
    }
    if (keyName==="ArrowRight"){
      boxLeft+=10
      box.style.left = boxLeft + "px";
    }
  });

  