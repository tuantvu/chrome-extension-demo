import { setBadge } from "../utils";

chrome.runtime.onInstalled.addListener(function (details) {
  console.log("chrome.runtime.onInstalled", details);
  setBadge("2");
});
