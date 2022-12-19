import { NavLink } from 'react-router-dom'

const NavItem = (props:{name:string, link:string}) => {
    return (
        <div className="text-2xl md:mx-2">
            <NavLink to={props.link}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default NavItem