// timer
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

// menu
function toggleMenu() {
  document.querySelector(".mob_menu").classList.toggle("mob_menu_visible");
}

// select
document.querySelectorAll(".custom-select").forEach((select) => {
  const wrapper = select.parentElement;
  const selected = select.querySelector(".selected");
  const options = wrapper.querySelectorAll(".custom-option");

  select.addEventListener("click", () => {
    document.querySelectorAll(".custom-select").forEach((s) => {
      if (s !== select) s.classList.remove("open");
    });
    select.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      select.classList.remove("open");
    });
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select-wrapper")) {
    document
      .querySelectorAll(".custom-select")
      .forEach((s) => s.classList.remove("open"));
  }
});

// popup

const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".contact_form");
const modal_exit = document.querySelector(".modal_exit");
const bookingBtns = document.querySelectorAll(".booking_btn");

bookingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("overlay_active");
    document.body.style.overflow = "hidden";
  });
});

modal_exit.addEventListener("click", () => {
  overlay.classList.remove("overlay_active");
  document.body.style.overflow = "";
});
