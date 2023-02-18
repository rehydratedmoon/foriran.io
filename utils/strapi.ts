async function strapi(endpoint: string, options = {}) {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL + endpoint;
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}

export default strapi;
