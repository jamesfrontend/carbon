import React, { useEffect, useState } from "react";
import { ApiCard } from "../../src/views/api-call";
import styles from "./api.module.scss";
interface IProps {
  name: string;
  image: string;
  house: string;
}

interface ApiProps {
  er?: any;
}
const ApiPage = ({ er }: ApiProps) => {
  const [source, setSource] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(er);
  const url = "https://hp-api.herokuapp.com/api/characters";
  const [results, setResults] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setSource(result);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }

  const handleSearch = (e: any) => {
    const item = e.target.value;
    const length = e.target.value.length;
    if (length < 1) return setIsEmpty(true);
    else setIsEmpty(false);
    const searchResult = source.filter((data: IProps) => {
      const chg = data.name.toLowerCase();
      return chg.includes(item.toLowerCase());
    });
    console.log(searchResult);
    setResults(searchResult);
  };

  if (error) return <div className="bx--content">{error.message}</div>;
  else if (loading) return <div className="bx--content">Loading...</div>;
  else console.log(isEmpty);
  let src;
  isEmpty ? (src = source) : (src = results);
  return (
    <div className="bx--content">
      <div className={styles.search}>
        <label className={styles.labelSearch}>
          <span>Search by Name</span>
          <input
            id="search"
            onKeyUp={(e) => handleSearch(e)}
            className={styles.inputSearch}
            type="search"
          />
        </label>
      </div>
      <div>
        {src.map((item: IProps) => (
          <div key={item.name}>
            <ApiCard name={item.name} src={item.image} house={item.house} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPage;

// import React, { useEffect, useState } from "react";
// import { ApiCard } from "../../src/views/api-call";
// import styles from "./api.module.scss";
// interface IProps {
//   name: string;
//   image: string;
//   house: string;
// }

// interface ApiProps {
//   er?: any;
// }
// const ApiPage = ({ er }: ApiProps) => {
//   const [source, setSource] = useState([]);
//   const [loading, setIsLoading] = useState(true);
//   const [error, setError] = useState(er);
//   const url = "https://hp-api.herokuapp.com/api/characters";
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     const res = await fetch(url)
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           setSource(result);
//           setIsLoading(false);
//         },
//         (error) => {
//           setError(error);
//           setIsLoading(false);
//         }
//       );
//   }

//   const handleSearch = (e: any) => {
//     const item = e.target.value;
//     const searchResult = source.filter((data: IProps) => {
//       const chg = data.name.toLowerCase();
//       return chg.includes(item.toLowerCase());
//     });
//     setResults(searchResult);
//   };

//   if (error) return <div className="bx--content">{error.message}</div>;
//   else if (loading) return <div className="bx--content">Loading...</div>;
//   else
//     return (
//       <div className="bx--content">
//         <div className={styles.search}>
//           <label className={styles.labelSearch}>
//             <span>Search</span>
//             <input
//               id="search"
//               onKeyUp={(e) => handleSearch(e)}
//               className={styles.inputSearch}
//               type="search"
//             />
//           </label>
//         </div>
//         <div>
//           {results.map((item: IProps) => (
//             <div key={item.name}>
//               <ApiCard name={item.name} src={item.image} house={item.house} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default ApiPage;
