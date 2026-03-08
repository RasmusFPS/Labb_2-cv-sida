async function getData() {
  const response = await fetch("cv.json");
  if (!response.ok) {
    throw new Error("Kunde inte hämta datan: " + response.statusText);
  }
  const data = await response.json();
  showEducation(data.education);
  showWork(data.work);
  console.log(data.education);
}

getData();

function showEducation(education) {
  const container = document.querySelector("#education-container");

  education.forEach((edu) => {
    const p = document.createElement("p");
    p.textContent = `${edu.title} | ${edu.school} | ${edu.length}`;
    container.appendChild(p);
  });
}

function showWork(work) {
  const container = document.querySelector("#work-container");
  work.forEach((work) => {
    const p = document.createElement("p");
    p.textContent = `${work.company} | ${work.date}`;
    container.appendChild(p);
  });
}
