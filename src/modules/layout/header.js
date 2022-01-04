export default function renderHeader() {
  return /*html*/ `
      <div id="layout-header">
        <div id="header-content">
          <div id="btns-header-camp">
            <span onclick='alert("Funcionalidade ainda não inserida")'>Filmes</span>
            <span onclick='alert("Funcionalidade ainda não inserida")'>Séries</span>
          </div>

          <img src="/images/Logo-white.svg" onclick='window.scrollTo({ top: 0, behavior: "smooth" })' style='cursor: pointer;'/>

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
                  else {
                    alert('Funcionalidade ainda não inserida');
                  }
                })()"
            />
            <img src="/images/FaRegUserCircle.svg" />
            <img src="/images/FiLogout.svg" 
              onclick="(
                function() {
                  localStorage.removeItem('session');
                  window.location.reload(true);
              })()"
            />
          </div>
        </div>
      </div>
    `;
}
