/*
(        HTML:         )
<div id="container">
        <div class="btn">
            <button id="btn">Open</button>
        </div>
        <div class="colorsDiv" style="flex-wrap: wrap;" id="colorDiv">
            <span id="1" data-color="red" class="spans1"></span>
            <span id="2" data-color="blueviolet" class="spans2"></span>
            <span id="3" data-color="cornflowerblue" class="spans3"></span>
            <span id="4" data-color="darkslategray" class="spans4"></span>
            <span id="5" style="cursor: pointer;color:#9c486f " data-color="black" class="spans5">Default page color</span>
        </div>
    </div>
------------------------------------------------------------------------------------------------------------------------------------
(           Css           )
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background-color: #202020;
    position: relative;
}
#container {
    background-color: #eee;
    width: 20%;
    height: 100vh;
    position: relative;
    left: -273px;
    transition: 0.7s ease;
    -webkit-transition: 0.7s ease;
    -moz-transition: 0.7s ease;
    -ms-transition: 0.7s ease;
    -o-transition: 0.7s ease;
}
.colorsDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 90%;
    margin-left: 4%;
    border-radius: 20px;
    background-color: #c5c4c5;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
}
.colorsDiv .spans1,.spans2,.spans3,.spans4 {
    background-color: red;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    cursor: pointer;
    margin: 3%;
}
.spans2 {
    background-color: blueviolet;
}
.spans3 {
    background-color:cornflowerblue;
}
.spans4 {
    background-color: darkslategray ;
}
button {
    position: absolute;
    left: 100%;
    top: 50%;
    padding: 10px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    border: none;
    background-color: cadetblue;
    color: #fff;
    cursor: pointer;
}

-----------------------------------------------------------------------------------------------------------------
(           JavaScript            )
// first acess to the elements
let container = document.getElementById("container");
let btn = document.getElementById("btn");
let colorsDiv = document.getElementById("colorsDiv");


// first add even to btn

btn.addEventListener("click", function() {
    if(btn.innerHTML === "Open") {
        btn.addEventListener("click",function() {
           container.style.left = "0";
         btn.innerHTML = "Close"
          })
    } else if(btn.innerHTML === "Close") {
      btn.addEventListener("click",function() {
        container.style.left = "-273px";
        btn.innerHTML = "Open"
      })
    }
    
})



let spans = document.querySelectorAll("span");

// get item to local Storage
if(localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
}

spans.forEach(function(ele) {
    ele.addEventListener("click",function() {
       document.body.style.backgroundColor = this.getAttribute("data-color");
       // set item to localStorage 
    localStorage.setItem("color",this.getAttribute("data-color"))
    })
})


*/


// first acess to the elements
let container = document.getElementById("container");
let btn = document.getElementById("btn");
let colorsDiv = document.getElementById("colorsDiv");

let arr = [];
// first add even to btn

btn.addEventListener("click", function() {
    if(btn.innerHTML === "Open") {
        btn.addEventListener("click",function() {
           container.style.left = "0";
         btn.innerHTML = "Close"
          })
    } else if(btn.innerHTML === "Close") {
      btn.addEventListener("click",function() {
        container.style.left = "-273px";
        btn.innerHTML = "Open"
      })
    }
    
})



let spans = document.querySelectorAll("span");

// get item to local Storage
if(localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
}

spans.forEach(function(ele) {
    ele.addEventListener("click",function() {
       document.body.style.backgroundColor = this.getAttribute("data-color");
       // set item to localStorage 
    localStorage.setItem("color",this.getAttribute("data-color"))
    })
})

