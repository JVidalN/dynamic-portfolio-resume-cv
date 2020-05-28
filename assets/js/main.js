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

const createExperienceSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divElement = document.querySelector("div.resume-timeline.position-relative");

  const createArticleElement = () => {
    //< article class="resume-timeline-item position-relative pb-5" >
    const articleElement = document.createElement("article");
    articleElement.classList.add("resume-timeline-item");
    articleElement.classList.add("position-relative");
    articleElement.classList.add("pb-5");

    return articleElement;
  };

  const createDivHeaderElement = (experience) => {
    const _experience = {};
    Object.assign(_experience, experience);
    const divHeaderElement = document.createElement("div");
    divHeaderElement.classList.add("resume-timeline-item-header");
    divHeaderElement.classList.add("mb-2");

    const divPositionElement = document.createElement("div");
    divPositionElement.classList.add("d-flex");
    divPositionElement.classList.add("flex-column");
    divPositionElement.classList.add("flex-md-row");

    const h3PositionElement = document.createElement("h3");
    h3PositionElement.classList.add("resume-position-title");
    h3PositionElement.classList.add("font-weight-bold");
    h3PositionElement.classList.add("mb-1");

    const positionText = document.createTextNode(_experience.position);
    h3PositionElement.append(positionText);

    const divCompanyElement = document.createElement("div");
    divCompanyElement.classList.add("resume-company-name");
    divCompanyElement.classList.add("ml-auto");

    const companyText = document.createTextNode(_experience.company);
    divCompanyElement.append(companyText);

    const divTimeElement = document.createElement("div");
    divTimeElement.classList.add("resume-position-time");

    const timeText = document.createTextNode(`${_experience.time.start} - ${_experience.time.end}`);
    divTimeElement.append(timeText);

    divPositionElement.appendChild(h3PositionElement);
    divPositionElement.appendChild(divCompanyElement);
    divHeaderElement.appendChild(divPositionElement);
    divHeaderElement.appendChild(divTimeElement);

    return divHeaderElement;
  };

  const createDivContentElement = (experience) => {
    const _experience = {};
    Object.assign(_experience, experience);

    const divContentElement = document.createElement("div");
    divContentElement.classList.add("resume-timeline-item-desc");

    const pDescription = document.createElement("p");
    const descriptionExperienceText = document.createTextNode(_experience.description);
    pDescription.append(descriptionExperienceText);

    const h4Element = document.createElement("h4");
    h4Element.classList.add("resume-timeline-item-desc-heading");
    h4Element.classList.add("font-weight-bold");

    const descriptionTechText = document.createTextNode("Technologies used:");
    h4Element.append(descriptionTechText);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-inline");

    _experience.technologies.forEach((tech) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-inline-item");

      const spanElement = document.createElement("span");
      spanElement.classList.add("badge");
      spanElement.classList.add("badge-primary");
      spanElement.classList.add("badge-pill");

      const technologyText = document.createTextNode(tech);
      spanElement.append(technologyText);

      liElement.appendChild(spanElement);
      ulElement.appendChild(liElement);
    });

    divContentElement.appendChild(pDescription);
    divContentElement.appendChild(h4Element);
    divContentElement.appendChild(ulElement);

    return divContentElement;
  };

  const appendElementsInSection = () => {
    _resume.experience.reverse().forEach((exp) => {
      const articleElement = createArticleElement();
      const divHeaderElement = createDivHeaderElement(exp);
      const divContentElement = createDivContentElement(exp);

      articleElement.appendChild(divHeaderElement);
      articleElement.appendChild(divContentElement);
      divElement.appendChild(articleElement);
    });
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
  createExperienceSection(data).appendElementsInSection();
};

init();
