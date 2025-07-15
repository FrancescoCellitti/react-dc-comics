import comics from "../assets/comics"
export default function ContentArea() {
    return (
        <>
            <div className="jumbotron container-fluid px-0">
                <img src="./img/jumbotron.jpg" alt="" className="img-fluid" style={{ width: "100%", height: "50vh" }} />
            </div>
            <div className="container-fluid bg-dark">
                <div className="container d-flex flex-wrap  justify-content-center gap-4 py-5 position-relative">
                    <button type="button" className="btn btn-primary position-absolute fs-4 " style={{
                        left: "0px",
                        top: "-20px"
                    }}>CURRENT SERIES </button>
                    <div className="row">

                        {
                            comics.map(({ thumb, series }, index) => {
                                return (
                                    <div className="col-2 d-flex g-4">
                                        <div className="card border-0 bg-transparent text-white" style={{ width: "70rem" }}>
                                            <img src={thumb} class="card-img-top" alt={series} style={{ width: "100%", height: "189px" }} />
                                            <div className="card-body p-0">
                                                <h6>{series}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <button type="button" className="btn btn-primary fs-4 px-5 ">LOAD MORE</button>
                </div>
                
            </div>
        </>
    )
}