import { Link } from "react-router-dom"
import { Navbar } from "./nabav"
import { apishowapiapoinment } from "../../reviceAPI/axiosAPI"
import { useEffect, useState } from "react"
export const History = () => {
    const [data, setdata] = useState([]);
    let id = 1;
    const getvalue = async () => {
        const res = await apishowapiapoinment(id)
        if (res && res.status === 201 && res.data.message === 'ok') {
            return setdata(res.data.data);
        }
        return alert('không thành công');
    }

    useEffect(() => {
        getvalue()
    }, [])
    return (
        <div className="container p-0">
            <Navbar />
            <div className="conten d-flex">
                <span><Link to='/hairsalon'>Trang chủ</Link></span>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 && data.map((items, index) => {

                                return (
                                    <>
                                        <tr key={index}>
                                            <td>
                                                {items.first_name}
                                            </td>
                                            <td>
                                                {items.service_name}
                                            </td>
                                            <td>
                                                {items.price}
                                            </td>

                                            <td>
                                                {
                                                    items.status === 'confirmed' ? <i className="fa-solid fa-circle-check" style={{ color: "#31e619", fontSize: "2.5rem" }}></i> :
                                                        <button type="button" class="btn btn-warning m-3 ">Cancel</button>
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
                    <span>Tổng tiền :</span>
                    {/* {datalist && datalist.length > 0 && datalist.map(items => {
                                return (
                                    <span>
                                        <b>
                                            {items.value1[0].price}
                                        </b>
                                    </span>
                                )
                            })} */}
                </div>
            </div>
        </div>

    )
}