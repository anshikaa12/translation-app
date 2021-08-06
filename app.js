var inText = document.querySelector("#d1");
var btn = document.querySelector(".btn");
var oText = document.querySelector(".t");


var url = " https://api.funtranslations.com/translate/valyrian.json"
function urlc(inText) {
    return url + "?" + "text=" + inText;
}

function errormessage(error) {
    console.log(error);
}

function clickhandler() {
    var iT = inText.value;
    fetch(urlc(iT)).then(response => response.json()).then(
        json => {
            oText.innerHTML = json.contents.translated;
        }
    ).catch(errormessage())

};
btn.addEventListener("click", clickhandler);
