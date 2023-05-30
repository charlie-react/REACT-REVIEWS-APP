import { data } from "./data";
import { useState } from "react";

const Sliders = () => {
  const [workers, setWorkers] = useState(data);
  return (
    <>
      {workers.map(({ id, name, content, img, job }) => {
        return (
          <div>
            <img className="control-img" src={img} alt="" />
            <h2>{name}</h2>
            <h5>{job}</h5>
            <p>{content}</p>
          </div>
        );
      })}
    </>
  );
};

export default Sliders;
