function showLoginPrompt() {
    // Show the modal
    const modal = document.getElementById("loginModal");
    modal.style.display = "block";

    // Get the close button
    const closeBtn = document.querySelector(".close");

    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Handle form submission
    const loginForm = document.getElementById("loginForm");
    loginForm.onsubmit = function (event) {
        event.preventDefault(); // Prevent form submission

        const accountNumber = document.getElementById("accountNumber").value;
        const pin = document.getElementById("pin").value;
        const errorMessage = document.getElementById("errorMessage");

        // Check if account number and PIN are correct
        if (accountNumber === "123456" && pin === "1234") {
            alert("Login successful!");
            modal.style.display = "none"; // Close the modal
        } else {
            errorMessage.textContent = "Invalid account number or PIN.";
        }
    }
}
