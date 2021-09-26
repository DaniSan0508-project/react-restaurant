import './header.css';
import { Link } from 'react-router-dom';
import logo  from '../../assets/logo.jpg';
import { MdShoppingBasket, MdPlaylistAdd } from 'react-icons/md';

export function Header(){
    return(
        <div className="header container">
            <div className="header_main">
                <img src={ logo } alt="logo-restaurante" />
                    <h1>React Restaurant</h1>
                    <div className="header_main_button">
                        <Link to="/carrinho">
                            <MdShoppingBasket size={40} color="#fff"/>
                        </Link>
                        <Link to="/">
                            <MdPlaylistAdd size={40} color="#fff"/>
                        </Link>
                    </div>
            </div>
        </div>
    )
}