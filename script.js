let clock = 0;

function render() {    
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    document.querySelector("div").querySelector(".hours").textContent = hours
    document.querySelector("div").querySelector(".minute").textContent = mins
    document.querySelector("div").querySelector(".second").textContent = secs
}

const clockStart = () => {
    if(clock !== 0){
        return
    }
    render();
    clock = setInterval(render, 1000)
}

const clockStop = () => {
    clearInterval(clock)
    clock = 0
}