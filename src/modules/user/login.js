export default function renderLogin() {
  return /*html*/ `
      <div id="row-div">
        <div style='min-width: 65%; height: 100%; background-color: ##FFFFFF; margin: auto;'>
          <div id="base-container">
            <img id="logo-image" src="/images/Logo-red.svg" />
            <div id="center-v-content">
              <span id="base-title" style='color:#E83F5B; font-weight: 400;'>Login</span>
              <div id="form">
                <div class="field">
                  <input type="text" id="email" name="email" placeholder="E-mail" 
                    onchange="(
                      function() {
                        const email = document.getElementById('email').value;
                        const alertError = document.getElementById('email-error');
                        if (email.split(' ').length > 1) {
                          alertError.innerText = 'Por favor, remova espaços do e-mail.';
                        }
                        else if (email.trim().length < 6 || email.trim().length < 2 || email.split('@').length < 2 || email.trim('.').length < 3) {
                          alertError.innerText = 'Por favor, insira um e-mail válido.';
                        }
                        else {
                          alertError.innerText = '';
                        }
                    })()"
                  />
                  <span id="email-error" ></span>
                </div>
                <div class="field">
                  <input type="password" id="password" name="password" placeholder="Senha" 
                    onchange="(
                      function() {
                        const password = document.getElementById('password').value;
                        const alertError = document.getElementById('password-error');
                        if (password.trim().length === 0){
                          alertError.innerText = 'Por favor, insira uma senha.';
                        }
                        else {
                          alertError.innerText = '';
                        }
                      })()"
                  />
                  <span id="password-error" ></span>
                </div>
                <button class="button" id="bottom-button" 
                  onclick="(
                    function() {
                      const email = document.getElementById('email').value;
                      const password = document.getElementById('password').value;

                      const email_alert_error = document.getElementById('email-error');
                      const password_alert_error = document.getElementById('password-error');

                      if (email === '') {
                        email_alert_error.innerText = 'Por favor, insira um e-mail válido.';
                      }
                      if (password === '') {
                        password_alert_error.innerText = 'Por favor, insira uma senha.';
                      }
                      if (email_alert_error.innerText === '' && password_alert_error.innerText === ''){
                        let favoritesLocalStorageData = localStorage.getItem('favorites'); 
                        if (favoritesLocalStorageData) {
                          let favoritesData = JSON.parse(favoritesLocalStorageData);
                          if (Object.keys(favoritesData).includes(email.split('@')[0])) {
                            localStorage.setItem('session', JSON.stringify(true));
                            localStorage.setItem('user', JSON.stringify(email.split('@')[0]));
                            let bodyElement = document.getElementById('app');
                            bodyElement.innerHTML = '';
                            bodyElement.innerHTML = linkRenderHome();
                          } else {
                            alert('Usuário não cadastrado');
                          }
                        } else {
                          alert('Usuário não cadastrado');
                        }
                        
                      }
                  })()"
                  >ENTRAR</button>
              </div>
            </div>
          </div>
        </div>
        <div style='min-width: 35%; height: 100%; background-color: #E83F5B; margin: auto;'>
          <div id="base-container" style='justify-content: space-evenly;' >  
            <div id="center-v-content">
              <span id="base-title" style='color:#FFFFFF; font-weight: 500;' >Olá, visitante!</span>
              <span id="base-subtitle">Cadastre-se e conheça as vantagens do Cinejump.</span>
              <button class="button" id="bottom-button" 
                onclick='(
                  function() {
                    let bodyElement = document.getElementById("app");
                    let contentApp = document.createElement("div");
                    contentApp.id = "content-app";
                    contentApp.innerHTML = linkRenderRegister();
                    bodyElement.innerHTML = "";
                    bodyElement.appendChild(contentApp);
                  })()'
              >CRIAR CONTA</button>
            </div>
          </div>
        </div>
      </div>
    `;
}