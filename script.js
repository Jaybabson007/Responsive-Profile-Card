// Update UTC time
function updateUTCTime() {
    const timeElement = document.getElementById("current-time")
    const now = new Date()
    timeElement.textContent = now.toUTCString()
  }

// Update time immediately and then every second
updateUTCTime()
setInterval(updateUTCTime, 1000)
