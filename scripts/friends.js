/*function checkPassword() {
  const pass = document.getElementById("password").value;

  const login = document.getElementById("login");
  const letter = document.getElementById("letter");
  const message = document.getElementById("message");
}
function checkPassword() {

    const pass = document.getElementById("password").value;

    const login = document.getElementById("login");
    const virus = document.getElementById("virus");
    const loadingText = document.getElementById("loading-text");

    const letter = document.getElementById("letter");
    const message = document.getElementById("message");

    if (pass === "tamaldeverde") {

        login.style.display = "none";

        virus.style.display = "block";

        loadingText.textContent = "virus detected...";
        setTimeout(() => { loadingText.textContent = "Deleting photos..."; }, 1500); 
        
        setTimeout(() => { loadingText.textContent = "Stealing personal data..."; }, 2500); 
        
        setTimeout(() => { loadingText.textContent = "Activating camera......"; }, 3500);


        setTimeout(() => {

            virus.style.display = "none";

            letter.style.display = "block";

            setTimeout(() => {
                letter.classList.add("show");
            }, 50);

            message.textContent = "No virus detected... only me 🥱";

            confetti({
                particleCount: 150,
                spread: 90
            });

        }, 4000);

    } 
    
    else {
        alert("❌ incorrect password");
    }
}*/

