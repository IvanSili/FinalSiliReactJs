import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <section className="flex justify-between items-center bg-[#1F4489] p-7">
        <Link to="/"><img className="h-12  " src="./image/blockbuster-logo.svg" alt="BLOCKBUSTER" /></Link>
            <nav className="flex list-none gap-8 text-white font-semibold text-base">
                <li className="hover:text-[#FCC139] p-2 hover:uppercase "><Link to="/category">HOME</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/category/action">ACTION</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/category/comedy">COMEDY</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/category/romance">ROMANCE</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/category/horror">HORROR</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/category/drama">DRAMA</Link></li>
                <li className="hover:text-[#FCC139] p-2 hover:uppercase"><Link to="/Nosotros">NOSOTROS</Link></li>
            </nav>
            <div>
                <CartWidget/>   
            </div>
        </section>
    )
}

export default NavBar
