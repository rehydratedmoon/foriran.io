const fetchData = async (endpoint: string, options = {}) => {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL + endpoint;
  let response;
  if (options) {
    response = await fetch(url, options);
  } else {
    response = await fetch(url);
  }

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
};

export default fetchData;
