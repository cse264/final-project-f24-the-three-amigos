"use client";

import Image from "next/image";
import { Signin } from "./components/Signin"
import { Homebody } from "./components/Homebody"
import { UserProvider } from "./context/userContext";
import Link from "next/link";


export default function Home() {
  return(
      <Homebody/>
  );
}
