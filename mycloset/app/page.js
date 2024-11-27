import Image from "next/image";
import { Signin } from "./components/Signin"

export default function Home() {
  return (
    <div>
      <h1 style={{color:"red"}}>Welcome to myCloset</h1>
      <h2>Log In Place holder</h2>
      <Signin/>
    </div>
  );
}
