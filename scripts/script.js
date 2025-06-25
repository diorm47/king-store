let totalSeconds = 59631;

const digits = document.querySelectorAll(".timer_num p");

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(interval);
    return;
  }

  totalSeconds--;

  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  const timeStr = hours + minutes + seconds;

  timeStr.split("").forEach((digit, i) => {
    digits[i].textContent = digit;
  });
}

updateTimer();
const interval = setInterval(updateTimer, 1000);
