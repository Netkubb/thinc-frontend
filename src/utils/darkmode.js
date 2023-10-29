export function setGlobalDarkMode(darkmode) {
    localStorage.setItem("darkmode", darkmode);
}

export function getDarkMode() {
    return localStorage.getItem("darkmode") || false;
}

