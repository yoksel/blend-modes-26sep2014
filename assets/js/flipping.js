console.log("123");

var flipping = function () {
    var doc = document;
    var head = doc.querySelector("head");
    var body = doc.querySelector("body");

    var myCss = doc.createElement("style");
    head.appendChild(myCss);

    var button = doc.createElement("button");

    var leftButton = button.cloneNode(false);
    leftButton.innerHTML = "&larr;";
    var rightButton = button.cloneNode(false);
    rightButton.innerHTML = "&rarr;";

    var buttonsWrapper = doc.createElement("div");
    buttonsWrapper.classList.add("js-buttons-wrapper");
    buttonsWrapper.appendChild(leftButton);
    buttonsWrapper.appendChild(rightButton);

    body.appendChild(buttonsWrapper);

    leftButton.onclick = function(){
        shower.prev(doc.location);
    }
    rightButton.onclick = function(){
        shower.next(doc.location);
    }
};
var isiPad = navigator.userAgent.match(/iPad/i) != null;

if(isiPad){
    flipping();
}