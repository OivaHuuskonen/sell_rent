export default function Footer() {
    return (
      <div className="bg-[#cbc385] text-center">
        <p className="pt-4">Free property realization marketplace - buy, sell or rent properties, land or space</p>
        <p className="pt-2 pb-8">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    );
  }





  {/*<div className="relative flex-grow">
  <button className="border-2 py-2 px-2 w-full text-[#000000] hover:bg-[#f5eadc] hover:border-[#f9b4ab]">
    Price
  </button>
  <ul className={`absolute bg-white shadow-md mt-2 w-full ${search?.price ? 'block' : 'hidden'}`}>
  
  {search.action === "Buy"
          ? sellPrices.map((item) => (
              <li key={item._id} className="p-2 hover:bg-gray-100 text-sm">
                <a
                  onClick={() =>
                    setSearch({
                      ...search,
                      price: item.name,
                      priceRange: item.array,
                    })
                  }
                  className="block w-full text-left"
                >
                  {item.name}
                </a>
              </li>
            ))
          : rentPrices.map((item) => (
              <li key={item._id} className="p-2 hover:bg-gray-100 text-sm">
                <a
                  onClick={() =>
                    setSearch({
                      ...search,
                      price: item.name,
                      priceRange: item.array,
                    })
                  }
                  className="block w-full text-left"
                >
                  {item.name}
                </a>
              </li>
            ))}
      </ul>
</div>*/}