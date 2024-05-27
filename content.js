const MAX_TIMEOUT = 75;
const UPDATE_INTERVAL = 1000;
const url = location.href;
console.log("content.js running on: " + url);

//////////////////////////////////
//////// Counter Modifiers  //////
//////////////////////////////////

counter = MAX_TIMEOUT;
userName = "";
const updaterId = setInterval(updateCounter, UPDATE_INTERVAL);
function updateCounter(){
    counter--;
    userName = Array.from(document.querySelectorAll('*')).filter(element => element.textContent.includes("Welcome"))[6].childNodes[3].innerText;
    updatePopup();
    console.log("Updated counter: " + counter);
    if(counter == 0){
        resetCounter();
        simInteract();
    }
}

function resetCounter(){
    updatePopup();
    counter = MAX_TIMEOUT;
}

//////////////////////////////////////
//////// Crawlers and Interactors ////
//////////////////////////////////////

function simInteract(){
    try{
        filterText = url.includes('profile') ? "Reports" : "Profile";
        button = Array.from(document.querySelectorAll('*')).filter(element => element.textContent.includes(filterText))[8];
        console.log(button);
        button.click();
    }catch(error){

    }
}

/////////////////////////////////////////
////////// Popup Updater ////////////////
/////////////////////////////////////////

function updatePopup() {
    chrome.runtime.sendMessage({msgid: "content_counter", counter : counter, name: userName }, () => {});
}

function removeFromPopup(){
    chrome.runtime.sendMessage({msgid: "content_close"});
}

window.addEventListener('beforeunload', removeFromPopup);

//////////////////////////////////
//////// Interaction Refresh /////
//////////////////////////////////

document.addEventListener('click', () => {
    // chrome.runtime.sendMessage({ action: "userClick" });
    console.log("click detected");
    resetCounter();
});

document.addEventListener('keypress', (event) => {
    // chrome.runtime.sendMessage({ action: "userKeypress", key: event.key });
    console.log("user typing detected");
    resetCounter();
});