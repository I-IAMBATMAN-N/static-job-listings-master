const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

// jobs.forEach((e) => {
//   console.log(e.id);
// });

const listedJobs = document.querySelector(".listed-jobs");
const featuredTechs = document.querySelector(".featured-techs");

console.log(listedJobs);

const jobHTML = function (object) {
  function returnFeaturesHTML() {
    let returnedHTML = ``;
    object.languages.forEach((e) => {
      returnedHTML += `<span class="featured-tech">${e}</span>`;
    });
    returnedHTML += `<span class="featured-tech">${object.level}</span>`;
    object.tools.forEach((e) => {
      returnedHTML += `<span class="featured-tech">${e}</span>`;
    });
    return returnedHTML;
  }
  return `
  <article class="listed-job active">
    <div class="listed-job--img-container">
      <img src="${
        object.logo
      }" alt="Hiring Company Logo" class="listed-job--img" />
    </div>
    <header class="listed-job--header">
    <div class="header--subheadings">
      <h2 class="heading-2">${object.company}</h2>
      <h3 style="${object.new ? "" : "display: none"}" class="heading-tag">${
    object.new ? "New!" : ""
  }</h3>
      <h3 style="${object.new ? "" : "display: none"}"
      class="heading-tag featured">${object.new ? "Featured" : ""}</h3>
    </div>
      <h1 class="heading-1">${object.position}</h1>
      <div class="job-info">
        <p class="job-info--text">${object.postedAt}</p>
        <p class="job-info--text">${object.contract}</p>
        <p class="job-info--text">${object.location}</p>
      </div>
    </header>
    <section class="featured-techs">
      ${returnFeaturesHTML()}
    </section>
  </article>`;
};
jobs.forEach((e) => {
  listedJobs.innerHTML += jobHTML(e);
});
