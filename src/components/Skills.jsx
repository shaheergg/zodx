import React, { useState } from "react";
import Progress from "./Progress";
import { Reorder } from "framer-motion";
import { data } from "../constants";
const Skills = () => {
  return (
    <div className="overflow-x-auto">
      {data.skills.map((skill) => {
        return <Progress {...skill} key={skill.id} />;
      })}
    </div>
  );
};

export default Skills;
