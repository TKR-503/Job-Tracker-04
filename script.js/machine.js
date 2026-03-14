
function showTab(tab) {
    currentTab = tab;
    renderJobs();
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
    const index = jobs.findIndex(function(j) { 
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
}

function updateCounts() {

   const interview = jobs.filter(function(job) {
         return job.status === "interview";
    }).length;
    
    const rejected = jobs.filter(function(job) {
        return job.status === "rejected";
    }).length;

   document.getElementById("interviewCount").innerText = interview;
   document.getElementById("rejectedCount").
   innerText = rejected; 

   document.getElementById("totalCount").innerText = jobs.length;
   
   document.getElementById("sectionCount").innerText = jobs.length;

}




  renderJobs();

