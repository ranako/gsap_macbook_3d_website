import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="apple logo" />
            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}><a href={label}> {label}</a></li>
                ))}
            </ul>
            <div className= "flex-center gap-4">
                <button>
                    <img src="/search.svg" alt="search icon" />
                </button>
                <button>
                    <img src="/cart.svg" alt="cart icon" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar