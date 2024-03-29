import { useState } from "react";
import { useEffect } from "react";
import { apicat } from "../../../api/api";

const RandomCat = () => {
  const [randomCat, setRandomCat] = useState({});

  const fetchRandomCat = async () => {
    try {
      const result = await apicat.get("/v1/images/search");
      const data = result.data;
      setRandomCat(data[0]);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  return <div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <button onClick={() => fetchRandomCat()} style={{
            marginBottom:"50px",
            width:"100px",
            height:"50px",
            borderRadius:"8px",
            borderColor:"grey",
            color:"white",
            background:"black"}}>Get pictureof a Random Cat</button>
        <img src={randomCat.url} alt="" srcSet=""  style={{
          width:"500px",
          height:"500px",
          borderRadius:"8px",
          border:"2px solid grey",
          }}/>
    </div>
    </div>;
};

export default RandomCat;