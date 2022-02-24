import React, { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const Beer = () => {
  const [fetchedData, setFetchedData] = useState('');
  let sortedAbv;

  const fetchApi = useQuery('test', async () => {
    return fetch(`https://api.punkapi.com/v2/beers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
      .then((res) => res.json())
      .then((res) => setFetchedData(res));
  });

  function compareAbv(a, b) {
    if (a.abv < b.abv) {
      return -1;
    }
    if (a.abv > b.abv) {
      return 1;
    }
    return 0;
  }

  if (Array.isArray(fetchedData)) {
    sortedAbv = fetchedData.sort(compareAbv);
  }

  console.log(`SORTED: `, sortedAbv);

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Ye Olde Pub</h1>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}
      >
        <div>
          <h2
            style={{
              textAlign: 'center',
              width: '100%',
              color: 'red',
              textShadow: '1px 1px 35px #aaa',
            }}
          >
            Our Most Popular Beer!
          </h2>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                boxShadow: '0px 0px 35px goldenrod',
                width: '20%',
                textAlign: 'center',
                borderRadius: '5px',
              }}
            >
              <p
                style={{
                  fontSize: '1.5rem',
                  width: '100%',
                  color: 'goldenrod',
                  textShadow: '1px 1px 1px black',
                }}
              >
                Electric India
              </p>
            </div>
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0px 0px 35px pink',
                width: '20%',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '1.5rem',
                  width: '100%',
                  color: 'pink',
                  textShadow: '1px 1px 1px black',
                }}
              >
                Vice Bier
              </p>
            </div>
            <div
              style={{
                border: '1px solid #ccc',
                boxShadow: '0px 0px 35px lightblue',
                width: '20%',
                textAlign: 'center',
                borderRadius: '5px',
              }}
            >
              <p
                style={{
                  fontSize: '1.5rem',
                  width: '100%',
                  color: 'blue',
                  textShadow: '1px 1px 1px black',
                }}
              >
                Storm
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1rem',
          }}
        >
          <h3 style={{ width: '100%', textAlign: 'center' }}>
            Our Full Beer List
          </h3>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                display: 'flex',
                border: '1px solid black',
                width: '60%',
                boxShadow: '0px 0px 35px red',
              }}
            >
              <div
                style={{
                  border: '1px solid black',
                  width: '60%',
                }}
              >
                <h5
                  style={{
                    borderBottom: '1px solid black',
                    background: '#aaa',
                    paddingLeft: '1rem',
                  }}
                >
                  Name
                </h5>
                {sortedAbv !== undefined && Array.isArray(sortedAbv)
                  ? sortedAbv.map((i) => (
                      <p style={{ paddingLeft: '1rem' }}>{i.name}</p>
                    ))
                  : ''}
              </div>
              <div
                style={{
                  border: '1px solid black',
                  width: '20%',
                  textAlign: 'center',
                }}
              >
                <h5
                  style={{
                    borderBottom: '1px solid black',
                    background: '#aaa',
                  }}
                >
                  ABV
                </h5>
                {sortedAbv !== undefined && Array.isArray(sortedAbv)
                  ? sortedAbv.map((i) => <p>{i.abv}</p>)
                  : ''}
              </div>
              <div
                style={{
                  border: '1px solid black',
                  width: '20%',
                  textAlign: 'center',
                }}
              >
                <h5
                  style={{
                    borderBottom: '1px solid black',
                    background: '#aaa',
                  }}
                >
                  IBU
                </h5>
                {sortedAbv !== undefined && Array.isArray(sortedAbv)
                  ? sortedAbv.map((i) => <p>{i.ibu}</p>)
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beer;
