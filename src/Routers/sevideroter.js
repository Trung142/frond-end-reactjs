import { useContext } from "react";
import { UserContext } from "../context/Providercontext";
import { Link } from "react-router-dom";

const ChilderenRouter = (props) => {
    const { user } = useContext(UserContext);
    if (user && !user.uath) {
        return (
            <>
                <div className="p-3">
                    <Link to="/"> --Thoát</Link>
                    <div className="alert  alert-danger" role="alert">
                        ban can phai dang nhap
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            {props.children}
        </>
    )
}
export default ChilderenRouter;
