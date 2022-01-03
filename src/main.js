import {
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies,
} from "./api";
import "./styles.css";
import renderLogin from "./modules/user/login.js";
import renderRegister from "./modules/user/register.js";
import "./modules/user/styles.css";
import renderHeader from "./modules/layout/header";
import renderFooter from "./modules/layout/footer";
import "./modules/layout/styles.css";
import renderHome from "./modules/home";
import "./modules/home/styles.css";

class App {
  constructor() {
    this.bodyElement = document.getElementById("app");
    this.bodyElement.innerHTML = this.render();
  }

  render() {
    const content = /*html*/ `
      <div id = "content-app">
        ${renderHome()}
      </div>
    `;

    return content;
  }
}

export {
  renderLogin,
  renderRegister,
  renderHome,
  renderHeader,
  renderFooter,
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies,
};

const app = new App();
