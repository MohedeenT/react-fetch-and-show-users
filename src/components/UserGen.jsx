export default function UserGen({data}){
    return(
    <div key={crypto.randomUUID()} className='col-2 user'>
          <img src={data.picture.large} alt={data.name.first} />
          <h3>Name: {data.name.title}{data.name.first} {data.name.last}</h3>
        </div>
        )
}