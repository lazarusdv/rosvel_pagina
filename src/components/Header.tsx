import { NavLink } from 'react-router-dom'

import NavItem from './NavItem'

const Header = () => {
    //[name, link]
    const nav_items:Array<[string, string]> = [
        ['Ferrita', '/ferrita'],
        ['Neodimio', '/neodimio'],
        ['ALNICO', '/alnico'],
        ['Samario-cobalto', '/samarioCobalto'],
        ['Aplicaciones magneticas', '/aplicacionesMagneticas']
    ]
    return (
        <div className="flex flex-col md:flex-row">
            <NavLink to="/">
                <span className="text-xl font-bold block">
                    Rosvel Servicios S. A. de C. V. 
                </span>
                Todo en imanes y aplicaciones magneticas
            </NavLink>
            {nav_items.map((item) => <NavItem name={item[0]} link={item[1]}/>)}
        </div>
    )
}

export default Header