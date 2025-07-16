import comics from '../assets/comics'
export default function comicCard({ thumb, series }) {

    return (
        <div className="col-lg-2 col-md-4 col-sm-6 d-flex">
            <div className="card border-0 bg-transparent text-white" >
                <img src={thumb} className="card-img-top" alt={series} style={{ width: "100%", height: "40vh" }} />
                <div className="card-body">
                    <h6>{series}</h6>
                </div>
            </div>
        </div>
    )
}