import React from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = React.useState({ value: [] });

  React.useEffect(() => {
    axios
      .get('https://bing-news-search1.p.rapidapi.com/news', {
        params: {safeSearch: 'Off', textFormat: 'Raw'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': 'c0d42e0503msh6343d0903d83f48p14d1c4jsnc69016701bff',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      })
      .then((response) => {
        setData({ value: response.data.value });

      });
  }, []);




  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>News</h1>
        
        <button  >Get News</button>


        <p>
          { data.value.map((news) => {
            console.log(news.image);
            return (
              <div>
                <h3>{news.name}</h3>
                <p>{news.description}</p>
                <img src={news.image} alt={news.name} style={
                  {width: '100px', height: '100px'}
                } />
              </div>
            );
          }, this) }



        </p>

      </header>
    </div>
  );
}

export default App;
