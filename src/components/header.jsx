export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="./public/img/dc-logo.png" alt="Logo" width="50" className="d-inline-block align-text-top"></img>
                        </a>
                        <div>
                            <ul className="d-flex flex-row navbar-nav gap-4">
                                <li className="nav-item"><a className="nav-link" href="#">Characters</a></li>
                                <li className="nav-item"><a className="nav-link active fw-bold text-primary" href="#">Comics</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Games</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Collectibles</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Videos</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Fans</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )

}