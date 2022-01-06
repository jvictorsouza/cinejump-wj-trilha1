export default function renderRegister() {
  return /*html*/ `
      <div id="row-div">
      <div style='min-width: 35%; height: 100%; background-color: #E83F5B; margin: auto;'>
          <div id="base-container" style='justify-content: space-evenly;' >  
            <div id="center-v-content">
              <span id="base-title" style='color:#FFFFFF; font-weight: 500;' >Bem-vindo, Jumper!</span>
              <span id="base-subtitle">Para se manter conectado, faça login com suas credenciais.</span>
              <button type="button" id="bottom-button" 
                onclick='(
                  function() {
                    let bodyElement = document.getElementById("app");
                    let contentApp = document.createElement("div");
                    contentApp.id = "content-app";
                    contentApp.innerHTML = linkRenderLogin();
                    bodyElement.innerHTML = "";
                    bodyElement.appendChild(contentApp);
                  })()'
              >LOGIN</button>
            </div>
          </div>
        </div>
        <div style='min-width: 65%; height: 100%; background-color: ##FFFFFF; margin: auto;'>
          <div id="base-container">
            <img id="logo-image" src="/images/Logo-red.svg" />
            <div id="center-v-content">
              <span id="base-title" style='color:#E83F5B;font-weight: 400;'>Criar conta</span>
              <div id="form">
                <div class="field">
                  <input type="text" id="name" name="name" placeholder="Nome" 
                    onchange="(
                      function() {
                        const name = document.getElementById('name').value;
                        const alertError = document.getElementById('name-error');
                        if (name.trim().length === 0){
                          alertError.innerText = 'Por favor, insira seu nome.';
                        } else if (name.trim().length < 6) {
                          alertError.innerText = 'Por favor, insira um nome com mais de 5 caracteres.';
                        }
                        else {
                          alertError.innerText = '';
                        }
                      })()" 
                  />
                  <span id="name-error" ></span>
                </div>
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
                        } else if (password.trim().length < 6) {
                          alertError.innerText = 'Por favor, insira uma senha com mais de 5 caracteres.';
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
                      const name = document.getElementById('name').value;
                      const email = document.getElementById('email').value;
                      const password = document.getElementById('password').value;

                      const name_alert_error = document.getElementById('name-error');
                      const email_alert_error = document.getElementById('email-error');
                      const password_alert_error = document.getElementById('password-error');

                      if (name === '') {
                        name_alert_error.innerText = 'Por favor, insira um nome.';
                      }
                      if (email === '') {
                        email_alert_error.innerText = 'Por favor, insira um e-mail válido.';
                      }
                      if (password === '') {
                        password_alert_error.innerText = 'Por favor, insira uma senha.';
                      }
                      else if (name_alert_error.innerText === '' && email_alert_error.innerText === '' && password_alert_error.innerText === ''){
                        localStorage.setItem('session', JSON.stringify(true));
                        let bodyElement = document.getElementById('app');
                        bodyElement.innerHTML = '';
                        bodyElement.innerHTML = linkRenderHome();
                      }
                  })()"
                >CADASTRAR</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    `;
}
