document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeSection = document.getElementById('resume') as HTMLDivElement;
    const addEducationButton = document.getElementById('addEducation') as HTMLButtonElement;
    const addExperienceButton = document.getElementById('addExperience') as HTMLButtonElement;
    
    let educationCounter = 0;
    let experienceCounter = 0;

    const createEducationField = () => {
        educationCounter++;
        const educationDiv = document.createElement('div');
        educationDiv.classList.add('education-item');
        educationDiv.innerHTML = `
            <label for="edu-title-${educationCounter}">Degree/Title:</label>
            <input type="text" id="edu-title-${educationCounter}" required>
            <label for="edu-institution-${educationCounter}">Institution:</label>
            <input type="text" id="edu-institution-${educationCounter}" required>
            <label for="edu-year-${educationCounter}">Year:</label>
            <input type="text" id="edu-year-${educationCounter}" required>
            <button type="button" class="remove-education">Remove</button>
        `;
        document.getElementById('education')?.appendChild(educationDiv);
    };

    const createExperienceField = () => {
        experienceCounter++;
        const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('experience-item');
        experienceDiv.innerHTML = `
            <label for="exp-title-${experienceCounter}">Job Title:</label>
            <input type="text" id="exp-title-${experienceCounter}" required>
            <label for="exp-company-${experienceCounter}">Company:</label>
            <input type="text" id="exp-company-${experienceCounter}" required>
            <label for="exp-year-${experienceCounter}">Year:</label>
            <input type="text" id="exp-year-${experienceCounter}" required>
            <button type="button" class="remove-experience">Remove</button>
        `;
        document.getElementById('experience')?.appendChild(experienceDiv);
    };

    const generateResume = () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');

        let educationHtml = '';
        document.querySelectorAll('.education-item').forEach((item) => {
            const title = (item.querySelector('input[id^="edu-title"]') as HTMLInputElement).value;
            const institution = (item.querySelector('input[id^="edu-institution"]') as HTMLInputElement).value;
            const year = (item.querySelector('input[id^="edu-year"]') as HTMLInputElement).value;
            educationHtml += `<li>${title} at ${institution} (${year})</li>`;
        });

        let experienceHtml = '';
        document.querySelectorAll('.experience-item').forEach((item) => {
            const title = (item.querySelector('input[id^="exp-title"]') as HTMLInputElement).value;
            const company = (item.querySelector('input[id^="exp-company"]') as HTMLInputElement).value;
            const year = (item.querySelector('input[id^="exp-year"]') as HTMLInputElement).value;
            experienceHtml += `<li>${title} at ${company} (${year})</li>`;
        });

        resumeSection.innerHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Location: ${location}</p>
            <h3>Education</h3>
            <ul>${educationHtml}</ul>
            <h3>Work Experience</h3>
            <ul>${experienceHtml}</ul>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    };

    addEducationButton.addEventListener('click', createEducationField);
    addExperienceButton.addEventListener('click', createExperienceField);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        generateResume();
    });

    document.addEventListener('click', (event) => {
        if ((event.target as HTMLButtonElement).classList.contains('remove-education')) {
            (event.target as HTMLButtonElement).parentElement?.remove();
        }
        if ((event.target as HTMLButtonElement).classList.contains('remove-experience')) {
            (event.target as HTMLButtonElement).parentElement?.remove();
        }
    });
});








