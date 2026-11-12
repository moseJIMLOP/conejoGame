//const rabbit = document.getElementById("rabbit");
//const obstacle = document.getElementById("obstacle");
//const gameOverScreen = document.getElementById("gameOverScreen");
//const scoreDisplay = document.getElementById("score");

//let score = 0;
//let gameFinished = false;

//function jump() {
   // if (!rabbit.classList.contains("jump")) {
     //   rabbit.classList.add("jump");

       // setTimeout(() => {
         //   rabbit.classList.remove("jump");
        //}, 500);
    //}
//}

//document.addEventListener("keydown", function(event) {
  //  if (event.code === "Space") {
    //    jump();
    //}
//});

//const checkCollision = setInterval(() => {

  //  if (gameFinished) return;

    //const rabbitRect = rabbit.getBoundingClientRect();
    //const obstacleRect = obstacle.getBoundingClientRect();

    // Detectar choque
    //if (
    //    rabbitRect.right > obstacleRect.left &&
    //    rabbitRect.left < obstacleRect.right &&
    //    rabbitRect.bottom > obstacleRect.top &&
    //    rabbitRect.top < obstacleRect.bottom
    // ) {
       // gameFinished = true;

        //obstacle.classList.remove("blockMove");
        //gameOverScreen.style.display = "block";
   // }

//}, 10);

// Contar cada vez que la zanahoria completa una vuelta
//obstacle.addEventListener("animationiteration", function() {

   // if (gameFinished) return;

    //score++;

    //scoreDisplay.textContent = `Obstáculos: ${score} / 10`;

    //if (score >= 10) {
    //    gameFinished = true;

    //    obstacle.classList.remove("blockMove");
    //    gameOverScreen.style.display = "block";
    //}
//});

//function resetGame() {
    //gameOverScreen.style.display = "none";

    //score = 0;
   // gameFinished = false;

   // scoreDisplay.textContent = "Obstáculos: 0 / 10";

   // obstacle.classList.remove("blockMove");

    // void obstacle.offsetWidth;

    //obstacle.classList.add("blockMove");
//}




const dogs = document.querySelectorAll(".dog");

console.log("¡JavaScript conectado!");
console.log("Perritos encontrados en HTML:", dogs.length);

const score = document.getElementById("score");

const gameOverScreen = document.getElementById("gameOverScreen");

let foundDogs = 0;

// Detectar cuando encuentran un perrito



dogs.forEach(dog => {

    dog.addEventListener("click", () => {

        if (dog.classList.contains("found")) {
            return;
        }

        // Marcar perrito como encontrado

        dog.classList.add("found");

        foundDogs++;

        // Actualizar contador

        score.textContent =
            `Perritos encontrados: ${foundDogs} / 5`;

        // Desbloquear invitación

        if (foundDogs === 5) {

            setTimeout(() => {

                gameOverScreen.style.display = "flex";

            }, 700);

        }

    });

});
