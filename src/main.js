import api from './api';
import './styles.css';

class App {
  constructor() {
    this.repositories = []; // lista de repositórios
    this.formElement = document.getElementById('repo-form'); // elemento do formulário
    this.inputElement = document.querySelector('input[name=repository]'); // elemento de campo de texto
    this.listElement = document.getElementById('repo-list'); // elemento da lista
    this.registerHandlers(); // registrar as ações do usuário
  }

  /**
   * Registra os eventos do usuário
   */
  registerHandlers() {
    this.formElement.onsubmit = (event) => this.addRepository(event); // adiciona um repositório ao enviar o formulário
  }

  /**
   * Define o carregamento durante a requisição
   */
  setLoading(loading = true) {
    // se estiver carregando
    if (loading === true) {
      let loadingElement = document.createElement('span'); // criar um elemento span
      loadingElement.appendChild(document.createTextNode('Carregando')); // atribuir o texto carregando
      loadingElement.setAttribute('id', 'loading'); // definir um id

      this.formElement.appendChild(loadingElement); // agregando o elemento no formulário
      return;
    }

    document.getElementById('loading').remove(); // se não estiver carregando, apagar elemento
  }

  /**
   * Adiciona repositórios
   */
  async addRepository(event) {
    event.preventDefault(); // previne o recarregamento da página

    const repositoryInput = this.inputElement.value; // recebe o valor digitado
    if (repositoryInput.length === 0) {
      // verifica se o valor é vazio
      return; // interrompe a execucao da função
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repositoryInput}`); // fazendo a requisicao a api
      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data; // desestruturando a responsta

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      }); // adicionando à lista com objeto desestruturado

      this.inputElement.value = '';
      this.render();
    } catch (error) {
      alert('O repositório não existe.');
    }

    this.setLoading(false);
  }

  render() {
    this.listElement.innerHTML = ''; // limpa a lista

    this.repositories.forEach((repository) => {
      let imgElement = document.createElement('img'); // cria um elemento de imagem
      imgElement.setAttribute('src', repository.avatar_url); // acrescenta a origem da imagem como atributo

      let titleElement = document.createElement('strong'); // cria um elemento de texto
      titleElement.appendChild(document.createTextNode(repository.name)); // agrega o nome como conteúdo

      let descriptionElement = document.createElement('p'); // cria um elemento de parágrafo
      descriptionElement.appendChild(
        document.createTextNode(repository.description)
      ); // agrega a descrição como conteúdo

      let linkElement = document.createElement('a'); // cria um elemento de link
      linkElement.setAttribute('target', '_blank'); // adiciona o atributo para abrir em outra aba
      linkElement.setAttribute('href', repository.html_url); // adiciona o link como atributo
      linkElement.appendChild(document.createTextNode('Acessar')); // agrega o texto como conteúdo

      let listItemElement = document.createElement('li'); // cria um elemento de lista
      listItemElement.appendChild(imgElement); // agrega a imagem ao item da lista
      listItemElement.appendChild(titleElement); // agrega o título ao item da lista
      listItemElement.appendChild(descriptionElement); // agrega a descricao ao item da lista
      listItemElement.appendChild(linkElement); // agrega o link ao item da lista

      this.listElement.appendChild(listItemElement);
    });
  }
}

const app = new App();
