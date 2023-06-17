import { useEffect, useState } from 'react';



export default function GetUsers() {

  const [data, setData] = useState([]); // State to hold the resolved data
  const [filtered, setFiltered] = useState([]); // for a separate array for the filtered users
  const [search, setSearch] = useState(""); // to update the search input from user

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
          setData(users)
          
        } catch (error) {
            console.log(error);
        }
    }   

    useEffect(()=>{
      setFiltered(data.filter((user)=>{
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        return name.toLowerCase().indexOf(search) > -1;
      }))
    },[search])


    if (search.length > 0) {
      return (<>
        <input 
        id="filter" 
        className="form-control mb-3 form-control-lg" 
        cplaceholder="Type to filer..."
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        />
        
        <div className="users row">
          {filtered.map((user) =>  (
            <div key={crypto.randomUUID()} className='col-2 user'>
              <img src={user.picture.large} alt={user.name.first} />
            <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
            </div>
            ))}
        </div>
        </>
      )
    } else
    return (<>
      <input 
      id="filter" 
      className="form-control mb-3 form-control-lg" 
      cplaceholder="Type to filer..."
      onChange={(e)=>{
        setSearch(e.target.value.toLowerCase())
      }}
      />
      
      <div className="users row">
        {data.map((user) =>  (
          <div key={crypto.randomUUID()} className='col-2 user'>
            <img src={user.picture.large} alt={user.name.first} />
            <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          </div>
          ))}
      </div>
      </>
    )
  }