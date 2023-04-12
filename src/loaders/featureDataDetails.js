import { getJobInfo } from "../utilities/fakedb";

const featureDataDetails = async() =>{
    const loaderData = await fetch('/data.json')
    const features = await loaderData.json();
    // console.log(feature);

    const storedJob = getJobInfo()
    const savedJob = [];
    for(const id in storedJob) {
        const addedProduct = features.find(feature => feature.id === id);
        if(addedProduct){
            const quantity = storedJob[id]
            addedProduct.quantity = quantity
            savedJob.push(addedProduct)
        }
    }
    return savedJob;


}

export default featureDataDetails;