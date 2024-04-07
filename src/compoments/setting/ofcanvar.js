import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../setting/ofcanval.scss';
import { UserContext } from '../../context/Providercontext';
import { useNavigate } from 'react-router-dom';
export const SettingUser = (props) => {
    const { show, handleClose } = props;
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();
    let handlelogin = () => {
        navigate('/login')
    }
    let handleSigup = () => {
        logout();
        navigate('/singup');
    }
    let handleadmin = () => {
        navigate('/manager');
    }
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div className='container'>
                            <div className='ofcanvar-user'>
                                <div className="mb-3 group">
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="input-file"
                                        id="input-file"
                                        placeholder=""
                                        aria-describedby="fileHelpId"
                                        hidden

                                    />
                                    <div className='avata' >
                                        <label for="input-file"><i className="fa-solid fa-user-astronaut"></i></label>
                                    </div>
                                    {user && user.uath === true && <span>{user.email}</span>}
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='container'>
                        <div className='content-manager'>
                            <div className='item-manager' onClick={handleadmin}>
                                ADMIN
                            </div>
                            <div className='item-manager'>
                                QUÁN LÝ
                            </div>
                        </div>
                        <div className="check-items-user">
                            {
                                user && user.uath === true ? <span onClick={handleSigup} >Log out<i class="fa-solid fa-user-plus"></i></span> :
                                    <span onClick={handlelogin} >Login <i class="fa-solid fa-right-to-bracket"></i></span>
                            }

                        </div>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}