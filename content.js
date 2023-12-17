const blockedDomains = [
  "*.doubleclick.net",
  "*.googlesyndication.com/*",
  "*.google-analytics.com",
  "*://creative.ak.fbcdn.net/*",
  "adnxs.com",
  "*://*.adbrite.com/*",
  "advertising.com",
  "*://*.scorecardresearch.com/*",
  "*://*.exponential.com/*",
  "*://*.zedo.com/*",
  "serving-sys.com",
  "adtechus.com",
  "*://*.quantserve.com/*",
  "pubmatic.com",
  "rubiconproject.com",
  "criteo.com",
  "taboola.com",
  "outbrain.com",
  "adblade.com",
  "chitika.com",
  "revcontent.com",
  "taboola.com",
  "advertising.com",
  "yieldmo.com",
  "sharethrough.com",
  "smartadserver.com",
  "*.partner.googleadservices.com",
  "www.googletagservices.com",
  "*.safeframe.googlesyndication.com/",
  "*.tpc.googlesyndication.com",
  "*.googlesyndication.com",
];

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    if (blockedDomains.includes(url.hostname)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
