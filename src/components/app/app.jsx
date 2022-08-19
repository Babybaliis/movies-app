import React, { Component } from "react";
import { MoviesList } from "../movies-list/movies-list";
import { Div, Section } from "./app-style";
import "../../index.css";

class App extends Component {
  key = "2eb7271c69ed6f9077244774c2f53ab9";

  state = {
    moviesList: [],
    genres: [],
  };

  async auth(callback) {
    let response = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" +
        this.key
    );
    let re = await this.updateList();
    let ge = await this.updateGenres();
  }

  async updateList(page = 1) {
    let listResponse = await this.loadList(page);
    let listJson = await listResponse.json();
    this.setState({ moviesList: listJson.results });
  }
  loadList(page = 1) {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.key +
        "&query=life&page=" +
        page
    ).then((res) => {
      return res;
    });
  }
  async updateGenres() {
    let genresResponse = await this.loadGenres();
    let genresJson = await genresResponse.json();
    this.setState({ genres: genresJson.genres });
  }
  loadGenres() {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        this.key +
        "&language=en-US"
    ).then((res) => {
      return res;
    });
  }

  componentDidMount() {
    this.auth(() => console.log("auth"));
  }

  render() {
    return (
      <Div>
        <Section>
          <MoviesList
            movie={this.state.moviesList}
            genres={this.state.genres}
          />
        </Section>
      </Div>
    );
  }
}

export { App };
