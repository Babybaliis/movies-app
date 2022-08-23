import React, { Component } from "react";
import { MoviesList } from "../movies-list/movies-list";
import { Div, DivSpin, Section, Input } from "./app-style";
import { Alert, Spin } from "antd";

import "../../index.css";

import debounce from "lodash.debounce";

class App extends Component {
  key = "2eb7271c69ed6f9077244774c2f53ab9";

  state = {
    moviesList: [],
    genres: [],
    totalResults: 1,
    totalPages: 0,
    spin: true,
    isOffline: false,
    textValue: "life",
    pageSize: 10,
    currentPage: 1
  };

  async auth(callback) {
    let response = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" +
      this.key
    );
    let re = await this.updateList();
    let ge = await this.updateGenres();
    if (!!callback) {
      callback();
    }
  }

  async updateList(page = 1) {
    if (this.state.textValue.length > 0) {
      this.setState({ spin: true });
      let listResponse = await this.loadList(page, this.state.textValue);
      let listJson = await listResponse.json();
      this.setState({
        moviesList: listJson.results,
        totalPages: listJson.total_pages,
        totalResults: page === 1 ? listJson.total_results : this.state.totalResults,
        currentPage: page
      }, () => {
        if (page === 1) {
          this.setState({ pageSize: this.state.moviesList.length });
        }
        this.setState({ spin: false });
      });
    }
  }

  loadList(page = 1, text) {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      this.key +
      `&query=${text}&page=` +
      page
    ).then((res) => {
      return res;
    });
  }

  debouncedCallback=debounce(()=> this.updateList(), 1000);

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
    this.auth(() => this.setState({ spin: false }));
    window.addEventListener("offline", () => this.setState({ isOffline: true }));
    window.addEventListener("online", () => this.setState({ isOffline: false }));
  }

  onChangeInput(e) {
    this.setState({ textValue: e.target.value },()=>this.debouncedCallback());
  }


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
              <Input placeholder={"Type to search..."}
                     onChange={(e)=>this.onChangeInput(e)} />
              {this.state.spin ?
                <DivSpin>
                  <Spin size={"large"} />
                </DivSpin>
                :
                <>
                  <MoviesList
                    movie={this.state.moviesList}
                    genres={this.state.genres}
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    totalResults={this.state.totalResults}
                    updateList={(page) => this.updateList(page)}
                  />
                </>
              }
            </Section>

          </Div>
        }
      </>
    );
  }
}

export { App };
