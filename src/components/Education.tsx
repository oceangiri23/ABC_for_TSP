import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelor in Computer Engineering',
    institution: 'Pulchowk Campus - Institute of Engineering,Tribhuvan University',
    period: '2022 - 2026',
    score: '80%',
  },
  {
    degree: 'High School (XII)',
    institution: 'New Horizon GBS College, Rupandehi',
    period: '2022-2045',
    score: 'XI-4 CGPA, XII-3.65 CGPA',
  },
  {
    degree: 'Secondary  School (X)',
    institution: "New Horizon GBS School, Rupandehi",
    period: '2017 - 2019',
    score: '3.75 CGPA',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
