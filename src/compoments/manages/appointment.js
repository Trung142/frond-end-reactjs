import { Link, useNavigate } from "react-router-dom";
import "../Sevices.scss";
export const AppointmentList = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <div className="nabar">
                    <h1>Quán Lý Database</h1>
                    <ul>
                        <Link to='/order_detail'><li>Order_DetailList</li></Link>
                        <Link to='/order'><li>OrderList</li></Link>
                        <Link to='/feedback'>  <li>FeedbackList</li></Link>
                        <Link to='/payment'><li>PaymentList</li></Link>
                        <Link to='/appointment'> <li>AppointmentList</li></Link>
                        <Link to='/customer'> <li>CustomerList</li></Link>
                        <Link to='/employee'><li>EmplotyeeList</li></Link>
                        <Link to='/product'><li>ProductList</li></Link>
                        <Link to='/service'><li>ServiceList</li></Link>
                    </ul>
                </div>
                <div className="table">
                    <div className="admin">
                        <h1>Admin Manager</h1>
                    </div>
                    <div className="main">
                        <div className="search">
                            <input className="form-control rounded" type="text" />
                            <button type="">search</button>
                        </div>
                        <div className="add">
                            <button type="">add + list</button>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Customer_id</th>
                                <th>Employe_id</th>
                                <th>Service_id</th>
                                <th>Appointment_date</th>
                                <th>Start_time</th>
                                <th>End_time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>you</td>
                                <td>name</td>
                                <td>0278824925</td>
                                <td>trung@gmail.com</td>
                                <td>Tp.hcm</td>
                                <td>12:00:00</td>
                                <td>xác nhận</td>
                                <td>
                                    <div className="action">
                                        <button className='edit' type="">edit</button>
                                        <button className='delete' type="">delete</button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="page">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}