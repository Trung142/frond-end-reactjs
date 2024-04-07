import { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/Providercontext';
import { VND } from '../vnd';
export const Paymodals = (props) => {
    const { show, handleClose } = props;
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [date, setdate] = useState('');
    const [address, setaddress] = useState('');
    const [vilist, setvilist] = useState('');
    const { listdata } = useContext(UserContext);
    const navigate = useNavigate();
    // const getappoint = async (value) => {
    //     let id = 2;
    //     let res = await apishowapiapoinment(id);
    //     console.log(2);
    //     if (res.data.message === "error server !") {
    //         return alert('hãy nhập lại giá trí cho đúng !');
    //     }
    //     alert(" Đặt lịch thành công!");
    //     navigate('/history');
    // }
    useEffect(() => {
        //getappoint()
    }, []);
    const handleSave = () => {
        navigate('/history')
    }
    const handlevalues = () => {
    }
    //cancel
    const handleCancel = () => {

    }
    const handelremove = () => {

    }
    return (
        <>
            <Modal show={show} fullscreen={'xxl-down'} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Đặt Lịch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="list-group-item">
                        <div className="">
                            <div className="input-group">
                                <div className="mb-3">
                                    <label for="" className="form-label"><b>Tỉnh Thành</b>:</label>
                                    <select
                                        className="form-select form-select-lg"
                                        name=""
                                        id=""
                                        value={address}
                                        onChange={(event) => setaddress(event.target.value)}
                                    >
                                        <option selected value=''>Chọn tỉnh thành</option>
                                        <option >HCM</option>
                                        <option >ĐĂK LĂK</option>
                                        <option >HÀ NỘI</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label"><b>Quẩn Huyện</b>:</label>
                                    <select
                                        className="form-select form-select-lg"
                                        name=""
                                        id=""
                                        value={vilist}
                                        onChange={(event) => setvilist(event.target.value)}
                                    >
                                        <option selected value=''>Chọn quẩn huyện</option>
                                        <option >q7</option>
                                        <option >q1</option>
                                        <option >q3</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="" className="form-label"><b>Chọn Salon</b>:</label>
                            </div>
                            <span className="label label-success">Chọn tỉnh thành quận huyện để hiện thị những salon của chúng tôi</span>
                            <div className="form-group">
                                <label for="input" className="col-sm-2 control-label"><b>Chọn Ngày Giờ</b>:</label>
                                <div className="col-sm-10">
                                    <input type="date" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={date}
                                        onChange={(event) => setdate(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="input" className="col-sm-2 control-label"><b>Họ Và Tên</b>:</label>
                                <div className="col-sm-10">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={name}
                                        onChange={(event) => setname(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="input" className="col-sm-2 control-label"><b>Số Điện Thoại</b>:</label>
                                <div className="col-sm-10">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={phone}
                                        onChange={(event) => setphone(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="input" className="col-sm-2 control-label"><b>Email</b>:</label>
                                <div className="col-sm-10">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={email}
                                        onChange={(event) => setemail(event.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="button" onClick={handlevalues} className="btn btn-success mt-3">Update</button>
                        </div>
                    </div>
                    <div className="list-group">
                        <h3>Xác nhận thông tin đặt hàng</h3>
                        <div className="list-group-item">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Họ Tên</th>
                                        <th>Số điệt thoại</th>
                                        <th>Email</th>
                                        <th>Dịch vụ</th>
                                        <th>Nhân viên</th>
                                        <th>Giá tiền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listdata.data && listdata.data.length > 0 && listdata.data.map((items, index) => {

                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td >
                                                        {items.username}
                                                    </td>
                                                    <td>
                                                        {items.phone}
                                                    </td>
                                                    <td>
                                                        {items.email}
                                                    </td>
                                                    <td>{items.service_name}</td>
                                                    <td>
                                                        {items.employee_name}
                                                    </td>
                                                    <td>
                                                        {VND.format(items.price)}
                                                    </td>
                                                    <td>
                                                        <button type="button" onClick={handleSave} class="btn btn-success m-3 ">Xác nhận</button>
                                                        <button type="button" onClick={handleCancel} class="btn btn-warning m-3 ">Cancel</button>
                                                        <button type="button" onClick={handelremove} class="btn btn-danger">Remove</button>
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
                            {listdata.data && listdata.data.length > 0 && listdata.data.map(items => {
                                return (
                                    <span>
                                        <b>
                                            {VND.format(items.price)}
                                        </b>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}