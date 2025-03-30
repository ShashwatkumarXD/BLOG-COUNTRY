export const fetchCountryInfo = async (countryName) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,region,population`);
    const data = await res.json();
    return data[0];
  };
  