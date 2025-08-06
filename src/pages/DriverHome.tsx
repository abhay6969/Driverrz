export const DriverHome = ()=>{
   return(
      <div>
         <h1>Driver Home </h1>
         <button>Logout</button>
         <button onClick={()=>{window.location.href="/driver/leads"}}>All leads</button>
      </div>
   )
}