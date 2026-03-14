
function showTab(tab) {
    currentTab = tab;
    renderJobs();
     updateTabStyles();
}

function setInterview(id) {
    const job = jobs.find(function(j) {
        return j.id === id;
     });
    job.status = "interview";
    renderJobs();
}

function setRejected(id) {
    const job = jobs.find(function(j) { 
        return j.id === id; 
    });
    job.status = "rejected";
    renderJobs();
}

function deleteJob(id) {
    const job = jobs.find(function(j) { 
        return j.id === id; 
    });
     if (currentTab === "all") {

        const index = jobs.findIndex(function(j) { 
            return j.id === id; 
        });
        jobs.splice(index, 1);

    } else {
         job.status = "all";
}
    renderJobs();
}

function updateCounts() {

   const interview = jobs.filter(function(j) {
         return j.status === "interview";
    }).length;
    
    const rejected = jobs.filter(function(j) {
        return j.status === "rejected";
    }).length;

   document.getElementById("interviewCount").innerText = interview;
   document.getElementById("rejectedCount").
   innerText = rejected; 

   document.getElementById("totalCount").innerText = jobs.length;
   
   document.getElementById("sectionCount").innerText = jobs.length;

}

function updateTabStyles(){

  const tabAll = document.getElementById("tabAll");
  const tabInterview = document.getElementById("tabInterview");
  const tabRejected = document.getElementById("tabRejected");

  // Reset style

  tabAll.className = "tabBtn px-4 py-2 rounded bg-gray-200 text-gray-700  transition";

  tabInterview.className = "tabBtn px-4 py-2 rounded bg-gray-200 text-gray-700 transition";

  tabRejected.className = "tabBtn px-4 py-2 rounded bg-gray-200 text-gray-700  transition";

  // Apply active style

  if(currentTab === "all"){
    tabAll.className = "tabBtn px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-500 transition";
  }

  else if(currentTab === "interview"){
    tabInterview.className = "tabBtn px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-500 transition";
  }

  else {
    tabRejected.className = "tabBtn px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-500 transition";
  }

}


renderJobs();

