// Step 1: Create dummy data to represent your database
const jobListings = [
    {
        id: 1,
        title: "Need help with wheat harvesting",
        postedBy: "Ramesh K.",
        skill: "Manual Farming",
        tags: ["Farming", "Urgent"],
        type: "job" // 'job' or 'service'
    },
    {
        id: 2,
        title: "I can repair mobile phones",
        offeredBy: "Sunita M.",
        skill: "Electronics Repair",
        tags: ["Tech", "Services"],
        type: "service"
    },
    {
        id: 3,
        title: "Looking for a carpenter to fix a door",
        postedBy: "Anil P.",
        skill: "Carpentry",
        tags: ["Household", "Construction"],
        type: "job"
    }
];

// Step 2: Function to display the jobs on the page
function displayJobs() {
    const listingsSection = document.querySelector('.listings-section');
    // Clear existing content (but keep the title and filters)
    listingsSection.innerHTML = `
        <h2>Available Work & Services</h2>
        <div class="filters">
            <button>All</button> <button>Farming</button> <button>Construction</button> <button>Tech</button>
        </div>`;

    jobListings.forEach(job => {
        // Create a new div element for the card
        const card = document.createElement('div');
        card.className = 'job-card';

        // Populate the card with job data
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>${job.type === 'job' ? 'Posted by' : 'Offered by'}:</strong> ${job.postedBy || job.offeredBy}</p>
            <p><strong>Skill:</strong> ${job.skill}</p>
            <div class="tags">
                ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button onclick="showDetails(${job.id})">${job.type === 'job' ? 'View Details' : 'Contact Me'}</button>
        `;
        
        // Add the card to the listings section
        listingsSection.appendChild(card);
    });
}

// Step 3: Function to handle clicks (for now, just a placeholder)
function showDetails(jobId) {
    // In a real app, this would open a new page or a pop-up (modal)
    // with more details and the proposal form.
    alert("You clicked on job ID: " + jobId + ". Here you would show a form to make a proposal.");
}


// Step 4: Run the function when the page loads
window.onload = function() {
    displayJobs();
};
