const monthLabel = document.getElementById("calendarMonthLabel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const datesElement = document.getElementById("dates");

let currentDate = new Date(); // create a new variable that tells us the current date

// TODO: Make "Previous" and "Next" buttons work 😊

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  
  monthLabel.textContent = currentDate.toLocaleString('en-US', { month: 'long' });
  
  // 1. Delete any old dates ()
  datesElement.innerHTML = "";
  
  // 2. First we get the first day of the month (as in weekday)
  const firstDay = new Date(year, month, 1).getDay();
  
  // 3. Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // 4. Fill in the gap for the first day of the month
  for (let i = 0; i < firstDay; i++) {
    datesElement.innerHTML += '<div class="date"></div>';
  }
  
  // 5. Fill in each cell
  for (let day = 1; day <= daysInMonth; day++) {
    datesElement.innerHTML += `<div class="calendar__date">${day}</div`;
  }
 
}

renderCalendar();

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});


