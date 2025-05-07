import { gql } from "graphql-request";

const GET_NOTICIAS = gql`
query GET_NOTICIAS {
  noticias (pagination: {limit: 6} sort: "updatedAt:desc") {
    data {
      id
      attributes{
        titulo
        conteudo 
        imagens {
          data {
            id
            attributes {
              url
              alternativeText
            }
          }
        }
        slug
        updatedAt
      }
    }
  }
}
`

export default GET_NOTICIAS;
