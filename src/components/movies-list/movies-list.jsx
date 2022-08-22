import React from "react";
import { Movie } from "../movies-item/movies-item";
import { Li, Ul, Section } from "./movies-list-style";

export const MoviesList = ({ movie, genres }) => {
  const elements = movie.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Li key={item.id}>
        <Movie {...itemProps} id={id} genres={genres} />
      </Li>
    );
  });
  return (
    <Section>
      <Ul>{elements}</Ul>
    </Section>
  );
};
