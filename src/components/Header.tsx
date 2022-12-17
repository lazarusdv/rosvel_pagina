import NavItem from './NavItem'

const Header = () => {
    const nav_items:Array<string> = [
        'Ferrita',
        'Neodimio',
        'ALNICO',
        'Samario-cobalto',
        'Aplicaciones magneticas'
    ]
    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <span className="text-xl font-bold block">
                    Rosvel Servicios S. A. de C. V. 
                </span>
                Todo en imanes y aplicaciones magneticas
            </div>
            {nav_items.map((item) => <NavItem name={item}/>)}
        </div>
    )
}

export default Header