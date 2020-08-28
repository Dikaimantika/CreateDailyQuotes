var arrQuotes = [];
var current = 3;

processQuote();

function processQuote(){
    fetch("https://quotes-api.archv.id/api/quotes/v1/latest")
    .then(response => response.json())
    .then (result => {
        
        var arrQuotes = result.content;
        document.getElementById("contentQuote").innerHTML = arrQuotes[current].content;
        document.getElementById("authorQuote").innerHTML = arrQuotes[current].author;
    })
}

function previousButton(){
    if(current == 0 ){
        alert("Ini Quote paling awal")
    } else{
        current = current-1;
        processQuote();
        changeBGround();
    }
}

function nextButton(){
    if(current == arrQuotes.length-1){
        alert("Quote habis")
    } else{
        current = current+1;
    processQuote();
    changeBGround();
    }
}

 function random(number) {
          return Math.floor(Math.random()*(number+1));
        }

function changeBGround(){
    Math.floor(Math.random() * 7)
    var sourceBg = 'url(../images/img'+ random(7)+ '.jpg)';
    document.body.style.background = sourceBg;
}