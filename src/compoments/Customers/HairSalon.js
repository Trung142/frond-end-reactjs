import { Link, useNavigate } from "react-router-dom"
import '../Customers/Hair.scss';
import nen from "../img/hari.jpg";
import xit1 from '../img/xit1.jpg';
import xit2 from '../img/xit2.jpg';
import xit3 from '../img/xit3.jpg';
import xit4 from '../img/xit4.jpg';
import { Navbar } from "./nabav";
export const Hairsalon = () => {
    const navigate = useNavigate();
    const handleclicks = () => {
        navigate('/carts')
    }
    return (
        <>
            <div className="container p-0">
                <Navbar />
                <div className="conten">
                    <img src={nen} className="img-fluid" alt="..." fluid />
                </div>
                <div className="cart">
                    <div className="line_cart">
                        <i class="fa-solid fa-truck"></i>
                        <span>Giao Hàng Hỏa Tốc</span>
                    </div>
                    <div className="line_cart">
                        <i class="fa-solid fa-cash-register"></i>
                        <span>Hoàn tiền 200%</span>
                    </div>
                    <div className="line_cart">
                        <i class="fa-solid fa-money-check"></i>
                        <span>Chỉnh sách đổi trả</span>
                    </div>
                    <div className="line_cart">
                        <i class="fa-brands fa-product-hunt"></i>
                        <span>Cam kết chỉnh hãng</span>
                    </div>
                </div>
                <main>
                    <h3><b>SẢN PHẨM</b></h3>
                    <div className="product">
                        <div className="order">
                            <img src={xit1} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit2} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit4} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit3} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit1} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit3} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <img src={xit2} className="img-fluid" alt="" />
                            <div className="price">
                                <p>Dầu gội đầu Davinnes</p>
                                <span>450.000 vnđ</span>
                                <div>
                                    <button onClick={() => handleclicks()}>Mua</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>

                    <section className="contacts" id="Contact">
                        <h1 className="heading"> <span><b>Contact us</b></span></h1>
                        <div className="box-container">
                            <form action="" className="">
                                <label for="">user name</label>
                                <input type="text" className="box" id="Username" name="user" />
                                <label for=""> email</label>
                                <input type="email" name="email" id="email" className="box" />
                                <label for=""> password</label>
                                <input type="password" name="password" id="password" className="box" />
                                <label for="">messages</label>
                                <textarea name="messages" id="textarea" cols="30" rows="10"></textarea>
                                <small></small>
                                <input type="submit" placeholder="messages" id="mesagers" className="btn" />
                            </form>
                            <div className="imges">
                                <img src={nen} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </section>
                    <section className="footers">
                        <div className="box">
                            <h3>Quick Links</h3>
                            <Link to="">Home</Link>
                            <Link to="">bout</Link>
                            <Link to="">Products</Link>
                            <Link to="">Reviews</Link>
                            <Link to="">Contact</Link>
                        </div>
                        <div className="box">
                            <h3>Extra Links</h3>
                            <Link to="">My ccount</Link>
                            <Link to="">My Order</Link>
                            <Link to="">My Favorite</Link>
                        </div>
                        <div className="box">
                            <h3>Locations</h3>
                            <Link to="">India</Link>
                            <Link to="">USA</Link>
                            <Link to="">Japan</Link>
                            <Link to="">France</Link>
                        </div>
                        <div className="box">
                            <h3>Contact Info</h3>
                            <Link to="">+84 379422402</Link>
                            <Link to="">t142ayun@gmail.com</Link>
                            <Link to="">Cart</Link>
                        </div>
                    </section>
                </footer>
            </div >
        </>
    )
}