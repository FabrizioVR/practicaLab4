import { Link } from "react-router-dom";

const Header = () => {
    return <header style={{ textAlign: 'center' }}>
        <div className="color-header">
        <h1>The F Store
        </h1>
        <p>By Fabrizio Vidal</p>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Store</Link>
            </div>
        </nav>
    </header>;
}

export default Header;