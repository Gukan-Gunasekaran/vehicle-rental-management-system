import { Link } from "react-router-dom";
import fireblade from "./assets/fireblade.jpeg";
import R1 from "./assets/r1.jpeg";
import panigale from "./assets/panigale.jpg";

function Body() {
  const sBikes = [
    { title: "fireblade", img: fireblade ,displacement:"999.9cc",category:"sports",charge:"2000",brand:"Honda"},
    { title: "R1", img: R1 ,displacement:"998cc",category:"sports",charge:"1500",brand:"Yamaha"},
    { title: "panigale V4 R",displacement:"998cc", img: panigale,brand:"ducati",category:"sports",charge:"1800"},
  ];
  return (
    <div>
      <div className="row justify-content-center g-4 m-3">
        {sBikes.map((bike) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-hover">
              <div className="card-body text-center">
                <h2 className="card-title"> {bike.title}</h2>
                <img src={bike.img} className="card-img-top" alt="tractor" />
                <br />
                <ul className=" text-decoration-none list-unstyled mb-1">
                  <li><h2>{bike.brand}</h2></li>
                  <li>Displacement:{bike.displacement}</li>
                  <li>Category:{bike.category}</li>
                  <li>Charge:{bike.charge}</li>
                </ul>
                <Link className="btn btn-primary mt-auto" to="TractorForm">
                  prebook
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Body;
