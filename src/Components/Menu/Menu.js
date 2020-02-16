import React, {useState} from 'react';
import './Menu.scss';

function Menu(props) {
    const [burgerActive, setBurgerActive] = useState(false);

    function handleClick() {
        props.toggleMenu();
        setBurgerActive(!burgerActive);
    }
    
    return (
        <div id="menu">
            <button onClick ={handleClick} class={burgerActive ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Menu;