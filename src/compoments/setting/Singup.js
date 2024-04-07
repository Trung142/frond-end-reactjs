import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Singup.scss";
import { updateUser } from "../../reviceAPI/axiosAPI";
import { valiLation } from "../../configs/js/valilation";
const Singup = () => {
    const navigate = useNavigate();
    const [Values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({});
    const [showpassword, setshowPassword] = useState(false);
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handlesignIn = async () => {
        await setError(valiLation(Values));
        if (Values.email && Values.password && Values.username) {
            if (!error.email && !error.password && !error.username) {
                let res = await updateUser(Values);
                if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {
                    navigate("/login");
                    alert("Creat User success !");
                } else if (res.status === 404 || res.data.errCode === 4) {
                    alert('ten khong duoc co dau');
                }
                else {
                    alert(res.data.message.errMessage);
                }
            } else {
                alert('email or password not found!');
            }
        } else {
            alert('not found');
        }
    }
    return (
        <>
            <div className="Singup d-flex justify-content-center align-items-center vh-100 bg-primary">
                <div className="bg-whites p-3 rounded ">
                    <h2 className="text-center">Sing up</h2>

                    <div className="mb-3">
                        <label htmlFor="name"><strong>User name</strong></label>
                        <input className="form-control rounded"
                            type="text" name="username" onChange={handleInput} />
                        {error.username && <small className="text-danger">{error.username}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong> </label>
                        <input className="form-control rounded"
                            type="email" name="email" onChange={handleInput} />
                        {error.email && <small className="text-danger ">{error.email}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong> Password</strong></label>
                        <input className="form-control rounded"
                            type={showpassword === false ? "password" : "text"} name="password" onChange={handleInput} />
                        <i className={showpassword === false ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                            onClick={() => setshowPassword(!showpassword)}></i>
                        {error.password && <small className="text-danger ">{error.password}</small>}
                    </div>
                    <button onClick={handlesignIn} className="btn btn-primary w-100 mt-3 rounded">Singup</button>
                    <div className="text-center mt-3">
                        <span >You have User <Link to="/login" >Log in</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singup;