import { Link, useNavigate } from "react-router-dom"
import './Customers/Hair.scss';
import nen from "./img/hari.jpg";
import { useContext } from "react";
import { ProducContect } from "../context/productProvider";
import { VND } from "./vnd";
import { Slickservice } from "./serviceSlick";

export const Hairsalon = () => {
    const navigate = useNavigate();
    const { carts, product, handleshoping } = useContext(ProducContect);
    const handleclicks = async (user) => {
        let list = carts.findIndex(items => items.id === user.id)
        if (list === -1) {
            handleshoping(user);
            navigate('/carts')
        } else {
            alert('san pham da co trong gio hang');
        }
    }
    return (
        <>
            <div className="container p-0">
                <div className="conten">
                    <img src={nen} className="img-fluid" alt="..." fluid />
                </div>
                <div className="cart">
                    <div className="line_cart">
                        <i className="fa-solid fa-truck"></i>
                        <span>Giao Hàng Hỏa Tốc</span>
                    </div>
                    <div className="line_cart">
                        <i className="fa-solid fa-cash-register"></i>
                        <span>Hoàn tiền 200%</span>
                    </div>
                    <div className="line_cart">
                        <i className="fa-solid fa-money-check"></i>
                        <span>Chỉnh sách đổi trả</span>
                    </div>
                    <div className="line_cart">
                        <i className="fa-brands fa-product-hunt"></i>
                        <span>Cam kết chỉnh hãng</span>
                    </div>
                </div>
                <div className="slickservice">
                    <Slickservice />
                </div>
                <main>
                    <h3><b>SẢN PHẨM</b></h3>
                    <div className="product">
                        {product && product.length > 0 && product.map((items, index) => {
                            return (
                                <>
                                    <div className="order" id="product" key={index}>
                                        <img src={items.image} className="img-fluid" alt="" />
                                        <div className="price">
                                            <p>{items.product_name}</p>
                                            <span>{VND.format(items.price)}</span>
                                            <div>
                                                <button onClick={() => handleclicks(items)}>Mua</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

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