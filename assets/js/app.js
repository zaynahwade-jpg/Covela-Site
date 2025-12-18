// /assets/js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.hidden = expanded;
    });
  }

  // Scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{threshold:0.1});
  els.forEach(el=>io.observe(el));

});
// schedule.js
document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");

  // Generate December days (1–31)
  for (let day = 1; day <= 31; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day";
    dayCell.id = "day-" + day;
    dayCell.innerHTML = `<span>${day}</span>`;
    calendar.appendChild(dayCell);
  }
});

// Add event to a specific day
function addEvent(day, eventName) {
  const dayCell = document.getElementById("day-" + day);
  const event = document.createElement("div");
  event.className = "event";
  event.textContent = "✅ " + eventName;
  dayCell.appendChild(event);
}
});
