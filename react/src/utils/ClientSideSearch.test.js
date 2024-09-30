import doSearch from './ClientSideSearch';
import '@testing-library/jest-dom';

describe('Client Side Search', () => {

  const data = [
    {
      "id": 0,
      "name": "Mary Jackson",
      "email": "maryj@abc.com",
      "password": "maryj"
    },
    {
      "id": 1,
      "name": "Karen Addams",
      "email": "karena@abc.com",
      "password": "karena"
    }
  ];

  it('Should search for data in provided table by function', () => {
    // Given
    const returnedData = [{
      "id": 0,
      "name": "Mary Jackson",
      "email": "maryj@abc.com",
      "password": "maryj"
    }];
    const searchTerm = 'Ma';

    // When
    const actualData = doSearch(data, customer => customer.name.includes(searchTerm));

    // Then
    expect(actualData).toEqual(returnedData);
  })
})