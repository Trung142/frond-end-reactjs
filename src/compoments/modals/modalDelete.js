import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../reviceAPI/axiosAPI';
const ModaleDelete = (props) => {
    const { show, handle, DeleteData, handledatadeleteUser } = props;
    const handleClose = () => {
        handle();
    }
    const handleSave = async () => {
        const res = await deleteUser(DeleteData.id);
        if (res && res.status === 200) {
            handledatadeleteUser(DeleteData);
            alert("delete user success!");
            handleClose();
        } else {
            alert("error");
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
                        <span> Email : {DeleteData.email}</span>
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
export default ModaleDelete;