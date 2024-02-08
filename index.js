function getNextSunday() {
  const today = new Date();
  const daysUntilSunday = 7 - today.getDay();
  let nextSunday = new Date(today);

  if (daysUntilSunday === 1) {
    nextSunday.setDate(today.getDate() + 7);
  } else {
    nextSunday.setDate(today.getDate() + daysUntilSunday);
  }

  nextSunday.setHours(8);
  nextSunday.setMinutes(0);
  nextSunday.setSeconds(0);
  nextSunday.setMilliseconds(0);

  nextSunday.setHours(nextSunday.getHours() - 8);

  return nextSunday;
}

const nextSunday = getNextSunday();

const nextChapterDateElement = document.getElementById("next-chapter-date");
nextChapterDateElement.textContent = `${nextSunday.toDateString()}`;
const countdownElementBreak = document.getElementById("countdown-break");
const countdownElement = document.getElementById("countdown");
const nextChapterDateElementBreak = document.getElementById(
  "next-chapter-date-break"
);
nextSunday.setDate(nextSunday.getDate() + 7);
nextChapterDateElementBreak.textContent = `${nextSunday.toDateString()}`;

const countdown = setInterval(() => {
  const now = new Date();
  let timeRemaining = nextSunday - now;

  if (timeRemaining <= 0) {
    clearInterval(countdown);
    countdownElement.textContent = "Chapter is out! 🎉🎉🎉";
  } else {
    timeRemaining += 8 * 60 * 60 * 1000;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownElementBreak.textContent = `Countdown: ${
      days + 8
    }d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
