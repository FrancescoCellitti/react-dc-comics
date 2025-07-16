import comics from "../assets/comics"
import ComicCard from "./comicCard"
export default function ContentArea() {
    return (
        <>
            <div className="jumbotron container-fluid px-0">
                <img src="/img/jumbotron.jpg" alt="" className="img-fluid" style={{ width: "100%", height: "50vh" }} />
            </div>
            <div className="container-fluid bg-dark">
                <div className="container d-flex flex-wrap  justify-content-center gap-4 py-5 position-relative">
                    <button type="button" className="btn btn-primary position-absolute fs-4 " style={{
                        left: "0px",
                        top: "-20px"
                    }}>CURRENT SERIES </button>
                    <div className="row">

                        {
                            comics.map((comic, index) => (
                                <ComicCard key = {index} thumb = {comic.thumb} series = {comic.series}/>
                            ))
                        }


                    </div>
                    <button type="button" className="btn btn-primary fs-4 px-5 ">LOAD MORE</button>
                </div>
                
            </div>
        </>
    )
}