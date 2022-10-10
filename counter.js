const time_el= document.querySelector('.counter .timer');
// const start_btn = document.getElementById('start');
let seconds = 1687497;
let interval;

// start_btn.addEventListener('click', start);  //make the counter start once you press the butotn

interval = setInterval(clock, 1000);

function clock () {

    let hrs = Math.floor(seconds / 3600);  //make the hours change and always round down
    let mins = Math.floor ((seconds - (hrs*3600))/60); //make the hours change and always round down
    let secs = seconds % 60;
    

    if (secs < 10) {
        secs = '0' + secs
    }
    if (mins < 10) {
        mins = '0' + mins
    }
    if (hrs < 10) {
        hrs = '0' + hrs
    }
    time_el.innerText = `${hrs} hours 

    ${mins} minutes 

    ${secs} seconds`;

    seconds++;
}


// function start () {
//     interval = setInterval(timer, 1000);
// }

clock();