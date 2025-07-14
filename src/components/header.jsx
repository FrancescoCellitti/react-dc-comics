export default function Header() {
    return (
        <>
            <header>
                <nav class="navbar bg-body-tertiary">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src="./public/img/dc-logo.png" alt="Logo" width="50" class="d-inline-block align-text-top"></img>
                        </a>
                        <div>
                            <ul class="d-flex flex-row navbar-nav gap-4">
                                <li class="nav-item"><a class="nav-link" href="#">Characters</a></li>
                                <li class="nav-item"><a class="nav-link active fw-bold text-primary" href="#">Comics</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Movies</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">TV</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Games</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Collectibles</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Fans</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">News</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )

}