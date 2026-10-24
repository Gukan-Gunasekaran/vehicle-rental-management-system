import { Link } from "react-router-dom";
import fireblade from "./assets/fireblade.jpeg";
import R1 from "./assets/r1.jpeg";
import panigale from "./assets/panigale.jpg";
import hurracan from "./assets/hurracan.jpeg";
import divo from "./assets/divo.jpeg";
import sf90 from "./assets/sf90.jpeg"

function Body() {
  const sBikes = [
    { title: "Fireblade", img: fireblade ,displacement:"999.9cc",category:"sports",charge:"2000",brand:"Honda"},
    { title: "R1", img: R1 ,displacement:"998cc",category:"sports",charge:"1500",brand:"Yamaha"},
    { title: "Panigale V4 R",displacement:"998cc", img: panigale,brand:"ducati",category:"sports",charge:"1800"},
  ];

  const sCars =[
    { title: "Huracan", img: hurracan ,displacement:"5024cc",category:"sports",charge:"1L",brand:"Lamborgini"},
    { title: "Divo", img: divo ,displacement:"3990cc",category:"sports",charge:"10L",brand:"Buggatti"},
    { title: "SF90", img: sf90 ,displacement:"7993cc",category:"sports",charge:"2.2L",brand:"Ferrari"}
  ];
  return (
    <div>
      <h1 className="m-4">Bikes</h1>
      <div className="row justify-content-center g-4 m-3">
        {sBikes.map((bike) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-hover">
              <div className="card-body text-center">
                <h2 className="card-title"> {bike.brand}</h2>
                <img src={bike.img} className="card-img-top" alt="tractor" />
                <br />
                <ul className=" text-decoration-none list-unstyled mb-1">
                  <li><h2>{bike.title}</h2></li>
                  <li>Displacement:{bike.displacement}</li>
                  <li>Category:{bike.category}</li>
                  <li>Charge:{bike.charge}</li>
                </ul>
                <Link className="btn btn-primary mt-auto" state={{ title: bike.title }} to="booking">
                  prebook
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="m-4">Cars</h1>
      <div className="row justify-content-center g-4 m-3">
        {sCars.map((car) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-hover">
              <div className="card-body text-center">
                <h2 className="card-title"> {car.brand}</h2>
                <img src={car.img} className="card-img-top" alt="tractor" />
                <br />
                <ul className=" text-decoration-none list-unstyled mb-1">
                  <li><h2>{car.title}</h2></li>
                  <li>Displacement:{car.displacement}</li>
                  <li>Category:{car.category}</li>
                  <li>Charge:{car.charge}</li>
                </ul>
                <Link className="btn btn-primary mt-auto" state={{ title: car.title }} to="booking">
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
