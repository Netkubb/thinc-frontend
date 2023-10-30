export function getLight(){
    if(!localStorage.getItem("light")){
        localStorage.setItem("light", 10000);
    }
    return Number(localStorage.getItem("light"));
}

export function setGlobalLight(light){
    localStorage.setItem("light", light);
}