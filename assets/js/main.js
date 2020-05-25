"use strict";

const getGitHubPublicData = (user) => {
  let urlRepository = `https://api.github.com/users/${user}/repos`;
  return fetch(urlRepository, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) =>
        ({
          name: result.name,
          description: result.description,
          html_url: result.html_url,
        } = result)
    )
    .catch((error) => console.log("error", error));
};

const createPortfolioElement = (repositories) => {
  let ulElement = document.createElement("ul");
  ulElement.classList.add("cards");
  repositories.forEach((repository) => {
    let liElement = document.createElement("li");
    liElement.classList.add("cards_item");

    let divCardElement = document.createElement("div");
    divCardElement.classList.add("card");

    let divCardImgElement = document.createElement("div");
    divCardImgElement.classList.add("card_image");

    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "../assets/images/portfolio-github.png");
    divCardImgElement.appendChild(imgElement);

    let divCardContentElement = document.createElement("div");
    divCardContentElement.classList.add("card_content");

    let titleElement = document.createElement("h2");
    titleElement.classList.add("card_title");

    let titleText = document.createTextNode(repository.name);
    titleElement.appendChild(titleText);

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card_text");

    let descriptionText = document.createTextNode(repository.description);
    descriptionElement.appendChild(descriptionText);

    let linkElement = document.createElement("a");
    linkElement.classList.add("btn");
    linkElement.classList.add("card_btn");
    linkElement.setAttribute("href", repository.html_url);
    linkElement.setAttribute("target", "_blank");

    let linkText = document.createTextNode("Acesse");
    linkElement.appendChild(linkText);

    divCardContentElement.appendChild(titleElement);
    divCardContentElement.appendChild(descriptionElement);
    divCardContentElement.appendChild(linkElement);
    divCardElement.appendChild(divCardImgElement);
    divCardElement.appendChild(divCardContentElement);
    liElement.appendChild(divCardElement);
    ulElement.appendChild(liElement);
  });
  return ulElement;
};

const generatePortfolio = () => {
  getGitHubPublicData("jvidaln").then((repositories) => {
    let divPortifolio = document.querySelector(
      "div.portifolio-section-content"
    );
    let repositoryElement = createPortfolioElement(repositories);
    divPortifolio.appendChild(repositoryElement);
  });
};

generatePortfolio();
