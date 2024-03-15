import { Link, useNavigate } from "react-router-dom";
import "./Sevices.scss";
export const Sevices = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <div className="nabar">
                    <h1>Quán Lý Database</h1>
                    <ul>
                        <li><Link to='/customer'>CustomerList</Link></li>
                        <li><Link to='/employee'>EmplotyeeList</Link></li>
                        <li><Link to='/service'>ServiceList</Link></li>
                        <li><Link to='/appointment'>AppointmentList</Link></li>
                        <li><Link to='/feedback'>FeedbackList</Link></li>
                        <li><Link to='/order'>OrderList</Link></li>
                        <li><Link to='/order_detail'>Order_DetailList</Link></li>
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
                                <th>first_name</th>
                                <th>Last_name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
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