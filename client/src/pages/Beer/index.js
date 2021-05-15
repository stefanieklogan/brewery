import React, { useState, useEffect } from "react";
import BeerCard from '../../components/BeerCard';
// import API from "../../../../controllers/api/untappdRoutes";

function Beer() {
    // Setting our component's initial state
    const [beers, setBeers] = useState([])

    // Load all beers and store them with setBeers
    useEffect(() => {
        loadBeers()
    }, [])

    // Loads all beers and sets them to beers
    function loadBeers() {
        // API.getBeers()
            // .then(res =>
            //     setBeers(res.data)
            // )
            // .catch(err => console.log(err));
    };

    function Beer() {
        return (
            <main>
                <div className="mb-5"><h2>Beers on Tap</h2></div>
                <div className="container-fluid p-4">
                    <div className="col">
                        {beers.map((beer) => (
                            <div className="card-body">
                                <div className="col-6">
                                    <BeerCard>
                                        {beer.items}
                                    </BeerCard>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        )
    }
}

export default Beer;
