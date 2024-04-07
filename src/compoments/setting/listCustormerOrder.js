import "./tableUser.scss";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import ModaleEdit from "../modals/modalEdit";
import ModaleAdd from "../modals/ModaleAdd";
import ModaleDelete from "../modals/modalDelete";
import { Link } from "react-router-dom";
import { Listuser } from "../../reviceAPI/axiosAPI";
import { VND } from "../vnd";
const ListCostomerOrder = (props) => {
    const [listUser, setlistUser] = useState([]);
    //pagination
    const [totalUser, settotalUser] = useState(0);
    const [total_page, settotal_page] = useState(0);
    const [showadd, setShowadd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [dataEdit, setdataEdit] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [DeleteData, setDeleteData] = useState({});
    useEffect(() => {
        getuser(1);
    }, [])
    //list
    const getuser = async (page) => {
        const res = await Listuser(page);
        console.log(res);
        if (res && res.data) {
            settotalUser(res.data.total);
            settotal_page(res.data.totalpage);
            setlistUser(res.data.data);
        }
    }
    //hanlepage
    const handlepageClick = (page) => {
        getuser(+page.selected + 1);
    }
    // show modale
    const handleClose = () => {
        setShowadd(false);
        setShowDelete(false);
        setShowEdit(false);
    }
    // resert page
    const hanldeUpdate = (user) => {
        setlistUser([user, ...listUser]);
    }
    //Edit
    const handleEdit = (user) => {
        setShowEdit(true);
        setdataEdit(user);
    }
    const handleEditdata = (user) => {
        let listuser = [...listUser];
        const index = listUser.findIndex(items => items.id === user.id);
        listuser[index].username = user.username;
        listuser[index].email = user.email;
        listuser[index].password = user.password;
        setlistUser(listuser);
    }
    //delete
    const handledelete = (user) => {
        setShowDelete(true);
        setDeleteData(user)
    }
    const handledatadeleteUser = (user) => {
        let listuser = [...listUser];
        listuser = listUser.filter((items) => items.id !== user.id);
        setlistUser(listuser);
    }
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="curtor">
                        <Link to='/'> thoát</Link>
                    </div>
                    <div className="col">
                        <span><strong>Danh sách khách hàng đã Order Sản phẩm </strong></span>

                    </div>
                    <div className="col add">
                        <button onClick={() => setShowadd(true)} className="btn btn-danger" type="">Thêm dịch vụ</button>
                    </div>
                </div>
                <div className="mb-3">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Tên Khách hàng
                                </th>
                                <th>
                                    Số điện thoại
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Tên dịch vụ
                                </th>
                                <th>
                                    Giá
                                </th>
                                <th>
                                    Số lượng
                                </th>
                                <th>
                                    Thanh tiền
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
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <div>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        <i className="fa-regular fa-trash-can"></i>
                                    </div>
                                </td>
                            </tr>
                            {listUser && listUser.length > 0 && listUser.map((items, index) => {
                                return (
                                    <tr key={`user ${index}`}>
                                        <td>{items.id}</td>
                                        <td>{items.email}</td>
                                        <td>{items.username}</td>
                                        <td>{items.password}</td>
                                        <td>
                                            <div>
                                                <i onClick={() => handleEdit(items)} className="fa-regular fa-pen-to-square"></i>
                                                <i onClick={() => handledelete(items)} className="fa-regular fa-trash-can"></i>
                                            </div>
                                        </td>
                                    </tr>
                                )

                            })}
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
                pageCount={total_page}
                marginPagesDisplayed={totalUser}
                pageRangeDisplayed={3}
                onPageChange={handlepageClick}
                containerClassName="pagination"
                activeClassName="active"
            />
            <div className="total list-group-item">
                <span>Tổng doanh thu :<b>{VND.format(1000)}</b> </span>
            </div>
            <ModaleAdd
                show={showadd}
                handle={handleClose}
                hanldeUpdate={hanldeUpdate}
            />
            <ModaleDelete
                show={showDelete}
                handle={handleClose}
                DeleteData={DeleteData}
                handledatadeleteUser={handledatadeleteUser}
            />
            <ModaleEdit
                show={showEdit}
                handle={handleClose}
                dataEdit={dataEdit}
                handleEditdata={handleEditdata}
            />

        </>
    )
}
export default ListCostomerOrder;