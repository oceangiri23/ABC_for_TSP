import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Research Intern",
    company: "NAAMII",
    period: "April 2025 - Present",
    description: `Researched the architecture and working principles of multimodal AI systems integrating vision and language. 
    Explored various Natural Language Processing (NLP) methods and techniques, including transformers and attention mechanisms.. 
    Analyzed medical imaging datasets and studied deep learning models applied in diagnostic imaging.
    Investigated Retrieval-Augmented Generation (RAG) frameworks for improving information retrieval and response generation in AI systems.`,
    skills: ["NLP", "Multimodel", "Pytorch", "Python", ""],
  },
  {
    title: "AI Fellow",
    company: "Fuse Machine",
    period: "April 2024 - Nov 2024",
    description: `Proficient in Scikit-learn, Keras and Pytorch for ML.
 Experienced in Deep Neural Network , Computer Vision(CNN) and NLP(RNN,LLMs).
 Familiar with MLOps for model deployment.`,
    skills: ["Next.js", "PostgreSQL", "Git", "TailwindCSS", "Team Leadership"],
  },
  {
    title: "Event Manager",
    company: "Hult Prize at IOE",
    period: "April 2024 - Nov 2024",
    description: `Promoted Hult Prize events across IOE campuses through social media, posters, and outreach campaigns to maximize student participation and engagement.
Coordinated with over 100+ participants, mentors, and organizing teams to ensure smooth communication and event execution.
Managed logistics, venue setup, and scheduling for workshops, training sessions, and pitch competitions.
Documented and compiled detailed reports of all program activities and outcomes for submission to the Hult Prize Global Committee.
Facilitated collaboration with student bodies and faculty to support event operations and sponsorship efforts.`,
    skills: ["Communication", "Team Work", "Management", "Leadership"],
  },
  {
    title: "Data Fellow",
    company: "Code for Nepal",
    period: "Aug 2024 - Present",
    description: `Gained hands-on experience in data analysis using Python, including libraries such as NumPy, Pandas, and Matplotlib.
Performed data wrangling and preprocessing on both structured and unstructured datasets to prepare for analysis and visualization.
Utilized SQL for querying databases and managing data stored in relational DBMS.
Interpreted data insights to support real-world decision-making and presented findings through clear visualizations and summaries.`,
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "SQL"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
