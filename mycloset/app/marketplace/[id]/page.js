
export default async function Product({params}){

    const id = await params.id

    return(
        <h1>Product {id}</h1>
    )
}