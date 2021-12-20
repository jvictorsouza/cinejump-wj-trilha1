import api from "./api";
import "./styles.css";

class App {
  constructor() {
    this.bodyElement = document.getElementById("body");
    this.bodyElement.innerHTML = this.render();
  }

  render() {
    const title = /*html*/ `
      <div>
        <span>Cinejump</span>
      </div>
    `;

    return title;
  }
}

const app = new App();
