var arrQuotes = [];
var current = 0;

processQuote();

function processQuote(){
    fetch("https://quotes-api.archv.id/api/quotes/v1/latest")
    .then(response => response.json())
    .then (result => {
        arrQuotes = result.content;
        output();
    })
}

function output(){
    document.getElementById("contentQuote").innerHTML = arrQuotes[current].content;
    document.getElementById("authorQuote").innerHTML = arrQuotes[current].author;
}

function previousButton(){
    if(current == 0 ){
        alert("Ini Quote paling awal")
    } else{
        current = current-1;
        output();
        changeBGround();
        colorQuote();
    }
}

function nextButton(){
    if(current == arrQuotes.length-1){
        alert("Quote habis. Ini Quote terakhir")
    } else{
        current = current+1;
    output();
    changeBGround();
    colorQuote();
    }
}

function random(number) {
        return Math.floor(Math.random()*(number+1));
}

//change background image
function changeBGround(){
    var sourceBg = 'url(../images/img'+ random(9)+ '.jpg)';
    document.getElementById("bg").style.backgroundImage = sourceBg;
}

//Change left quote color
function colorQuote(){
    color = ["crimson", "olive", "blue", "grey", "yellow", "pink", "red", "orange", "brown", "green", "purple"]
    var getColor = color[random(10)];
    document.getElementById("lilquote").style.color = getColor;
}