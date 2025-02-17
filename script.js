function showTimeInputs() {
    let routine = document.getElementById("routine").value;
    let timeInputs = document.querySelectorAll(".time-field");

    // Hide all time fields first
    timeInputs.forEach((input) => {
        input.style.display = "none";
        input.removeAttribute("required");
    });

    // Show the required number of time fields
    for (let i = 0; i < routine; i++) {
        timeInputs[i].style.display = "block";
        timeInputs[i].setAttribute("required", "true");
    }
}

function submitData() {
    let routine = document.getElementById("routine").value;
    if (!routine) {
        alert("Please select how many times you take medicine per day.");
        return;
    }

    let time1 = document.getElementById("time1").value || "00:00";
    let time2 = document.getElementById("time2").value || "00:00";
    let time3 = document.getElementById("time3").value || "00:00";

    alert("Your data has been saved successfully!");

    // Send data to ESP32
    let esp32_url = `http://192.168.141.33/save?routine=${routine}&time1=${time1}&time2=${time2}&time3=${time3}`;
    fetch(esp32_url)
        .then(response => console.log("Data sent to ESP32"))
        .catch(error => console.error("Error:", error));
}
