export default function Footer() {
    return (
        <footer className="text-white">
            <div className="bg-dark bg-opacity-75 py-5 position-relative"
                style={{
                    backgroundImage: "url('/img/footer-bg.jpg')",
                    backgroundSize: 'contain',
                    repeat: 'no repeat',
                    backgroundPosition: 'center',
                }}>

                <div className="container d-flex flex-column flex-md-row justify-content-between" >

                    {/* Colonne link */}
                    <div className="d-flex flex-wrap">
                        {/* Colonna 1 */}
                        <div className="me-5">
                            <h5 className="text-uppercase">DC Comics</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-white-50 text-decoration-none">Characters</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Comics</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Movies</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">TV</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Games</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Videos</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">News</a></li>
                            </ul>

                            <h5 className="text-uppercase mt-4">Shop</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-white-50 text-decoration-none">Shop DC</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        {/* Colonna 2 */}
                        <div className="me-5">
                            <h5 className="text-uppercase">DC</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-white-50 text-decoration-none">Terms Of Use</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Privacy Policy (New)</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Ad Choices</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Advertising</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Jobs</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Subscriptions</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Talent Workshops</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">CPSC Certificates</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Ratings</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Shop Help</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Colonna 3 */}
                        <div className="me-5">
                            <h5 className="text-uppercase">Sites</h5>
                            <ul className="list-unstyled">
                                <li><a href="" className="text-white-50 text-decoration-none">DC</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">MAD Magazine</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">DC Kids</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">DC Universe</a></li>
                                <li><a href="" className="text-white-50 text-decoration-none">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>

                   
                    <div className="position-relative d-none d-md-block">
                        <img
                            src="./public/img/dc-logo-bg.png"
                            alt="DC logo background"
                            style={{ width: '300px',
                                   zIndex: 0
                            }}
                            
                        />
                    </div>
                </div>

                
                <div className="container border-top border-secondary mt-4 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <a href="" className="btn btn-outline-primary text-white text-uppercase fw-bold px-4 mb-3 mb-md-0">Sign-Up Now!</a>

                    <div>
                        <span className="me-3 fw-bold text-uppercase text-primary">Follow Us</span>
                        <a href="" className="text-white fs-5 me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="" className="text-white fs-5 me-3"><i className="fab fa-x-twitter"></i></a>
                        <a href="" className="text-white fs-5 me-3"><i className="fab fa-youtube"></i></a>
                        <a href="" className="text-white fs-5 me-3"><i className="fab fa-pinterest-p"></i></a>
                        <a href="" className="text-white fs-5"><i className="fas fa-bullseye"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
