let currentFlagIndex;

function normalizeString(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function displayFlag() {
  currentFlagIndex = Math.floor(Math.random() * flags.length);
  const flag = flags[currentFlagIndex];
  const flagImage = document.getElementById('flag-image');
  flagImage.src = flag.url;
  flagImage.alt = flag.names[0];
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

displayFlag(); 