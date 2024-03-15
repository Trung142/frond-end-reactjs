import { Link } from "react-router-dom";
import { serviecs } from "../../reviceAPI/axiosAPI";
import { useEffect, useState } from "react";
export const Navbar = () => {
    const [valueService, setvalueService] = useState([]);
    const getdata = async () => {
        const res = await serviecs();
        if (res.data && res.data.message === 'ok') {
            setvalueService(res.data.data);
        }
    }
    useEffect(() => {
        getdata();
    }, [])
    return (
        <header className="headers">
            <div className="wap_1200">
                <input type="checkbox" id="checks" />
                <label for="checks" className="fa-solid fa-bars"></label>
                <div className="flex_header">
                    <div className="left_header">
                        <h1><Link to="/hairsalon">Hair salon</Link></h1>
                    </div>
                    <div className="right_header">
                        <div className="header_main">
                            <ul className="line_main">
                                <li><Link>HỆ THỐNG SALON</Link></li>
                                <li className="main_service">
                                    <Link>SẢN PHẨM</Link>
                                    <ul className="service card card-body">
                                        <Link><li>Dưỡng tóc</li></Link>
                                        <Link><li>Ũ tóc</li></Link>
                                        <Link><li>Làm tóc</li></Link>
                                        <Link><li>Nhuốm tóc</li></Link>
                                    </ul>
                                </li>
                                <li className="main_service">
                                    <Link>DỊCH VỤ</Link>
                                    <ul className="service card card-body">
                                        {valueService && valueService.length > 0 && valueService.map((item, index) => {
                                            return (
                                                <>

                                                    <Link><li>{item.service_name}</li></Link>

                                                </>
                                            )
                                        })}
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
                                        <span>20</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}