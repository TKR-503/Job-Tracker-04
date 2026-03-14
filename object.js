const jobs = [
    {
        id: 1,
        company: "Google",
        position: "Frontend Developer",
        location: "California, USA",
        type: "Remote",
        salary: "$120k",
        description: "Build modern UI using React and Tailwind.",
        status: "pending"
    },
    {
        id: 2,
        company: "Microsoft",
        position: "UI Designer",
        location: "USA",
        type: "Hybrid",
        salary: "$100k",
        description: "Design product interfaces.",
        status: "pending"
    },
    {
        id: 3,
        company: "Amazon",
        position: "Backend Developer",
        location: "Seattle, USA",
        type: "Full Time",
        salary: "$130k",
        description: "Work with Node.js APIs.",
        status: "pending"
    },
    {
        id: 4,
        company: "Netflix",
        position: "Software Engineer",
        location: "Remote",
        type: "Remote",
        salary: "$140k",
        description: "Streaming platform development.",
        status: "pending"
    },
    {
        id: 5,
        company: "Meta",
        position: "Mobile Developer",
        location: "USA",
        type: "Full Time",
        salary: "$125k",
        description: "React Native app development.",
        status: "pending"
    },
    {
        id: 6,
        company: "Tesla",
        position: "Full Stack Developer",
        location: "Texas, USA",
        type: "Hybrid",
        salary: "$135k",
        description: "Develop scalable applications.",
        status: "pending"
    },
    {
        id: 7,
        company: "Spotify",
        position: "Frontend Engineer",
        location: "Remote",
        type: "Remote",
        salary: "$110k",
        description: "Music platform UI development.",
        status: "pending"
    },
    {
        id: 8,
        company: "Adobe",
        position: "UI Engineer",
        location: "San Jose, USA",
        type: "Full Time",
        salary: "$115k",
        description: "Creative cloud interface design.",
        status: "pending"
    }
];


let currentTab = "all";

function renderJobs() {
    const container = document.getElementById("jobContainer");
    container.innerHTML = "";

    let filtered;

    if (currentTab === "all") {
        filtered = jobs;
    } else {
        filtered = jobs.filter(function(job) {
            return job.status === currentTab;
        });
    }

    if (filtered.length === 0) {
        container.innerHTML = `
      <div class="col-span-2 text-center p-10 bg-white rounded shadow">
        <p class="text-2xl font-bold">No jobs Available</p>
        <img class="mx-auto items-center" src="./jobs.png" alt="No jobs available">
        <p class="text-gray-500 mt-2">There are no jobs in this section.</p>
      </div>
    `;
        return;
    }

    filtered.forEach(function(job) {

        const card = document.createElement("div");
        card.className = "bg-white shadow rounded p-6 hover:shadow-lg transition relative";

        let statusBadge = "";



        if (job.status === "interview") {
            statusBadge = `<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">INTERVIEW</span>`;
        }

        if (job.status === "rejected") {
            statusBadge = `<span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">REJECTED</span>`;
        }

        card.innerHTML = `

<!-- DELETE ICON -->
   <button class="deleteBtn absolute top-3 right-3 text-gray-400 hover:text-red-500">
        <i class="fas fa-trash"></i>
   </button>

<div>

       <!-- JOB POSITION -->
  
       <h3 class="text-xl font-bold text-gray-800">${job.position}</h3> <br>

  <!-- STATUS BADGE BELOW POSITION -->
  
  ${statusBadge}

  <!-- COMPANY + LOCATION -->

  <p class="text-gray-800 mt-1">${job.company} • ${job.location}</p> <br>
</div>

<p class="text-sm mt-2 text-gray-800">${job.type} | ${job.salary}</p> 

<p class="mt-3 text-gray-800">${job.description}</p> 

<div class="flex gap-2 mt-4">

<button class="interviewBtn border border-green-500 text-green-700 px-3 py-1 rounded hover:bg-green-50">
Interview
</button>

<button class="rejectBtn border border-red-500 text-red-700 px-3 py-1 rounded hover:bg-red-50">
Reject
</button>

</div>
`;
  container.appendChild(card);


  // Event Listeners for buttons

   card.querySelector(".interviewBtn").addEventListener("click", function() {
            setInterview(job.id);
             updateCounts();
        });

        card.querySelector(".rejectBtn").addEventListener("click", function() {
            setRejected(job.id);
             updateCounts();
    
        });

        card.querySelector(".deleteBtn").addEventListener("click", function() {
            deleteJob(job.id);
            updateCounts();
            
        });

    });

  
    updateTabStyles();
  
}
