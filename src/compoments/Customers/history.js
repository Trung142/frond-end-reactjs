import { Link } from "react-router-dom"
import { Navbar } from "../nabav"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/Providercontext"
import { VND } from "../vnd"
export const History = () => {
    const [total, settotal] = useState(0);
    const { listdata } = useContext(UserContext);
    const getvalue = async () => {
        let sum = 0;
        listdata.data && listdata.data > 0 && listdata.data.map((items) => {
            sum = sum + (+items.price);
        })
        settotal(sum);
    }
    useEffect(() => {
        getvalue()
    }, [])
    return (
        <div className="container p-0">
            <Navbar />
            <div className="conten d-flex">
                <span><Link to='/'>Trang chủ</Link></span>
                <hr className="m-3"></hr>
                <span><Link to='/carts'>Giỏ hàng</Link></span>
            </div>
            <div className="list-group">
                <h3>Danh sách Khách Hàng Đã cắt tóc</h3>
                <div className="list-group-item">
                    <table>
                        <thead>
                            <tr>
                                <th>Họ Tên</th>
                                <th>Tên dịch vụ</th>
                                <th>Đơn giá</th>
                                <th>Ngày</th>
                                <th>Giờ</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listdata.data && listdata.data.length > 0 && listdata.data.map((items, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>
                                                {items.username}
                                            </td>
                                            <td>
                                                {items.service_name}
                                            </td>
                                            <td>
                                                {VND.format(items.price)}
                                            </td>
                                            <td>
                                                {items.appoinment_date}
                                            </td>
                                            <td>
                                                {items.start_time}
                                            </td>
                                            <td>
                                                {
                                                    items.status === 'confirmed' ? <i className="fa-solid fa-circle-check" style={{ color: "#31e619", fontSize: "2.5rem" }}></i> :
                                                        <button type="button" class="btn btn-warning m-3 ">Đã Đặt</button>
                                                }
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

                <div className="total list-group-item">
                    <span>Tổng tiền :<b>{VND.format(total)}</b> </span>
                    <button type="button" class="btn btn-success m-3 ">Thanh toán</button>
                </div>
            </div>
        </div>

    )
}