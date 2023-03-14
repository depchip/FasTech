// SETTING UP CAREERS

const jobs = [
  {
    jobName: "Graphic Designer",
    jobType: "Engineering",
    jobCategory: "100% Remote",
    jobApplyUrl: "https://forms.gle/WoiNgB4w4pjLa1bf9",
  },
  {
    jobName: "Buisness Development Executive",
    jobType: "Sales",
    jobCategory: "100% Remote",
    jobApplyUrl: "https://forms.gle/WoiNgB4w4pjLa1bf9",
  },
  {
    jobName: "Call Center Representative",
    jobType: "Sales",
    jobCategory: "100% Remote",
    jobApplyUrl: "https://forms.gle/WoiNgB4w4pjLa1bf9",
  },
  {
    jobName: "Social Media Specialist",
    jobType: "Marketing",
    jobCategory: "100% Remote",
    jobApplyUrl: "https://forms.gle/WoiNgB4w4pjLa1bf9",
  },
];

const divThree = document.querySelector("#jobs-list");

jobs.forEach((job) => {
  const div = document.createElement("div");
  div.setAttribute("class", "job");

  const heading = document.createElement("h3");
  heading.textContent = job.jobName;

  const discOne = document.createElement("p");
  discOne.textContent = job.jobType;

  const discTwo = document.createElement("p");
  discTwo.textContent = job.jobCategory;

  const link = document.createElement("a");
  link.setAttribute("href", job.jobApplyUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("class", "job-button btn btn-primary has-before has-after");
  link.textContent = "Apply Now";

  div.append(heading);
  div.append(discOne);
  div.append(discTwo);
  div.append(link);

  divThree.append(div);
});
