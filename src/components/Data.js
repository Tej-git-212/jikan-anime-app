import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Cards from "./Cards";
import "./Data.css";
import Filter from "./Filter";

function Data() {
  const key = "93e44cf97ab92a0c64ac4d609e0f4e3b";
  const [q, setQ] = useState("");
  const [posts, setPosts] = useState({});
  const [pagenum, setPagenum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const getData = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${pagenum}`
      )
      .then(function (response) {
        setLoading(false);
        setPosts(response.data.results);
        setFiltered(response.data.results);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [pagenum]);

  useEffect(() => getData(), [getData]);

  function handleQuery() {
    console.log(q);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          {posts.length > 0 && (
            <>
              <div className="header">
                <form className="form-class">
                  <input
                    className="input-class"
                    type="text"
                    value={q}
                    placeholder="Enter title"
                    onChange={(e) => setQ(e.target.value)}
                  />
                  <button
                    className="btn-class"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuery();
                    }}
                  >
                    Go
                  </button>
                </form>
                <Filter
                  popular={posts}
                  setFiltered={setFiltered}
                  activeGenre={activeGenre}
                  setActiveGenre={setActiveGenre}
                />
              </div>
              <div className="container">
                {filtered.map((movie) => {
                  return <Cards key={movie.id} movie={movie} />;
                })}
              </div>
              <div className="bottom-class">
                <button
                  className="btn-class"
                  onClick={() => {
                    pagenum > 1 && setPagenum((pagenum) => pagenum - 1);
                  }}
                >
                  Previous
                </button>
                <p>{pagenum}</p>
                <button
                  className="btn-class"
                  onClick={() => {
                    pagenum < 1000 && setPagenum((pagenum) => pagenum + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Data;
