window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer

  let deadLine = "2020-08-22T14:20:00";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    if (t < 0) {
      return {
        total: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    let seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / 1000 / 60 / 60);
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  setClock("timer", deadLine);

  //Modal

  function modalWindow(button) {
    let overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

    button.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
      overlay.style.display = '';
      button.classList.add('more-splash');
      document.body.style.overflow = '';
    });
  }

  let descriptionBtns = document.querySelectorAll('.description-btn');

  for (let i = 0; i < descriptionBtns.length; i++) {
    descriptionBtns[i].addEventListener("click", modalWindow(descriptionBtns[i]));
  }


  let more = document.querySelector('.more');

  modalWindow(more);


});