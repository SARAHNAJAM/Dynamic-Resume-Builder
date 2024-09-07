"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeSection = document.getElementById('resume');
    const addEducationButton = document.getElementById('addEducation');
    const addExperienceButton = document.getElementById('addExperience');
    let educationCounter = 0;
    let experienceCounter = 0;
    const createEducationField = () => {
        var _a;
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
        (_a = document.getElementById('education')) === null || _a === void 0 ? void 0 : _a.appendChild(educationDiv);
    };
    const createExperienceField = () => {
        var _a;
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
        (_a = document.getElementById('experience')) === null || _a === void 0 ? void 0 : _a.appendChild(experienceDiv);
    };
    const generateResume = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
        let educationHtml = '';
        document.querySelectorAll('.education-item').forEach((item) => {
            const title = item.querySelector('input[id^="edu-title"]').value;
            const institution = item.querySelector('input[id^="edu-institution"]').value;
            const year = item.querySelector('input[id^="edu-year"]').value;
            educationHtml += `<li>${title} at ${institution} (${year})</li>`;
        });
        let experienceHtml = '';
        document.querySelectorAll('.experience-item').forEach((item) => {
            const title = item.querySelector('input[id^="exp-title"]').value;
            const company = item.querySelector('input[id^="exp-company"]').value;
            const year = item.querySelector('input[id^="exp-year"]').value;
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
        var _a, _b;
        if (event.target.classList.contains('remove-education')) {
            (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (event.target.classList.contains('remove-experience')) {
            (_b = event.target.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        }
    });
});
