import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Research Intern",
    company: "NAAMII (Nepal Applied Mathematics and Informatics Institute for Research) ",
    period: "April 2025 - Present",
    description: `Conducting research in Natural Language Processing (NLP) and multimodal systems, with a focus on combining text and vision-based models. 
    Currently working on a multimodal brain tumor segmentation project involving MRI data and deep learning-based medical image analysis. 
    Gaining practical experience in medical imaging techniques, including data preprocessing, annotation interpretation, and segmentation modeling using state-of-the-art architectures.
    Collaborating with cross-functional researchers to apply AI in healthcare, contributing to real-world clinical impact.`,
    skills: ["NLP", "Multimodel", "Pytorch", "Python"],
  },
  {
    title: "AI Fellow",
    company: "Fuse Machine",
    period: "April 2024 - Nov 2024",
    description: `Proficient in Scikit-learn, Keras and Pytorch for ML.
 Experienced in Deep Neural Network , Computer Vision(CNN) and NLP(RNN,LLMs).
 Familiar with MLOps for model deployment.`,
    skills: ["Image processing ", "Traditional ML models", "Data Analytics", "Language Processing", "OCR"],
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
