import { Searchbar } from "./components/Searchbar"
export default async function Marketplace() {
    const res = await fetch("http://jsonplaceholder.typicode.com/users") //Replace this with the url to fetch all of the products to browse
    const products = await res.json()

    return (
        <div>
            <Searchbar/>
        <ul>
            {products.map(product => (
                <li>
                    {product.name} ({product.description})
                </li>
            ))}
        </ul></div>
        
    )
}