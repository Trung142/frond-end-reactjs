import { Link, useNavigate } from "react-router-dom";
import { serviecs } from "../reviceAPI/axiosAPI";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Providercontext";
import { ProducContect } from "../context/productProvider";
import { SettingUser } from "./setting/ofcanvar";
export const Navbar = () => {
    const [valueService, setvalueService] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { carts, product } = useContext(ProducContect);
    const [show, setshow] = useState(false);
    //const [total, settotal] = useState(0);
    const getdata = async () => {
        const res = await serviecs();
        if (res.data && res.data.message === 'ok') {
            setvalueService(res.data.data);
        }
    }
    let handleClose = () => {
        setshow(false)
    }
    let handleUser = () => {
        setshow(true);
    }
    useEffect(() => {
        // settotal(carts.length);
        getdata();
    }, [])
    return (
        <>
            <header className="headers">
                <div className="wap_1200">
                    <input type="checkbox" id="checks" />
                    <label for="checks" className="fa-solid fa-bars"></label>
                    <div className="flex_header">
                        <div className="left_header">
                            <h1><Link to="/">Hair salon</Link></h1>
                            {user && user.uath === true && <span>email:<b>{user.email}</b></span>}
                        </div>
                        <div className="right_header d-flex  align-items-center">
                            <div className="header_main">
                                <ul className="line_main">
                                    <li><Link>HỆ THỐNG SALON</Link></li>
                                    <li className="main_service">
                                        <Link to="/">SẢN PHẨM</Link>
                                        <ul className="service card card-body">
                                            {product && product.length > 0 ? product.map((items) => {
                                                return (
                                                    <>
                                                        <Link to='#product'><li>{items.product_name}</li></Link>
                                                    </>
                                                )
                                            }) :
                                                <>
                                                    <Link><li>Dưỡng tóc</li></Link>
                                                    <Link><li>Ũ tóc</li></Link>
                                                    <Link><li>Làm tóc</li></Link>
                                                    <Link><li>Nhuốm tóc</li></Link>
                                                </>

                                            }
                                        </ul>

                                    </li>
                                    <li className="main_service">
                                        <Link>DỊCH VỤ</Link>
                                        <ul className="service card card-body">
                                            {valueService && valueService.length > 0 ? valueService.map((item, index) => {
                                                return (
                                                    <>

                                                        <Link><li>{item.service_name}</li></Link>

                                                    </>
                                                )
                                            }) :
                                                <>
                                                    <>
                                                        <Link><li>Dưỡng tóc</li></Link>
                                                        <Link><li>Ũ tóc</li></Link>
                                                        <Link><li>Làm tóc</li></Link>
                                                        <Link><li>Nhuốm tóc</li></Link>
                                                    </>
                                                </>
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/createCustomers'>
                                            <button type="" >
                                                ĐẶT LỊCH
                                                <i class="fa-regular fa-calendar-days"></i>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/history'>
                                            <i class="fa-regular fa-calendar-days"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/carts'>
                                            <i className="fa-solid fa-cart-plus"></i>
                                            {carts && carts.length > 0 ? <span>{carts.length}</span> : <span>0</span>}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="itemUser">
                                {
                                    user && user.uath === false ? <div
                                        style={{
                                            border: '1px solid red',
                                            margin: '0 1rem',
                                            width: '34px',
                                            height: '34px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} >
                                        <span onClick={handleUser}>

                                            <i className="fa-solid fa-user-astronaut"
                                                style={{ color: '#8491a3', fontSize: '2rem' }}></i>
                                        </span>
                                    </div> :
                                        <span onClick={handleUser} >
                                            <i className="fa-solid fa-user-astronaut" style={{ color: '#8491a3', fontSize: '2rem' }}></i>
                                        </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SettingUser
                show={show}
                handleClose={handleClose}
            />
        </>

    )
}