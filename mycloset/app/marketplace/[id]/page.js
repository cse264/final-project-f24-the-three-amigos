import { Productpage } from "./marketplace/components/Product"

export default async function Product({params}){

    const id = await params.id

    return(
        <div>
            <h1>Product {id}</h1>
            <Productpage/>
        </div>
        
        
    )
}