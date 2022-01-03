export default function renderFooter() {
  return /*html*/ `
      <div id="layout-footer">
        <div id="footer-content">
         <img src="/images/Logo-white.svg" />
          <div id="list-links">
            <span onclick="window.open('https:\/\/www.linkedin.com/in/jvictorsouza/', '_blank');">Desenvolvido por João Chagas</span>
            <span onclick="window.open('https:\/\/webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+1', '_blank');">Proposta do projeto</span>
            <span onclick="window.open('https:\/\/www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=7185%3A17', '_blank');">Protóripo no Figma</span>
            <span onclick="window.open('https:\/\/docs.google.com/presentation/d/1iKBjjW9TpO_-vyyNWrqT4LzeDZLyTc7xiOxgFo0BONA/edit?usp=sharing', '_blank');">Apresentação ao comitê</span>
            <span onclick="window.open('https:\/\/webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+1', '_blank');">Documentação</span>
          </div>
        </div>
      </div>
    `;
}
