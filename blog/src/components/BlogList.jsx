import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca3')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCountries = countries.slice(startIndex, startIndex + itemsPerPage);

  const visiblePages = [1, 2, 3];

  return (
    <div className="bg-[#FF3B30] flex flex-col items-center px-6 md:px-32 py-20">
      <p className="text-white font-bold text-2xl mb-8">Featured Explore</p>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentCountries.map((country) => (
          <Link
            key={country.cca3}
            to={`/blog/${country.cca3}`}
            className="flex flex-col rounded-xl shadow-lg bg-white overflow-hidden"
          >
            <div className="h-48">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-lg font-semibold mb-2 text-[#FF3B30]">
                {country.name.common}
              </h2>
              <p className="text-sm text-gray-600">
                Discover more about {country.name.common}, a unique country known for
                its culture, geography, and people.
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex space-x-2">
        {visiblePages.map((pageNum) => (
          <button
            key={pageNum}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
              currentPage === pageNum
                ? 'bg-white text-[#FF3B30] font-bold shadow-md'
                : 'bg-transparent border border-white text-white hover:bg-white hover:text-[#FF3B30]'
            }`}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </button>
        ))}

        {/* Next Arrow */}
        <button
          className={`px-4 py-2 text-sm rounded-full font-bold ${
            currentPage >= totalPages
              ? 'opacity-50 cursor-not-allowed bg-white text-[#FF3B30]'
              : 'bg-white text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white'
          }`}
          onClick={() => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage >= totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BlogList;
