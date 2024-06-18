const getProducts = async () => {
  const url = 'https://products-endpoint.onrender.com/products/';
  try {
    const requestData = await fetch(url);
    if (!requestData.ok) {
      throw new Error(`request with problems , ${requestData.status}`);
    }
    const data = await requestData.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getProducts;
