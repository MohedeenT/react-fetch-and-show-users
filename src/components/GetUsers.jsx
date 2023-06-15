import { useEffect, useState } from 'react';
import UserGen from './UserGen';


export default function GetUsers() {

  const [data, setData] = useState([]); // State to hold the resolved data

    useEffect(() => {
        getUsers()
        console.log('Page loaded');
      }, []);

      async function getUsers() {
        const url = 'https://randomuser.me/api/?inc=name,picture&results=48';
      
        try {
          const request = await fetch(url);
          const result = await request.json();
      
          const users = result.results;
          console.log(users);
          setData(users)
          
        } catch (error) {
            console.log(error);
        }
    }   
    
    return <>{data.map((user) =>  (
        < UserGen data={user}/>
      ))}</>
  }