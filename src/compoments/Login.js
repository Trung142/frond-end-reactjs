import { useContext, useState } from "react";
import { valiLation } from "../configs/js/valilation";
import { Link, useNavigate } from "react-router-dom";
import "./Singup.scss";
import { login } from "../reviceAPI/axiosAPI";
import { UserContext } from "../context/Providercontext";
const Login = () => {
    const [Values, setValues] = useState({
        name: '',
        password: ''
    });
    const { loginContext } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showpassword, setshowPassword] = useState(false);
    const hanledinput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    //signin
    const handleSupmit = async (event) => {
        setError(valiLation(Values));
        event.preventDefault();
        if (!error.name || !error.password) {
            const res = await login(Values)
            if (res && res.status === 200 && res.data.message === 'ok') {
                loginContext(Values.name, res.data);
                navigate("/");
                alert("login success !");
            }
            else {
                alert("password or user name Khong dung!")
            }
        }
    }
    //go back home
    const handlegoback = () => {
        navigate('/');
    }
    return (
        <>
            <div className="Singup d-flex justify-content-center align-items-center vh-100">
                <div className="bg-whites p-3 rounded">
                    <h2 className="text-center">Log in</h2>
                    <form action="" onSubmit={handleSupmit}>
                        <div className="mb-3">
                            <label htmlFor="name"><strong>User name</strong> </label>
                            <input className="form-control rounded"
                                type="text" name="name" onChange={(event) => hanledinput(event)} />
                            {error.name && <small className="text-danger ">{error.name}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong> Password</strong></label>
                            <input className="form-control rounded"
                                type={showpassword === false ? "password" : "text"} name="password"
                                onChange={(event) => hanledinput(event)} />

                            <i className={showpassword === false ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                onClick={() => setshowPassword(!showpassword)} ></i>

                            {error.password && <small className="text-danger ">{error.password}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3 rounded"
                        >Log in</button>
                    </form>
                    <div className="text-center mt-3">
                        <span >Great User <Link to="/Singup" >Sign up</Link></span>
                    </div>
                    <div className="go-back">
                        <span onClick={handlegoback}>Go back</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;