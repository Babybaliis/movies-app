import React, { Component } from "react";
import { MoviesList } from "../movies-list/movies-list";
import { Div, DivSpin, Section } from "./app-style";
import { Alert, Modal, Spin } from "antd";

import "../../index.css";


class App extends Component {
  key = "2eb7271c69ed6f9077244774c2f53ab9";
  maxResults = 6;

  state = {
    moviesList: [],
    genres: [],
    spin: true,
    isOffline: false
  };

  async auth(callback) {
    let response = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" +
      this.key + "&maxResults=" + this.maxResults
    );
    let re = await this.updateList();
    let ge = await this.updateGenres();
    if (!!callback) {
      callback();
    }
  }

  async updateList(page = 1) {
    let listResponse = await this.loadList(page);
    let listJson = await listResponse.json();
    this.setState({ moviesList: listJson.results });
  }

  loadList(page = 1) {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      this.key + "&maxResults=" + this.maxResults +
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
      this.key + "&maxResults=" + this.maxResults +
      "&language=en-US"
    ).then((res) => {
      return res;
    });
  }

  componentDidMount() {
    this.auth(() => this.setState({ spin: false }));
    window.addEventListener("offline", () => this.setState({ isOffline: true }));
    window.addEventListener("online", () => this.setState({ isOffline: false }));
  }

  handleOk = () => {
    this.setState({ isOffline: false });
  };

  handleCancel = () => {
    this.setState({ isOffline: false });
  };

  render() {
    return (
      <>

        {this.state.isOffline ?
          <Alert message="ERROR"
                 description="Ooops... Network is not connected."
                 type="error"
                 showIcon />
          :
          <Div>
          <Section>
        {this.state.spin ?
          <DivSpin>
          <Spin size={"large"} />
          </DivSpin>
          :
          <MoviesList
          movie={this.state.moviesList}
          genres={this.state.genres}
          />
        }
          </Section>
          </Div>
        }
      </>
    );
  }
}

export { App };
