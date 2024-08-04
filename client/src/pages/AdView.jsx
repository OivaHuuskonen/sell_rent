import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomImageGallery from "../components/misc/ImageGallery";
import houseLogo from "../../houseLogo.jpg";
import AdFeatures from "../components/cards/AdFeatures";
import { formatNumber } from "../helpers/ad";
import dayjs from "dayjs";
import LikeUnlike from "../components/misc/LikeUnlike";
import MapCard from "../components/cards/MapCard";
import parse from "html-react-parser";
import AdCard from "../components/cards/AdCard";
import ContactSeller from "../components/forms/ContactSeller";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function AdView() {
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const { data } = await axios.get(`/ad/${params?.slug}`);
        setAd(data?.ad);
        setRelated(data?.related);
      } catch (err) {
        console.log(err);
      }
    };

    if (params?.slug) {
      fetchAd();
    }
  }, [params?.slug]);

  const generatePhotosArray = (photos) => {
    if (photos?.length > 0) {
      const x = photos?.length === 1 ? 2 : 4;
      let arr = [];
      photos.map((p) =>
        arr.push({
          src: p.Location,
          width: x,
          height: x,
        })
      );
      return arr;
    } else {
      return [
        {
          src: houseLogo,
          width: 2,
          height: 1,
        },
      ];
    }
  };

  return (
    <>
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 pt-10 pb-10">
          <div className="col-span-1 p-2">
            <div className="col-span-2 flex justify-between ">
              <button
                type="button"
                className="text-white bg-[#51829B] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {ad.type} for {ad.action}
              </button>
              <LikeUnlike ad={ad} />
            </div>

            <div className="py-4">{ad?.sold ? "❌ Off market" : "✅ In market"}</div>
            <h1 className="text-3xl pb-4">{ad.address}</h1>
            <AdFeatures ad={ad} />
            <h1 className="text-3xl pb-2">{formatNumber(ad.price)}€</h1>
            <p className="text-muted">{dayjs(ad?.createdAt).fromNow()}</p>
          </div>
          <div className="col-span-2">
            <CustomImageGallery photos={generatePhotosArray(ad?.photos)} />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3">
            <MapCard ad={ad} />
            <br />
            <br />
            <p className="text-xl">
              {ad?.type} in {ad?.address} for {ad?.action} {ad?.price}€
            </p>
            <div className="text-xl">
              <AdFeatures ad={ad} />
              <h3 className="text-xl">{ad?.title}</h3>
            </div>
            <div className="html-content">
              {parse(ad?.description?.replaceAll(".", "<br/><br/>"))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ContactSeller ad={ad} />
      </div>

      <div className="container mb-2">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3">
            <br />
            <br />
            <h3 className="text-xl">
              Other related properties by {ad?.postedBy?.name}:
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#F5F5F5]">
        {related?.map((ad, index) => (
          <AdCard
            ad={ad}
            key={ad._id}
            className={
              index % 3 === 0
                ? "justify-self-end"
                : index % 3 === 1
                ? ""
                : "justify-self-start"
            }
          />
        ))}
      </div>
    </>
  );
}




/*
dayjs.extend(relativeTime);
export default function AdView() {
  // state
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
  // hooks
  const params = useParams();
  
  {/*useEffect(() => {
    if (params?.slug) fetchAd();
  }, [params?.slug]);

  const fetchAd = async () => {
    try {
      const { data } = await axios.get(`/ad/${params.slug}`);
      setAd(data?.ad);
      setRelated(data?.related);
    } catch (err) {
      console.log(err);
    }
  };*/



  /* useEffect(() => {
    const fetchAd = async () => {
      try {
        const { data } = await axios.get(`/ad/${params?.slug}`);
        setAd(data?.ad);
        setRelated(data?.related);
      } catch (err) {
        console.log(err);
      }
    };
  
    if (params?.slug) {
      fetchAd();
    }
  }, [params?.slug]);



  const generatePhotosArray = (photos) => {
    if (photos?.length > 0) {
      const x = photos?.length === 1 ? 2 : 4;
      let arr = [];
      photos.map((p) =>
        arr.push({
          src: p.Location,
          width: x,
          height: x,
        })
      );
      return arr;
    } else {
      return [
        {
          src: houseLogo,
          width: 2,
          height: 1,
        },
      ];
    }
  };
  return (
    <>
      <div className="flex">
      <div className="grid grid-cols-3 gap-4 pt-10 pb-10">
      <div className="col-span-1 p-2">
      <div className="col-span-2 flex justify-between ">
         <button
                type="button"
                className="text-white bg-[#51829B] 
                hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2
                 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {ad.type} for {ad.action}
              </button>
        <LikeUnlike ad={ad} />
        </div>

        <div className="py-4"> 
            {ad?.sold ? "❌ Off market" : "✅ In market"}
        </div>
        <h1 className="text-3xl pb-4">{ad.address}</h1>
        <AdFeatures ad={ad} />

        <h1 className="text-3xl pb-2">{formatNumber(ad.price)}€</h1>

        <p className="text-muted">{dayjs(ad?.createdAt).fromNow()}</p>
      </div>

      <div className="col-span-2">
        <CustomImageGallery photos={generatePhotosArray(ad?.photos)} />
      </div>
      </div>
      </div>

      

          <div className="container mb-5">
          <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3">
            <MapCard ad={ad} />
            <br /> 
            <br />
            <p className="text-xl">
            {ad?.type} in {ad?.address} for {ad?.action} {ad?.price}€
            </p>
            <div className="text-xl">
            <AdFeatures ad={ad} />
            
            <h3 className="text-xl">{ad?.title}</h3>
            </div>
            <HTMLRenderer
              html={ad?.description?.replaceAll(".", "<br/><br/>")}
            />      
          </div>
          </div>
          </div>

      <div className="container">
        <ContactSeller ad={ad} />
      </div>

      <div className="container mb-2">
          <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3">
            <br /> 
            <br />
            <h3 className="text-xl">
            Other related properties by{" "}
            {ad?.postedBy?.name}:
            </h3> 
          </div>
          </div>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#F5F5F5]">
        {related?.map((ad, index) => (
            <AdCard 
              ad={ad} 
              key={ad._id} 
              className={index % 3 === 0 ? 'justify-self-end' :
                         index % 3 === 1 ? '' :
                         'justify-self-start'}
              />
          ))}
        </div>
    </>
  );
}    */




/*chatGPT : import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomImageGallery from "../components/misc/ImageGallery";
import houseLogo from "../../houseLogo.jpg";
import AdFeatures from "../components/cards/AdFeatures";
import { formatNumber } from "../helpers/ad";
import dayjs from "dayjs";
import LikeUnlike from "../components/misc/LikeUnlike";
import MapCard from "../components/cards/MapCard";
import HTMLRenderer from "react-html-renderer";
import AdCard from "../components/cards/AdCard";
import ContactSeller from "../components/forms/ContactSeller";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function AdView() {
  // state
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
  // hooks
  const params = useParams();

  useEffect(() => {
    if (params?.slug) fetchAd();
  }, [params?.slug]);

  const fetchAd = async () => {
    try {
      const { data } = await axios.get(`/ad/${params.slug}`);
      setAd(data?.ad);
      setRelated(data?.related);
    } catch (err) {
      console.log(err);
    }
  };

  const generatePhotosArray = (photos) => {
    if (photos?.length > 0) {
      const x = photos?.length === 1 ? 2 : 4;
      let arr = [];

      photos.map((p) =>
        arr.push({
          src: p.Location,
          width: x,
          height: x,
        })
      );
      return arr;
    } else {
      return [
        {
          src: houseLogo,
          width: 2,
          height: 1,
        },
      ];
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-lg-4">
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary disabled mt-2">
                {ad.type} for {ad.action}
              </button>
              <LikeUnlike ad={ad} />
            </div>
            <div className="mt-4 mb-4">
              {ad?.sold ? "❌ Off market" : "✅ In market"}
            </div>
            <h1>{ad.address}</h1>
            <AdFeatures ad={ad} />
            <h3 className="mt-3 h2">€{formatNumber(ad.price)}</h3>
            <p className="text-muted">{dayjs(ad?.createdAt).fromNow()}</p>
          </div>

          <div className="col-lg-8">
            <CustomImageGallery photos={generatePhotosArray(ad?.photos)} />
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3">
            <MapCard ad={ad} />

            <br />

            <h1>
              {ad?.type} in {ad?.address} for {ad?.action} €{ad?.price}
            </h1>

            <AdFeatures ad={ad} />

            <hr />

            <h3 className="fw-bold">{ad?.title}</h3>

            <HTMLRenderer
              html={ad?.description?.replaceAll(".", "<br/><br/>")}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <ContactSeller ad={ad} />
      </div>

      <div className="container-fluid">
        <h4 className="text-center mb-3">Related Properties</h4>
        <hr style={{ width: "33%" }} />

        <div className="row">
          {related?.map((ad) => (
            <AdCard key={ad._id} ad={ad} />
          ))}
        </div>
      </div>
    </>
  );
}*/