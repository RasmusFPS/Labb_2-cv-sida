const username = "RasmusFPS";
const projectsContainer = document.getElementById("projects-container");
const loadingIndicator = document.getElementById("loading-indicator");

async function fetchGithubrepo() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if(!response.ok){
        throw new Error("Couldnt find the data" + response.statusText)
    }

    const repos = await response.json();

    loadingIndicator.style.display = "none";

    repos.forEach (repo => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card"

        const desc = repo.description ? repo.description : "no description"

        projectCard.innerHTML = `<h3>${repo.name}</h3>
        <p>${desc}</p>
        <a href="${repo.html_url}" target="_blank">Se projektet på github</a>`

        projectsContainer.appendChild(projectCard);
    });
}

fetchGithubrepo();

