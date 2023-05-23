export interface IProduct {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
};

export interface ICart extends IProduct {
    quantity:number
};

export interface IForm {
    email:string
};