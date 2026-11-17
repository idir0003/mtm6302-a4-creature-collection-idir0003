// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
// 3. Listen for changes to each preference control and update the appearance.
// 4. Save both selected preferences to Local Storage.
// 5. Check for saved data on load and restore the controls and appearance.
// Add short pseudocode comments before writing each feature.

// Step 1: Select the collection element
const $collection = document.querySelector('#collection');

// Step 2: Generate the creatures using a loop
function displayCreatures() {

  for (const creature of $creatures) {

    // Create a list item for each creature
    const $item = document.createElement('li');
    $item.classList.add('creature');

    // Add the image, name, and description
    $item.innerHTML = `
      <img src="${creature.image}" alt="${creature.alt}">
      <div class="creature-info">
        <h3>${creature.name}</h3>
        <p class="creature-description">${creature.description}</p>
      </div>
    `;

    // Add the creature to the collection
    $collection.appendChild($item);
  }
}

// Display all creatures
displayCreatures();

// Step 3: Select the habitat theme control
const $theme = document.querySelector('#theme');

// Change the habitat when a theme is selected
$theme.addEventListener('change', function () {

  // Get the selected theme
  const selectedTheme = $theme.value;

  // Apply the theme to the body
  document.body.dataset.theme = selectedTheme;

});

// Step 4: Select the collection layout control
const $layout = document.querySelector('#layout');

// Change the layout when a new option is selected
$layout.addEventListener('change', function () {

  // Get the selected layout
  const selectedLayout = $layout.value;

  // Apply the layout to the collection
  $collection.dataset.layout = selectedLayout;

});

// Step 5: Select the status message
const $status = document.querySelector('#status');

// Use a unique Local Storage key for this assignment
const storageKey = 'mtm6302-a4-creature-preferences';

// Save both preferences together
function savePreferences() {

  const preferences = {
    theme: $theme.value,
    layout: $layout.value
  };

  localStorage.setItem(storageKey, JSON.stringify(preferences));

  $status.textContent = 'Your preferences have been saved!';
}

// Restore saved preferences when the page loads
function loadPreferences() {

  const savedData = localStorage.getItem(storageKey);

  if (savedData) {

    const preferences = JSON.parse(savedData);
    // Restore both controls
    $theme.value = preferences.theme;
    $layout.value = preferences.layout;

    // Restore the appearance
    document.body.dataset.theme = preferences.theme;
    $collection.dataset.layout = preferences.layout;

    $status.textContent = 'Your preferences have been restored!';

  } else {

    $status.textContent = 'Welcome! Choose your preferences to get started.';

  }
}

// Save preferences whenever a control changes
$theme.addEventListener('change', savePreferences);
$layout.addEventListener('change', savePreferences);

// Restore preferences on page load
loadPreferences();
