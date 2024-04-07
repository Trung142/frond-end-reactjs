import { Link } from "react-router-dom";
import '../Customers/Hair.scss';
import '../Customers/cart.scss';
import { useContext, useEffect, useState } from "react";
import { Navbar } from "../nabav";
import { ProducContect } from "../../context/productProvider";
import { VND } from "../vnd";
import { Bill } from "../modals/billModals";
export const Carts = () => {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [check, setcheck] = useState('');
    const [address, setaddress] = useState('');
    const [vilist, setvilist] = useState('');
    const [city, setcity] = useState('');
    const { carts, handlupdate } = useContext(ProducContect);
    const [listproduct, setproduct] = useState(carts);
    const [total, settotal] = useState(0);
    const [show, setshow] = useState(false);
    const handleClose = () => {
        setshow(false);
    }
    const value = {
        name: name,
        check: check,
        phone: phone,
        address: address,
        vilist: vilist,
        city: city
    }

    const handlePay = (event) => {
        if (listproduct && listproduct.length > 0) {
            if (!name || !phone || !email || !check) {
                alert('không được để trông');
            } else {
                setshow(true)
            }
        } else {
            alert('chua co san pham nao trong gio hang cua ban!');
        }

    }

    //deltet carts
    const handledelete = (user) => {
        let listdata = [...listproduct];
        listdata = listproduct.filter(items => items.id !== user.id);
        setproduct(listdata);
        handlupdate(listdata);
        handletotal(listdata);
    }
    const handlequality = (event) => {
        let listdata = [...listproduct];
        let index = listproduct.findIndex(items => items.id === event.id);
        listdata[index].quality = event.quality + 1;
        setproduct(listdata);
        handletotal(listdata);
    }
    const handleclick = (event) => {
        let listdata = [...listproduct];
        let index = listproduct.findIndex(items => items.id === event.id);
        listdata[index].quality = event.quality < 2 ? event.quality = 1 : event.quality - 1;
        setproduct(listdata);
        handletotal(listdata);
    }
    // Format the price above to USD using the locale, style, and currency.
    // let VND = new Intl.NumberFormat('vi-VN', {
    //     style: 'currency',
    //     currency: 'VND',
    // });
    // console.log(`The formated version of ${total} is ${VND.format(total)}`);
    // The formated version of 14340 is $14,340.00
    // total
    let handletotal = (listproduct) => {
        let sum = 0
        listproduct.map((items) => {
            return sum = sum + (items.quality * items.price);
        })
        settotal(listproduct.length === 0 ? 0 : sum);
    }
    useEffect(() => {
        handletotal(listproduct);
    }, [listproduct])
    return (
        <>
            <div className="container p-0 m-0">
                <Navbar />
                <div className="conten d-flex">
                    <span><Link to='/'>Trang chủ</Link></span>
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
                                        {listproduct && listproduct.length > 0 && listproduct.map((items, index) => {
                                            return (
                                                <>
                                                    <tr key={index}>
                                                        <td>
                                                            <img src={items.image} alt="" className="fluid" />
                                                        </td>
                                                        <td>
                                                            {items.product_name}
                                                        </td>
                                                        <td>
                                                            <div className="input-group">
                                                                <button type="button" onClick={() => handleclick(items)} className="btn btn-outline-secondary">-</button>
                                                                <button type="" className="btn btn-outline-secondary">{items.quality}</button>
                                                                <button type="button" onClick={() => handlequality(items)} className="btn btn-outline-secondary">+</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>{VND.format(items.price)}</span>
                                                        </td>
                                                        <td>
                                                            <button type="button" onClick={() => handledelete(items)} class="btn btn-danger">delete</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>

                            <div className="total list-group-item">
                                <span>Tổng tiền :</span>
                                <span><b>{VND.format(total)}</b></span>
                            </div>
                        </div>
                        <div className="list-group">
                            <h3>HÌNH THỨC THANH TOÁN:</h3>
                            <div className="list-group-item">
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                        value={check}
                                        onChange={() => setcheck(`Thanh toán tại công ty`)}
                                    />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Thanh toán tại công ty
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input"
                                        type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        value={check}
                                        onChange={() => setcheck(`Thanh toán bằng chuyển khoản`)}
                                    />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Thanh toán bằng chuyển khoản
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                        value={check}
                                        onChange={() => setcheck(`Thanh toán tại điểm giao hàng`)}
                                    />
                                    <label className="form-check-label" for="flexRadioDefault3">
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
                                    <select className="form-select form-select-sm"
                                        aria-label="Small select example"
                                        value={city}
                                        onChange={(event) => setcity(event.target.value)}
                                    >
                                        <option selected>Tỉnh/Thành Phố</option>
                                        <option >TP.HCM</option>
                                        <option >TP.BMT</option>
                                        <option >TP.DA NANG</option>
                                    </select>
                                    <select className="form-select form-select-sm"
                                        aria-label="Small select example"
                                        value={vilist}
                                        onChange={(event) => setvilist(event.target.value)}
                                    >
                                        <option selected>Quẩn/Huyện</option>
                                        <option >q1</option>
                                        <option >q7</option>
                                        <option >q5</option>
                                    </select>
                                    <select className="form-select form-select-sm"
                                        aria-label="Small select example"
                                        value={address}
                                        onChange={(event) => setaddress(event.target.value)}
                                    >
                                        <option selected>Phường/Xã</option>
                                        <option >Phuong 13</option>
                                        <option >Phuong 1</option>
                                        <option >Phuong 10</option>
                                    </select>
                                </div>
                            </div>
                            <div className="list-group-items mt-3 ml-3">
                                <span>Tổng tiền :</span>
                                <span><b>{VND.format(total)}</b> </span>
                            </div>
                            <div className="list-group-items mt-3 ml-3">
                                <button type="button" onClick={handlePay} className="btn btn-danger">Thanh Toán</button>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            <Bill
                show={show}
                handleClose={handleClose}
                listproduct={listproduct}
                total={total}
                value={value}
            />
        </>
    )
}