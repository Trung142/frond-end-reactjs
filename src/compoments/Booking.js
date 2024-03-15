import { useState } from "react";

const Booking = (props) => {
    const [value, setvalue] = useState();
    const handleUpload = (event) => {
        setvalue(event.target.value);
    }
    console.log(value);
    return (
        <div>
            Hello you!
            <div>
                <img src={value} alt="" />
                <label htmlFor="image"></label>
                <input type="file" onChange={handleUpload} />
            </div>
        </div>
    );
}

export default Booking;