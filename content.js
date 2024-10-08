// Function to toggle dark mode
function toggleDarkMode() {
  // Check if dark mode is already applied by looking for the overlay
  let cover = document.querySelector("div[data-dark-mode='true']");

  if (cover) {
    // Dark mode is on, so remove the overlay to return to normal
    document.body.removeChild(cover);
  } else {
    // Dark mode is off, so create and apply the dark mode overlay
    cover = document.createElement("div");
    let css = ` 
            position: fixed; 
            pointer-events: none; 
            top: 0; 
            left: 0; 
            width: 100vw; 
            height: 100vh; 
            background-color: white; 
            mix-blend-mode: difference; 
            z-index: 1; 
        `;
    cover.setAttribute("style", css);
    cover.setAttribute("data-dark-mode", "true"); // Custom attribute to identify the overlay
    document.body.appendChild(cover);
  }
}

// Execute the toggle function
toggleDarkMode();
