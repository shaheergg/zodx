import React, { useState } from "react";
import Progress from "./Progress";
import { Reorder } from "framer-motion";
const Skills = () => {
  const data = [
    {
      id: 1,
      title: "React JS for Web Development",
      percentage: "99%",
    },
    {
      id: 2,
      title: "Node JS for Backend Development",
      percentage: "60%",
    },
    {
      id: 3,
      title: "Prisma ORM for Database Management",
      percentage: "40%",
    },
    {
      id: 4,
      title: "Python Flask for API Development",
      percentage: "69%",
    },
    {
      id: 5,
      title: "C++ for Competitive Programming",
      percentage: "80%",
    },
    {
      id: 6,
      title: "NextJS for enterprise-level applications",
      percentage: "80%",
    },
  ];

  const [skills, setSkills] = useState(data);

  return (
    <div className="overflow-x-auto">
      <Reorder.Group axis="y" values={skills} onReorder={setSkills}>
        {skills.map((skill) => {
          return (
            <Reorder.Item key={skill.id} value={skill}>
              <Progress {...skill} key={skill.id} />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
};

export default Skills;
