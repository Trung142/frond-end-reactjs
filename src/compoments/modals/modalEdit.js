import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../../reviceAPI/axiosAPI';
const ModaleEdit = (props) => {
    const { show, handle, dataEdit, handleEditdata } = props;
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleClose = () => {
        handle()
    }
    useEffect(() => {
        if (show) {
            setValues({ ...values, username: dataEdit.username, email: dataEdit.email })
        }
    }, [dataEdit])
    const handleSave = async (id) => {
        if (values.email && values.username) {
            let res = await editUser(+id, values);
            if (res && res.status === 200 && res.data.errCode === 0 && res.data.message.errMessage === 'ok') {
                handleEditdata({
                    id: dataEdit.id, username: values.username, email: values.email
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
                    <div className='container'>
                        <div className='m-3'>
                            <label forHtml="name">User name</label>
                            <input type="text" className='form-control rounded'
                                onChange={(event) => setValues({ ...values, username: event.target.value })}
                                name="username" value={values.username} />
                        </div>
                        <div className='m-3'>
                            <label forHtml="email">Email</label>
                            <input type="text" className='form-control rounded'
                                onChange={(event) => setValues({ ...values, email: event.target.value })}
                                name="email" value={values.email} />
                        </div>
                        <div className='m-3'>
                            <label for="">Password</label>
                            <input type="text" className='form-control rounded'
                                onChange={(event) => setValues({ ...values, password: event.target.value })}
                                name="password" value={values.password} />
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
export default ModaleEdit;