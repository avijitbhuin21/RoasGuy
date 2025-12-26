// Theme toggle functionality
const toggleSwitch = document.querySelector("#theme-toggle");
const body = document.body;

// Function to set theme
function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  } else {
    body.classList.remove("dark-mode");
    toggleSwitch.checked = false;
  }
}

// Check saved preference or default to dark mode
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  setTheme(false);
} else {
  // Default to dark mode
  setTheme(true);
  localStorage.setItem("theme", "dark");
}

// Listen for toggle changes
toggleSwitch.addEventListener("change", function (e) {
  if (e.target.checked) {
    setTheme(true);
    localStorage.setItem("theme", "dark");
  } else {
    setTheme(false);
    localStorage.setItem("theme", "light");
  }
});
