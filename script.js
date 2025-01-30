// Update UTC time
function updateUTCTime() {
    const timeElement = document.getElementById("current-time")
    const now = new Date()
    timeElement.textContent = now.toUTCString()
  }