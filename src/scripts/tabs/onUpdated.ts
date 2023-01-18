import { setBadge } from "../utils";

export {};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(
    "chrome.tabs.onUpdated. tabId: ",
    tabId,
    ", changeInfo: ",
    changeInfo,
    ", tab: ",
    tab
  );

  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);
    console.log("url", url);
    const oncoId = url.searchParams.get("oncoId");
    if (oncoId?.length ?? 0 > 0) {
      /// Take first character and mod it with 3
      const firstChar = oncoId?.slice(0, 1);
      const id = (Number(firstChar) % 3) + 1;

      setBadge(`${id}`);
    }
  }
});
