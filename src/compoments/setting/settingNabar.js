import { useState } from 'react';
import '../setting/settingNabar.scss';
import ManagerEmployee from './ManagerEMployee';
import { Link } from 'react-router-dom';
import ManagerProduct from './ManagerProduct';
import ManagerService from './ManagerService';
import ManagerCustomer from './ManagerCustomer';
import Listappointment from './Listappoinment';
import RevenueSrtreams from './revenue-streams';
import ListCostomerOrder from './listCustormerOrder';
const SettingNabar = () => {
    const [showmanagerAdmin, setshowmanagerAdmin] = useState(false);
    const [showmanagerProduct, setshowmanagerProduct] = useState(false);
    const [showmanagerService, setshowmanagerService] = useState(false);
    const [showmanagerCustomer, setshowmanagerCustomer] = useState(false);
    const [showappointment, setshowappointment] = useState(false);
    const [showrevenue, setrevenue] = useState(false);
    const [showrlistorder, setlistorder] = useState(false);
    let handleManagerAdmin = () => {
        setshowmanagerAdmin(true);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
        setshowmanagerCustomer(false);
        setshowappointment(false);
        setrevenue(false);
        setlistorder(false);
    }
    let handleManager = () => {
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
        setshowmanagerCustomer(false);
        setshowappointment(false);
        setrevenue(false);
        setlistorder(false);
    }
    let handleproduct = () => {
        setshowmanagerService(false);
        setshowmanagerProduct(true);
        setshowmanagerAdmin(false);
        setshowmanagerCustomer(false);
        setshowappointment(false);
        setrevenue(false);
        setlistorder(false);
    }
    let handleservice = () => {
        setshowmanagerService(true);
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerCustomer(false);
        setshowappointment(false);
        setrevenue(false);
        setlistorder(false);
    }
    let handleCustomer = () => {
        setshowmanagerCustomer(true);
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
        setshowappointment(false);
        setrevenue(false);
        setlistorder(false);
    }
    let handleappointment = () => {
        setshowappointment(true);
        setshowmanagerCustomer(false);
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
        setrevenue(false);
        setlistorder(false);
    }
    let hanlderevenue = () => {
        setrevenue(true);
        setshowappointment(false);
        setshowmanagerCustomer(false);
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
        setlistorder(false);
    }
    let handlelistproduct = () => {
        setlistorder(true);
        setrevenue(false);
        setshowappointment(false);
        setshowmanagerCustomer(false);
        setshowmanagerAdmin(false);
        setshowmanagerProduct(false);
        setshowmanagerService(false);
    }
    return (
        <>
            <div className="container p-0">
                <div className="header-setting row ">
                    <div className="header-logo col-2">
                        <div className='item-logo'>
                            <i className="fa-solid fa-user-astronaut"
                                style={{ color: 'white', fontSize: '2rem' }}></i>
                        </div>
                        <div className='admin'>
                            <h3>ADMIN</h3>
                        </div>
                    </div>
                    <div className="header-content col-7">
                        <div className={`chill-items`}
                            onClick={handleManagerAdmin}
                        >
                            <h3>Manager User</h3>
                            <small></small>
                        </div>
                        <div className='chill-items'>
                            <h3>Manager Other</h3>
                            <small></small>
                            <ul className="manager-items">
                                <li onClick={handleproduct}><Link>Quán lý sản phẩm</Link></li>
                                <li onClick={handleservice}><Link>Quán lý dịch vụ</Link></li>
                                <li onClick={handleCustomer}><Link>Quán lý khách hàng</Link></li>
                            </ul>
                        </div>
                        <div className='chill-items'
                            onClick={handleManager}
                        >
                            <h3>Manager</h3>
                            <small></small>
                        </div>
                    </div>
                    <div className="header-left col-3">
                        <div className='left-items'
                            onClick={handleappointment}
                        >
                            <span>Danh sách Đặt Lịch</span>
                            <i class="fa-solid fa-rectangle-list"></i>
                        </div>
                        <div className='left-items'
                            onClick={hanlderevenue}
                        >
                            <span>Doanh Thu</span>
                            <i class="fa-solid fa-square-poll-vertical"></i>
                        </div>
                    </div>
                </div>
                {
                    showmanagerAdmin && showmanagerAdmin === true && <ManagerEmployee />
                }
                {
                    showmanagerProduct && showmanagerProduct === true && <ManagerProduct handlelistproduct={handlelistproduct} />
                }
                {
                    showmanagerService && showmanagerService === true && <ManagerService />
                }
                {
                    showmanagerCustomer && showmanagerCustomer === true && <ManagerCustomer />
                }
                {
                    showappointment && showappointment === true && <Listappointment />
                }
                {
                    showrevenue && showrevenue === true && <RevenueSrtreams />
                }
                {
                    showrlistorder && showrlistorder === true && <ListCostomerOrder />
                }
            </div>
        </>
    )
}
export default SettingNabar;