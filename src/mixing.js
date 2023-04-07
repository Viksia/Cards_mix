const deckSizes = {
	deck1: 100, // Укажите количество карт в колоде 1
	deck2: 64, // Укажите количество карт в колоде 2
	deck3: 100, // Укажите количество карт в колоде 3
	// Добавьте другие колоды по аналогии
};

function selectRandomCard() {
	const deckSelect = document.getElementById("deck");
	const selectedDeck = deckSelect.value;
	const deckSize = deckSizes[selectedDeck];

	const randomCardNumber = Math.floor(Math.random() * deckSize) + 1;
	const cardImagePath = `./decks/${selectedDeck}/${randomCardNumber}.png`;

	const cardImage = document.getElementById("cardImage");
	cardImage.src = cardImagePath;
	cardImage.alt = `Карта №${randomCardNumber}`;
}
