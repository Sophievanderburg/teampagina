/* ----------------------  variabelen  -----------------------*/
var lotteLink = document.querySelector("main ul li:first-of-type");
var dustinLink = document.querySelector("main ul li:nth-of-type(2)");
var sophieLink = document.querySelector("main ul li:nth-of-type(3)");
var gwenLink = document.querySelector("main ul li:nth-of-type(4)");
var markLink = document.querySelector("main ul li:nth-of-type(5)");


/* ----------------------  Functies  -----------------------*/
/* -------------  Hover in  -------------*/
function hoverInLotte(){
	lotteLink.classList.add("hover");
}

function hoverInDustin(){
	dustinLink.classList.add("hover");
}

function hoverInSophie(){
	sophieLink.classList.add("hover");
}

function hoverInGwen(){
	gwenLink.classList.add("hover");
}

function hoverInMark(){
	markLink.classList.add("hover");
}



/* ------------  Hover out  ------------*/
function hoverOutLotte(){
	lotteLink.classList.remove("hover");
}

function hoverOutDustin(){
	dustinLink.classList.remove("hover");
}

function hoverOutSophie(){
	sophieLink.classList.remove("hover");
}

function hoverOutGwen(){
	gwenLink.classList.remove("hover");
}

function hoverOutMark(){
	markLink.classList.remove("hover");
}

/* ----------------------  EventListeners  -----------------------*/
lotteLink.addEventListener("mouseenter", hoverInLotte);
lotteLink.addEventListener("mouseleave", hoverOutLotte);

dustinLink.addEventListener("mouseenter", hoverInDustin);
dustinLink.addEventListener("mouseleave", hoverOutDustin);

sophieLink.addEventListener("mouseenter", hoverInSophie);
sophieLink.addEventListener("mouseleave", hoverOutSophie);

gwenLink.addEventListener("mouseenter", hoverInGwen);
gwenLink.addEventListener("mouseleave", hoverOutGwen);

markLink.addEventListener("mouseenter", hoverInMark);
markLink.addEventListener("mouseleave", hoverOutMark);
