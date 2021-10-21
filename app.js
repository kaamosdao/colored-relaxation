const board = document.querySelector('#board');
const SQUARES_NUMBER = 1722;

const getRandomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8);

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
};

const app = () => {
  for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
    square.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        setColor(square);
      }
    });
    square.addEventListener('mouseleave', () => {
      removeColor(square);
    });
  }
};

app();
