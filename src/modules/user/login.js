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
                        else if (email.trim().length < 6 || email.trim().length < 2 || email.trim().length < 3 || email.trim().length < 6) {
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
                      else if (email_alert_error.value === '' || password_alert_error.value === ''){
                        console.log('envio para o backend');
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
                    bodyElement.innerHTML = linkRenderRegister();
                  })()'
              >CRIAR CONTA</button>
            </div>
          </div>
        </div>
      </div>
    `;
}
