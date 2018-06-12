import mockAxios from 'axios';
import api from '../api';

describe('api function', () => {
  it('should return data', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: {
                lat: '-37.3159',
                lng: '81.1496',
              },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          },
        ],
      })
    );

    const users = await api();

    expect(users).toEqual([
      {
        address: {
          city: 'Gwenborough',
          geo: { lat: '-37.3159', lng: '81.1496' },
          street: 'Kulas Light',
          suite: 'Apt. 556',
          zipcode: '92998-3874',
        },
        company: {
          bs: 'harness real-time e-markets',
          catchPhrase: 'Multi-layered client-server neural-net',
          name: 'Romaguera-Crona',
        },
        email: 'Sincere@april.biz',
        id: 1,
        name: 'Leanne Graham',
        phone: '1-770-736-8031 x56442',
        username: 'Bret',
        website: 'hildegard.org',
      },
    ]);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
});
