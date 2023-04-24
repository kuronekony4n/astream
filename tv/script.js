const body = document.querySelector(`.background`);

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function getRandomRGB() {
    const colors = [];

    for (let i = 0; i < 3; i++) {
        const n = getRandomNumber(100 + 1);

        colors.push(n);
    }

    return `rgb(${colors.join('%,')}%)`;
}

function applyProperties(element, element2) {
    element.style.backgroundColor = getRandomRGB();
    element.
        style.
        transitionDuration =
        `${getRandomNumber(10) + 5}s`;
    element2.style.filter =
        `
    saturate( ${getRandomNumber(100) + 200}% )
    sepia( 75% ) hue-rotate( 200deg )
    contrast( 150% ) brightness( 65% )

    `;
}

//saturate( ${ getRandomNumber( 300 ) + 350 }% )

function changeRGB() {
    const divs = body.querySelectorAll(`hr`);

    for (let i = 0; i < divs.length; i++) {
        applyProperties(divs[i], body);
    }
    applyProperties(body, body);
}

for (let i = 0; i < 25; i++) {
    const div = document.createElement(`hr`);

    div.className = `rectangle`;
    applyProperties(div, body);
    body.appendChild(div);
}

setInterval(changeRGB, 3000);

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
}

const time = document.querySelector(`.time`);

console.log(formatAMPM(new Date()));

function setTime() {
    let date = new Date();
    time.innerHTML = formatAMPM(date);
}

setInterval(setTime, 1000);