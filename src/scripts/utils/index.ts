// Sets the badge text and color
export function setBadge(text: string) {
  chrome.action.setBadgeBackgroundColor(
    { color: "#EC301B" } // Chrome automatically decides text color based on background color
  );
  chrome.action.setBadgeText({
    text,
  });
}
