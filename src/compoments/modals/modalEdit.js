import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../../reviceAPI/axiosAPI';
const ModaleEdit = (props) => {
    const { show, handle, dataEdit, handleEditdata } = props;
    const [valuse, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleClose = () => {
        handle()
    }
    useEffect(() => {
        if (show) {
            setValues({ ...valuse, name: dataEdit.name, email: dataEdit.email, password: dataEdit.password })
        }
    }, [dataEdit])

    const handleSave = async (id) => {
        const res = await editUser(id, valuse);
        console.log('res', res);
        if (res && res.status === 200) {
            handleEditdata({
                id: dataEdit.id, name: valuse.name, email: valuse.email, password: valuse.password
            })
            alert("Edit thành công!");
            handleClose();
        } else {
            alert("lỗi edit không thành công!");
            handleClose();
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
                                onChange={(event) => setValues({ ...valuse, name: event.target.value })}
                                name="name" value={valuse.name} />
                        </div>
                        <div className='m-3'>
                            <label forHtml="email">Email</label>
                            <input type="text" className='form-control rounded'
                                onChange={(event) => setValues({ ...valuse, email: event.target.value })}
                                name="email" value={valuse.email} />
                        </div>
                        <div className='m-3'>
                            <label for="">Password</label>
                            <input type="text" className='form-control rounded'
                                onChange={(event) => setValues({ ...valuse, password: event.target.value })}
                                name="password" value={valuse.password} />
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