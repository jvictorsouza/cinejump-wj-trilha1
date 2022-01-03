export default function renderHeader() {
  return /*html*/ `
      <div id="layout-header">
        <div id="header-content">
          <div id="btns-header-camp">
            <span onclick='console.log("onclick header Filmes btn")'>Filmes</span>
            <span onclick='console.log("onclick header Séries btn")'>Séries</span>
          </div>

          <img src="/images/Logo-white.svg" />

          <div id="btns-header-camp">
            <input type="text" id="search" name="search" placeholder="Pesquisar">
            <img src="/images/FiSearch.svg" 
              onclick="(
                function() {
                  const search = document.getElementById('search');
                  if (search.value === '' && search.style.display === 'inline-block'){
                    search.style.display = 'none';
                  } else if (search.style.display === '' || search.style.display === 'none') {
                    search.style.display = 'inline-block';
                  }
                })()"
            />
            <img src="/images/FaRegUserCircle.svg" onclick='console.log("onclick header User icon btn")'/>
          </div>
        </div>
      </div>
    `;
}
