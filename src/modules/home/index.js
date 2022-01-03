import renderHeader from "../layout/header";
import renderFooter from "../layout/footer";
import "../layout/styles.css";

export default function renderHome() {
  return /*html*/ `
      ${renderHeader()}
      <div id="layout-home">
        <div id="home-content">
          <div id="layout-home-highligths">
            <span>HOME HIGHLIGHTS</span>
          </div>
          <div id="layout-home-row">
            <span>HOME ROW</span>
          </div>
        </div>
      </div>
      ${renderFooter()}
    `;
}
