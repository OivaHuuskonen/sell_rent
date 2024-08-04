import { useState } from "react";
import slugify from "slugify";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";
import CurrencyInput from "react-currency-input-field";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

export default function AdForm({ action, type }) {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [ad, setAd] = useState({
    photos: [],
    uploading: false,
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    carpark: "",
    landsize: "",
    title: "",
    description: "",
    loading: false,
    type,
    action,
  });
  // hooks
  const navigate = useNavigate();
  self.url = slugify(ad.title);


  const handleClick = async () => {
    try {
      // Oletetaan, että otsikko on määritelty ja se on merkkijono
      const slug = slugify(ad.title || '', { lower: true }); // Lisää tyhjä merkkijono varmuuden vuoksi ja varmista, että kaikki kirjaimet ovat pieniä
      setAd({ ...ad, loading: true });
      const { data } = await axios.post("/ad", ad);
      console.log("ad create response => ", data);
      if (data?.error) {
        toast.error(data.error);
        setAd({ ...ad, loading: false });
      } else {
        // data {user, ad}

        // update user in context
        setAuth({ ...auth, user: data.user });
        // update user in local storage
        const fromLS = JSON.parse(localStorage.getItem("auth"));
        fromLS.user = data.user;
        localStorage.setItem("auth", JSON.stringify(fromLS));

        toast.success("Ad created successfully");
        setAd({ ...ad, loading: false });
        // navigate("/dashboard");

        // reload page on redirect
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.log(err);
      setAd({ ...ad, loading: false });
    }
  };

  return (
    <>
      <div className="mb-3 form-control">
        <ImageUpload ad={ad} setAd={setAd} />
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_PLACES_KEY}
          apiOptions="au"
          selectProps={{
            defaultInputValue: ad?.address,
            placeholder: "Search for address..",
            onChange: ({ value }) => {
              setAd({ ...ad, address: value.description });
            },
          }}
        />
      </div>

      <div style={{ marginTop: "80px" }}>
        <CurrencyInput
          placeholder="Enter price"
          defaultValue={ad.price}
          className="form-control mb-3"
          onValueChange={(value) => setAd({ ...ad, price: value })}
        />
      </div>

      {type === "House" ? (
        <>
          <input
            type="number"
            min="0"
            className="form-control mb-3"
            placeholder="Enter how many bedrooms"
            value={ad.bedrooms}
            onChange={(e) => setAd({ ...ad, bedrooms: e.target.value })}
          />

          <input
            type="number"
            min="0"
            className="form-control mb-3"
            placeholder="Enter how many bathrooms"
            value={ad.bathrooms}
            onChange={(e) => setAd({ ...ad, bathrooms: e.target.value })}
          />

          <input
            type="number"
            min="0"
            className="form-control mb-3"
            placeholder="Enter how many carpark"
            value={ad.carpark}
            onChange={(e) => setAd({ ...ad, carpark: e.target.value })}
          />
        </>
      ) : (
        ""
      )}

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Size of land"
        value={ad.landsize}
        onChange={(e) => setAd({ ...ad, landsize: e.target.value })}
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter title"
        value={ad.title}
        onChange={(e) => setAd({ ...ad, title: e.target.value })}
      />

      <textarea
        className="form-control mb-3"
        placeholder="Enter description"
        value={ad.description}
        onChange={(e) => setAd({ ...ad, description: e.target.value })}
      />

      <button
        onClick={handleClick}
        className={`btn btn-primary mb-5 ${ad.loading ? "disabled" : ""}`}
      >
        {ad.loading ? "Saving..." : "Submit"}
      </button>

      {/* <pre>{JSON.stringify(ad, null, 4)}</pre> */}
    </>
  );
}
















/*import { useSearch } from "../../context/search";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_PLACES_KEY } from "../../config";
import { sellPrices, rentPrices } from "../../helpers/priceList";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchForm() {
  const [search, setSearch] = useSearch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    setSearch({ ...search, loading: false });
    try {
      const { results, page, price, ...rest } = search;
      const query = queryString.stringify(rest);
      const { data } = await axios.get(`/search?${query}`);
      if (search?.page !== "/search") {
        setSearch((prev) => ({ ...prev, results: data, loading: false }));
        navigate("/search");
      } else {
        setSearch((prev) => ({
          ...prev,
          results: data,
          page: window.location.pathname,
          loading: false,
        }));
      }
    } catch (err) {
      console.log(err);
      setSearch({ ...search, loading: false });
    }
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-lg-12">
          <GooglePlacesAutocomplete
            apiKey={GOOGLE_PLACES_KEY}
            apiOptions="au"
            selectProps={{
              defaultInputValue: search?.address,
              placeholder: "Search for address..",
              onChange: ({ value }) => {
                setSearch({ ...search, address: value.description });
              },
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          onClick={() => setSearch({ ...search, action: "Buy", price: "" })}
          className={`btn btn-primary col-lg-2 ${
            search.action === "Buy" ? "active" : ""
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSearch({ ...search, action: "Rent", price: "" })}
          className={`btn btn-primary col-lg-2 ${
            search.action === "Rent" ? "active" : ""
          }`}
        >
          Rent
        </button>
        <button
          onClick={() => setSearch({ ...search, type: "House", price: "" })}
          className={`btn btn-primary col-lg-2 ${
            search.type === "House" ? "active" : ""
          }`}
        >
          House
        </button>
        <button
          onClick={() => setSearch({ ...search, type: "Land", price: "" })}
          className={`btn btn-primary col-lg-2 ${
            search.type === "Land" ? "active" : ""
          }`}
        >
          Land
        </button>
        
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {search?.price ? search.price : "Price"}
          </button>
          <ul className="dropdown-menu">
            {search.action === "Buy"
              ? sellPrices.map((item) => (
                  <li key={item._id}>
                    <a
                      onClick={() => {
                        setSearch({
                          ...search,
                          price: item.name,
                          priceRange: item.array,
                        });
                      }}
                      className="dropdown-item"
                    >
                      {item.name}
                    </a>
                  </li>
                ))
              : rentPrices.map((item) => (
                  <li key={item._id}>
                    <a
                      onClick={() => {
                        setSearch({
                          ...search,
                          price: item.name,
                          priceRange: item.array,
                        });
                      }}
                      className="dropdown-item"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
          </ul>
        </div>
        <button
          onClick={handleSearch}
          className="btn btn-danger col-lg-2"
        >
          Search
        </button>
      </div>
    </div>
  );
}*/