import Image from "next/image";
import { Signin } from "./components/Signin"
import { Homebody } from "./components/Homebody"
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Homebody/>
      <Link href="/marketplace" style = {{color: 'black', textDecoration: 'none'}}>Log In</Link>
    </div>
  );
}
