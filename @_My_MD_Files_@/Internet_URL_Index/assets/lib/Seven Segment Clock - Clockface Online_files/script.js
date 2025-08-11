let targetDate = '2025-4-9';

document.getElementById('cur_year').append(`${new Date().getFullYear()}.`);
var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// title_click

let timerId;
function startTimer() {
	if(timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function tick() {
      alert('You! An hour has passed. Take a break or exercise for 10 minutes. Clear your mind.');
		timerId = setTimeout(tick, 3600000); 
	}, 3600000);  // 1000 * 60 * 60 = 3600000
}

var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
]

document.addEventListener('DOMContentLoaded', function() {
  var _hours = document.querySelectorAll('.hours');
  var _minutes = document.querySelectorAll('.minutes');
  var _seconds = document.querySelectorAll('.seconds');

  
  setInterval(function() {
    var date = new Date();
    var curHour = date;
    var curDay = date;
    var curDayOfWeek;
    var deadlineDays;
    var deadlineHours;
    var kyivHour= date;
    if(date.getHours() + 13 > 24) {
      curHour = Math.abs(date.getHours() + 13 - 24);
      curDay = date.getDate() + 1;
      curDayOfWeek = date.getDay() + 1;
    } else {
      curHour = Math.abs(date.getHours() + 13);
      curDay = date.getDate();
      curDayOfWeek = date.getDay();
    }

    


    var hours = curHour, minutes = date.getMinutes(), seconds = date.getSeconds();  
    
    // deadline days
    var currentDay = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    var date1 = new Date(currentDay);
    var date2 = new Date(targetDate);
    var diffInMs = date2 - date1;
    deadlineDays = diffInMs / 86400000;   // (1000 * 60 * 60 * 24);
    //
    
    document.getElementById('cur_time').innerText = `Boston City:  ${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}. ${new Date().getHours()} : ${new Date().getMinutes()} ${week[new Date().getDay() -1]}`;
    // document.getElementById('cur_uk_time').innerText = `Kyiv City:  ${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}. ${new Date().getHours()} : ${new Date().getMinutes()} ${week[new Date().getDay() -1]}`;
    document.getElementById('cur_date').innerText = `${new Date().getMonth() + 1}. ${curDay}.`;
    document.getElementById('cur_day').innerText = ` ${week[curDayOfWeek - 1]}`;
    // document.getElementById('deadline_days').innerText = deadlineDays;

    setNumber(_hours[0], Math.floor(hours/10), 1);
    setNumber(_hours[1], hours%10, 1);

    setNumber(_minutes[0], Math.floor(minutes/10), 1);
    setNumber(_minutes[1], minutes%10, 1);

    setNumber(_seconds[0], Math.floor(seconds/10), 1);
    setNumber(_seconds[1], seconds%10, 1);
  }, 1000);
});

var setNumber = function(digit, number, on) {
  var segments = digit.querySelectorAll('.segment');
  var current = parseInt(digit.getAttribute('data-value'));

  // only switch if number has changed or wasn't set
  if (!isNaN(current) && current != number) {
    // unset previous number
    digitSegments[current].forEach(function(digitSegment, index) {
      setTimeout(function() {
        segments[digitSegment-1].classList.remove('on');
      }, index*45)
    });
  }
  
  if (isNaN(current) || current != number) {
    // set new number after
    setTimeout(function() {
      digitSegments[number].forEach(function(digitSegment, index) {
        setTimeout(function() {
          segments[digitSegment-1].classList.add('on');
        }, index*45)
      });
    }, 250);
    digit.setAttribute('data-value', number);
  }
}

