function createPosts(num) {
    const mainContainer = document.querySelector('.main-content');
    for (let i = 0; i<num; i++) {
        const postContainer = document.createElement('div');
        postContainer.className = "post-container"
        const postImage = document.createElement('img');
        const postContentContainer = document.createElement('div');
        const titleContainer = document.createElement('div');
        titleContainer.className = "project-title";
        const heading = document.createElement('h3');
        heading.textContent = "Project Name"
        const githubIcon = document.createElement('i');
        const linkIcon = document.createElement('i');
        githubIcon.classList.add('fa-brands', 'fa-github');
        linkIcon.classList.add('fa-solid', 'fa-up-right-from-square');
        titleContainer.append(heading, githubIcon, linkIcon);
        const postText = document.createElement('p');
        postText.textContent = "Short description of the project. Just a couple lines will do."
        postContentContainer.append(titleContainer, postText);
        postContainer.append(postImage, postContentContainer);
        mainContainer.append(postContainer);
    }
}

createPosts(6);