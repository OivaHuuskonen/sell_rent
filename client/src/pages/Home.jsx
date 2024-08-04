import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import AdCard from "../components/cards/AdCard";
import SearchForm from "../components/forms/SearchForm";
//import leafyIcon from '../assets/leafy.png'; 
//import artNouveau from '../assets/art-nouveau.png'

/*const PageHeader = ({ title }) => (
  <div className="mx-auto w-full	text-align:left pb-16 pt-20 bg-[#51829B]">
    <h1 className="font-floral pl-10 text-9xl sm:text-7xl  text-[#F5F5F5]">
      {title}
      /*<img src={leafyIcon} alt="Leafy Icon" className="h-12 w-12 ml-4" />*/
   
   /* <img src={artNouveau} alt="Art Nouveau" className="h-[1em] w-auto ml-4" /> </h1>
  </div>
);*/

const PageHeader = ({ title }) => (
  <div className="mx-auto w-full text-align:left pb-16 pt-20 bg-[#51829B]">
    <div className="flex items-center pl-10">
      <h1 className="

      text-9xl sm:text-7xl text-[#F5F5F5]">
        {title}
      </h1>
      {/*<img src={artNouveau} alt="Art Nouveau" className="h-[6em] w-auto ml-4 bg-[#51829B]" />*/}
    </div>
  </div>
);


export default function Home() {
  const [auth, setAuth] = useAuth();
  const [adsForSell, setAdsForSell] = useState([]);
  const [adsForRent, setAdsForRent] = useState([]);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads");
      setAdsForSell(data.adsForSell);
      setAdsForRent(data.adsForRent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div name='home' className='w-full pb-10'>
      <div className="flex justify-center py-10">
        <SearchForm />
        </div>
        {/*<div name="header">
        <PageHeader title="Real estate marketplace"/>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>*/}
        <div name="header">
        <PageHeader title="For Sell"/>
        </div>
  
        <div className="grid grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-3   
        justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#FFFAFA]">
          {adsForSell.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
        

      {/*<div className="grid grid-cols-1 
          sm:grid-cols-1 
          md:grid-cols-2
          lg:grid-cols-3 
          justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#F5F5F5]">
          {adsForSell.map((ad, index) => (
            <AdCard 
              ad={ad} 
              key={ad._id} 
              className={index % 3 === 0 ? 'justify-self-end' :
                         index % 3 === 1 ? '' :
                         'justify-self-start'}
              />*/}



        <PageHeader title="For Rent"/>
        {/*<div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#F5F5F5]">
        {adsForRent.map((ad, index) => (
            <AdCard 
              ad={ad} 
              key={ad._id} 
              className={index % 3 === 0 ? 'justify-self-end' :
                         index % 3 === 1 ? '' :
                         'justify-self-start'}
              />
          ))}
        </div>*/}
        <div className="grid grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-3   
        justify-center mb-10 gap-y-10 place-items-center px-20 py-10 bg-[#FFFAFA]">
          {adsForRent.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
  );
}



/*import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import AdCard from "../components/cards/AdCard";
import SearchForm from "../components/forms/SearchForm";

const PageHeader = ({ title }) => (
  <div className="mx-auto w-full	text-align:left pb-16 pt-20 bg-[#51829B]">
    <h1 className="pl-10 text-6xl sm:text-7xl font-bold text-[#FFFAFA]">
      {title}
    </h1>
  </div>
);

export default function Home() {
  const [auth, setAuth] = useAuth();
  const [adsForSell, setAdsForSell] = useState([]);
  const [adsForRent, setAdsForRent] = useState([]);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads");
      setAdsForSell(data.adsForSell);
      setAdsForRent(data.adsForRent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div name='home' className='w-full pb-10'>
      <div className="flex justify-center py-10">
        <SearchForm />
      </div>
        <div name="header">
        <PageHeader title="For Sell"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-0 gap-y-10 place-items-center px-20 py-10 bg-[#FFFAFA]">
          {adsForSell.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
        <PageHeader title="For Rent"/>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-0 gap-y-10 place-items-center px-2 py-10 bg-[#FFFAFA]">
          {adsForRent.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
    
  );
}*/







/*   justify-center gap-0 place-items-center                  import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import AdCard from "../components/cards/AdCard";
import SearchForm from "../components/forms/SearchForm";


const PageHeader = ({ title }) => (

  <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full">
    <h1 className="text-4xl sm:text-7xl font-bold text-[#679186]">
      {title}
    </h1>
  </div>  
);

export default function Home() {
  const [auth, setAuth] = useAuth();
  const [adsForSell, setAdsForSell] = useState();
  const [adsForRent, setAdsForRent] = useState();

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads");
      setAdsForSell(data.adsForSell);
      setAdsForRent(data.adsForRent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div name='home' className='w-full bg-[#fdebd3]'>
      <SearchForm />
      <PageHeader title="For Sell"/>
    
      <div className="container">
        <div className="row">
          {adsForSell?.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
      <PageHeader title="For Rent"/>
      <div className="container">
        <div className="row">
          {adsForRent?.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
    </div>
  );
}*/




/*import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from "axios";
import AdCard from "../components/cards/AdCard";
import SearchForm from "../components/forms/SearchForm";
import '../App.css';
export default function Home() {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [adsForSell, setAdsForSell] = useState();
  const [adsForRent, setAdsForRent] = useState();

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const { data } = await axios.get("/ads");
      setAdsForSell(data.adsForSell);
      setAdsForRent(data.adsForRent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SearchForm />
      <h1 className="display-1 bg-primary text-light p-5">For Sell</h1>
      <div className="container">
        <div className="row">
          {adsForSell?.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>

      <h1 className="display-1 bg-primary text-light p-5">For Rent</h1>
      <div className="container">
        <div className="row">
          {adsForRent?.map((ad) => (
            <AdCard ad={ad} key={ad._id} />
          ))}
        </div>
      </div>
    </div>
  );
}*/