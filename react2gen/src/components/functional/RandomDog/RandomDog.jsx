import { useState } from "react";
import { useEffect } from "react";
import { apidog } from "../../../api/api";

const RandomDog = () => {
  const [randomDog, setRandomDog] = useState({});

  const fetchRandomDog = async () => {
    try {
      const result = await apidog.get("/breeds/image/random");
      const data = result.data;
      setRandomDog(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return <div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <button onClick={() => fetchRandomDog()} style={
            {margin:"50px 0px",
            width:"100px",
            height:"50px",
            borderRadius:"8px",
            borderColor:"grey",
            color:"white",
            background:"black"
            }}>Get pictureof a Random Dog</button>
        <img src={randomDog.message} alt="" srcSet=""  style={{
            width:"500px",
            height:"500px",
            borderRadius:"8px",
            border:"2px solid grey"}}/>
    </div>
    </div>;
};

export default RandomDog;