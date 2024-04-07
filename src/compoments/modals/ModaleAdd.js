import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../setting/Singup.scss";
import { useState } from "react";
import { updateUser } from '../../reviceAPI/axiosAPI';
import { valiLation } from '../../configs/js/valilation';
const ModaleAdd = (props) => {
    const { show, handle, hanldeUpdate } = props;
    const handleClose = () => {
        setError('');
        handle()
    }
    const [Values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({});
    const [showpassword, setshowPassword] = useState(false);
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSave = async (event) => {
        setError(valiLation(Values));
        event.preventDefault();
        if (Values.email && Values.password && Values.username) {
            if (!error.email && !error.password && !error.username) {
                let res = await updateUser(Values);
                if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {
                    alert("Creat User success !");
                    handleClose();
                    hanldeUpdate({ id: res.data.message.insertId, username: Values.username, email: Values.email, password: Values.password });
                } else if (res.status === 404 || res.data.errCode === 4) {
                    alert('ten khong duoc co dau');
                }
                else {

                    alert(res.data.message.errMessage)
                }
            }
        } else {
            alert('not found');
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
                        <div className="mb-3">
                            <label htmlFor="name"><strong>User name</strong></label>
                            <input className="form-control rounded"
                                type="text" name="username" onChange={handleInput} />
                            {error.username && <small className="text-danger">{error.username}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email"><strong>Email</strong> </label>
                            <input className="form-control rounded"
                                type="email" name="email" onChange={handleInput} />
                            {error.email && <small className="text-danger ">{error.email}</small>}
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password"><strong> Password</strong></label>
                            <input className="form-control rounded"
                                type={showpassword === false ? "password" : "text"} name="password" onChange={handleInput} />
                            <i className={showpassword === false ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                onClick={() => setshowPassword(!showpassword)}></i>
                            {error.password && <small className="text-danger ">{error.password}</small>}
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModaleAdd;