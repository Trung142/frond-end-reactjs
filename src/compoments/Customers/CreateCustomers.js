import { useEffect, useState } from "react"
import { Navbar } from "./nabav"
import { apicreatecustomer, employees, serviecs } from "../../reviceAPI/axiosAPI";
import { Paymodals } from "../modals/Paymodals";
export const Create = () => {
    const [show, setshow] = useState(false);
    const handleClose = () => {
        setshow(false);
    }
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [date, setdate] = useState('');
    const [address, setaddress] = useState('');
    const [vilist, setvilist] = useState('');
    const [employee, setemployee] = useState('');
    const [service, setservice] = useState('');
    const [datalist, setdatalist] = useState([]);
    function datanull() {
        setname('');
        setphone('');
        setaddress('');
        setdate('');
        setemail('');
        setvilist('');
        setemployee('');
        setservice('');
    }
    //value
    const [valueService, setvalueService] = useState([]);
    const [valueEmployee, setvalueEmployee] = useState([]);
    const getdata = async () => {
        const res = await serviecs();
        if (res.data && res.data.message === 'ok') {
            setvalueService(res.data.data);
        }
    }
    const getdata2 = async () => {
        const res = await employees();
        if (res.data && res.data.message === 'ok') {
            setvalueEmployee(res.data.data);
        }
    }
    useEffect(() => {
        getdata();
        getdata2();
    }, [])
    // handle update
    const handlevalues = (id) => {
        let listuser1 = valueService.filter((items) => items.service_id === +service);
        let listuser2 = valueEmployee.filter((items) => items.employee_id === +employee);
        setdatalist([{
            value1: [].concat(listuser1, listuser2, name, email),
            customer_id: id,
            service_id: +service,
            employee_id: +employee,
            date: date
        }]);
    }
    const handleCreate = async () => {
        const values = {
            first_name: name,
            email: email,
            phone: phone,
            address: vilist + "/" + address
        };
        if (!name || !phone || !email || !date || !employee || !service) {
            return alert('khong duoc de trong');
        }
        const res = await apicreatecustomer(values);
        if (res.data.message === "error server !") {
            return alert('hãy nhập lại giá trí cho đúng !')
        }
        handlevalues(res.data.data.insertId)
        setshow(true);
        datanull();
    }
    return (
        <div className="container p-0">
            <Navbar />
            <div className="group book">
                <h2>ĐẶT LỊCH</h2>
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
                                    <option >DAK LAK</option>
                                    <option >HA NOI</option>
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
                                    <option >quan 7</option>
                                    <option >quan 1</option>
                                    <option >quan 3</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="" className="form-label"><b>Chọn Salon</b>:</label>
                        </div>
                        <span className="label label-success">Chọn tỉnh thành quận huyện để hiện thị những salon của chúng tôi</span>
                        <div className="input-group">
                            <div className="mb-3">
                                <label for="" className="form-label"><b>Dịch Vụ</b>:</label>
                                <select
                                    className="form-select form-select-lg"
                                    name=""
                                    id=""
                                    value={service}
                                    onChange={(event) => setservice(event.target.value)
                                    }
                                >
                                    <option selected value=''>Chọn Dịch Vụ</option>
                                    {valueService && valueService.length > 0 && valueService.map((item, index) => {
                                        return (
                                            < >
                                                <option key={index} value={item.service_id}>
                                                    {item.service_name}
                                                </option>
                                            </>
                                        )

                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label"><b>Kỹ Thuật Viên</b>:</label>
                                <select
                                    className="form-select form-select-lg"
                                    name=""
                                    id=""
                                    value={employee}
                                    onChange={(event) => setemployee(event.target.value)}
                                >
                                    <option selected value=''>Chọn Kỹ Thuật viên</option>
                                    {valueEmployee && valueEmployee.length > 0 && valueEmployee.map((item, index) => {
                                        return (
                                            < >
                                                <option key={index} value={item.employee_id}>
                                                    {item.first_name}  {item.last_name}
                                                </option>
                                            </>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
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
                        <button onClick={handleCreate} type="button" className="btn btn-success mt-3">Đặt Lịch</button>
                    </div>
                </div>
            </div>
            <Paymodals
                show={show}
                handleClose={handleClose}
                datalist={datalist}
            />
        </div>

    )
}