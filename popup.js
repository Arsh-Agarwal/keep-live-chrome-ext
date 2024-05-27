console.log("I am popup");

function updateCounter(request){
    tabid = request.tabid;
    counter = request.counter;
    const tablist = document.getElementById('tablist');
    tabitem = document.getElementById(tabid);
    present = tabitem != undefined;

    text = request.name;
    text += ': ' + counter;

    if(!present) {
        tabitem = document.createElement('li');
        tabitem.id = tabid;
    }

    tabitem.textContent = text;

    if(!present) tablist.appendChild(tabitem);
}

function removeItem(request){
    tabid = request.tabid;
    const tabitem = document.getElementById(tabid);
    if(tabitem != undefined) tabitem.remove();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.msgid == "background_counter") updateCounter(request);
    else if(request.msgid == "background_remove") removeItem(request);
});