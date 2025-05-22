import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A Final-year Computer Engineering student at IOE, Pulchowk Campus.",
      "Working in the field of  AI, NLP, and multimodal systems.",
      "Research Intern at NAAMI, exploring advanced research in applied AI.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Build intelligent systems.",
      "Conduct research to solve real-world problems using data and machine learning.",
      "Stay updated with emerging AI trends and contribute to impactful projects.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Advance the frontiers of AI through research-driven development",
      "Collaborate in research communities and contribute to open AI innovations",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Sagar Giri</span>,
            a Machine Learning Engineer and a final-year Computer Engineering student at IOE, Pulchowk Campus. 
            I am currently a Research Intern at NAAMI (Nepal Applied Mathematics and Informatics Institute for Research),
             where I explore advanced research topics. My primary research interests lie in Natural Language Processing (NLP) 
             and multimodal systems.<br/>

            As a dedicated and motivated learner, I am interested about advancing AI and data technologies.
             I am committed to developing innovative development programs to drive progress and deliver impactful solutions in the 
             fields of AI/ML, with a strong focus on research-driven approaches to solving real-world applied AI challenges.<br/>

            Apart from my academic and professional pursuits, I am also an avid cook and enjoy preparing a wide variety of
             dishes, always looking to try new recipes and experiment with flavors.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 Focused on building products and solving problems.
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
