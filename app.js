document.addEventListener("DOMContentLoaded", function () {
    function populateFeaturedJobs() {
        const mockData = {
            "featuredjobs": [
                {
                    "title": "Frontend Developer",
                    "company": "Tech Innovators Inc.",
                    "location": "San Francisco, CA",
                    "description": "We are seeking a talented Frontend Developer to join our dynamic team. If you have a passion for creating responsive and user-friendly web interfaces, apply now!",
                    "applyLink": "#"
                },
                {
                    "title": "Data Scientist",
                    "company": "Data Insights Co.",
                    "location": "New York, NY",
                    "description": "Join our data science team and work on cutting-edge projects that leverage machine learning and statistical analysis. Apply your skills to extract insights from large datasets.",
                    "applyLink": "#"
                },
                {
                    "title": "UX/UI Designer",
                    "company": "Creative Designs Studio",
                    "location": "Los Angeles, CA",
                    "description": "We are looking for a talented UX/UI Designer to create visually stunning and intuitive user interfaces. If you have a keen eye for design and a passion for user experience, apply now!",
                    "applyLink": "#"
                }
            ]
        };


        const featuredJobsContainer = document.getElementById("jobs-data.json");

        mockData.featuredJobs.forEach(job => {

            const listItem = document.createElement("li");


            const jobTitle = document.createElement("h3");
            jobTitle.textContent = job.title;

            const companyInfo = document.createElement("p");
            companyInfo.textContent = `Company: ${job.company}`;

            const locationInfo = document.createElement("p");
            locationInfo.textContent = `Location: ${job.location}`;

            const description = document.createElement("p");
            description.textContent = job.description;

            const applyLink = document.createElement("a");
            applyLink.href = job.applyLink;
            applyLink.textContent = "Apply Now";

            listItem.appendChild(jobTitle);
            listItem.appendChild(companyInfo);
            listItem.appendChild(locationInfo);
            listItem.appendChild(description);
            listItem.appendChild(applyLink);

            featuredJobsContainer.appendChild(listItem);
        });
    }

    populateFeaturedJobs();
});

// app.js

// Function to handle user sign up
async function signUp(event) {
    event.preventDefault();

    try {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        alert(data.message);
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
}

// Function to handle user login
async function login(event) {
    event.preventDefault();

    try {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        alert('Login successful!');
    } catch (error) {
        console.error(error);
        alert('Login failed. Please check your credentials and try again.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Your initialization code...
    fetchJobs(); // Assuming you have a function like this in your script
});

function fetchJobs() {
    // Your code to fetch jobs...
}

function applyForJob(jobId) {
    // Your code to apply for a job...
}

// More of your JavaScript code...
