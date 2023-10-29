export function ToggleGlobalDarkMode() {
    localStorage.setItem("darkmode", getDarkMode() === true ? "false" : "true");
}

export function getDarkMode() {
    if(localStorage.getItem("darkmode") === null) localStorage.setItem("darkmode", "false");
    return localStorage.getItem("darkmode") === "true" ? true : false;
}

