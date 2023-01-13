// export {};

// chrome.action.setPopup({ popup: "index.html" });

// chrome.action.onClicked.addListener((tab) => {
//   // console.log("hI   ");
//   if (tab.id) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ["../src/content.ts"],
//     });
//   }
// });

function getTitle() {
  // console.log("document.title", document.title);
  // return document.title;

  // const modal = document.createElement("dialog");
  // modal.setAttribute(
  //   "style",
  //   `
  //   height:100%;
  //   width:100%;
  //   margin:0px;
  //   padding:0px;
  //   border:none;
  //   position:absolute;
  //   right:0px;
  //   background-color:transparent;
  //   `
  // );
  // modal.setAttribute(
  //   "style",
  //   `
  //     height:450px;
  //     border: none;
  //     top:150px;
  //     border-radius:20px;
  //     background-color:white;
  //     position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
  //     `
  // );
  // modal.innerHTML = `<iframe id="popup-content"; style="height:100%;width:100%"frameBorder="0"></iframe>`;

  // document.body.appendChild(modal);
  // const dialog = document.querySelector("dialog");

  // dialog.showModal();

  const modal = document.createElement("iframe");
  modal.setAttribute(
    "style",
    `
      height:500px;
      width:500px;
      margin:0px;
      padding:0px;
      border:none;
      position:fixed;
      right:5px;
      top:5px;
      z-index:100000;
      display:block;
      !important
      `
  );
  modal.setAttribute("frameborder", "0");
  modal.setAttribute("id", "thyme-care-demo-extension");
  modal.setAttribute("src", chrome.runtime.getURL("index.html"));
  document.body.appendChild(modal);
  // const iframe = document.getElementById("popup-content");
  // console.log("iframe", iframe);
  // iframe.src = chrome.runtime.getURL("index.html");
  // iframe.frameBorder = 0;

  // console.log("iframe", iframe);

  return "returned something";
}

chrome.action.onClicked.addListener((tab) => {
  console.log("chrome.action.onClicked", tab);
  const srcUrl = chrome.runtime.getURL("index.html");
  console.log("srcUrl: ", srcUrl);

  if (tab.id) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: getTitle,
      },
      (injectionResults) => {
        for (const frameResult of injectionResults)
          console.log("Frame Title: " + frameResult.result);
      }
    );
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   console.log("chrome.tabs", tabs);
    //   chrome.tabs.sendMessage(tabs[0].id, { type: "popup-modal" });
    //   console.log("chrome.tabs.sendMessage", tabs[0].id);
    // });
  }
});
