import doSearch from './ServerSideSearch';
import '@testing-library/jest-dom';
import * as RestApi from '../rest/restdb';

jest.mock('../rest/restdb');

describe('Server side search', () => {
  it('Should return searched value', async () => {
    // Given
    const returnedData = [{
      "id": 0,
      "name": "Mary Jackson",
      "email": "maryj@abc.com",
      "password": "maryj"
    }];
    jest.spyOn(RestApi, 'getAll').mockResolvedValue(returnedData);

    // When
    const actualData = await doSearch('ma');

    // Then
    expect(actualData).toEqual(returnedData);
    expect(RestApi.getAll).toHaveBeenCalledTimes(1);
    expect(RestApi.getAll).toHaveBeenCalledWith('ma');
  })
})