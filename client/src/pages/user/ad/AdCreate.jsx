import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/nav/Sidebar";

const PageHeader = ({ title }) => (
  <div className="mx-auto w-full text-align:left pb-16 pt-20 bg-[#51829B]">
    <h1 className="font-floral pl-10 text-9xl sm:text-7xl text-[#F5F5F5]">
      {title}
    {/*<img src={leafyIcon} alt="Leafy Icon" className="h-12 w-12 ml-4" />*/}
    </h1>
  </div>
);

export default function AdCreate() {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  // hooks
  const navigate = useNavigate();

  const handleSell = () => {
    setSell(true);
    setRent(false);
  };

  const handleRent = () => {
    setRent(true);
    setSell(false);
  };

  return (
    <div name='home' className='w-full pb-10'>
      <div name="header">
        <PageHeader title="Ad Create"/>
      </div>

      <Sidebar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
        <div></div>
        <div className="flex flex-col items-center">
          <button
            onClick={handleSell}
            className="py-2.5 px-10 me-2 mb-2 font-floral text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-[#51829B] focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
          >
            <span className="h2">Sell</span>
          </button>
          {sell && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/ad/create/sell/House")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100
                hover:text-blue-700 focus:z-10 focus:ring-4
                focus:ring-gray-100 dark:focus:ring-gray-700
                dark:bg-gray-800 dark:text-gray-400
                dark:border-gray-600 dark:hover:text-white
                dark:hover:bg-gray-700"
              >
                House
              </button>
              <button
                onClick={() => navigate("/ad/create/sell/Land")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100
                hover:text-blue-700 focus:z-10 focus:ring-4
                focus:ring-gray-100 dark:focus:ring-gray-700
                dark:bg-gray-800 dark:text-gray-400
                dark:border-gray-600 dark:hover:text-white
                dark:hover:bg-gray-700"
              >
                Land
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={handleRent}
            className="py-2.5 px-10 me-2 mb-2 text-sm font-floral font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-[#51829B] focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
          >
            <span className="h2">Rent</span>
          </button>
          {rent && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/ad/create/rent/House")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100
                hover:text-blue-700 focus:z-10 focus:ring-4
                focus:ring-gray-100 dark:focus:ring-gray-700
                dark:bg-gray-800 dark:text-gray-400
                dark:border-gray-600 dark:hover:text-white
                dark:hover:bg-gray-700"
              >
                House
              </button>
              <button
                onClick={() => navigate("/ad/create/rent/Land")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100
                hover:text-blue-700 focus:z-10 focus:ring-4
                focus:ring-gray-100 dark:focus:ring-gray-700
                dark:bg-gray-800 dark:text-gray-400
                dark:border-gray-600 dark:hover:text-white
                dark:hover:bg-gray-700"
              >
                Land
              </button>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}














/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/nav/Sidebar";


const PageHeader = ({ title }) => (
  <div className="mx-auto w-full	text-align:left pb-16 pt-20 bg-[#51829B]">
    <h1 className="font-floral pl-10 text-9xl sm:text-7xl  text-[#F5F5F5]">
      {title}
    /*<img src={leafyIcon} alt="Leafy Icon" className="h-12 w-12 ml-4" />*/
   /* </h1>
  </div>
);

export default function AdCreate() {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  // hooks
  const navigate = useNavigate();

  const handleSell = () => {
    setSell(true);
    setRent(false);
  };

  const handleRent = () => {
    setRent(true);
    setSell(false);
  };

  return (
      <div name='home' className='w-full pb-10'>
        <div name="header">
        <PageHeader title="Ad Create"/>
        </div>
 
      <Sidebar />

      <div className="grid grid-cols-4 gap-4 mt-20"> 
        <div></div>
        <div >
        <button
            onClick={handleSell}
            className="flex justify-items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
            >
            <span className="h2">Sell</span>
          </button>
          {sell && (
            <div className="">
              <button
                onClick={() => navigate("/ad/create/sell/House")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
              >
                House
              </button>
              <button
                onClick={() => navigate("/ad/create/sell/Land")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
              >
                Land
              </button>
            </div>
          )}
          </div>
       

        <div>
        <button
            onClick={handleRent}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
            >
            <span className="h2">Rent</span>
          </button>
          {rent && (
            <div className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700">
              <button
                onClick={() => navigate("/ad/create/rent/House")}
                className=""
              >
                House
              </button>
              <button
                onClick={() => navigate("/ad/create/rent/Land")}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
            text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100
            hover:text-blue-700 focus:z-10 focus:ring-4
            focus:ring-gray-100 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400
            dark:border-gray-600 dark:hover:text-white
            dark:hover:bg-gray-700"
              >
                Land
              </button>
            </div>
          )}
          </div>
          <div></div>
        </div>
    </div>
  );
}*/