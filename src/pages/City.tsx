import { useLocation, useParams } from "react-router"


export const City = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const city = params.get('city');

    return (
        <div>
            <h1>City : {city}</h1>
            <button>Book Driver</button>
        </div>
    )
}