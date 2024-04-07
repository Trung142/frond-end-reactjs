import "./tableUser.scss";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
const ManagerCustomer = (props) => {
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="curtor">
                        <Link to='/'> thoát</Link>
                    </div>
                    <div className="col">
                        <span><strong>list User </strong></span>

                    </div>
                    <div className="col add">
                        <button className="btn btn-danger" type="">Add User</button>
                    </div>
                </div>
                <div className="mb-3">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Họ Tên
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Number Phone
                                </th>
                                <th>
                                    Địa chỉ
                                </th>
                                <th>
                                    Ngày khởi tạo
                                </th>
                                <th>
                                    Active
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <div>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <div>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <div>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={''}
                containerClassName="pagination"
                activeClassName="active"
            />
        </>
    )
}
export default ManagerCustomer;