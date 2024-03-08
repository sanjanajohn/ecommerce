import categories from "../categories"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className="flex max-w-sm flex-wrap items-center">
                {categories.map((category) => (
                    <li key={category.name}>
                        <Link to={category.path}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar;
