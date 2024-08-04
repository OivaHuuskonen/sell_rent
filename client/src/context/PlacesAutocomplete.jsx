{/*import React, { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

function PlacesAutocomplete({ apiKey, onPlaceSelected }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      libraries: ["places"],
    });

    loader.load().then(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onPlaceSelected(place);
      });
    });
  }, [apiKey, onPlaceSelected]);

  return <input ref={inputRef} type="text" placeholder="Enter a location" />;
}

export default PlacesAutocomplete;*/}