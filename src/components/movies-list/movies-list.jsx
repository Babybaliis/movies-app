import React from "react";
import { Movie } from "../movies-item/movies-item";
import { Li, Ul, Section } from "./movies-list-style";
import { Alert, Pagination } from "antd";

export const MoviesList = ({ movie, genres, totalResults, updateList, currentPage, pageSize }) => {
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
      {
        movie.length > 0 ?
          <>
            <Ul>{elements}</Ul>
            <Pagination defaultCurrent={1}
                        current={currentPage}
                        showSizeChanger={false}
                        defaultPageSize={pageSize}
                        pageSize={pageSize}
                        total={totalResults}
                        onChange={(page, pageSize) => updateList(page)} />
          </>
          :
          <Alert
            type="warning"
            description="MOVIES NOT FOUND "
            showIcon />
      }
    </Section>
  );
};
