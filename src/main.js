import api from "./api";
import "./styles.css";
import renderLogin from "./modules/user/login.js";
import renderRegister from "./modules/user/register.js";
import "./modules/user/styles.css";

class App {
  constructor() {
    this.bodyElement = document.getElementById("app");
    this.bodyElement.innerHTML = this.render();
  }

  render() {
    const content = /*html*/ `
      <div id = "content-app">
        ${renderLogin()}
      </div>
    `;

    return content;
  }
}

export { renderLogin, renderRegister };

const app = new App();
