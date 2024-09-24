import { enableFetchMocks } from 'jest-fetch-mock';
import { getAll } from './restdb';
import '@testing-library/jest-dom';

enableFetchMocks();

describe("Rest requests", () => {

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(() => {
    console.error.mockClear();
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  describe("Fetching data", () => {

    it("should correctly fetch all data", () => {
      // Given
      const returnData = [
        {
          "id": 0,
          "name": "Mary Jackson",
          "email": "maryj@abc.com",
          "password": "maryj"
        }];
      fetch.mockResponseOnce(JSON.stringify(returnData));

      // When
      getAll()
        .then(response => {
          expect(response).toEqual(returnData);
        });

      // Then
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('http://localhost:4000/customers');
    });

    it("Should fail when error during fetch returned", async () => {
      // Given
      const errorMessage = "Test error message";
      fetch.mockRejectOnce(new Error(errorMessage));

      // When
      await getAll();

      // Then
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error.mock.calls[0][1].toString()).toContain(errorMessage);
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('http://localhost:4000/customers');
    });


    it("Should fail when error response code returned", async () => {
      // Given
      const errorMessage = "Could not fetch data from";
      fetch.mockResponseOnce(JSON.stringify('Internal server error'), { status: 500 });

      // When
      await getAll();

      // Then
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(console.error.mock.calls[0][1].toString()).toContain(errorMessage);
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('http://localhost:4000/customers');
    })
  });
});