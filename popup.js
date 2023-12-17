const adBlockerEnabled = document.getElementById("adBlockerEnabled");

adBlockerEnabled.addEventListener("click", () => {
  chrome.storage.sync.set({ adBlockerEnabled: adBlockerEnabled.checked });
});

chrome.storage.sync.get(["adBlockerEnabled"], (result) => {
  adBlockerEnabled.checked = result.adBlockerEnabled || false;
});
