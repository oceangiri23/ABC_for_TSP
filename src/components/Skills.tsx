import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiPandas,SiNumpy,SiC,SiDjango ,SiScikitlearn,SiTensorflow,SiPytorch,SiHuggingface,SiLangchain, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiGraphql, SiMongodb, SiPrisma, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel } from "react-icons/si";
import { FaNodeJs,FaChartLine, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  {name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
  {name: "matplotlib", icon: FaChartLine, color: "#306998" },
  {name: "numpy", icon: SiNumpy, color: "#013243" },
  {name: "Pandas", icon: SiPandas, color: "#150458" },
  {name: "Sk-learn", icon: SiScikitlearn, color: "#F7931E" },
  {name: "Huggingface", icon: SiHuggingface, color: "#FFD21F" },
  {name: "Tesnsorflow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Pytorch", icon: SiPytorch, color: "#EE4C2C"  },
  { name: "Langchan", icon: SiLangchain, color: "#228B22" },
  { name: "Django", icon: SiDjango, color: "#3178c6"  },
  { name: "JavaScript", icon: SiJavascript, color: "#3178c6" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  { name: "C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "C", icon: SiC, color: "#00599c", url: "https://www.java.com/" },
  { name: "AWS", icon: FaAws, color: "#ff9900", url: "https://aws.amazon.com/" },
  { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {skills.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
          ))}
        </div>
      </div>
    </section>
  );
}