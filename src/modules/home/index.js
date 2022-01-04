import renderHeader from "../layout/header";
import renderFooter from "../layout/footer";
import "../layout/styles.css";
import {
  getPopularMovies,
  getRecomendationsMovies,
  getPlayingMovies,
  getTopMovies,
} from "../../api";

export default function renderHome() {
  getPopularMovies().then((data) => {
    let homeContent = document.getElementById("home-content");
    var row = document.createElement("div");
    row.innerHTML = /*html*/ `
      <div id="layout-home-row">
        <div id="layout-home-row-content">
          <span>Populares</span>
          <div id="carousel-populars">
          </div>
        </div>
      </div>
    `;
    homeContent.appendChild(row);

    let carousel = document.getElementById("carousel-populars");
    data.results.map((movie) => {
      let image = document.createElement("img");
      image.setAttribute(
        "src",
        `${process.env.IMAGE_BASE_URL}/w185${movie.poster_path}`
      );
      image.setAttribute("title", `${movie.original_title}`);
      image.style.cssText =
        "min-height: 278px; width: auto; border-radius: 10px; margin-bottom: 15px";
      carousel.appendChild(image);
    });

    getRecomendationsMovies(data.results[0].id).then((response) => {
      let homeContent = document.getElementById("home-content");
      var row = document.createElement("div");
      row.innerHTML = /*html*/ `
        <div id="layout-home-highlights">
          <div id="layout-home-highlights-content"></div>
        </div>
      `;
      homeContent.insertBefore(row, homeContent.firstChild);
      let highlightsContent = document.getElementById(
        "layout-home-highlights-content"
      );
      let mainBanner = document.createElement("div");
      mainBanner.id = "main-highligth";
      mainBanner.innerHTML = /*html*/ `
        <img src='${process.env.IMAGE_BASE_URL}/w780${response.results[0].backdrop_path}' />
        <div id="main-highlights-banner-info" >
          <span>${response.results[0].title}</span>
          <label>${response.results[0].overview}</label>
        </div>
      `;
      highlightsContent.appendChild(mainBanner);
      let secondaryBanners = document.createElement("div");
      secondaryBanners.id = "secondary-highligth";
      secondaryBanners.innerHTML = /*html*/ `
        <div title='${response.results[1].overview}' >
          <img src='${process.env.IMAGE_BASE_URL}/w300${response.results[1].backdrop_path}' />
          <div id="secondary-highlights-banners-info" >
            <span>${response.results[1].title}</span>
          </div>
        </div>
        <div title='${response.results[2].overview}' >
          <img src='${process.env.IMAGE_BASE_URL}/w300${response.results[2].backdrop_path}' />
          <div id="secondary-highlights-banners-info" >
            <span>${response.results[2].title}</span>
          </div>
        </div>
      `;
      highlightsContent.appendChild(secondaryBanners);
    });
  });

  getPopularMovies().then((data) => {
    let homeContent = document.getElementById("home-content");
    var row = document.createElement("div");
    row.innerHTML = /*html*/ `
      <div id="layout-home-row">
        <div id="layout-home-row-content">
          <span>Trailers</span>
          <div id="carousel-populars-trailers">
          </div>
        </div>
      </div>
    `;
    homeContent.appendChild(row);

    let carousel = document.getElementById("carousel-populars-trailers");
    data.results.map((movie) => {
      let trailer = document.createElement("div");
      trailer.setAttribute(
        "title",
        `${movie.original_title} - Official Trailer (HD)`
      );
      trailer.style.cssText = `min-height: 225px; min-width: 400px; border-radius: 10px; margin: 0; margin-bottom: 15px; justify-content: center; background-image: url(${process.env.IMAGE_BASE_URL}/w500${movie.backdrop_path});`;
      trailer.innerHTML = /*html*/ `
        <img id='${movie.original_title}' src="/images/FiPlay.svg" style='cursor: pointer; height: fit-content; margin: auto;' 
          onclick="linkGetTrailerInfo(this.id)"
        />
      `;
      carousel.appendChild(trailer);
    });
  });

  getPlayingMovies().then((data) => {
    let homeContent = document.getElementById("home-content");
    var row = document.createElement("div");
    row.innerHTML = /*html*/ `
      <div id="layout-home-row">
        <div id="layout-home-row-content">
          <span>Em Exibição</span>
          <div id="carousel-playing">
          </div>
        </div>
      </div>
    `;
    homeContent.appendChild(row);

    let carousel = document.getElementById("carousel-playing");
    data.results.map((movie) => {
      let image = document.createElement("img");
      image.setAttribute(
        "src",
        `${process.env.IMAGE_BASE_URL}/w185${movie.poster_path}`
      );
      image.setAttribute("title", `${movie.original_title}`);
      image.style.cssText =
        "min-height: 278px; width: auto; border-radius: 10px; margin-bottom: 15px";
      carousel.appendChild(image);
    });
  });

  getTopMovies().then((data) => {
    let homeContent = document.getElementById("home-content");
    var row = document.createElement("div");
    row.innerHTML = /*html*/ `
      <div id="layout-home-row">
        <div id="layout-home-row-content">
          <span>Top Filmes</span>
          <div id="carousel-top">
          </div>
        </div>
      </div>
    `;
    homeContent.appendChild(row);

    let carousel = document.getElementById("carousel-top");
    data.results.map((movie) => {
      let image = document.createElement("img");
      image.setAttribute(
        "src",
        `${process.env.IMAGE_BASE_URL}/w185${movie.poster_path}`
      );
      image.setAttribute(
        "title",
        `${movie.original_title}: ${movie.vote_average}`
      );
      image.style.cssText =
        "min-height: 278px; width: auto; border-radius: 10px; margin-bottom: 15px";
      carousel.appendChild(image);
    });
  });

  return /*html*/ `
      ${renderHeader()}
      <div id="layout-home">
        <div id="home-content">
        </div>
      </div>
      ${renderFooter()}
    `;
}

// <div id="layout-home-row">
//   <div id="layout-home-row-content">
//     <span>HOME ROW</span>
//     <div id="carousel"></div>
//   </div>
// </div>
