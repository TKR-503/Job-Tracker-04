
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

  renderJobs();
}
