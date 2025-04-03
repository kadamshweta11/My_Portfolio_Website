import Navbar from "../components/Navbar";
import { IconCloud } from "@/components/magicui/icon-cloud";

const skillsData = [
  {
    category: "Web Development",
    skills: "HTML, CSS, JavaScript, Bootstrap, PHP, Next.js, React.js, MySQL, PostgreSQL"
  },
  {
    category: "Programming Languages",
    skills: "Java, C, C++"
  },
  {
    category: "Frameworks & Libraries",
    skills: "MERN Stack (MongoDB, Express.js, React, Node.js), Mendix"
  },
  {
    category: "Database & Tools",
    skills: "MongoDB, SQL, Git, GitHub, GitLab, Jira, WordPress, Slack"
  },
  {
    category: "Methodologies",
    skills: "Agile Development, Scrum (CSM Certified), Kanban"
  },
  {
    category: "Soft Skills",
    skills: "Strategic Thinking, Teamwork, Public Speaking, Communication, Problem Solving, Enthusiastic Learner"
  },
];

const slugs = [
 "typescript",
  "javascript",
  "php", 
  "react",
  "html5",
  "css3",
  "express",
  "mysql", 
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "jira",
  "mongodb",   
  "github",
  "bootstrap",  
  // "nodejs",       // Frameworks & Libraries
  // "mendix", 
  "gitlab",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
 
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden ">
      {/* <div className="w-100 h-100"> */}
      <IconCloud images={images} />
      {/* </div> */}
    </div>
  );
}

const Skills = () => {
  return (
    <>
    <Navbar />
<div className="h-screen flex flex-col justify-center items-center text-center bg-black text-white py-16">
  <h1 className="text-4xl font-bold mb-6">Skills</h1>
  

  {/* Flexbox Layout for Table and Icons */}
  <div className="flex w-full max-w-6xl mx-auto">
    {/* Skills Table */}
    <div className="w-full md:w-3/4 pr-4">
      <div className="overflow-x-auto">
        <table className="table-auto text-left w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-lg font-semibold text-gray-300 w-1/3">Category</th>
              <th className="px-6 py-3 text-lg font-semibold text-gray-300 w-2/3">Skills</th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((skill, index) => (
              <tr
                key={index}
                className="border-b border-transparent hover:bg-gray-800 transition-all"
              >
                {/* Add border-right to the first column */}
                <td className="px-6 py-4 font-medium border-r border-gray-600">{skill.category}</td>
                <td className="px-6 py-4">{skill.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Icon Cloud Demo */}
    <div className="w-full md:w-1/2 pl-4">
      <IconCloudDemo />
    </div>
  </div>
</div>

    </>
  );
};

export default Skills;
