import { createContext, useState } from "react";
import { product } from "../compoments/product";
const ProducContect = createContext({});
const ProductProvider = ({ children }) => {
    const [carts, setcart] = useState([]);
    let handleshoping = (user) => {
        let list = [
            {
                quality: 1,
                id: user.id,
                product_name: user.product_name,
                image: user.image,
                price: user.price
            }, ...carts
        ];

        setcart(list);
    }
    let handlupdate = (user) => {
        setcart(user);
    }
    return (
        <ProducContect.Provider value={{ carts, product, setcart, handleshoping, handlupdate }}>
            {children}
        </ProducContect.Provider>
    )
}
export { ProducContect, ProductProvider }