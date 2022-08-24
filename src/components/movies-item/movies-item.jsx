import React, { Component } from "react";
import {
  DivData,
  DivGenres,
  DivGenresItem,
  DivInfo,
  DivRating,
  DivTitle,
  Form,
  Img,
  Label,
  MovieItemDiv,
  Span,
} from "./movies-item-style";
import { Rate, Spin } from "antd";
import "../../index.css";

class Movie extends Component {
  state = {
    label: this.props.label,
    id: this.props.id,
    spin: this.props.spin,
  };
  getDate = (dates) => {
    if (!dates) {
      return "No Date";
    }
    const date = new Date(dates);
    const month = date.toLocaleString("en", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  textSlice = (text) => {
    if (text.length < 170) return text;
    let result = "";
    const edit = text.split(" ");
    for (let i = 0; i < edit.length; i++) {
      if (result.length < 170) {
        result += edit[i] + " ";
      } else {
        break;
      }
    }
    return result + "...";
  };

  render() {
    const {
      id,
      genres,
      genre_ids,
      title,
      release_date,
      overview,
      vote_average,
      rate,
      changeMovie,
    } = this.props;

    return (
      <Form>
        {this.state.spin ? (
          <Spin size={"small"} />
        ) : (
          <MovieItemDiv
            children={
              <>
                <Img
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    this.props.poster_path
                  }
                  onLoad={(e) => console.log()}
                />
                <Label>
                  <Span>
                    <DivTitle>{title} </DivTitle>
                    <DivRating rating={vote_average}>{vote_average} </DivRating>
                  </Span>
                  <DivData>{this.getDate(release_date)}</DivData>
                  <DivGenres>
                    {genres.length > 0 &&
                      genre_ids.map((genreId) => {
                        let genre = genres.find(
                          (genre) => genre.id === genreId
                        );
                        return (
                          <DivGenresItem key={genre.id}>
                            {genre.name}
                          </DivGenresItem>
                        );
                      })}
                  </DivGenres>
                  <DivInfo>{this.textSlice(overview)}</DivInfo>
                  <Rate
                    allowHalf
                    defaultValue={rate}
                    count={10}
                    onChange={(e) => changeMovie(id, e)}
                  />
                </Label>
              </>
            }
          />
        )}
      </Form>
    );
  }
}

export { Movie };
