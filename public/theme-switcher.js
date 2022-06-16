
var date = new Date();
var current_hour = date.getHours();
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (current_hour >= 18 || current_hour <= 6) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
