"use strict";

const getGitHubPublicData = (user) => {
  let urlRepository = `https://api.github.com/users/${user}/repos`;
  return fetch(urlRepository, {
    method: "GET",
  })
    .then((response) => response.json())
    .then(
      (result) =>
        ({ name: result.name, description: result.description, html_url: result.html_url } = result)
    )
    .catch((error) => console.log("error", error));
};

const createPortfolioElement = (repositories) => {
  const _repositories = repositories;

  const createLiElement = () => {
    const liElement = document.createElement("li");
    liElement.classList.add("cards_item");
    return liElement;
  };

  const createDivCardElement = () => {
    const divCardElement = document.createElement("div");
    divCardElement.classList.add("card");
    return divCardElement;
  };

  const createCardImgElement = () => {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", "../assets/images/portfolio-github.png");

    const divCardImgElement = document.createElement("div");
    divCardImgElement.classList.add("card_image");

    divCardImgElement.appendChild(imgElement);

    return divCardImgElement;
  };

  const createDivCardContentElement = () => {
    const divCardContentElement = document.createElement("div");
    divCardContentElement.classList.add("card_content");
    return divCardContentElement;
  };

  const createTitleElement = (repositoryName) => {
    const titleElement = document.createElement("h2");
    titleElement.classList.add("card_title");

    const titleText = document.createTextNode(repositoryName);
    titleElement.appendChild(titleText);

    return titleElement;
  };

  const createDescriptionElement = (repositoryDescription) => {
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card_text");

    const descriptionText = document.createTextNode(repositoryDescription);
    descriptionElement.appendChild(descriptionText);

    return descriptionElement;
  };

  const createLinkElement = (repositoryUrl) => {
    const linkElement = document.createElement("a");
    linkElement.classList.add("btn");
    linkElement.classList.add("card_btn");
    linkElement.setAttribute("href", repositoryUrl);
    linkElement.setAttribute("target", "_blank");

    const linkText = document.createTextNode("Acesse");
    linkElement.appendChild(linkText);

    return linkElement;
  };

  const createUlElement = () => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("cards");

    _repositories.forEach((repository) => {
      const liElement = createLiElement();
      const divCardElement = createDivCardElement();
      const divCardImgElement = createCardImgElement();
      const divCardContentElement = createDivCardContentElement();
      const titleElement = createTitleElement(repository.name);
      const descriptionElement = createDescriptionElement(repository.description);
      const linkElement = createLinkElement(repository.html_url);

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

  return { createUlElement };
};

const createResumeSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const sectionElement = document.querySelector("section.resume-section.summary-section.mb-5");

  const createDivResumeContent = () => {
    // <div class="resume-section-content">
    //   <p class="mb-0">
    //   </p>
    // </div>
    const divResumeContent = document.createElement("div");
    divResumeContent.classList.add("resume-section-content");

    const pElement = document.createElement("p");
    pElement.classList.add("mb-0");

    const pTextElement = document.createTextNode(_resume.about);
    pElement.append(pTextElement);

    divResumeContent.appendChild(pElement);

    return divResumeContent;
  };

  const appendElementsInSection = () => {
    const divResumeElement = createDivResumeContent();
    sectionElement.appendChild(divResumeElement);
  };

  return { appendElementsInSection };
};

const generatePortfolio = () => {
  getGitHubPublicData("jvidaln").then((repositories) => {
    const divportfolio = document.querySelector("div.portfolio-section-content");
    const repositoryElement = createPortfolioElement(repositories).createUlElement();
    divportfolio.appendChild(repositoryElement);
  });
};

const init = () => {
  generatePortfolio();
  createResumeSection(data).appendElementsInSection();
};

init();
