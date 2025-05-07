import GET_NOTICIAS from "@/graphql/queries/getNoticias";
import api from "@/services/api";
import { request } from "graphql-request";

export async function getStaticProps() {
  const dataNoticias = await request(
    process.env.NEXT_PUBLIC_GRAPHQL,
    GET_NOTICIAS
  );

  return {
    props: {
      dataNoticias,
    },
  };
}

export default function Home({ dataNoticias }) {
  return <>oi</>;
}
