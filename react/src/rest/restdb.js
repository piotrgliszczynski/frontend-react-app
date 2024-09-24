const BASE_URL = 'http://localhost:4000';
const CUSTOMERS_ENDPOINT = 'customers';

export const getAll = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${CUSTOMERS_ENDPOINT}`);

    if (!response.ok) {
      throw new Error(`Could not fetch data from ${BASE_URL}/${CUSTOMERS_ENDPOINT}`);
    }

    const resopnseJson = await response.json();
    return resopnseJson;

  } catch (error) {
    console.error('Fetching customers with error:', error);
  }
};