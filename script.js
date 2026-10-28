function updateGraphics() {
   
    /* Day 1 */

    var selectedIcon = document.getElementById("day-one-icon").value;
    document.getElementById("img-one").querySelector("img").src = "icons/" + selectedIcon;


    var selectedDate = document.getElementById("day-one-day").value;
    document.getElementById("date-one").querySelector("h2").innerText = selectedDate;


    document.getElementById("cond-one").innerText = document.getElementById("day-one-text").value;
    document.getElementById("high-one").innerText = document.getElementById("day-one-high").value;
    document.getElementById("low-one").innerText = document.getElementById("day-one-low").value;

    var selectedIcon = document.getElementById("day-one-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-one").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 2 */

    var selectedIcon = document.getElementById("day-two-icon").value;
    document.getElementById("img-two").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-two-day").value;
    document.getElementById("date-two").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-two").innerText = document.getElementById("day-two-text").value;
    document.getElementById("high-two").innerText = document.getElementById("day-two-high").value;
    document.getElementById("low-two").innerText = document.getElementById("day-two-low").value;

    var selectedIcon = document.getElementById("day-two-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-two").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 3 */

    var selectedIcon = document.getElementById("day-three-icon").value;
    document.getElementById("img-three").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-three-day").value;
    document.getElementById("date-three").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-three").innerText = document.getElementById("day-three-text").value;
    document.getElementById("high-three").innerText = document.getElementById("day-three-high").value;
    document.getElementById("low-three").innerText = document.getElementById("day-three-low").value;

    var selectedIcon = document.getElementById("day-three-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-three").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 4 */

    var selectedIcon = document.getElementById("day-four-icon").value;
    document.getElementById("img-four").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-four-day").value;
    document.getElementById("date-four").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-four").innerText = document.getElementById("day-four-text").value;
    document.getElementById("high-four").innerText = document.getElementById("day-four-high").value;
    document.getElementById("low-four").innerText = document.getElementById("day-four-low").value;

    var selectedIcon = document.getElementById("day-four-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-four").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 5 */

    var selectedIcon = document.getElementById("day-five-icon").value;
    document.getElementById("img-five").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-five-day").value;
    document.getElementById("date-five").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-five").innerText = document.getElementById("day-five-text").value;
    document.getElementById("high-five").innerText = document.getElementById("day-five-high").value;
    document.getElementById("low-five").innerText = document.getElementById("day-five-low").value;

    var selectedIcon = document.getElementById("day-five-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-five").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 6 */

    var selectedIcon = document.getElementById("day-six-icon").value;
    document.getElementById("img-six").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-six-day").value;
    document.getElementById("date-six").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-six").innerText = document.getElementById("day-six-text").value;
    document.getElementById("high-six").innerText = document.getElementById("day-six-high").value;
    document.getElementById("low-six").innerText = document.getElementById("day-six-low").value;

    var selectedIcon = document.getElementById("day-six-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-six").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Day 7 */

    var selectedIcon = document.getElementById("day-seven-icon").value;
    document.getElementById("img-seven").querySelector("img").src = "icons/" + selectedIcon;

    var selectedDate = document.getElementById("day-seven-day").value;
    document.getElementById("date-seven").querySelector("h2").innerText = selectedDate;

    document.getElementById("cond-seven").innerText = document.getElementById("day-seven-text").value;
    document.getElementById("high-seven").innerText = document.getElementById("day-seven-high").value;

    var selectedIcon = document.getElementById("day-seven-icon").value;

    if (selectedIcon !== "custom" && selectedIcon !== "") {
        document.getElementById("img-seven").querySelector("img").src = "icons/" + selectedIcon;
    }

    /* Normal high & low */

    document.getElementById("norm-high").querySelector("strong").innerText = document.getElementById("norm-high-input").value;
    document.getElementById("norm-low").querySelector("strong").innerText = document.getElementById("norm-low-input").value;
}

function downloadGraphic() {
    var targetGraphic = document.querySelector(".graphicDisplay");

    // Wait until all custom fonts are completely ready in the browser
    document.fonts.ready.then(function() {
        html2canvas(targetGraphic, {
            scale: 2,
            useCORS: true,
            logging: false // Keeps your console clean
        }).then(function(canvas) {
            var pngImage = canvas.toDataURL("image/png");
            var downloadLink = document.createElement("a");
            downloadLink.download = "OreoWeather_Forecast.png";
            downloadLink.href = pngImage;
            downloadLink.click();
        }, 2000);
    });
}

// Put this function in your JavaScript file
function checkCustomIcon(dayNum) {
    var dropdown = document.getElementById("day-" + dayNum + "-icon");
    var uploadWrapper = document.getElementById("upload-wrapper-" + dayNum);

    // If they picked "Upload Custom Image...", show the file picker
    if (dropdown.value === "custom") {
        uploadWrapper.style.display = "block";
    } else {
        // Otherwise, hide it
        uploadWrapper.style.display = "none";
    }
}

function handleCustomUpload(dayNum, event) {
    console.log("Upload triggered for day: " + dayNum); // <--- Add this line

    var file = event.target.files[0];
    if (file) {
        console.log("File selected:", file.name); // <--- Add this line
        
        var localImageUrl = URL.createObjectURL(file);
        var imgTag = document.getElementById("img-" + dayNum).querySelector("img");
        imgTag.src = localImageUrl;
    }
}

// 1. Handle Secondary Icon Uploads
function handleSecondaryUpload(day, event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        
        // Select main and secondary icons for that day
        const mainIcon = document.getElementById(`day-${day}-main`) || document.querySelector(`.day-${day} #img`);
        const secIcon = document.getElementById(`day-${day}-sec`);

        if (secIcon) {
            secIcon.src = imageUrl;
            secIcon.style.display = 'block'; // Show secondary icon
        }
        
        // Push the main icon up visually
        if (mainIcon) {
            mainIcon.classList.add('shifted'); 
        }
    };
    reader.readAsDataURL(file);
}
function handleSecondaryUpload(day, event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        
        const mainIcon = document.getElementById(`day-${day}-main`);
        const secIcon = document.getElementById(`day-${day}-sec`);
        const container = document.getElementById(`img-${day}`);

        if (secIcon) {
            secIcon.src = imageUrl;
            secIcon.style.display = 'block'; // Reveal secondary icon
        }
        
        // Tells the CSS to expand and use the full vertical space for both large icons
        if (container) {
            container.classList.add('has-secondary');
        }
    };
    reader.readAsDataURL(file);
}

// 2. Global Theme Generator (Matches HTML: updateGlobalColor)
function updateGlobalColor(event) {
    const hex = event.target.value;
    
    // Generate harmonic shades based on the picked color
    const baseColor = hex;
    const lightTint = adjustColorBrightness(hex, 40);   
    const midTint = adjustColorBrightness(hex, 15);     
    const darkShade = adjustColorBrightness(hex, -30);  

    // Update Top bar gradient line
    const topBar = document.getElementById('top');
    if (topBar) {
        topBar.style.background = `linear-gradient(90deg, ${lightTint}, ${baseColor}, ${midTint}, ${darkShade})`;
    }

    // Update all 7 Day cards default gradients
    const days = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    days.forEach(day => {
        const card = document.querySelector(`.day-${day}`);
        if (card) {
            card.style.background = `linear-gradient(to bottom, ${baseColor} 0% 12.61%, #fff 12.61% 59.50%, ${baseColor} 59.50% 100%)`;
        }
    });

    // Update Bottom Left banner gradient
    const bottomLeft = document.querySelector('.bottom-left');
    if (bottomLeft) {
        bottomLeft.style.background = `linear-gradient(90deg, ${lightTint}, ${darkShade})`;
    }

    // Update Bottom Right website text gradient
    const brHeader = document.querySelector('.bottom-right h1');
    if (brHeader) {
        brHeader.style.backgroundImage = `linear-gradient(to right, ${lightTint}, ${baseColor}, ${darkShade})`;
        brHeader.style.webkitBackgroundClip = 'text';
        brHeader.style.webkitTextFillColor = 'transparent';
    }
}

// 3. Customize a single day card independently (Matches HTML: updateCardColor)
function updateCardColor(day, event) {
    const hex = event.target.value;
    const card = document.querySelector(`.day-${day}`);
    if (card) {
        card.style.background = `linear-gradient(to bottom, ${hex} 0% 12.61%, #fff 12.61% 59.50%, ${hex} 59.50% 100%)`;
    }
}

// Helper utility to lighten or darken hex colors programmatically
function adjustColorBrightness(hex, amount) {
    let usePound = false;
    if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
    }
    let num = parseInt(hex, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    
    return (usePound ? "#" : "") + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function to update the text fields (Alerts & Website info)
function updateSettings() {
    // 1. Update Active Alerts
    const alertTitleInput = document.getElementById('alert-title');
    const alertTitleElem = document.querySelector('.bottom-left h1');
    if (alertTitleInput && alertTitleInput.value.trim() !== '') {
        alertTitleElem.textContent = alertTitleInput.value;
    }

    const alertSubInput = document.getElementById('alert-subtitle');
    const alertSubElem = document.querySelector('.bottom-left h2');
    if (alertSubInput && alertSubInput.value.trim() !== '') {
        alertSubElem.textContent = alertSubInput.value;
    }

    // 2. Update Bottom Right / Website Info
    const brTitleInput = document.getElementById('bottomright-title');
    const brTitleElem = document.querySelector('.bottom-right h3');
    if (brTitleInput && brTitleInput.value.trim() !== '') {
        brTitleElem.textContent = brTitleInput.value;
    }

    const webUrlInput = document.getElementById('web-url');
    const webUrlElem = document.querySelector('.bottom-right h1');
    if (webUrlInput && webUrlInput.value.trim() !== '') {
        webUrlElem.textContent = webUrlInput.value;
    }
}