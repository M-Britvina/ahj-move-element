import Goblin from "./Goblin";

export default class Game {
  constructor(size = 4) {
    this.size = size;
    this.container = null;
    this.goblin = new Goblin(size * size);
    this.render();
  }

  render() {
    const gameContainer = document.querySelector(".game-container");
    gameContainer.innerHTML = "";

    this.container = document.createElement("div");
    this.container.classList.add("field");
    this.container.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    this.container.style.gridTemplateRows = `repeat(${this.size}, 1fr)`;

    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = "cell-" + i;
      this.container.appendChild(cell);
    }

    gameContainer.appendChild(this.container);
  }

  start() {
    setInterval(() => {
      let goblinPosition = this.goblin.move();
      document
        .getElementById(`cell-${goblinPosition}`)
        .appendChild(this.goblin.element);
    }, 1000);
  }
}
