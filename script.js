const browserName = navigator.userAgent;
const browserVersion = navigator.appVersion;
const browserInfoElement = document.getElementById("browser-info");
    browserInfoElement.textContent = "You are using " + browserName + " version " + browserVersion;