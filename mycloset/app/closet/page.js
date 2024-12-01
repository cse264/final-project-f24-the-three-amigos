import { useEffect, useState } from 'react';
import { Client } from 'pg';

export default async function Closet({ username }){
    const [closetItems, setClosetItems] = useState([])
    const [userInfo, setUserInfo] = useState({})

    //Fetches user closet on page render
    useEffect(() => {
        async function fetchData() {
            try{
                const res = await fetch(`/api/closet?username=${username}`)
                const data = await res.json()
                setClosetItems(data.closet)
                setUserInfo(data.user)
            } catch(err) {
                console.error("Error fetching closet data")
            }
        }
        fetchData()
    }, [])

    return(
        <div>
            <h1>Closet</h1>
        </div>
    )
}