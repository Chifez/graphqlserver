import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      name
      nationality
      age
    }
  }
`;
const DisplayData = () => {
  const { data, loading } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <p>data is loading</p>;
  }

  return (
    <div>
      {data.users.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default DisplayData;
