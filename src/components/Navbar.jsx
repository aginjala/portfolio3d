import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 px-5 rounded-lg bg-black-500
            items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AR</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-blue' }>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-blue' }>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-blue' }>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar