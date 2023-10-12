import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "@/keys";
import Response from "@/Response";
import SearchResults from "../components/SearchResults";

// export default function Search({ results }) {
//   // console.log('gg',results);

//   return (
//     <div>
//       <Head>
//         <title>Search Results</title>
//       </Head>

//       {/* Header */}
//       <Header />

//       {/* Search Results */}
//       {/* <SearchResults results={results} /> */}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const useDummyData = true;

//   // const term =context.query["term"]
//   // const { term } = context.query;
//   // const startIndex = query.start || "0";


//   console.log("goood",term)

//   const response = useDummyData
//     ? Response
//     : await fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//       )
//   console.log(response)
//   const data = response.json()
    

//   //After the server has rendered pass results to the client
//   return {
//     props: {
//       results:data
//     },
//   }
// }


//`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
//`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context}&start=${startIndex}`








export const dynamic = "force-dynamic";

export default async function Search({ searchParams}) {
  // const startIndex = searchParams.start || "0";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.term}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const results = await response.json();
  console.log(results)

  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}