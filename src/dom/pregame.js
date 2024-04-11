import helper from './helper';
import CombatSetup from './combatSetup';
const player = require('../code/player.js');

const pregame = (() => {
  const loadCard = () => {
    const content = document.getElementById('content');

    content.append(createPregameCard());
  };

  const createPregameCard = () => {
    const section = helper.create('section', { className: 'pregame-card' });

    section.append(createHeader(), createTextInput(), createStartButton());

    return section;
  };

  const createHeader = () => {
    const header = helper.create('h1', {
      className: 'pregame-header',
      textContent: 'BATTLESHIP',
    });
    return header;
  };

  const createTextInput = () => {
    const textInput = helper.create('input', {
      type: 'text',
      className: 'name-input',
      id: 'username',
      placeholder: 'Captain name...',
      minLength: 0, 
      maxLength: 15
    });

    const textBox = helper.create('div', {
        className: 'input-box'
    });

    textBox.appendChild(textInput);

    return textBox;
  };

  const setUsername = () => {
    let userInput = document.getElementById('username');
    player.setPlayerName(userInput.value);
  };

  const createStartButton = () => {
    const startButton = helper.create('button', { 
      className: 'start-button',
      type: 'button',
      id: 'play-now-button',
    });

    const text = helper.create('span', {
        className: 'start-button-text',
        textContent: 'ENTER COMBAT'
    });

    startButton.appendChild(text);
    startButton.addEventListener('click', function() {
      setUsername();
      CombatSetup.loadSetupContent();
    }); 

    return startButton;
  };

  return {
    loadCard
  };
})();

export default pregame;
