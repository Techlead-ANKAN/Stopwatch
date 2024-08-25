let ms_ele = document.getElementsByClassName("ms")[0];
let sec_ele = document.getElementsByClassName("sec")[0];
let min_ele = document.getElementsByClassName("min")[0];
let hr_ele = document.getElementsByClassName("hr")[0];

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

ms_ele.innerHTML += ms;
sec_ele.innerHTML += sec
min_ele.innerHTML += min;
hr_ele.innerHTML += hr;



let start_btn = document.getElementsByClassName("start")[0];
let pause_btn = document.getElementsByClassName("pause")[0];
let restart_btn = document.getElementsByClassName("restart")[0];

let intervalId;

start_btn.addEventListener("click", function() {
    intervalId = setInterval(function() {
      ms += 10;
      ms_ele.innerHTML = "Milisecond: " + ms;
  
      if (ms == 990) {
        ms = 0;
        sec += 1;
        sec_ele.innerHTML = "Second: " + sec;
  
        if (sec == 59) {
          sec = 0;
          min += 1;
          min_ele.innerHTML = "Minute: " + min;
  
          if (min == 59) {
            min = 0;
            hr += 1;
            hr_ele.innerHTML = "Hour : " + hr;
          }
        }
      }
    }, 10);
});
  

pause_btn.addEventListener("click", function() {
    clearInterval(intervalId);
});


restart_btn.addEventListener("click", function () {
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;
  ms_ele.innerHTML = "Millisecond: 00" + ms;
  sec_ele.innerHTML = "Second: 0" + sec;
  min_ele.innerHTML = "Minute: 0" + min;
  hr_ele.innerHTML = "Hour: 0" + hr;
  clearInterval(intervalId);
})

let body = document.getElementsByTagName("body")[0];


let lapse_div = document.createElement("div");
lapse_div.classList.add('lapse_div');


body.appendChild(lapse_div);

lapse_div.style.width = "750px";
lapse_div.style.height = "50px";
// lapse_div.style.border = "2px solid black";
lapse_div.style.marginTop = "50px";
// lapse_div.style.backgroundColor = White;


let lapse_btn = document.getElementsByClassName("lapse")[0];
lapse_btn.addEventListener("click", function() {
  
  let p = document.createElement("p");
  let txt = document.createTextNode(hr_ele.innerHTML + " " + min_ele.innerHTML + " " + sec_ele.innerHTML + " " + ms_ele.innerHTML);
  p.style.marginTop = "20px";
  p.appendChild(txt);

  lapse_div.appendChild(p);
})





