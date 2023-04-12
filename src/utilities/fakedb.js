// use local storage to manage job data
const addToDb = id => {
    let jobInfo = getJobInfo();
    // add quantity

    const quantity = jobInfo[id];
    if (!quantity) {
        jobInfo[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobInfo[id] = newQuantity;
    }
    localStorage.setItem('job-info', JSON.stringify(jobInfo));
}

const removeFromDb = id => {
    const jobInfo = getJobInfo();
    if (id in jobInfo) {
        delete jobInfo[id];
        localStorage.setItem('job-info', JSON.stringify(jobInfo));
    }
}

const getJobInfo = () => {
    let jobInfo = {};

    //get the job info from local storage
    const storedCart = localStorage.getItem('job-info');
    if (storedCart) {
        jobInfo = JSON.parse(storedCart);
    }
    return jobInfo;
}

const deleteJobInfo = () => {
    localStorage.removeItem('job-info');
}

export {
    addToDb,
    removeFromDb,
    getJobInfo as getJobInfo,
    deleteJobInfo
}