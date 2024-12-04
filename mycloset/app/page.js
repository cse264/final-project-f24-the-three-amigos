import Image from "next/image";
import { Signin } from "./components/Signin"
import { Homebody } from "./components/Homebody"

export default function Home() {
  return (
    <div>
      <Homebody/>
      <Link href="/marketplace">Log In</Link>
    </div>
  );
}
