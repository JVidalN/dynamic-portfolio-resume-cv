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
    linkElement.classList.add("btn", "card_btn");
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

const createPrimaryInfoSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divPrimaryElement = document.querySelector("div.primary-info");

  const createH1NameElement = () => {
    const h1Element = document.createElement("h1");
    h1Element.classList.add("name", "mt-0", "mb-1", "text-white", "text-uppercase");

    const h1Text = document.createTextNode(_resume.name);
    h1Element.append(h1Text);

    return h1Element;
  };

  const createDivCurrentPositionElement = () => {
    const divElement = document.createElement("div");
    divElement.classList.add("title", "mb-3");

    const divText = document.createTextNode(_resume.currentPosition);
    divElement.append(divText);

    return divElement;
  };

  const createUlContactElement = () => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-unstyled");

    const liElement = document.createElement("li");
    liElement.classList.add("mb-2");

    const linkElement = document.createElement("a");
    linkElement.href = `mailto:${_resume.contact.email}`;

    const iElement = document.createElement("i");
    iElement.classList.add("far", "fa-envelope", "fa-fw", "mr-2");
    iElement.setAttribute("data-fa-transform", "grow-3");

    const emailText = document.createTextNode(_resume.contact.email);

    linkElement.appendChild(iElement);
    linkElement.append(emailText);
    liElement.appendChild(linkElement);
    ulElement.appendChild(liElement);

    return ulElement;
  };

  const appendElementsInSection = () => {
    const h1NameElement = createH1NameElement();
    const divCurrentPositionElement = createDivCurrentPositionElement();
    const ulContactElement = createUlContactElement();
    divPrimaryElement.appendChild(h1NameElement);
    divPrimaryElement.appendChild(divCurrentPositionElement);
    divPrimaryElement.appendChild(ulContactElement);
  };

  return { appendElementsInSection };
};

const createSecondaryInfoSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divSecondaryElement = document.querySelector("div.secondary-info");

  const createUlElement = () => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("resume-social", "list-unstyled");

    return ulElement;
  };

  const createLiElement = (mSocial) => {
    const liElement = document.createElement("li");
    liElement.classList.add("mb-3");

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", mSocial.url);
    linkElement.setAttribute("target", "_blank");

    const spanElement = document.createElement("span");
    spanElement.classList.add("fa-container", "text-center", "mr-2");

    const iElement = document.createElement("i");
    mSocial.name === "website"
      ? iElement.classList.add("fas", `fa-globe`)
      : iElement.classList.add("fab", `fa-${mSocial.name}`, "fa-fw");

    let pattern = /http(s?):\/\/(www.)?/g;
    const socialText = document.createTextNode(mSocial.url.replace(pattern, ""));

    spanElement.appendChild(iElement);
    linkElement.appendChild(spanElement);
    linkElement.append(socialText);
    liElement.appendChild(linkElement);

    return liElement;
  };

  const appendElementsInDiv = () => {
    const ulSocialElement = createUlElement();
    _resume.social.forEach((mSocial) => {
      const liElement = createLiElement(mSocial);
      ulSocialElement.appendChild(liElement);
    });
    divSecondaryElement.appendChild(ulSocialElement);
  };

  return { appendElementsInDiv };
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
    articleElement.classList.add("resume-timeline-item", "position-relative", "pb-5");

    return articleElement;
  };

  const createDivHeaderElement = (experience) => {
    const _experience = {};
    Object.assign(_experience, experience);
    const divHeaderElement = document.createElement("div");
    divHeaderElement.classList.add("resume-timeline-item-header", "mb-2");

    const divPositionElement = document.createElement("div");
    divPositionElement.classList.add("d-flex", "flex-column", "flex-md-row");

    const h3PositionElement = document.createElement("h3");
    h3PositionElement.classList.add("resume-position-title", "font-weight-bold", "mb-1");

    const positionText = document.createTextNode(_experience.position);
    h3PositionElement.append(positionText);

    const divCompanyElement = document.createElement("div");
    divCompanyElement.classList.add("resume-company-name", "ml-auto");

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
    pDescription.innerHTML = pDescription.innerText.split(".").join(".</br>");

    const h4Element = document.createElement("h4");
    h4Element.classList.add("resume-timeline-item-desc-heading", "font-weight-bold");

    const descriptionTechText = document.createTextNode("Technologies used:");
    h4Element.append(descriptionTechText);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-inline");

    _experience.technologies.forEach((tech) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-inline-item");

      const spanElement = document.createElement("span");
      spanElement.classList.add("badge", "badge-primary", "badge-pill");

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
  const _resume = {};
  Object.assign(_resume, data);

  createPrimaryInfoSection(_resume).appendElementsInSection();
  createSecondaryInfoSection(_resume).appendElementsInDiv();
  createResumeSection(_resume).appendElementsInSection();
  createExperienceSection(_resume).appendElementsInSection();
  generatePortfolio();
};

init();
