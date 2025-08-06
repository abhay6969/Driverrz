import { useState } from "react";
import { useLocation } from "react-router"
import { TravelForm } from "../components/clientForms/TravelForm";


export const City = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const city = params.get('city');
    const [form, setForm] = useState(false);
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");

    return (
        <div>
            <h1>City : {city}</h1>
            <button onClick={()=>setForm(true)}>Book Driver</button>
            {
                form && <TravelForm setForm={setForm} setPickup={setPickup} setDrop={setDrop} handleSubmit={async()=>{}}/>
            }
        </div>
        
    )
}