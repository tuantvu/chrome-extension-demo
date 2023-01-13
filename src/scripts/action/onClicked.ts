export {};

function showPopup() {
  // Inject IFrame with styles.
  const modal = document.createElement("iframe");
  modal.setAttribute(
    "style",
    `
        height:500px;
        width:390px;
        margin:0px;
        padding:0px;
        border:none;
        position:fixed;
        right:20px;
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

  // Listener to close the IFrame on click outside. The IFrame absorbs
  // touch events, so any events that hit the "document" is outside of its
  // boundaries.
  //
  // IMPROVEME - If the user clicks on the empty space around the IFrame
  // contents, but still within the IFrame boundaries, it will not close,
  // so that may confuse the user. A solution could be to detect clicks
  // within the Vue code and if it doesn't hit a component, send a message
  // to a new background script listener to close the IFrame.
  document.addEventListener(
    "click",
    function (e) {
      const iframe = document.getElementById("thyme-care-demo-extension");
      // console.log("document.addEventListener", iframe, e);
      if (iframe) {
        document.body.removeChild(iframe);
      }
    },
    false
  );
}

chrome.action.onClicked.addListener((tab) => {
  console.log("chrome.action.onClicked", tab);
  const srcUrl = chrome.runtime.getURL("index.html");
  console.log("srcUrl: ", srcUrl);

  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: showPopup,
    });
  }
});
