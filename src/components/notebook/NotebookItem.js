import React from "react";
import { Text } from "../../styles";
import { Link } from "react-router-dom";

const NotebookItem = ({ notebook }) => {
  return (
    <>
      <Link to={`/notebooks/${notebook.slug}`}>
        <Text>{notebook.title}</Text>
      </Link>
    </>
  );
};

export default NotebookItem;
