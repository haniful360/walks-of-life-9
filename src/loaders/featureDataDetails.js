import { getShoppingCart } from "../utilities/fakedb";

const featureDataDetails = async() =>{
    const loaderData = await fetch('/data.json')
    const features = await loaderData.json();
    // console.log(feature);

    const storedCart = getShoppingCart()
    const savedCart = [];
    for(const id in storedCart) {
        const addedProduct = features.find(feature => feature.id === id);
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }
    return savedCart;


}

export default featureDataDetails;