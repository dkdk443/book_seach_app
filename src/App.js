import axios from 'axios';
import './App.css';
import { useState } from 'react'

function App() {
  const [result, setResult] = useState('');
  const [keyword, setkeyword] = useState('')
  const handleChange = (e) => {
    const newKeyword = e.target.value;
    setkeyword(newKeyword);
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
          <button className="button is-primary">検索</button>
        </div>
      
        </div>
      </div>
      {result
        && <div className="result_area">
        <h3 className="title is-4">検索結果</h3>
        <div className="cards">
          <div className="card block">
            <div className="card-image">
              <figure className="image is-2by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
           <div className="card block">
            <div className="card-image">
              <figure className="image is-2by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" width="280px" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
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
