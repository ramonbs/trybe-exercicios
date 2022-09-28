const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

// Containers
const emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "orange";

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "yellow";

// Titles
const emergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");
emergencyTasksH3[0].style.backgroundColor = "purple";
emergencyTasksH3[1].style.backgroundColor = "purple";

const noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");
noEmergencyTasksH3[0].style.backgroundColor = "black";
noEmergencyTasksH3[1].style.backgroundColor = "black";

// Footer
const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "darkgreen";


