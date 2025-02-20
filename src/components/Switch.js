import { useState } from "react";
import "../assets/css/switch.css";

const WorkLifeSwitch = () => {
  const [selected, setSelected] = useState("work");

  return (
    <form>
      <div className="switch">
        <input
          type="radio"
          name="rdo"
          id="work"
          checked={selected === "work"}
          onChange={() => setSelected("work")}
        />
        <input
          type="radio"
          name="rdo"
          id="life"
          checked={selected === "life"}
          onChange={() => setSelected("life")}
        />
        <div className="switch-slider">
          <label htmlFor="work">Work</label>
          <label htmlFor="life">Life</label>
          <span className={selected}></span>
        </div>
      </div>
    </form>
  );
};

export default WorkLifeSwitch;
