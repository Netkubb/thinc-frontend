export function setDarkMode(darkmode) {
    localStorage.setItem("darkmode", darkmode);
}

export function getDarkMode() {
    return localStorage.getItem("darkmode");
}

