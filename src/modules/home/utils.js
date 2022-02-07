export function updateFavorite(id, fromFavorites) {
  let idInfos = id.split("|");
  let userName = JSON.parse(localStorage.getItem("user"));
  let favoritesStorage = localStorage.getItem("favorites");
  let dataFavorites = (favoritesStorage && JSON.parse(favoritesStorage)) || {};
  let userFavorites;
  if (Object.keys(dataFavorites).includes(userName)) {
    userFavorites = dataFavorites[userName];
  } else {
    userFavorites = [];
  }
  let item = {
    original_title: idInfos[0],
    poster_path: idInfos[1].split("-")[0],
  };
  const heart = document.getElementById(id);
  let newUserFavorites = [];
  if (heart.getAttribute("src") === "/images/BsHeartFill-black.svg") {
    heart.setAttribute("src", "/images/BsHeartFill-red.svg");
    userFavorites.unshift(item);
    newUserFavorites = userFavorites;
  } else {
    newUserFavorites = userFavorites.filter(
      (favorite) => favorite.original_title !== item.original_title
    );
    heart.setAttribute("src", "/images/BsHeartFill-black.svg");
  }
  dataFavorites[userName] = newUserFavorites;
  localStorage.setItem("favorites", JSON.stringify(dataFavorites));
  if (fromFavorites) {
    let homeContent = document.getElementById("home-content");
    homeContent.innerHTML = "";
    linkRenderHome();
  } else {
    linkRenderFavorites();
  }
}

export function verifyFavorites(original_title, poster_path) {
  let userName = JSON.parse(localStorage.getItem("user"));
  let favoritesStorage = localStorage.getItem("favorites");
  let dataFavorites = (favoritesStorage && JSON.parse(favoritesStorage)) || {};
  let userFavorites;
  let item = {
    original_title,
    poster_path,
  };
  if (Object.keys(dataFavorites).includes(userName)) {
    userFavorites = dataFavorites[userName];
    if (
      userFavorites.find(
        (favorite) => favorite.original_title === item.original_title
      )
    ) {
      return "/images/BsHeartFill-red.svg";
    } else {
      return "/images/BsHeartFill-black.svg";
    }
  } else {
    return "/images/BsHeartFill-black.svg";
  }
}

export function renderFavorites() {
  let userName = JSON.parse(localStorage.getItem("user"));
  let favoritesStorage = localStorage.getItem("favorites");
  let dataFavorites = (favoritesStorage && JSON.parse(favoritesStorage)) || {};
  let userFavorites = Object.keys(dataFavorites).includes(userName)
    ? dataFavorites[userName]
    : [];
  if (userFavorites.length > 0) {
    var carousel;
    if (!document.getElementById("carousel-favorites")) {
      let homeContent = document.getElementById("home-content");
      var row = document.createElement("div");
      row.innerHTML = /*html*/ `
        <div id="layout-home-row">
          <div id="layout-home-row-content">
            <span>Favoritos</span>
            <div id="carousel-favorites">
            </div>
          </div>
        </div>
      `;
      homeContent.insertBefore(row, homeContent.children[6]);
    }
    carousel = document.getElementById("carousel-favorites");
    carousel.innerHTML = "";

    userFavorites.map((movie) => {
      let image = document.createElement("div");
      image.setAttribute("title", `${movie.original_title}`);
      image.style.cssText = `min-height: 278px; min-width: 185px; width: auto; border-radius: 10px; margin-bottom: 15px; background-image: url(${process.env.IMAGE_BASE_URL}/w185${movie.poster_path});`;
      image.innerHTML = /*html*/ `
        <img  id='${movie.original_title}|${
        movie.poster_path
      }-heart-favorites' src=${verifyFavorites(
        movie.original_title,
        movie.poster_path
      )} style='cursor: pointer; height: fit-content; margin: auto; margin-top: 5px; margin-right: 5px;' 
          onclick="linkUpdateFavorite(this.id, true)"
        />
      `;
      carousel.appendChild(image);
    });
  } else {
    let carousel = document.getElementById("carousel-favorites");
    carousel.innerHTML = "";
  }
}
