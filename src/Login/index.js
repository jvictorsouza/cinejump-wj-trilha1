import "./styles.css";

export class Login {
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }

  _renderLoginForm = () => {
    return <span>FORM: email and password</span>;
  };

  _renderRegisterForm = () => {
    return <span>FORM: name, email and password</span>;
  };

  _renderPrimaryBase = (
    widthPercentage,
    title,
    subtitle,
    buttonText,
    buttonFunction
  ) => {
    return /*html*/ `
      <div style='{width: ${widthPercentage}, height: 100%, backgroundColor: #E83F5B}'>
        <div id="center-v-content">
          <span id="base-title">${title}</span>
          <span id="base-subtitle">${subtitle}</span>
          <button onClick=${buttonFunction} >${buttonText}</button>
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
      <div style='{width: ${widthPercentage}, height: 100%, backgroundColor: ##FFFFFF}'>
        <div id="secondary-base-container">
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
    return /*html*/ `
      <div id="row-div">
        ${this._renderSecondaryBase(
          (widthPercentage = "65%"),
          (title = "Login"),
          (formRender = this._renderLoginForm),
          (buttonFunction = "ENTRAR"),
          (buttonFunction = () => {})
        )}
        ${this._renderPrimaryBase(
          (widthPercentage = "35%"),
          (title = "Olá, visitante"),
          (subtitle = "Cadastre-se e conheça as vantagens do Cinejump."),
          (buttonFunction = "CRIAR CONTA"),
          (buttonFunction = () => {})
        )}
      </div>
    `;
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
