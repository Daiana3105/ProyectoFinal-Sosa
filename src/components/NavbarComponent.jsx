import CartWidget from "./CartWidget"

const NavbarComponent = () => {
    return(
        <nav className='navContainer' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <a className='navlink' href="">
            <img src='./logo.png' alt='logo' style={{width:'10rem'}}/>
            </a>
            <a className='navlink' href="">PRODUCTOS</a>
            <a className='navlink' href="">CONTACTO</a>
            <a className='navlink' href="">OFERTAS</a>
            <CartWidget/>
         </nav>
        

    )
}

export default NavbarComponent