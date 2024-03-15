import { Link, useNavigate } from "react-router-dom";
import "../Sevices.scss";
import { CreateEmployee } from "../modals/modalCreateData";
import { useEffect, useState } from "react";
import { apiemployee } from "../../reviceAPI/axiosAPI";
import ReactPaginate from "react-paginate";
export const EmplotyeeList = (props) => {
    const navigate = useNavigate();
    const [show, setshow] = useState(false);
    const [value, setvalue] = useState([]);
    const [total, settotal] = useState(0);
    const [page, setpage] = useState(0);
    const getUser = async (page) => {
        let res = await apiemployee(page);
        if (res && res.data && res.data.message === 'ok') {
            setvalue(res.data.data);
            setpage(res.data.total_page);
            settotal(res.data.total);
        }
    }
    const handlepageClick = (page) => {
        getUser(+page.selected + 1)
    }
    useEffect(() => {
        getUser(1);
    }, [])
    //update
    const handleupdate = (user) => {
        setvalue([user, ...value]);
    }
    const handleClose = () => {
        setshow(false);
    }
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
                            <button onClick={() => setshow(true)} type="">add + list</button>
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
                                <th>Position</th>
                                <th>Start_date</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value && value.length > 0 && value.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.employee_id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.position}</td>
                                        <td>{item.start_date}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                            <div className="action">
                                                <button className='edit' type="">edit</button>
                                                <button className='delete' type="">delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="page">
                        <nav aria-label="Page navigation example">
                            <ReactPaginate
                                previousLabel="Previous"
                                nextLabel="Next"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                pageCount={page}
                                marginPagesDisplayed={total}
                                pageRangeDisplayed={3}
                                onPageChange={handlepageClick}
                                containerClassName="pagination"
                                activeClassName="active"
                            />
                        </nav>
                    </div>
                </div>
            </div>
            <CreateEmployee
                show={show}
                handleClose={handleClose}
                handleupdate={handleupdate}
            />
        </>
    );
}