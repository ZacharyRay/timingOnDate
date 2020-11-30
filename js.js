(function(){

    const box = document.querySelector('.box');
    const theDay = new Date().getDate();
    const theHours = new Date().getHours();
    const theMinutes = new Date().getMinutes();
    const startDate = 30;
    const startHour = 16;
    const startMinute = 23;
    function addColor() {
       box.classList.add('red');
    }
    function removeColor() {
        box.classList.remove('red');
    }
if(theDay == startDate && theHours == startHour && theMinutes == startMinute) {
    addColor();
} else {
    removeColor();
}
})()