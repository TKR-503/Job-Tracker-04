
function showTab(tab) {
    currentTab = tab;
    renderJobs();
}

function setInterview(id) {
    const job = jobs.find(j => j.id === id);
    job.status = "interview";
    renderJobs();
}

function setRejected(id) {
    const job = jobs.find(j => j.id === id);
    job.status = "rejected";
    renderJobs();
}
