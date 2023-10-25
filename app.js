const body = document.querySelector('body');

let rwyHeading = document.querySelector('#rwy-heading');
let windDirection = document.querySelector('#wind-direction');
let windSpeed = document.querySelector('#wind-speed');

const form = document.querySelector('#rwy-heading-form');
const calcButton = document.querySelector('button');
const xanswer = document.querySelector('.x-answer');
const hanswer = document.querySelector('.h-answer');
const headwindLabel = document.querySelector('.headwind');
const reset = document.querySelector('.reset');

const rwyHeadingBorder = document.querySelector('#rwy-heading');
const windDirectionBorder = document.querySelector('#wind-direction');
const windSpeedBorder = document.querySelector('#wind-speed');

const regexNum = /^[0-9]*$/;

const images = ['https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC85MlwvMTY0MTM1XC9wcm9qZWN0c1wvMTk1NzI0XC9hc3NldHNcLzIzXC81MDY3MzkyXC9hNGY1MWUxOTgzNGM4ZDQ0Mzc5ZTlmYWJlMGE1ZjgyZS0xNjEwNDQyNDg4LmpwZyJ9:frontify:s7Pj6ojb_o5cNzuUVqE7ipnCzMogsQc9jWlGO0pamf4?width=2400',
    'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC85MlwvMTY0MTM1XC9wcm9qZWN0c1wvMTk1NzI0XC9hc3NldHNcL2E2XC81MDY3NDAxXC8zYmVhMTI5ZjdjYWE5YTVkZmI4NDNlYjU5Nzg0MzAwZS0xNjEwNDQyNDg4LmpwZyJ9:frontify:i3hbUFA4-xKs70V_H2cPy5APUdXacov8928O3bf9OeE?width=2400',
    'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC85MlwvMTY0MTM1XC9wcm9qZWN0c1wvMTk1NzI0XC9hc3NldHNcL2ZmXC81MDY3NTIyXC8yMjU0M2M2NThjNWI2MmJlYTgzYTU0MTExMGM0OTlmNi0xNjEwNDQ1MTE0LmpwZyJ9:frontify:FrpxLbKGIVs_nFl7iAehBfguClrnKOW48l9r-EFqaz8?width=2400',
    'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC85MlwvMTY0MTM1XC9wcm9qZWN0c1wvMTk1NzI0XC9hc3NldHNcLzlhXC81MDY3NTMxXC9mMTkxYzUwYmFlOWUyZDVjMzdhMjBiZmYxYzA2ZjY3MS0xNjEwNDQ1MTE0LmpwZyJ9:frontify:ygZYsRS2gtwmIEOlZbt5six7M-dgPbTBw6O0jw40aZU?width=2400','https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/09/hurricane_florence/17682925-1-eng-GB/Hurricane_Florence.jpg','https://eoimages.gsfc.nasa.gov/images/imagerecords/90000/90931/hurricanes_vir_2017251_lrg.jpg','https://www.dlr.de/de/bilder/2014/1/geared-turbofan-pw1000g_13727/@@images/image-2000-5df4043ed7e163328d4206872f24c509.jpeg']

function randomImage(array) {
    imageIndex = Math.floor(Math.random(array) * images.length);
    body.style.backgroundImage = `url("${images[imageIndex]}")`;
}

window.addEventListener('load', () => {
    randomImage(images);
})

function checkRwyHeading(rwyHeading) {

    if (rwyHeading === '' || !rwyHeading.match(regexNum) || rwyHeading > 36 || rwyHeading < 0) {
        rwyHeadingBorder.style.borderBottom = '3px solid #e76f51';
        rwyHeadingBorder.classList.toggle('horizontal-shaking');
        setTimeout(() => {
            rwyHeadingBorder.classList.toggle('horizontal-shaking'); 
        }, 2000);
        rwyHeading = 'error';
         console.log(`Incorrect Runway Heading is ${rwyHeading}`);
        return rwyHeading;
    } else {
        rwyHeadingBorder.style.borderBottom = '3px solid #e9c46a';
        rwyHeading = rwyHeading + '0';
        // console.log(`Runway Heading is ${rwyHeading}`);
        return rwyHeading;
    }
}

function checkWindDirection(windDirection) {
    if (windDirection === '' || !windDirection.match(regexNum) || windDirection > 360 || windDirection < 0 || windDirection.length < 3) {
        windDirectionBorder.style.borderBottom = '3px solid #e76f51';
        windDirectionBorder.classList.toggle('horizontal-shaking');
        setTimeout(() => {
            windDirectionBorder.classList.toggle('horizontal-shaking'); 
        }, 2000);
        windDirection = 'error';
        // console.log(`Incorrect Wind Direction is ${windDirection}`);
        return windDirection;
    } else {
        windDirectionBorder.style.borderBottom = '3px solid #e9c46a';
        // console.log(`Correct Wind Direction is ${windDirection}`);
        return windDirection;
    }
}

function checkWindSpeed(windSpeed) {
    if (windSpeed === '' || !windSpeed.match(regexNum) || windSpeed < 0) {
        windSpeedBorder.style.borderBottom = '3px solid #e76f51';
        windSpeedBorder.classList.add('horizontal-shaking');
        setTimeout(() => {
            windSpeedBorder.classList.toggle('horizontal-shaking'); 
        }, 2000);
        windSpeed = 'error';
        // console.log(`Incorrect Wind Speed is: ${windSpeed}`);
        return windSpeed;
    } else {
        windSpeedBorder.style.borderBottom = '3px solid #e9c46a';
        // console.log(`Wind Speed is: ${windSpeed}`);
        return windSpeed;
    }
}

function getAngle(windDirection, rwyHeading) {
    let angle = (windDirection - rwyHeading) % 360;
      
    if (angle >= 180) {
        angle = angle - 360;
    }
     console.log(`Angle is ${angle}`)
    return angle;
}


function getDifference(windDirection, rwyHeading) {

    windDirection = windDirection.value;
    rwyHeading = rwyHeading.value;

    return getAngle(checkWindDirection(windDirection), checkRwyHeading(rwyHeading));
}

function getComponents(rwyHeading, windDirection, windSpeed) {
    windSpeed = windSpeed.value;

    checkWindSpeed(windSpeed);

    const windAngle = getDifference(windDirection, rwyHeading);

    let xwindComponentRaw = windSpeed * Math.sin(windAngle * (Math.PI / 180));
    const xwindComponent = Math.abs(Math.round(xwindComponentRaw));

    const hwindComponent = windSpeed * Math.cos(windAngle * (Math.PI / 180));

    return [xwindComponent, hwindComponent];
}

calcButton.addEventListener('click', (e) => {
    e.preventDefault();
    [xwindComponent, hwindComponent] = getComponents(rwyHeading, windDirection, windSpeed);

    if (isNaN(xwindComponent)) {
        xanswer.textContent = '-- KTS';
    } else {
        xanswer.textContent = xwindComponent + ' KTS';
    }

    if (isNaN(hwindComponent)) {
        hanswer.textContent = '-- KTS';
    } else if (hwindComponent < 0) {
        hwindComponent = Math.abs(Math.round(hwindComponent));
        hanswer.textContent = hwindComponent + ' KTS';
        hanswer.style.color = '#e76f51';
        headwindLabel.textContent = 'Tailwind';
    } else {
        hwindComponent = Math.abs(Math.round(hwindComponent));
        hanswer.textContent = hwindComponent + ' KTS';
    }
})

reset.addEventListener('click', () => {
    form.reset();
    xanswer.textContent = '-- KTS';
    hanswer.textContent = '-- KTS';
    headwindLabel.textContent = 'Headwind';
    hanswer.style.color = '#2a9d8f';

    rwyHeadingBorder.style.borderBottom = '3px solid #e9c46a';
    windDirectionBorder.style.borderBottom = '3px solid #e9c46a';
    windSpeedBorder.style.borderBottom = '3px solid #e9c46a';
})