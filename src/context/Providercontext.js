import nen from "../images/nen.png";
const { createContext, useState } = require("react");

const UserContext = createContext({ name: '', avatas: '', auth: false });

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', avatas: '', uath: false });
    // Login updates the user data with a name parameter
    const loginContext = (name, res) => {
        setUser((user) => ({
            name: name,
            avatas: { nen },
            uath: true

        }))
        localStorage.setItem('name', name)
        localStorage.setItem('resdata', res);
    }
    // logout updates the user data to default
    const logout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('resdata');
        setUser((user) => ({
            name: '',
            avatas: '',
            uath: false
        }))
    }
    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }