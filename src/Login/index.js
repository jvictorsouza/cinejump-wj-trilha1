import "./styles.css";

export class Login {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }

  _renderLoginForm = () => {
    return /*html*/ ` <span>FORM: email and password</span>`;
  };

  _renderRegisterForm = () => {
    return /*html*/ ` <span>FORM: name, email and password</span>`;
  };

  _renderPrimaryBase = (
    widthPercentage,
    title,
    subtitle,
    buttonText,
    buttonFunction
  ) => {
    return /*html*/ `
      <div style='min-width: ${widthPercentage}; height: 100%; background-color: #E83F5B; margin: auto;'>
      <div id="base-container">  
        <div id="center-v-content">
          <span id="base-title">${title}</span>
          <span id="base-subtitle">${subtitle}</span>
          <button onClick=${buttonFunction} >${buttonText}</button>
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
    buttonFunction
  ) => {
    return /*html*/ `
      <div style='min-width: ${widthPercentage}; height: 100%; background-color: ##FFFFFF; margin: auto;'>
        <div id="base-container">
          <span id="logo-image">
            Logo Image
          </span>
          <div id="center-v-content">
            <span id="base-title">${title}</span>
            ${formRender()}
            <button onClick=${buttonFunction} >${buttonText}</button>
          </div>
        </div>
      </div>
    `;
  };

  renderLogin() {
    const content = /*html*/ `
      <div id="row-div">
        ${this._renderSecondaryBase(
          "65%",
          "Login",
          this._renderLoginForm,
          "ENTRAR",
          () => {}
        )}
        ${this._renderPrimaryBase(
          "35%",
          "Olá, visitante",
          "Cadastre-se e conheça as vantagens do Cinejump.",
          "CRIAR CONTA",
          () => {}
        )}
      </div>
    `;
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
