import nen from "../images/nen.png";
import { Users, apishowapiapoinment, serviecs } from "../reviceAPI/axiosAPI";
const { createContext, useState, useEffect } = require("react");
const UserContext = createContext({ email: '', avatas: '', auth: false });
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: '', avatas: '', uath: false });
    const [valueService, setvalueService] = useState([]);
    const [valueEmployee, setvalueEmployee] = useState([]);
    const [listdata, setlistdata] = useState([]);
    //handle service
    const getdata = async () => {
        const res = await serviecs();
        if (res.data && res.data.message === 'ok') {
            setvalueService(res.data.data);
        }
    }
    //user employees
    const getdata2 = async () => {
        const res = await Users();
        if (res && res.data && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {

            setvalueEmployee(res.data.message.User);
        } else if (res.status === 404 || res.data.errCode === 4) {
            console.log(res);
        }
        else {
            alert(res.data.message.errMessage)
        }
    }
    const getappointmment = async (id) => {
        const res = await apishowapiapoinment(id);
        if (res.data && res.data.message === 'ok') {
            setlistdata(res.data)
        }
    }
    useEffect(() => {
        getdata();
        getdata2();
        getappointmment()
    }, [])
    // Login updates the user data with a name parameter
    const loginContext = (email, res) => {
        setUser((user) => ({
            email: email,
            avatas: { nen },
            uath: true

        }))
        localStorage.setItem('email', email)
        localStorage.setItem('resdata', res);
    }
    // logout updates the user data to default
    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('resdata');
        setUser((user) => ({
            name: '',
            avatas: '',
            uath: false
        }))
    }
    return (
        <UserContext.Provider value={{
            user, valueEmployee, valueService, listdata,
            loginContext, logout, getappointmment
        }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }