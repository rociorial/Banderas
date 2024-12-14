let currentFlagIndex;
let correctAnswers = 0;  // Contador de respuestas correctas
let usedFlags = [];  // Array para seguir las banderas que ya han sido mostradas
let gameMode = "limited";  // Modo de juego: "free" o "limited"
const totalFlags = flags.length;  // Total de banderas disponibles

function normalizeString(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function displayFlag() {
  // Determinar si estamos en el modo libre o limitado
  if (gameMode === "free") {
    currentFlagIndex = Math.floor(Math.random() * flags.length);
  } else if (gameMode === "limited") {
    // Asegurarse de no repetir banderas en el modo limitado
    if (usedFlags.length === totalFlags) {
      alert(`Juego terminado. Respuestas correctas: ${correctAnswers}`);
      return;
    }

    // Elegir una bandera que no haya sido usada
    do {
      currentFlagIndex = Math.floor(Math.random() * flags.length);
    } while (usedFlags.includes(currentFlagIndex));

    usedFlags.push(currentFlagIndex);
  }

  const flag = flags[currentFlagIndex];
  const flagImage = document.getElementById('flag-image');
  flagImage.src = flag.url;
  flagImage.alt = flag.names[0];
  
  // Mostrar el contenedor de la bandera
  document.getElementById('flag-container').style.display = "block";
  document.getElementById('answer-input').value = '';
}

function checkEnter(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
}

function checkAnswer() {
  const userInput = normalizeString(document.getElementById('answer-input').value);
  const possibleNames = flags[currentFlagIndex].names.map(normalizeString);

  if (possibleNames.includes(userInput)) {
    alert('¡Respuesta correcta!');
    if (gameMode === "limited") {
      correctAnswers++;
      document.getElementById('correct-answers').textContent = `Respuestas correctas: ${correctAnswers}`;
    }
    displayFlag();
  } else {
    alert('Respuesta incorrecta. Inténtalo de nuevo.');
  }
}

function skipFlag() {
  const correctAnswer = flags[currentFlagIndex].names[0];
  alert(`La respuesta correcta es: ${correctAnswer}`);
  displayFlag();
}

// Función para cambiar el modo de juego
function setGameMode(mode) {
  gameMode = mode;
  correctAnswers = 0;  // Reiniciar el contador de respuestas correctas
  usedFlags = [];
  
  // Actualizar el modo de juego y las diferencias
  document.getElementById('current-mode').textContent = mode === "free" ? "Libre" : "Limitado";
  document.getElementById('correct-answers').textContent = `Respuestas correctas: ${correctAnswers}`;

  // Ocultar el contenedor de la bandera antes de mostrar una nueva
  document.getElementById('flag-container').style.display = "none";
  
  // Iniciar el juego en el modo seleccionado
  displayFlag();
}

// Añadir evento 'keydown' al input para detectar 'Enter'
document.getElementById('answer-input').addEventListener('keydown', checkEnter);

// Inicializar el juego en el modo limitado por defecto
displayFlag();
