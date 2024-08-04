import { Badge } from "antd";
import { Link } from "react-router-dom";
import AdFeatures from "./AdFeatures";
import { formatNumber } from "../../helpers/ad";

export default function AdCard({ ad, className  }) {
  // Määritellään värit toiminnon mukaan const className = 'bg-custom-beige p-4 rounded-lg shadow-md';
  const badgeColor = ad?.action === "Sell" ? "#f6c25d" : "#cbc385";
  const cardClassName = `${className} relative z-10`; // Lisää 'relative z-10'

  return (
  
    <div className={cardClassName}> 
      <Link to={`/ad/${ad.slug}`}>
        <Badge.Ribbon text={`${ad?.type} for ${ad?.action}`} color={badgeColor}>
          <div className="card hoverable shadow-lg shadow-[#879c7d] rounded-md my-card pb-4 w-90 h-100"> {/* Määritellään kortin koko */}
            <img
              src={ad?.photos?.[0].Location}
              alt={`${ad?.type}-${ad?.address}-${ad?.action}-${ad?.price}`}
              className="w-full h-80 object-cover" // Määritellään kuvan koko ja sovitus
              />

              <div className="card-body">
              <h3 className="text-2xl pl-2 pt-6 pb-1 font-semibold">{formatNumber(ad?.price)}€</h3>
              <p className="text-md text-[#879c7d] pl-2 pb-2">{ad?.address}</p>

              <AdFeatures ad={ad} layout="spread" />
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}





/*import { Badge } from "antd";
import { Link } from "react-router-dom";
import AdFeatures from "./AdFeatures";
import { formatNumber } from "../../helpers/ad";

export default function AdCard({ ad }) {
  // Määritellään värit toiminnon mukaan 
  const badgeColor = ad?.action === "Sell" ? "#51829B" : "#EADFB4";

  return (
  
    <div> 
      <Link to={`/ad/${ad.slug}`}>
        <Badge.Ribbon text={`${ad?.type} for ${ad?.action}`} color={badgeColor}>
          <div className="card hoverable shadow-lg shadow-gray-600 rounded-md my-card pb-4 w-90 h-100 mx-2"> {/* Määritellään kortin koko */
         /*   <img
              src={ad?.photos?.[0].Location}
              alt={`${ad?.type}-${ad?.address}-${ad?.action}-${ad?.price}`}
              className="w-full h-80 object-cover" // Määritellään kuvan koko ja sovitus
              />

              <div className="card-body">
              <h3 className="text-2xl pl-2 pt-6 pb-1 font-semibold">{formatNumber(ad?.price)}€</h3>
              <p className="text-md text-gray-600 pl-2 pb-2">{ad?.address}</p>

              <AdFeatures ad={ad} />
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}*/


  {/*<div className="flex justify-center pl-30 pr-30 py-8">*/}
















/*import { Badge } from "antd";
import { Link } from "react-router-dom";
import AdFeatures from "./AdFeatures";
import { formatNumber } from "../../helpers/ad";

export default function AdCard({ ad }) {
  // Määritellään värit toiminnon mukaan 
  const badgeColor = ad?.action === "Sell" ? "#51829B" : "#EADFB4";

  return (
    <div className="flex justify-center pl-10 pr-10 py-8"> 
      <Link to={`/ad/${ad.slug}`}>
        <Badge.Ribbon text={`${ad?.type} for ${ad?.action}`} color={badgeColor}>
          <div className="card hoverable shadow rounded-md my-card pb-4">
            <img
              src={ad?.photos?.[0].Location}
              alt={`${ad?.type}-${ad?.address}-${ad?.action}-${ad?.price}`}
              className="w-full h-full object-cover" // Tailwind CSS luokat
            />

            <div className="card-body">
              <h3 className="text-2xl pl-2 pt-6 pb-1 font-semibold">{formatNumber(ad?.price)}€</h3> 
              <p className="text-md text-gray-600 pl-2 pb-2">{ad?.address}</p> 

              <AdFeatures ad={ad} />
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}






import { Badge } from "antd";
import { Link } from "react-router-dom";
import AdFeatures from "./AdFeatures";
import { formatNumber } from "../../helpers/ad";

export default function AdCard({ ad }) {
  return (
    <div className="col-lg-4 p-4 gx-4 gy-4">
      <Link to={`/ad/${ad.slug}`}>
        <Badge.Ribbon
          text={`${ad?.type} for ${ad?.action}`}
          color={`${ad?.action === "Sell" ? "blue" : "red"}`}
        >
          <div className="card hoverable shadow my-card">
            <img
              src={ad?.photos?.[0].Location}
              alt={`${ad?.type}-${ad?.address}-${ad?.action}-${ad?.price}`}
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h3>{formatNumber(ad?.price)}€</h3>
              <p className="card-text">{ad?.address}</p>

              <AdFeatures ad={ad} />
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}*/