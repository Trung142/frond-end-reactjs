import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { VND } from '../vnd';
export const Bill = (props) => {
    const { show, handleClose, listproduct, total, value } = props;
    const Close = () => {
        handleClose();
    }
    return (
        <>
            <Modal show={show} >
                <Modal.Header >
                    <Modal.Title>Bill</Modal.Title>
                    <i class="fa-solid fa-circle-check" style={{ color: '#12f33f', fontSize: '2.5rem' }} ></i>
                </Modal.Header>
                <Modal.Body>
                    <div className='header'>
                        <span>Da dat hang thanh cong</span>
                    </div>
                    <div className='body'>
                        <div className='d-flex flex-column mt-3'>
                            <span>Thông tin khach hang: <b>{value.name}</b></span>
                            <span>Number phone: <b>{value.phone}</b></span>
                        </div>
                        <small className='mt 3'>Thong tin san pham da dat</small>
                        <div className='group mt-2'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Ten san pham
                                        </th>
                                        <th>
                                            So luong
                                        </th>
                                        <th>
                                            Thanh tien
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listproduct && listproduct.length > 0 && listproduct.map((items, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>
                                                        {items.product_name}
                                                    </td>
                                                    <td>
                                                        {items.quality}
                                                    </td>
                                                    <td>
                                                        {VND.format(items.price)}
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-3'>
                        <span>Hinh thuc thanh toan : <b>{value.check}</b></span>
                        <span>Quy khach vui long chuan bi so tien: <b>{VND.format(total)}</b></span>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <div className='d-flex justify-content-between w-100 align-items-center'>
                        <div className='p-1'>
                            <span>Dia chi giao hang: </span>
                            <small>{value.city} - {value.vilist} - {value.address}</small>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                            <Button onClick={Close} variant="outline-success">
                                Close me
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}