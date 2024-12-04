import { Topbody } from "./Topbody";
import { Outfit } from "./Outfit";

export default async function Closet(){
    return(
        <div>
            <h1>User Closet</h1>
            <Topbody/>
            <Outfit/>
        </div>
    )
}