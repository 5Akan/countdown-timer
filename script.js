const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2024';

function countdown(){
    /* Date method allows you to get and set the year,l
hour,millisecond,second,etc*/
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();//Date object is created using the new keyword

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/(3600* 24 ));
    const hours =  Math.floor(totalseconds/3600 ) % 24; // It not only gets the hours but sets it in a range 24 hours due to %24 
    const mins =  Math.floor(totalseconds/60 ) % 60;
    const seconds =  Math.floor(totalseconds) % 60;

    daysEl.innerText = formateTime(days);
    hoursEl.innerText = formateTime(hours);
    minsEl.innerHTML = formateTime(mins);
    secondsEl.innerHTML = formateTime(seconds);
    /**
     * InnerText returns all Text contained
     *  by an element '0' in this case
     */
    /**
     * InnerHTML returns all Text and tags 
     * contained by an element "0" in this 
     * case as well
     */
  
}

function formateTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
//Initial call
countdown();

setInterval(countdown, 1000);//Displays countdown every 1 second

