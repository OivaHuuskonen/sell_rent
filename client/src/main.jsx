import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );





/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { GOOGLE_MAPS_KEY } from './config';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: GOOGLE_MAPS_KEY,
  version: "weekly",
  libraries: ["places"]
});

function MapComponent() {
  useEffect(() => {
    if (!window.google) {
      loader.load().then(() => {
        // Google Maps API on nyt ladattu ja valmis käytettäväksi
      });
    }
  }, []);

  // Komponentin muu koodi
}


loader.load().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});*/






/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { GOOGLE_MAPS_KEY } from './config';

const loadGoogleMapsScript = (callback) => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&callback=${callback}`;
    script.id = 'googleMaps';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  } else if (callback) {
    callback();
  }
};

const initMap = () => {
  // Google Maps initialization logic here
};

loadGoogleMapsScript(initMap);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);*/




/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { GOOGLE_MAPS_KEY } from './config';


const loadGoogleMapsScript = (callback) => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&callback=initMap`;
    script.id = 'googleMaps';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  } else if (callback) {
    callback();
  }
};

const initMap = () => {
  // Tämä funktio voidaan jättää tyhjäksi, jos et tarvitse erityistä alkuasettelua.
};

loadGoogleMapsScript(initMap);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/



/*<script type="module" src="/src/main.jsx"></script>*/