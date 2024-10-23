document.addEventListener("DOMContentLoaded", function () {
  // Check localStorage for language preference
  const languagePreference = localStorage.getItem("language");

  // Set the initial visibility based on the preference
  if (languagePreference === "spanish") {
    document.getElementById("englishDiv").style.display = "none";
    document.getElementById("spanishDiv").style.display = "block";
    document.getElementById("dropdownMenuButton").textContent = "Español";
  } else {
    document.getElementById("spanishDiv").style.display = "none";
    document.getElementById("englishDiv").style.display = "block";
    document.getElementById("dropdownMenuButton").textContent = "English";
  }

  // Change language to Spanish
  document
    .getElementById("spanishOption")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Hide English content and show Spanish content
      document.getElementById("englishDiv").style.display = "none";
      document.getElementById("spanishDiv").style.display = "block";

      // Store language preference in localStorage
      localStorage.setItem("language", "spanish");

      // Update the button text
      document.getElementById("dropdownMenuButton").textContent = "Español";
    });

  // Change language back to English
  document
    .getElementById("dropdownMenuButton")
    .addEventListener("click", function () {
      if (this.textContent === "Español") {
        // If currently showing Spanish, show English
        document.getElementById("spanishDiv").style.display = "none";
        document.getElementById("englishDiv").style.display = "block";
        localStorage.setItem("language", "english"); // Update language preference
        this.textContent = "English"; // Update the button text
      }
    });
});
