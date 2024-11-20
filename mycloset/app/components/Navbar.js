import Link from 'next/link'

export const Navbar = () => {
    return(
        <nav>
            <Link href="/">Home</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/closet">Closet</Link>
        </nav>
    )
}