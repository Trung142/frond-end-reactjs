import { Link } from "react-router-dom";
import '../Customers/Hair.scss';
import '../Customers/cart.scss';
import xit1 from '../img/xit1.jpg';
import { useState } from "react";
import { Navbar } from "./nabav";
export const Carts = () => {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [quality, setquality] = useState(0);
    const handlePay = (event) => {
        if (!name || !phone || !email) {
            alert('không được để trông');
        }
    }
    const handlequality = () => {

        setquality(quality + 1);
    }
    const handleclick = () => {
        setquality(quality < 1 ? quality : quality - 1);
    }
    return (
        <>
            <div className="container p-0 m-0">
                <Navbar />
                <div className="conten d-flex">
                    <span><Link to='/hairsalon'>Trang chủ</Link></span>
                    <hr className="m-3"></hr>
                    <span>Giỏ hàng</span>
                </div>
                <main>
                    <div className="flex-warp">
                        <div className="list-group">
                            <h3>GIỎ HÀNG CỦA BẠN</h3>
                            <div className="list-group-item">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Hình ảnh</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Tạm Tính</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={xit1} alt="" className="fluid" />
                                            </td>
                                            <td>
                                                Dầu gội đầu Davinnes
                                            </td>
                                            <td>
                                                <div className="input-group">
                                                    <button type="button" onClick={handleclick} className="btn btn-outline-secondary">-</button>
                                                    <button type="" className="btn btn-outline-secondary">{quality}</button>
                                                    <button type="button" onClick={handlequality} className="btn btn-outline-secondary">+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <span>2.400.000đ</span>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger">delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="total list-group-item">
                                <span>Tổng tiền :</span>
                                <span>2.400.000đ</span>
                            </div>
                        </div>
                        <div className="list-group">
                            <h3>HÌNH THỨC THANH TOÁN:</h3>
                            <div className="list-group-item">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Thanh toán tại công ty
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Thanh toán bằng chuyển khoản
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Thanh toán tại điểm giao hàng
                                    </label>
                                </div>

                            </div>
                            <h3>THÔNG TIN GIAO HÀNG:</h3>
                            <div className="list-group-item">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                        placeholder="Username" aria-label="Username"
                                        value={name}
                                        onChange={(event) => setname(event.target.value)}
                                    />
                                    <input type="text" className="form-control"
                                        placeholder="Number phone" aria-label="Server"
                                        value={phone}
                                        onChange={(event) => setphone(event.target.value)}
                                    />
                                </div>

                                <div className="input-group flex-nowrap">
                                    <input type="text" className="form-control"
                                        placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"
                                        value={email}
                                        onChange={(event) => setemail(event.target.value)}
                                    />
                                </div>
                                <div className="input-group mb-3 mt-3">
                                    <select className="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Tỉnh/Thành Phố</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select className="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Quẩn/Huyện</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select className="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Phường/Xã</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="list-group-items mt-3 ml-3">
                                <span>Tổng tiền :</span>
                                <span><b>2.400.000đ</b> </span>
                            </div>
                            <div className="list-group-items mt-3 ml-3">
                                <button type="button" onClick={handlePay} className="btn btn-danger">Thanh Toán</button>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}