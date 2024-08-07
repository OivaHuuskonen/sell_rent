import GoogleMapReact from "google-map-react";
//import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//import { GOOGLE_MAPS_KEY } from "../../config";
export default function MapCard({ ad }) {
  const Marker = ({ lat, lng }) => (
    <div>
      <span className="lead">📍</span>
    </div>
  );

  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };
  if (ad?.location?.coordinates?.length) {
    return (
      <div style={{ width: "100%", height: "350px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={ad?.location.coordinates[1]}
            lng={ad?.location.coordinates[0]}
          />
        </GoogleMapReact>
      </div>
    );
  }
  return null;
}





/*import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { GOOGLE_MAPS_KEY } from "../../config";


const Marker = ({ text }) => <div><span className="text-lg">📍{text}</span></div>;

const MapCard = ({ ad }) => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  if (ad?.location?.coordinates?.length) {
    return (
      <div className="w-full h-96">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={ad.location.coordinates[1]}
            lng={ad.location.coordinates[0]}
            text={ad.title}
          />
        </GoogleMapReact>
      </div>
    );
  }

  return null;
};

export default MapCard;*/


/*import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_KEY } from "../../config";

export default function MapCard({ ad }) {
  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };

  if (ad?.location?.coordinates?.length) {
    return (
      <div className="w-full h-88"> /* Tailwind CSS luokat leveydelle ja korkeudelle */
        /*<GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div
            lat={ad?.location.coordinates[1]}
            lng={ad?.location.coordinates[0]}
          >
            <span className="text-lg">📍</span> /* Korvattu "lead" luokka Tailwind CSS:n tekstin koon luokalla */
         /* </div>
        </GoogleMapReact>
      </div>
    );
  }
}*/




/* import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_KEY } from "../../config";

export default function MapCard({ ad }) {
  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };
  if (ad?.location?.coordinates?.length) {
    return (
      <div style={{ width: "100%", height: "350px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div
            lat={ad?.location.coordinates[1]}
            lng={ad?.location.coordinates[0]}
          >
            <span className="lead">📍</span>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}*/  


/*import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_KEY } from "../../config";

export default function MapCard({ ad }) {
  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };

  if (ad?.location?.coordinates?.length) {
    return (
      <div style={{ width: "100%", height: "350px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div
            lat={ad?.location.coordinates[1]}
            lng={ad?.location.coordinates[0]}
          >
            <span className="lead">📍</span>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
  return null;
}*/





/*
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_KEY } from "../../config";

// 151.20929, -33.86882
export default function MapCard({ ad }) {
  const defaultProps = {
    center: {
      lat: ad?.location?.coordinates[1],
      lng: ad?.location?.coordinates[0],
    },
    zoom: 11,
  };

  if (ad?.location?.coordinates?.length) {
    return (
      <div style={{ width: "100%", height: "350px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div
            lat={ad?.location.coordinates[1]}
            lng={ad?.location.coordinates[0]}
          >
            <span className="lead">📍</span>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
  return null;
}*/