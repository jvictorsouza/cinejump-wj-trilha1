import api from "./api";
import "./styles.css";
import { Login } from "./Login";

class App {
  constructor() {
    this.bodyElement = document.getElementById("app");
    this.bodyElement.innerHTML = this.render();
  }

  render() {
    var login = new Login();
    const content = /*html*/ `
      <div id = "content-app">
        ${login.renderLogin()}
      </div>
    `;

    return content;
  }
}

const app = new App();
