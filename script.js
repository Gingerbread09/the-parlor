function toggleInfo(type) {
    const location = document.getElementById("location");
    const time = document.getElementById("time");
  
    if (type === "location") {
      location.classList.toggle("hidden");
      time.classList.add("hidden");
    } else if (type === "time") {
      time.classList.toggle("hidden");
      location.classList.add("hidden");
    }
  }
  