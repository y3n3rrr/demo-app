
//action creator, donen obje degeri action olarak adlandirilir, 
export const GetProducts = () => {
    const data = [1,2,3]
    return {
        type:"PRODUCTS",
        payload:data
    }
}