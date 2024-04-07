import "./tableUser.scss";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { apiservices } from "../../reviceAPI/axiosAPI";
import moment from "moment";
import { CreateService, ModaleDeleteService, ModaleEditService } from "../modals/modalCreateData";
const ManagerService = (props) => {
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
        const res = await apiservices(page);
        console.log(res);
        if (res && res.data && res.data.errCode === 0 && res.data.message.errCode === 0 && res.data.message.errMessage === 'ok') {
            settotalUser(res.data.message.total);
            settotal_page(res.data.message.totalpage);
            setlistUser(res.data.message.User);
        } else if (res.status === 404 || res.data.errCode === 4) {
            console.log(res);
        }
        else {
            alert(res.data.message.errMessage)
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
        listuser[index].service_name = user.service_name;
        listuser[index].price = user.price;
        listuser[index].description = user.description;
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
                        <span><strong>list Service </strong></span>

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
                                    Tên Dịch vụ
                                </th>
                                <th>
                                    Chi tiết
                                </th>
                                <th>
                                    Giá
                                </th>
                                <th>
                                    Ngày Thêm
                                </th>
                                <th>
                                    Active
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser && listUser.length > 0 && listUser.map((items, index) => {
                                return (
                                    <tr key={`user ${index}`}>
                                        <td>{items.service_name}</td>
                                        <td>{items.description}</td>
                                        <td>{items.price}</td>
                                        <td>{moment(items.updatedAt).format('DD/MM/YYYY hh:mm:ss')}</td>
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
            <CreateService
                show={showadd}
                handleClose={handleClose}
                hanldeUpdate={hanldeUpdate}
            />
            <ModaleDeleteService
                show={showDelete}
                handle={handleClose}
                DeleteData={DeleteData}
                handledatadeleteUser={handledatadeleteUser}
            />
            <ModaleEditService
                show={showEdit}
                handle={handleClose}
                dataEdit={dataEdit}
                handleEditdata={handleEditdata}
            />
        </>
    )
}
export default ManagerService;