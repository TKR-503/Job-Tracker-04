
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

function updateTabStyles() {

  const tabs = [
    { id: "tabAll", tab: "all" },
    { id: "tabInterview", tab: "interview" },
    { id: "tabRejected", tab: "rejected" }
];

   tabs.forEach(function(t) {

    const btn = document.getElementById(t.id);

    if (currentTab === t.tab) {
       
        btn.className = "tabBtn px-4 py-2 rounded font-medium transition bg-blue-500 text-white";
    } 
    
    else {
       
         btn.className = "tabBtn px-4 py-2 rounded font-medium transition bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white";
    }
   
});

} 

renderJobs();

