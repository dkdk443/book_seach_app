import axios from 'axios';
import './App.css';
import { useState } from 'react'

function App() {
  const [results, setResults] = useState('');
  const [keyword, setkeyword] = useState('')
  const endPoint = `https://www.googleapis.com/books/v1/volumes?q=`;
  const baseUrl = endPoint + keyword;



  const handleChange = (e) => {
    const newKeyword = e.target.value;
    setkeyword(newKeyword);
  }
  const seachBooks = () => {
    axios.get(baseUrl)
      .then(res => {
        console.log(res.data.items);
        const newResults = res.data.items;
        setResults(newResults);
      }).catch(err => {
        console.log(err);
      });
  }
  const confirm = (result) => {
    console.log(typeof result.volumeInfo.imageLinks);
    console.log('image', result.volumeInfo.imageLinks);
    console.log('aut', result.volumeInfo.authors);

  }

  return (
    <div className="App">
      <h1 className="title is-1">Book Seach</h1>
      <div className="seach_area">
        <div className="block">
          <div className="control has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="キーワード"
              value={keyword}
              onChange={handleChange}
            />
              <span className="icon is-small is-right">
                <i className="fas fa-search"></i>
              </span>
          </div>
        </div>
        <div className="block">
          <div className="buttons">
            <button
              className="button is-primary"
              onClick={seachBooks}
            >検索</button>
        </div>
      
        </div>
      </div>
      {results
        && <div className="result_area">
        <h3 className="title is-4">検索結果</h3>
        <div className="cards block">
          {results.map(result => {
            return (
              <div className="card block"　key={result.id}>
                
                {/* <div className="card-image">
                  <figure className="image is-2by3">
                  </figure>
                  <button onClick={() => confirm(result)}>sss</button>
                </div> */}
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                      <p className="title is-5"> {result.volumeInfo.title}</p>
                      {
                        result.volumeInfo.hasOwnProperty('authors') &&
                        <p className="subtitle is-6">
                        筆者 {result.volumeInfo.authors[0]}
                      </p>
                      }
                      
                </div>
              </div>
            </div>
               
             </div>
            )
          })}

        </div>
        <div className="section">
          <nav className="pagination" role="navigation" aria-label="pagination">
              <a className="pagination-previous">Previous</a>
              <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li>
                <a className="pagination-link" aria-label="Goto page 1">1</a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 45">45</a>
              </li>
              <li>
                <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 47">47</a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 86">86</a>
              </li>
            </ul>
          </nav>

        </div>
      
      </div>}

    </div>
  );
}

export default App;
