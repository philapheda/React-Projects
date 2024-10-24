import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const [search, Setsearch] = useState("");
  function Reciever(search) {
    Setsearch(search);
  }
  console.log(search);
  const [cards, setCards] = useState([]);

  async function searchMoviesByTitle(title) {
    const apiKey = "b2bde5f9";
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const searchData = await response.json();

      if (searchData.Response === "True") {
        console.log(searchData.Search);
        return searchData.Search;
      } else {
        console.log("No movies found");
      }
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
    }
  }

  async function fetchMultipleMovies(titles) {
    let newCards = [];

    for (let title of titles) {
      const movies = await searchMoviesByTitle(title);
      if (movies) {
        movies.forEach((movie) => {
          newCards.push(
            <Card
              img={movie.Poster}
              title={movie.Title}
              key={movie.imdbID}
              year={movie.Year}
            />
          );
        });
      }
    }

    setCards(newCards);
  }

  useEffect(() => {
    const movieTitles = [
      search,
      "Saw",
      "Halloween",
      "Friday the 13th",
      "Scream",
      "The Nun",
    ];

    fetchMultipleMovies(movieTitles);
  }, [search]);
  return (
    <div className="whole">
      <Nav change={Reciever} />
      <Hero />
      <div className="cardss">{cards}</div>
      <Footer />
    </div>
  );
}

export default App;
