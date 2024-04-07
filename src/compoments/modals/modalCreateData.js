import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { apicreateEmployee, apicreateProduct, apicreateServices, apicreatecustomer, deleteProducts, deleteServices, editProduct, editServices } from '../../reviceAPI/axiosAPI';
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
    const { show, handleClose, hanldeUpdate } = props;
    const [product, setproduct] = useState('');
    const [price, setprice] = useState('');
    const [quality, setquality] = useState('');
    const [description, setdescription] = useState('');
    const values = {
        product_name: product,
        description: description,
        price: price,
        aquantity: quality
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
        } else {
            let res = await apicreateProduct(values);
            if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {
                alert("Creat User success !");
                hanldeUpdate({
                    product_id: res.data.message.insertId,
                    product_name: product,
                    description: description,
                    price: price,
                    aquantity: quality
                });
                handleClose();
                datanull();
            } else if (res.status === 404 || res.data.errCode === 4) {
                alert('ten khong duoc co dau');
            }
            else {

                alert(res.data.message.errMessage)
            }
        }
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
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={product}
                                        onChange={(event) => setproduct(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={price}
                                        onChange={(event) => setprice(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Số lượng</b>:</label>
                            <input type="text" name="" id="input"
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
const ModaleDeleteProduct = (props) => {
    const { show, handle, DeleteData, handledatadeleteUser } = props;
    const handleClose = () => {
        handle();
    }
    const handleSave = async () => {
        const res = await deleteProducts(+DeleteData.id);
        if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errMessage === 'ok') {
            handledatadeleteUser(DeleteData);
            alert("delete user success!");
            handleClose();
        } else if (res.status === 404 || res.data.errCode === 4) {
            alert('ten khong duoc co dau');
        }
        else {
            alert(res.data.message.errMessage);
            handleClose();
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='p-3'>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <span>Do yon want delete user with !</span><br />
                        <small> ID: <strong>{DeleteData.id}</strong></small><br />
                        <span> Tên san phẩm :<strong>{DeleteData.product_name}</strong> </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSave()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
const ModaleEditProduct = (props) => {
    const { show, handle, dataEdit, handleEditdata } = props;
    const [values, setValues] = useState({
        product_name: '',
        description: '',
        price: '',
        aquantity: ''
    })
    const handleClose = () => {
        handle();
    }
    useEffect(() => {
        if (show) {
            setValues(
                {
                    ...values,
                    product_name: dataEdit.product_name,
                    description: dataEdit.description,
                    price: dataEdit.price,
                    aquantity: dataEdit.aquantity
                }
            )
        }
    }, [dataEdit])

    const handleSave = async (id) => {
        if (values.product_name && values.price && values.aquantity && values.description) {
            let res = await editProduct(+id, values);
            console.log(res);
            if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errMessage === 'ok') {
                handleEditdata({
                    id: dataEdit.id, product_name: values.product_name, price: values.price,
                    description: values.description,
                    aquantity: values.aquantity
                })
                alert("Edit thành công!");
                handleClose();
            } else if (res.status === 404 || res.data.errCode === 4) {
                alert('ten khong duoc co dau');
            }
            else {
                alert(res.data.message.errMessage)
            }
        }
        else {
            alert('not found');
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='p-3'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>Product name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={values.product_name}
                                        onChange={(event) => setValues({ ...values, product_name: event.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={values.price}
                                        onChange={(event) => setValues({ ...values, price: event.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Số lượng</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={values.aquantity}
                                onChange={(event) => setValues({ ...values, aquantity: event.target.value })}
                            />
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Description</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={values.description}
                                onChange={(event) => setValues({ ...values, description: event.target.value })}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSave(dataEdit.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
//services
const CreateService = (props) => {
    const { show, handleClose, hanldeUpdate } = props;
    const [service_name, setservice_name] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const values = {
        service_name: service_name,
        description: description,
        price: price
    };
    function datanull() {
        setprice('');
        setdescription('');
        setservice_name('');

    }
    const Close = () => {
        handleClose();
        datanull();
    }
    const hanldesave = async () => {
        if (!service_name || !price || !description) {
            return alert("Hãy nhập đây đủ giá trị!");
        } else {
            let res = await apicreateServices(values);
            console.log(res);
            if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {
                alert("Creat User success !");
                hanldeUpdate({
                    service_id: res.data.message.insertId,
                    service_name: service_name,
                    description: description,
                    price: price
                });
                handleClose();
                datanull();
            } else if (res.status === 404 || res.data.errCode === 4) {
                alert('ten khong duoc co dau');
            }
            else {
                alert(res.data.message.errMessage)
            }
        }
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
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={service_name}
                                        onChange={(event) => setservice_name(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
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
const ModaleDeleteService = (props) => {
    const { show, handle, DeleteData, handledatadeleteUser } = props;
    const handleClose = () => {
        handle();
    }
    const handleSave = async () => {
        const res = await deleteServices(+DeleteData.id);
        if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errMessage === 'ok') {
            handledatadeleteUser(DeleteData);
            alert("delete user success!");
            handleClose();
        } else if (res.status === 404 || res.data.errCode === 4) {
            alert('ten khong duoc co dau');
        }
        else {
            alert(res.data.message.errMessage);
            handleClose();
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='p-3'>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <span>Do yon want delete user with !</span><br />
                        <small> ID: <strong>{DeleteData.id}</strong></small><br />
                        <span> Tên san phẩm :<strong>{DeleteData.service_name}</strong> </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSave()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
const ModaleEditService = (props) => {
    const { show, handle, dataEdit, handleEditdata } = props;
    const [values, setValues] = useState({
        service_name: '',
        description: '',
        price: ''
    })
    const handleClose = () => {
        handle();
    }
    useEffect(() => {
        if (show) {
            setValues(
                {
                    ...values,
                    service_name: dataEdit.service_name,
                    description: dataEdit.description,
                    price: dataEdit.price
                }
            )
        }
    }, [dataEdit])

    const handleSave = async (id) => {
        if (values.service_name && values.price && values.description) {
            let res = await editServices(+id, values);
            if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errMessage === 'ok') {
                handleEditdata({
                    id: dataEdit.id, service_name: values.service_name, price: values.price,
                    description: values.description
                })
                alert("Edit thành công!");
                handleClose();
            } else if (res.status === 404 || res.data.errCode === 4) {
                alert('ten khong duoc co dau');
            }
            else {
                alert(res.data.message.errMessage)
            }
        }
        else {
            alert('not found');
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='p-3'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='group p-3'>
                        <div className="input-group m-3">
                            <div className="form-group mr-3">
                                <label for="input" className="col-sm-10 control-label"><b>Service name</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
                                        className="form-control" required="required" title=""
                                        value={values.service_name}
                                        onChange={(event) => setValues({ ...values, service_name: event.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group mx-4">
                                <label for="input" className="col-sm-10 control-label"><b>Price</b>:</label>
                                <div className="col-sm-20">
                                    <input type="text" name="" id="input"
                                        className="form-control" placeholder='vnd' required="required" title=""
                                        value={values.price}
                                        onChange={(event) => setValues({ ...values, price: event.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" m-3">
                            <label for="input" className=""><b>Description</b>:</label>
                            <input type="text" name="" id="input"
                                className="form-control" required="required" title=""
                                value={values.description}
                                onChange={(event) => setValues({ ...values, description: event.target.value })}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSave(dataEdit.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export {
    CreateCustomer,
    CreateEmployee,
    CreateProduct,
    ModaleDeleteProduct,
    ModaleEditProduct,
    CreateService,
    ModaleDeleteService,
    ModaleEditService
}