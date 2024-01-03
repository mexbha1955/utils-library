export const pluck = (elements : any, field : any) =>{
    return elements.map((element : any) => element[field]);
};