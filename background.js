// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "userClick") {
//         console.log("User clicked on the page.");
//     } else if (request.action === "userKeypress") {
//         console.log(`User pressed the key: ${request.key}`);
//     } else if (request.action === "changeBackgroundColor") {
//         chrome.scripting.executeScript({
//             target: { tabId: sender.tab.id },
//             function: () => {
//                 document.body.style.backgroundColor = 'lightblue';
//             }
//         });
//     }
// });
