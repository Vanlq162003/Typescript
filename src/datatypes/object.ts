// object
const obj:{name:string,age?:number,address?:string}={
    name:"Than",
    age:20,
}

// Interface
interface Book {
    authors: {id: number, name: string, slug:string}[],
    book_cover: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller,
    desscription:string,
    image: image,
    list_price: number,
    name: string,
    original_price: string,
    quantity_sold:quantity_sold,
    rating_average:number,
    short_description ?:string
    specifications:{name:string,atributes:{code:string,name:string,value:string}},
    id:number

}

interface image{
    base_url:string,
    is_gallery:boolean,
    label?:string,
    large_url:string,
    medium_url:string,
    position?:string,
    small_url:string,
    thumbnail:string

}

interface quantity_sold{
    text:string,
    value:number
}

interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}

let book: Book;

let book2: Book;

let seller: Seller;
