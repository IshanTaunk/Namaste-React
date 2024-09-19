import React, { useEffect, useState } from 'react'
//THis is a custoom hook. Whenever the user loses internet connection, the status will switch to offline.

const useOnlineStatus = () => {
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
    },[])

  return isOnline;
}

export default useOnlineStatus