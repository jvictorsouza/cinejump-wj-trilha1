import {
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies,
  getTrailerInfo,
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
import { updateFavorite, renderFavorites } from "./modules/home/utils";

class App {
  constructor() {
    this.bodyElement = document.getElementById("app");
    this.bodyElement.innerHTML = this.render();
  }

  render() {
    const session = localStorage.getItem("session");
    const content = /*html*/ `
      <div id = "content-app">
        ${session ? renderHome() : renderLogin()}
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
  getTrailerInfo,
  updateFavorite,
  renderFavorites,
};

const app = new App();