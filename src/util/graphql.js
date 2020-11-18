import { gql } from "@apollo/client";

export const MUSIC_INFO_QUERY = gql`
  query {
    getAllSongs {
      _id
      name
      description
      singer
      playCount
      cover
      musicSrc
    }
  }
`;

export const USERLIST_QUERY = gql`
  query {
    getAllUsers {
      email
      username
      createdAt
    }
  }
`;
