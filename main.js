// Sélection de l'élément d'affichage de la calculatrice
const screen = document.querySelector(".screen");

// Ajout d'écouteurs d'événements aux chiffres de la calculatrice
document.querySelectorAll(".number").forEach((numberElement) => {
  numberElement.addEventListener("click", () => {
    // Si l'écran affiche "0", le remplace par le chiffre cliqué, sinon ajoute le chiffre cliqué à la suite
    if (screen.innerHTML === "0") {
      screen.innerHTML = numberElement.innerHTML;
    } else {
      screen.innerHTML = `${screen.innerHTML}${numberElement.innerHTML}`;
    }
  });
});

// Ajout d'écouteurs d'événements aux boutons de la calculatrice
addButtonEventListener("#sym_dot", ".");
addButtonEventListener("#sym_plus", "+");
addButtonEventListener("#sym_minus", "-");
addButtonEventListener("#sym_multiply", "*");
addButtonEventListener("#sym_divide", "/");
addButtonEventListener("#sym_C", "C");
addButtonEventListener("#sym_dot", ".");
addButtonEventListener("#sym_egal", "=");

// Fonction pour ajouter un écouteur d'événement à un bouton spécifique
function addButtonEventListener(buttonId, symbol) {
  let button = document.querySelector(buttonId);
  button.addEventListener("click", () => {
    // Exécute une action en fonction du symbole du bouton cliqué
    if (symbol === "C") {
      resetScreen(); // Réinitialise l'écran
    } else if (symbol === "=") {
      calculateResult(); // Calcule le résultat de l'expression affichée à l'écran
    } else {
      addSymbol(symbol); // Ajoute le symbole correspondant à l'écran
    }
  });
}

// Fonction pour ajouter un symbole à l'écran
function addSymbol(symbol) {
  let lastCharacter = screen.innerHTML.slice(-1);
  let lastCharacterIsSymbol = /[-+*/.]/.test(lastCharacter);

  // Vérifie si le dernier caractère est déjà un symbole pour éviter les symboles répétés
  if (lastCharacterIsSymbol && /[-+*/.]/.test(symbol)) {
    return;
  }
  screen.innerHTML += symbol;
}

// Fonction pour réinitialiser l'écran
function resetScreen() {
  screen.innerHTML = "0";
}

// Fonction pour calculer le résultat de l'expression affichée à l'écran
function calculateResult() {
  let screenContent = screen.innerHTML;
  let result;
  try {
    result = eval(screenContent); // Évalue l'expression mathématique affichée à l'écran
    screen.innerHTML = result; // Affiche le résultat à l'écran
  } catch (error) {
    screen.innerHTML = "Error"; // Affiche "Error" en cas d'erreur lors de l'évaluation
  }
}

// Affichage des éléments du DOM dans la console (pour le débogage)
console.log(document);
