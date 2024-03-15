import { Routes, Route } from "react-router-dom";
import Home from '../compoments/Home';
import Login from '../compoments/Login';
import Singup from '../compoments/Singup';
import Cutting from '../compoments/Cutting';
import { Sevices } from '../compoments/Sevices';
import Booking from '../compoments/Booking';
import TableUser from '../compoments/tableUser';
import ChilderenRouter from "./sevideroter";
import { CustomerList } from "../compoments/manages/customer";
import { EmplotyeeList } from "../compoments/manages/employee";
import { AppointmentList } from "../compoments/manages/appointment";
import { FeedbackList } from "../compoments/manages/feedback";
import { OrderList } from "../compoments/manages/order";
import { Order_DetailList } from "../compoments/manages/order_detail";
import { ServiceList } from "../compoments/manages/service";
import { ProductList } from "../compoments/manages/product";
import { PaymentList } from "../compoments/manages/payment";
import { Hairsalon } from "../compoments/Customers/HairSalon";
import { Carts } from "../compoments/Customers/cart";
import { Create } from "../compoments/Customers/CreateCustomers";
import { History } from "../compoments/Customers/history";
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Singup' element={<Singup />} />
                <Route path='/cutting' element={<Cutting />} />
                <Route path='/sev' element={<Sevices />} />
                <Route path='/booking' element={<Booking />} />
                <Route
                    path='/tableUser'
                    element={
                        <ChilderenRouter>
                            <TableUser />
                        </ChilderenRouter>
                    }
                />
                {/* Hair salon */}
                <Route path="/hairsalon" element={<Hairsalon />} />
                {/* manage data table */}
                <Route path="/customer" element={< CustomerList />} />
                <Route path='/employee' element={<EmplotyeeList />} />
                <Route path='/appointment' element={<AppointmentList />} />
                <Route path='/feedback' element={<FeedbackList />} />
                <Route path='/order' element={<OrderList />} />
                <Route path='/order_detail' element={<Order_DetailList />} />
                <Route path='/product' element={<ProductList />} />
                <Route path="/service" element={<ServiceList />} />
                <Route path="/payment" element={<PaymentList />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/createCustomers" element={<Create />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </>
    )
}