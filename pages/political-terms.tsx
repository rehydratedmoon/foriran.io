import { GetStaticProps, NextPage } from "next";
import strapi from "@/utils/strapi";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const Page: NextPage<{ terms: any[] }> = ({ terms }) => {
  const _terms = terms.data.politicalTerms.data;
  return (
    <div>
      <h1>واژه‌های سیاسی</h1>
      {_terms &&
        _terms.length > 0 &&
        _terms.map((term: any, index: number) => (
          <div key={index}>
            <h2>{term.attributes.term}</h2>
            <p>{term.attributes.termInEnglish}</p>
            <p>{term.attributes.definition}</p>
            <p>{term.attributes.examples}</p>
          </div>
        ))}
    </div>
  );
};

export default Page;

export const getServerSideProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query {
        politicalTerms {
          data {
            attributes {
              term
              termInEnglish
              definition
              examples
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      terms: data,
    },
  };
};
