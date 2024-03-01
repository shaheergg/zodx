import React from "react";

function ProjectCard({ title, description, source, link }) {
  return (
    <div className="flex flex-col justify-between p-4 space-y-2 transition-all border rounded border-neutral-800 hover:bg-neutral-800 cols-span-1">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="line-clamp-4">{description}</p>
      </div>
      <div className="flex items-center gap-4">
        <a href={link} className="text-sm font-semibold text-neutral-400">
          View Project
        </a>
        <a href={source} className="text-sm font-semibold text-neutral-400">
          View Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
