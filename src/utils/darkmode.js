export function setGlobalDarkMode(darkmode) {
    localStorage.setItem("darkmode", darkmode);
}

export function getDarkMode() {
    if(localStorage.getItem("darkmode") === null) {
        localStorage.setItem("darkmode", false);
    }
    return Boolean(localStorage.getItem("darkmode"));
}

