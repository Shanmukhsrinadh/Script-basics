 function showLoginPrompt() {
     let accountNumber = prompt("Enter Account Number (Hint: 123456)");
     if (accountNumber) {
      let pin = prompt("Enter PIN (Hint: 1234)");
      if (accountNumber === "123456" && pin === "1234") {
      alert("Login successful!");
      } else {
     alert("Invalid account number or PIN.");
      }
   }
}
