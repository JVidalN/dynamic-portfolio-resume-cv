"use strict";

import { data } from "./data.mjs";

const createPortfolioElement = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divPortfolio = document.querySelector("div.portfolio-section-content");

  const getGitHubPublicData = (urlRepository) => {
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

    return ulElement;
  };

  const appendElements = () => {
    const ulElement = createUlElement();
    getGitHubPublicData(_resume.urlRepository).then((repositories) => {
      repositories.forEach((repository) => {
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
    });

    divPortfolio.appendChild(ulElement);
  };

  return { appendElements };
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

  const appendElements = () => {
    const h1NameElement = createH1NameElement();
    const divCurrentPositionElement = createDivCurrentPositionElement();
    const ulContactElement = createUlContactElement();
    divPrimaryElement.appendChild(h1NameElement);
    divPrimaryElement.appendChild(divCurrentPositionElement);
    divPrimaryElement.appendChild(ulContactElement);
  };

  return { appendElements };
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

  const appendElements = () => {
    const ulSocialElement = createUlElement();
    _resume.social.forEach((mSocial) => {
      const liElement = createLiElement(mSocial);
      ulSocialElement.appendChild(liElement);
    });
    divSecondaryElement.appendChild(ulSocialElement);
  };

  return { appendElements };
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

  const appendElements = () => {
    const divResumeElement = createDivResumeContent();
    sectionElement.appendChild(divResumeElement);
  };

  return { appendElements };
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

  const appendElements = () => {
    _resume.experience.reverse().forEach((exp) => {
      const articleElement = createArticleElement();
      const divHeaderElement = createDivHeaderElement(exp);
      const divContentElement = createDivContentElement(exp);

      articleElement.appendChild(divHeaderElement);
      articleElement.appendChild(divContentElement);
      divElement.appendChild(articleElement);
    });
  };

  return { appendElements };
};

const createSkillSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divElement = document.querySelector("div.resume-section-content.skill-section");

  const createDivFrontEndSkills = (skills) => {
    const divSkill = document.createElement("div");
    divSkill.classList.add("resume-skill-item");

    const h4TitleElement = document.createElement("h4");
    h4TitleElement.classList.add("resume-skills-cat", "font-weight-bold");

    const titleText = document.createTextNode("Frontend");
    h4TitleElement.append(titleText);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-unstyled", "mb-4");

    skills.forEach((skill) => {
      const liElement = document.createElement("li");
      liElement.classList.add("mb-2");

      const divNameSkill = document.createElement("div");
      divNameSkill.classList.add("resume-skill-name");

      const skillNameText = document.createTextNode(skill.name);
      divNameSkill.append(skillNameText);

      const divProgress = document.createElement("div");
      divProgress.classList.add("progress", "resume-progress");

      const divProgressBar = document.createElement("div");
      divProgressBar.classList.add("progress-bar", "theme-progress-bar-dark");
      divProgressBar.setAttribute("role", "progressbar");
      divProgressBar.setAttribute("style", `width: ${skill.proficiency}`);
      divProgressBar.setAttribute("aria-valuenow", "25");
      divProgressBar.setAttribute("aria-valuemin", "0");
      divProgressBar.setAttribute("aria-valuemax", "100");

      divProgress.appendChild(divProgressBar);
      liElement.appendChild(divNameSkill);
      liElement.appendChild(divProgress);
      ulElement.appendChild(liElement);
    });

    divSkill.appendChild(h4TitleElement);
    divSkill.appendChild(ulElement);

    return divSkill;
  };

  const createDivBackEndSkills = (skills) => {
    const divSkill = document.createElement("div");
    divSkill.classList.add("resume-skill-item");

    const h4TitleElement = document.createElement("h4");
    h4TitleElement.classList.add("resume-skills-cat", "font-weight-bold");

    const titleText = document.createTextNode("Backend");
    h4TitleElement.append(titleText);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-unstyled", "mb-4");

    skills.forEach((skill) => {
      const liElement = document.createElement("li");
      liElement.classList.add("mb-2");

      const divNameSkill = document.createElement("div");
      divNameSkill.classList.add("resume-skill-name");

      const skillNameText = document.createTextNode(skill.name);
      divNameSkill.append(skillNameText);

      const divProgress = document.createElement("div");
      divProgress.classList.add("progress", "resume-progress");

      const divProgressBar = document.createElement("div");
      divProgressBar.classList.add("progress-bar", "theme-progress-bar-dark");
      divProgressBar.setAttribute("role", "progressbar");
      divProgressBar.setAttribute("style", `width: ${skill.proficiency}`);
      divProgressBar.setAttribute("aria-valuenow", "25");
      divProgressBar.setAttribute("aria-valuemin", "0");
      divProgressBar.setAttribute("aria-valuemax", "100");

      divProgress.appendChild(divProgressBar);
      liElement.appendChild(divNameSkill);
      liElement.appendChild(divProgress);
      ulElement.appendChild(liElement);
    });

    divSkill.appendChild(h4TitleElement);
    divSkill.appendChild(ulElement);

    return divSkill;
  };

  const createDivOtherSkills = (skills) => {
    const divSkill = document.createElement("div");
    divSkill.classList.add("resume-skill-item");

    const h4TitleElement = document.createElement("h4");
    h4TitleElement.classList.add("resume-skills-cat", "font-weight-bold");

    const titleText = document.createTextNode("Others");
    h4TitleElement.append(titleText);

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-inline");

    skills.forEach((skill) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-inline-item");

      const spanNameSkill = document.createElement("span");
      spanNameSkill.classList.add("badge", "badge-light");

      const skillNameText = document.createTextNode(skill);
      spanNameSkill.append(skillNameText);

      liElement.appendChild(spanNameSkill);
      ulElement.appendChild(liElement);
    });

    divSkill.appendChild(h4TitleElement);
    divSkill.appendChild(ulElement);

    return divSkill;
  };

  const appendElements = () => {
    const divFrontEndSkills = createDivFrontEndSkills(_resume.skills.frontend);
    const divBackEndSkills = createDivBackEndSkills(_resume.skills.backend);
    const divOtherSkills = createDivOtherSkills(_resume.skills.others);

    divElement.appendChild(divFrontEndSkills);
    divElement.appendChild(divBackEndSkills);
    divElement.appendChild(divOtherSkills);
  };

  return { appendElements };
};

const createEducationSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divElement = document.querySelector("div.resume-section-content.education-section");

  const createUlElement = () => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-unstyled");

    return ulElement;
  };

  const createLiElement = (education) => {
    const liElement = document.createElement("li");
    liElement.classList.add("mb-2");

    const divEducationDesccription = document.createElement("div");
    divEducationDesccription.classList.add("resume-degree", "font-weight-bold");

    const educationDescriptionText = document.createTextNode(
      `${education.degree.initial} in ${education.course}`
    );
    divEducationDesccription.append(educationDescriptionText);

    const divEducationInstituition = document.createElement("div");
    divEducationInstituition.classList.add("resume-degree-org");

    const educationInstituitionText = document.createTextNode(education.instituition);
    divEducationInstituition.append(educationInstituitionText);

    const divEducationTime = document.createElement("div");
    divEducationTime.classList.add("resume-degree-time");

    const educationTimeText = document.createTextNode(
      `${education.time.start} - ${education.time.end}`
    );
    divEducationTime.append(educationTimeText);

    liElement.appendChild(divEducationDesccription);
    liElement.appendChild(divEducationInstituition);
    liElement.appendChild(divEducationTime);

    return liElement;
  };

  const appendElements = () => {
    const ulElement = createUlElement();

    _resume.education.forEach((education) => {
      const liElement = createLiElement(education);
      ulElement.appendChild(liElement);
    });

    divElement.appendChild(ulElement);
  };

  return { appendElements };
};

const createLanguageSection = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const divElement = document.querySelector("div.resume-section-content.language-section");

  const createUlElement = () => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-unstyled", "resume-lang-list");

    return ulElement;
  };

  const createLiElement = (language) => {
    const liElement = document.createElement("li");
    liElement.classList.add("mb-2");

    const spanLanguageDesccription = document.createElement("span");
    spanLanguageDesccription.classList.add("resume-lang-name", "font-weight-bold");

    const languageDescriptionText = document.createTextNode(language.name);
    spanLanguageDesccription.append(languageDescriptionText);

    const smallLanguageProficiency = document.createElement("small");
    smallLanguageProficiency.classList.add("text-muted", "font-weight-normal");

    const languageProficiencyText = document.createTextNode(`(${language.proficiency})`);
    smallLanguageProficiency.append(languageProficiencyText);

    liElement.appendChild(spanLanguageDesccription);
    liElement.appendChild(smallLanguageProficiency);

    return liElement;
  };

  const appendElements = () => {
    const ulElement = createUlElement();

    _resume.languages.forEach((language) => {
      const liElement = createLiElement(language);
      ulElement.appendChild(liElement);
    });

    divElement.appendChild(ulElement);
  };

  return { appendElements };
};

const createTitle = (data) => {
  const _resume = {};
  Object.assign(_resume, data);

  const titleElement = document.querySelector("title");

  const appendElements = () => {
    const titleText = document.createTextNode(`${_resume.name} | ${_resume.currentPosition}`);
    titleElement.append(titleText);
  };

  return { appendElements };
};

const init = () => {
  const _resume = {};
  Object.assign(_resume, data);

  createTitle(_resume).appendElements();
  createPrimaryInfoSection(_resume).appendElements();
  createSecondaryInfoSection(_resume).appendElements();
  createResumeSection(_resume).appendElements();
  createExperienceSection(_resume).appendElements();
  createSkillSection(_resume).appendElements();
  createEducationSection(_resume).appendElements();
  createLanguageSection(_resume).appendElements();
  createPortfolioElement(_resume).appendElements();
};

init();
