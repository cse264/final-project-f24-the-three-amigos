
export default async function Marketplace() {
    const res = await fetch("@/api/users") //Replace this with the url to fetch all of the products to browse
    const products = await res.json()

    return (
        //Place to show products
        <ul>
            {products.map(product => (
                <li>
                    {product.name} ({product.description})
                </li>
            ))}
        </ul>
    )
}