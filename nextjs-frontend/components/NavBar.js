import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import AppContext from "/context/AppContext";
import { useContext } from "react";
// import { getCartItemNumber } from "../utils";

function NavBar(props) {
  const logo = "/eurielec.svg";
  const logoReduced = "/eurielec_reduced.svg";
  const [imageSrc, setImageSrc] = useState(logoReduced);
  const [imageClass, setImageClass] = useState("logo reduced");

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window?.innerWidth);
      if (window?.innerWidth > 600) {
        setImageSrc(logo);
        setImageClass("logo");
      } else {
        setImageSrc(logoReduced);
        setImageClass("logo reduced");
      }
    }
    handleResize();
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  const appContext = useContext(AppContext);

  return (
    <div className="navbar-container">
      <Link href="/">
        <Image
          height={imageClass === "logo reduced" ? 50 : 48}
          width={imageClass === "logo reduced" ? 50 : 206}
          layout="intrinsic"
          className={imageClass}
          src={imageSrc}
          alt="Eurielec's logo"
        />
      </Link>
      <div className="right-menu">
        <Link href="/products">Products</Link>
        <Link href="/faq">FAQ</Link>
        <a href="mailto:sudaderas@eurielec.etsit.upm.es">Contacto</a>
        <Link href="/cart">
          <div style={{ cursor: "pointer" }}>
            <IconContext.Provider value={{ size: "1.4em" }}>
              <FiShoppingCart />
            </IconContext.Provider>
            <span className="cart-items-number">
              {" "}
              {appContext.countItems() || 0}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
