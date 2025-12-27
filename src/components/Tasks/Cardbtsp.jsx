import React from "react";
import thv from "../../assets/Img/thv.jpg";

export default function Cardbtsp() {
    return (
        <div>
            <div class="card" style={{width: "100px"}}>
                <img src={thv} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}