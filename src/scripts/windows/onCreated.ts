import { setBadge } from "../utils";

// Display a badge when a browser window is created
chrome.windows.onCreated.addListener(
  function (window) {
    console.log("chrome.windows.onCreated", window);
    setBadge("3");
  },
  { windowTypes: ["normal"] }
);
