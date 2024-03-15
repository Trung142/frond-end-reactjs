import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { apicreateEmployee, apicreateProduct, apicreateServices, apicreatecustomer, apiemployee } from '../../reviceAPI/axiosAPI';
const CreateCustomer = (props) => {
    const { show, handleClose, handleupdate } = props;
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const values = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: phone,
        address: address
    };
    function datanull() {
        setaddress('');
        setemail('');
        setfirstname('');
        setlastname('');
        setphone('');
    }
    const Close = () => {
        handleClose();
        datanull();
    }
    const hanldesave = async () => {
        if (!firstname || !lastname || !email || !phone || !address) {
            return alert("Hãy nhập đây đủ giá trị!");
        }
        const res = await apicreatecustomer(values);
        if (res.data.message === "error server !") {
            return alert('hãy nhập lại giá trí cho đúng !')
        }
        handleupdate({
            customer_id: res.data.data.insertId,
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone_number: phone,
            address: address
        });
        handleClose();
        datanull();
    }
    return (
        <>
            <Modal show={show} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Customers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>First name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={firstname}
                                        onChange={(event) => setfirstname(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Last name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={lastname}
                                        onChange={(event) => setlastname(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Email</b>:</label>
                            <input type="email" name="" id="input"
                                className="form-control" required="required" title=""
                                value={email}
                                onChange={(event) => setemail(event.target.value)}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Phone</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={phone}
                                onChange={(event) => setphone(event.target.value)}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Address</b>:</label>
                            <input type="text" name="" id="input"
                                class="form-control" required="required" title=""
                                value={address}
                                onChange={(event) => setaddress(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanldesave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
//
const CreateEmployee = (props) => {
    const { show, handleClose, handleupdate } = props;
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [position, setposition] = useState('');
    const [salary, setsalary] = useState('');
    const values = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: phone,
        address: address,
        salary: salary,
        position: position
    };
    function datanull() {
        setaddress('');
        setemail('');
        setfirstname('');
        setlastname('');
        setphone('');
    }
    const Close = () => {
        handleClose();
        datanull();
    }
    const hanldesave = async () => {
        if (!firstname || !lastname || !email || !phone || !address) {
            return alert("Hãy nhập đây đủ giá trị!");
        }
        const res = await apicreateEmployee(values);
        if (res.data.message === "error server !") {
            return alert('hãy nhập lại giá trí cho đúng !')
        }
        handleupdate({
            employee_id: res.data.data.insertId,
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone_number: phone,
            address: address,
            position: position,
            salary: salary
        });
        handleClose();
        datanull();
    }
    return (
        <>
            <Modal show={show} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Employees</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>First name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={firstname}
                                        onChange={(event) => setfirstname(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Last name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={lastname}
                                        onChange={(event) => setlastname(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>Phone</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={phone}
                                        onChange={(event) => setphone(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Ví trí</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={position}
                                        onChange={(event) => setposition(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Email</b>:</label>
                            <input type="email" name="" id="input"
                                className="form-control" required="required" title=""
                                value={email}
                                onChange={(event) => setemail(event.target.value)}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Salary</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={salary}
                                onChange={(event) => setsalary(event.target.value)}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Address</b>:</label>
                            <input type="text" name="" id="input"
                                class="form-control" required="required" title=""
                                value={address}
                                onChange={(event) => setaddress(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanldesave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
//products
const CreateProduct = (props) => {
    const { show, handleClose, handleupdate } = props;
    const [product, setproduct] = useState('');
    const [price, setprice] = useState('');
    const [quality, setquality] = useState('');
    const [description, setdescription] = useState('');
    const values = {
        product_name: product,
        description: description,
        price: price,
        quality: quality
    };
    function datanull() {
        setprice('');
        setdescription('');
        setproduct('');
        setquality('');
    }
    const Close = () => {
        handleClose();
        datanull();
    }
    const hanldesave = async () => {
        if (!product || !price || !description || !quality) {
            return alert("Hãy nhập đây đủ giá trị!");
        }
        const res = await apicreateProduct(values);
        if (res.data.message === "error server !") {
            return alert('hãy nhập lại giá trí cho đúng !')
        }
        handleupdate({
            product_id: res.data.data.insertId,
            product_name: product,
            description: description,
            price: price,
            quantity_in_stock: quality
        });
        handleClose();
        datanull();
    }
    return (
        <>
            <Modal show={show} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>Product name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={product}
                                        onChange={(event) => setproduct(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={price}
                                        onChange={(event) => setprice(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Số lượng</b>:</label>
                            <input type="email" name="" id="input"
                                className="form-control" required="required" title=""
                                value={quality}
                                onChange={(event) => setquality(event.target.value)}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Description</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={description}
                                onChange={(event) => setdescription(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanldesave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
//services
const CreateService = (props) => {
    const { show, handleClose, handleupdate } = props;
    const [servicetname, setservicename] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const values = {
        service_name: servicetname,
        description: description,
        price: price
    };
    function datanull() {
        setprice('');
        setdescription('');
        setservicename('');
    }
    const Close = () => {
        handleClose();
        datanull();
    }
    const hanldesave = async () => {
        if (!price || !description || !servicetname) {
            return alert("Hãy nhập đây đủ giá trị!");
        }
        const res = await apicreateServices(values);
        if (res.data.message === "error server !") {
            return alert('hãy nhập lại giá trí cho đúng !')
        }
        handleupdate({
            id: res.data.data.insertId,
            service_name: servicetname,
            description: description,
            price: price
        });
        handleClose();
        datanull();
    }
    return (
        <>
            <Modal show={show} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Services</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>Service name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={servicetname}
                                        onChange={(event) => setservicename(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="email" name="" id="input"
                                        className="form-control" placeholder='vnd' required="required" title=""
                                        value={price}
                                        onChange={(event) => setprice(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Description</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={description}
                                onChange={(event) => setdescription(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanldesave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export {
    CreateCustomer,
    CreateEmployee,
    CreateProduct,
    CreateService
}