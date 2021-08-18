import logo_tienda from '../assets/logo_tienda.png'
import CartWidget from './CartWidget'

const navbar = () =>{
    return(
        <nav className="navbar-material">
            <div className="nav-wrapper">
                <a id="logo-container" href="/#" className="brand-logo left"><img src={logo_tienda} alt="logo"/></a><a id="logo-container" href="/#" className="brand-logo text">CompuTar</a>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                    <a className="dropdown-trigger" href="/#" data-target="dropdown">Productos</a>
                        <ul id="dropdown" className="dropdown-content">
                            <li>
                                <a href="/#">Monitores</a>
                            </li>
                            <li>
                                <a href="/#">HDDs</a>
                            </li>
                            <li>
                                <a href="/#">Procesadores</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/#">Contacto</a>
                    </li>
                    <li>
                        <CartWidget cantidad={14}/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar