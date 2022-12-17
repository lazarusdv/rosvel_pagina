const NavItem = (props:{name:string}) => {
    return (
        <div className="text-2xl md:mx-2">
            {props.name}
        </div>
    )
}

export default NavItem