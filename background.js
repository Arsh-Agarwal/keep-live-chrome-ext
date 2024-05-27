chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    tabid = sender.tab.id;
    console.log(tabid);

    if(tabid == undefined) return;
    if(request.msgid == "content_counter"){
        chrome.runtime.sendMessage({ msgid: "background_counter", tabid : tabid, counter : request.counter, name : request.name });
    }else if(request.msgid == "content_close"){
        chrome.runtime.sendMessage({msgid: "background_remove", tabid: tabid});
    }
});

