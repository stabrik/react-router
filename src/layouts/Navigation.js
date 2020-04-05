import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

const list = [
    {name: 'Start', path: '/'},
    {name: 'Produkty', path: '/products'},
    {name: 'Kontakt', path: '/contact'},
    {name: 'Panel admin', path: '/admin'},
];

const Navigation = () => {
    const menu = list.map( (elem) => (<li className="list__item" key={elem.name}> <NavLink exact={elem.path === '/'} className="item__link" to={elem.path}>{elem.name}</NavLink></li>) )
    return (
        <nav className="nav">
            <ul className="nav__list">
                {menu}
            </ul>
        </nav>
    )
};

export default Navigation;