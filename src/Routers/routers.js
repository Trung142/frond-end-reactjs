import { Routes, Route } from "react-router-dom";
import Singup from '../compoments/setting/Singup';
import { Carts } from "../compoments/Customers/cart";
import { Create } from "../compoments/Customers/CreateCustomers";
import { History } from "../compoments/Customers/history";
import ChilderenRouter from "./sevideroter";
import Login from "../compoments/setting/Login";
import { Home } from "../compoments/Home";
import SettingNabar from "../compoments/setting/settingNabar";
import ManagerEmployee from "../compoments/setting/ManagerEMployee";
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manager" element={<SettingNabar />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Singup' element={<Singup />} />
                <Route
                    path='/tableUser'
                    element={
                        <ChilderenRouter>
                            <ManagerEmployee />
                        </ChilderenRouter>
                    }
                />

                {/* manage data table */}
                <Route path="/carts" element={<Carts />} />
                <Route path="/createCustomers" element={<Create />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </>
    )
}