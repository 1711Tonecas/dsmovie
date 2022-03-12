import axios  from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //Forma errada
    axios.get(`${BASE_URL}/movies?size=12&pafes=0`)
        .then(response => {
            console.log(response.data);
        });

    return (
        <>
            <Pagination />

            <div className="conteiner">
                <div className="row">
                    <div className="col-sm-6 col-lg4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;