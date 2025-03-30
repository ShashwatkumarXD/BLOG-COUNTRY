import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // id = country code (e.g. DEU, USA)
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(err => console.error(err));
  }, [id]);

  if (!country) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <img src={country.flags.png} alt={country.name.common} className="w-32 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{country.name.official}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Currency:</strong> {Object.values(country.currencies || {})
        .map(curr => `${curr.name} (${curr.symbol})`)
        .join(', ')}</p>
    </div>
  );
};

export default BlogDetail;
