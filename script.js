/* ==========================================
   PAGE 3 - RAINBOW HEART
========================================== */

const canvas = document.getElementById("heartCanvas");

if (canvas) {

const ctx = canvas.getContext("2d");

/* Canvas Resize */

function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/* Rainbow Colors */

const colors=[

"#ff0000",
"#ff5e00",
"#ffd500",
"#00ff66",
"#00e5ff",
"#0066ff",
"#8a2be2",
"#ff1493",
"#ffffff"

];

/* Animation */

let angle=0;

const TOTAL=3000;

/* Continue Button */

function showContinueButton(){

const btn=document.getElementById("continueBtn");

if(btn){

btn.classList.add("show");

}

}

/* Star */

function drawStar(x,y,size,color){

ctx.save();

ctx.translate(x,y);

ctx.strokeStyle=color;

ctx.lineWidth=1;

for(let i=0;i<8;i++){

ctx.beginPath();

ctx.moveTo(0,0);

ctx.lineTo(size,0);

ctx.stroke();

ctx.rotate(Math.PI/4);

}

ctx.restore();

}
/* Heart Draw Function */

function draw() {

    if (angle >= TOTAL) {

        showContinueButton();

        return;

    }

    const t = (Math.PI * 2 * angle) / TOTAL;

    const hx = 16 * Math.pow(Math.sin(t), 3);

    const hy =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    const scale = 22;

    const x = canvas.width / 2 + hx * scale;

    const y = canvas.height / 2 - hy * scale;

    const color =
    colors[Math.floor(Math.random() * colors.length)];

    /* Heart Line */

    ctx.beginPath();

    ctx.moveTo(
        canvas.width / 2,
        canvas.height / 2
    );

    ctx.lineTo(x, y);

    ctx.strokeStyle = color;

    ctx.lineWidth = 1;

    ctx.stroke();

    /* Star */

    drawStar(x, y, 6, color);

    angle += 2;

    requestAnimationFrame(draw);

}

/* Start */

draw();

}
/* ==========================================
   COMMON PAGE EFFECTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Fade In */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity .8s ease";

        document.body.style.opacity = "1";

    },100);

});

/* Smooth Page Change */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const link=this.getAttribute("onclick");

if(!link) return;

e.preventDefault();

document.body.style.transition=".5s";

document.body.style.opacity="0";

setTimeout(()=>{

eval(link);

},500);

});

});

/* Small Click Animation */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.95)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});
/* ==========================================
   PAGE 4 - LETTER FLIP
========================================== */

const letter = document.getElementById("letter");
const page4Btn = document.getElementById("page4Btn");

if(letter){

letter.addEventListener("click",()=>{

letter.classList.add("open");

setTimeout(()=>{

if(page4Btn){

page4Btn.classList.add("show");

}

},900);

});

}

/* ==========================================
   PAGE 5 - ROSE PETALS
========================================== */

const petals = document.querySelector(".petals");

if(petals){

const flowers=["🌹","🌺","🌸","❤️"];

for(let i=0;i<30;i++){

const petal=document.createElement("span");

petal.innerHTML=
flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=
(8+Math.random()*8)+"s";

petal.style.animationDelay=
(Math.random()*5)+"s";

petal.style.fontSize=
(18+Math.random()*18)+"px";

petals.appendChild(petal);

}

}

/* ==========================================
   HEART BEAT EFFECT
========================================== */

const heart=document.querySelector(".heart-beat");

if(heart){

setInterval(()=>{

heart.style.transform="scale(1.15)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},250);

},1200);

}
