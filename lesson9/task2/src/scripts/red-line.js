import { arrayOfDates } from './navigation';

const redLinePlace = document.querySelectorAll('.day');

export function redLine() {
  for (let i = 0; i < arrayOfDates.length; i++) {
    if ((`${arrayOfDates[i]}`).split(' ')[2] === (`${new Date()}`).split(' ')[2]) {
      const redLineContainer = document.createElement('div');
      redLineContainer.classList.add('redLine');
      redLinePlace[i].append(redLineContainer);
      const redLineRound = document.createElement('div');
      const redLineLine = document.createElement('div');
      redLineRound.classList.add('redLine-round');
      redLineLine.classList.add('redLine-line');
      redLineContainer.append(redLineRound);
      redLineContainer.append(redLineLine);
      const timeParts = (`${arrayOfDates[i]}`).split(' ')[4].split(':');
      const margin = +timeParts[0] * 60 + +timeParts[1];
      redLineContainer.style.marginTop = `${margin + 100}px`;
    }
  }
}
