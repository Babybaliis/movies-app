import React from "react";
import { Movie } from "../movies-item/movies-item";
import { Li, Ul, Section } from "./movies-list-style";
import { Alert } from "antd";
import { DivSearch } from "../app/app-style";

export const MoviesList = ({ movie, genres, changeMovie }) => {
  const elements = movie.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Li key={item.id}>
        <Movie
          {...itemProps}
          changeMovie={changeMovie}
          id={id}
          genres={genres}
        />
      </Li>
    );
  });
  return (
    <Section>
      {movie.length > 0 ? (
        <>
          <Ul>{elements}</Ul>
        </>
      ) : (
        <DivSearch>
          <Alert type="warning" description="MOVIES NOT FOUND " showIcon />
        </DivSearch>
      )}
    </Section>
  );
};
