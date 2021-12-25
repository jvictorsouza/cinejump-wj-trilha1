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
                  <input type="text" id="email" name="email" placeholder="E-mail" />
                </div>
                <div class="field">
                  <input type="password" id="password" name="password" placeholder="Senha" />
                </div>
                <button class="button" id="bottom-button" 
                  onclick="(
                    function() {
                      const email = document.getElementById('email').value;
                      const password = document.getElementById('password').value;
                      
                      const emailDotDivision = email.split('.')
                      const emailAtSignDivision = email.split('@')
                      const passwordLettersDivision = password.split('')

                      if (email.trim() === '' || password.trim() === ''){
                        alert('Por favor, preencha todos os campos.');
                      }
                      else if (emailAtSignDivision.length < 2 || emailDotDivision.length < 3 || passwordLettersDivision.length < 6) {
                        alert('Por favor, insira credenciais válidas.');
                      }
                      else {
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
