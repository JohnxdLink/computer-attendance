export const initNavBar = () => {
  const schoolToggle = document.getElementById("schoolToggle");
  const schoolMenu = document.getElementById("schoolMenu");
  const schoolChevron = document.getElementById("schoolChevron");

  const computerToggle = document.getElementById("computerToggle");
  const computerMenu = document.getElementById("computerMenu");
  const computerChevron = document.getElementById("computerChevron");

  if (schoolToggle && schoolMenu && schoolChevron) {
    schoolToggle.addEventListener("click", (event) => {
      event.preventDefault();
      schoolMenu.classList.toggle("d-none");
      schoolMenu.classList.toggle("d-flex");
      schoolChevron.classList.toggle("fa-chevron-down");
      schoolChevron.classList.toggle("fa-chevron-up");
    });
  }

  if (computerToggle && computerMenu && computerChevron) {
    computerToggle.addEventListener("click", (event) => {
      event.preventDefault();
      computerMenu.classList.toggle("d-none");
      computerMenu.classList.toggle("d-flex");
      computerChevron.classList.toggle("fa-chevron-down");
      computerChevron.classList.toggle("fa-chevron-up");
    });
  }
};
