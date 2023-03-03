import { GetStaticProps, NextPage } from "next";
import strapi from "@/utils/strapi";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApiPoliticalTermPoliticalTerm } from "@/schemas";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { renderNoData } from "@/components/renderNoData";
import fetchData from "@/utils/strapi";

const Page = () => {
  const termsQ = useQuery<StrapiResponse<"api::political-term.political-term">, Error>({
    queryKey: ["terms"],
    queryFn: () => fetchData("/political-terms"),
  });

  return (
    <div>
      {renderNoData(termsQ) ??
        (termsQ.data &&
          termsQ.data.data.map((term, index) => (
            <div key={index}>
              <h2>{term.attributes.term}</h2>
              <p>{term.attributes.termInEnglish}</p>
              <p>{term.attributes.definition}</p>
              <p>{term.attributes.examples}</p>
            </div>
          )))}
    </div>
  );
};

export default Page;

export const getServerSideProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<StrapiResponse<"api::political-term.political-term">, Error>({
    queryKey: ["political-terms"],
    queryFn: () => fetchData("/political-terms"),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

// GraphQL ish way of data fetching
// export const getServerSideProps: GetStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: "http://localhost:1337/graphql",
//     cache: new InMemoryCache(),
//   });

//   const data = await client.query({
//     query: gql`
//       query {
//         politicalTerms {
//           data {
//             attributes {
//               term
//               termInEnglish
//               definition
//               examples
//             }
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       terms: data,
//     },
//   };
// };
