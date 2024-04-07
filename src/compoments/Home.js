import { Hairsalon } from "./HairSalon"
import { Navbar } from "./nabav"
import '../compoments/Customers/Hair.scss'
export const Home = () => {
    return (
        <>
            <Navbar />
            <Hairsalon />
        </>
    )
}