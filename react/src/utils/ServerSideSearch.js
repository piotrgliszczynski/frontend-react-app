import { getAll } from '../rest/restdb';

export const doSearch = async (searchTerm) => {
  return await getAll(searchTerm);
}

export default doSearch;