import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Singup.scss";
import { login } from "../../reviceAPI/axiosAPI";
import { UserContext } from "../../context/Providercontext";
import { valiLation } from "../../configs/js/valilation";
const Login = () => {
    const [Values, setValues] = useState({
        email: '',
        password: ''
    });
    const { loginContext } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [showpassword, setshowPassword] = useState(false);
    const hanledinput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value.trim() }))
    }
    //signin
    const handleSupmit = async (event) => {
        event.preventDefault();
        setError(valiLation(Values));
        if (Values.email && Values.password) {
            if (!error.email && !error.password) {
                const res = await login(Values)
                if (res && res.status === 200 && res.data.errCode === 0 && res.data.message === 'ok') {
                    loginContext(Values.email, res.data);
                    navigate("/");
                    alert("login success !");
                }
                else {
                    alert(res.data.message);
                }
            } else {
                alert('email or password not found!')
            }
        } else {
            alert('not found');
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
                            <label htmlFor="name"><strong>Email</strong> </label>
                            <input className="form-control rounded"
                                type="text" name="email" onChange={(event) => hanledinput(event)} />
                            {error.email && <small className="text-danger ">{error.email}</small>}
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