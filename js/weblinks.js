// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)

var linkList = [
    {
        title: "Kottke",
        url: "http://kottke.org",
        author: "brett.suggs"
    },
    {
        title: "National Geographic",
        url: "http://www.nationalgeographic.com",
        author: "jessica"
    },
    {
        title: "American Museum of Natural History",
        url: "http://www.amnh.org",
        author: "aurora.nicole"
    }
];

function hide(){
 	var Btn = document.getElementById("reveal");
 	var selectie = document.getElementById ("lista");
 if (selectie.style.display === "none"){
	selectie.style.display = "block";
     } else {
selectie.style.display = "none";
     }
}

function validateUrl(){

document.getElementById("URL").addEventListener("input", function (e) {
    // matches an xx@yyy.zzz format
    var urlRegex = /http:\/\/https:\/\//;
    var urlAddressValidity = "";
    if (!urlRegex.test(e.target.value)) {
        urlAddressValidity = "Invalid address";
    }
    document.getElementById("URL").textContent = "https://"+urlAddressValidity;
});
}

function transmite(){
	document.getElementById("title").required;
	document.getElementById("URL").required;
	document.getElementById("Author").required;
validateUrl();
var newEntry1 = { title: document.getElementById("title").value , url: document.getElementById("URL").value, author: document.getElementById("Author").value};
    linkList.push(newEntry1);
var content = document.getElementById("content");
	newEntry2 = createLinkElement(newEntry1);
	content.appendChild(newEntry2);
	document.getElementById("lista").reset();
hideDiv();
}

function hideDiv(){
var  showDiv = document.getElementById("lista");
var buttonAdd = document.getElementById("addButton");
if (showDiv.style.display === "none") {
        showDiv.style.display = "block";
    } else {
        showDiv.style.display = "none";
    }

}


function createLinkElement(link) {
    var linktitle = document.createElement("a");
    linktitle.href = link.url;
    linktitle.style.color = "#428bca";
    linktitle.style.textDecoration = "none";
    linktitle.style.marginRight = "5px";
    linktitle.appendChild(document.createTextNode(link.title));

    var linkUrl = document.createElement("span");
    linkUrl.appendChild(document.createTextNode(link.url));

    var titleLine = document.createElement("h4");
    titleLine.style.margin = "0px";
    titleLine.appendChild(linktitle);
    titleLine.appendChild(linkUrl);

    var detailsLine = document.createElement("span");
    detailsLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(titleLine);
    linkDiv.appendChild(detailsLine);

    return linkDiv;
}

var content = document.getElementById("content");
linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    content.appendChild(linkElement);
});





