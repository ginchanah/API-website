// document picture in picture
// make the character sheet able to pop out of the screen
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentPictureInPicture

async function openCharacterSheet() {
  const characterSheet = document.getElementById("character-sheet");

  // Open pip windo
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: characterSheet.clientWidth,
    height: characterSheet.clientHeight,
  });

  const pipDocument = pipWindow.document;

  // Copy stylesheet
  document.querySelectorAll("link[rel='stylesheet'], style").forEach((styleElement) => {
    pipDocument.head.appendChild(styleElement.cloneNode(true));
  });

  const clone = characterSheet.cloneNode(true);
  pipDocument.body.appendChild(clone);
}

const openCharacterSheetButton = document.querySelector(".open-character-sheet") 
openCharacterSheetButton.addEventListener("click", openCharacterSheet);









// ///////////////////////////////////////
// LOCAL STORAGE
// ///////////////////////////////////////

const characterName = document.getElementById("character-name")
const characterNameSheet = document.getElementById("character-name-sheet")
characterName.addEventListener("blur", saveCharacterName)

function saveCharacterName() {
    const characterNameValue = document.getElementById("character-name").value
    characterNameSheet.textContent = characterNameValue
    localStorage.setItem("characterName", characterNameValue)
}

characterName.value = localStorage.getItem("characterName")
characterNameSheet.textContent = localStorage.getItem("characterName")




const playerName = document.getElementById("player-name")
const playerNameSheet = document.getElementById("player-name-sheet")
playerName.addEventListener("blur", savePlayerName)

function savePlayerName() {
    const playerNameValue = document.getElementById("player-name").value
    playerNameSheet.textContent = playerNameValue
    localStorage.setItem("playerName", playerNameValue)
    console.log(localStorage.getItem("playerName"))
}

playerName.value = localStorage.getItem("playerName")
playerNameSheet.textContent = localStorage.getItem("playerName")


// dit werkt, maar ga liever met objecten werken (?)

