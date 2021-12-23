import "./styles.css";

export class Login {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.pageActive = "login";
  }

  _renderLoginForm = () => {
    return /*html*/ ` <span>FORM: email and password</span>`;
  };

  _renderRegisterForm = () => {
    return /*html*/ ` <span>FORM: name, email and password</span>`;
  };

  _changePageActive = (page) => {
    console.log(page);
    this.pageActive = page;
  };

  _renderPrimaryBase = (
    widthPercentage,
    title,
    subtitle,
    buttonText,
    buttonFunction,
    alternativePage
  ) => {
    return /*html*/ `
      <div style='min-width: ${widthPercentage}; height: 100%; background-color: #E83F5B; margin: auto;'>
        <div id="base-container" style='justify-content: space-evenly;' >  
          <div id="center-v-content">
            <span id="base-title" style='color:#FFFFFF; font-weight: 500;' >${title}</span>
            <span id="base-subtitle">${subtitle}</span>
            <button class="button" id="bottom-button" onclick=_changePageActive(${alternativePage}) >${buttonText}</button>
          </div>
        </div>
      </div>
    `;
  };

  _renderSecondaryBase = (
    widthPercentage,
    title,
    formRender,
    buttonText,
    buttonFunction,
    alternativePage
  ) => {
    return /*html*/ `
      <div style='min-width: ${widthPercentage}; height: 100%; background-color: ##FFFFFF; margin: auto;'>
        <div id="base-container">
          <span id="logo-image">
            Logo Image
          </span>
          <div id="center-v-content">
            <span id="base-title" style='color:#E83F5B;font-weight: 400;'>${title}</span>
            ${formRender()}
            <button class="button" id="bottom-button" onclick=${() =>
              (this.pageActive = alternativePage)} >${buttonText}</button>
          </div>
        </div>
      </div>
    `;
  };

  renderLogin() {
    let content;
    if (this.pageActive === "login") {
      content = /*html*/ `
      <div id="row-div">
        ${this._renderSecondaryBase(
          "65%",
          "Login",
          this._renderLoginForm,
          "ENTRAR",
          () => {},
          "register"
        )}
        ${this._renderPrimaryBase(
          "35%",
          "Olá, visitante!",
          "Cadastre-se e conheça as vantagens do Cinejump.",
          "CRIAR CONTA",
          () => {},
          "login"
        )}
      </div>
    `;
    } else {
      content = /*html*/ `
      <div id="row-div">
        ${this._renderSecondaryBase(
          "65%",
          "Criar conta",
          this._renderLoginForm,
          "CADASTRAR",
          () => {},
          "login"
        )}
        ${this._renderPrimaryBase(
          "35%",
          "Bem-vindo, Jumper!",
          "Para se manter conectado, faça login com suas credenciais.",
          "LOGIN",
          () => {},
          "register"
        )}
      </div>
    `;
    }

    return content;
  }

  renderRegister() {
    return /*html*/ `
      <div id="row-div">
        ${this._renderPrimaryBase(
          (widthPercentage = "35%"),
          (title = "Bem-vindo, Jumper!"),
          (subtitle =
            "Para se manter conectado, faça login com suas credenciais."),
          (buttonFunction = "LOGIN"),
          (buttonFunction = () => {})
        )}
        ${this._renderSecondaryBase(
          (widthPercentage = "65%"),
          (title = "Criar conta"),
          (formRender = this._renderRegisterForm),
          (buttonFunction = "CRIAR CONTA"),
          (buttonFunction = () => {})
        )}
      </div>
    `;
  }
}
