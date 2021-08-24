import React, { useEffect, useState } from "react";
import { ApiCard } from "../../src/views/api-call";

interface IProps {
  name: string;
  image: string;
  house: string;
}

const ApiPage = () => {
  const [source, setSource] = useState([]);
  const url = "http://hp-api.herokuapp.com/api/characters";
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(url);
    const data = await res.json();

    setSource(data);
  }

  return (
    <div className="bx--content">
      <div>
        {source.map((item: IProps) => (
          <div key={item.name}>
            <ApiCard name={item.name} src={item.image} house={item.house} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPage;
