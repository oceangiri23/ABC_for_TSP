import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';




// Define projects data
const projects = [
  {
    title: 'HandWritten Document Recognition and Grader:',
    description: 'This project utilizes a YOLO model to segment words from documents, which are then processed by a CRNN-based model to convert handwritten text into digital text. The model was trained on the IAM dataset, achieving a Character Error Rate (CER) of 0.11. Additionally, the system was adapted for automated grading of handwritten student assignments using a fine-tuned BERT model..',
    image: '/assets/handwritten.jpg',
    github: 'https://github.com/oceangiri23/Handwritten_text_recognition',
 
  },
  {
    title: 'Data Parser for Nepali Documents',
    description: 'Developed a system for extracting structured data from Nepali documents using OpenCV for image preprocessing, OCR models (Tesseract), and a fine-tuned BERT NER model, achieving accurate extraction of 13 custom tags with JSON output formatting.',
    image: '/assets/dataparser.png',
    github: 'https://www.google.com/url?sa=D&q=https://github.com/oceangiri23/Smart_form_filler&ust=1746115680000000&usg=AOvVaw1o4D76pcpatxP_oRG6V1bo&hl=en',

  },
  {
    title: 'Carpet Design Patterns Generator',
    description: 'Developed a model for the Patternverse competition to generate variations of a given carpet image in terms of color and pattern. Fine-tuned Stable Diffusion ControlNet using LoRA on 5,000 images provided by Alternative Technology Company. Integrated CLIP embeddings for prompt-based customization, achieving an inference time of 5 seconds per variation.',
    image: '/assets/pattern.png',
    github: 'https://www.google.com/url?sa=D&q=https://github.com/oceangiri23/Patternverse-Carpet_Design_Variations_generator&ust=1746115680000000&usg=AOvVaw2cLmcViVd3sVw10q2hY6EX&hl=en',
  
  },
  {
    title: 'DocQuery-Bot',
    description: 'This project showcases a chatbot that answers queries from PDF documents and collects user details (Name, Email, Phone Number, Appointment Date) through conversational forms. It uses the Gemini model, LangChain, and ChromaDB, and is deployed with Streamlit for a seamless interface.',
    image: '/assets/chatbot.avif',
    github: 'https://github.com/oceangiri23/DocQuery-Bot',
 
  },
  {
    title: 'Cervical Cancer Detection and Classification using EfficientNet',
    description: 'This is an EfficientNet-B5 fine-tuned model for the classification of cervical cancer into five categories, trained on data obtained from Kaggle. The model achieved an accuracy of 96.31%, with a precision of 96.34%, recall of 96.31%, and an F1-score of 96.31%, respectively.',
    image: '/assets/effectivenet.png',
    github: 'https://github.com/oceangiri23/Cervical_Cancer_Detection_and_Classification_using_EfficientNet',

  },
  {
    title: 'Realm_of_Answers-GOT_Q-A_Bot',
    description: 'Realm_of_Answers-GOT_Q-A_Bot is a question-answering bot built to respond to queries about the Game of Thrones series using a synopsis PDF as its primary knowledge source. It combines Retrieval-Augmented Generation (RAG) with a fine-tuned BERT model to deliver accurate answers based on the content of the synopsis.',
    image: '/assets/got.jpg',
    github: 'https://github.com/oceangiri23/Realm_of_Answers-GOT_Q-A_Bot',
  
  },
  {
    title: 'Cross Validation Visualizer',
    description: 'I have visualized these cross validation for the dataset: KFold Stratified KFold Group KFold Stratified Group KFold TimeSeries Split.',
    image: '/assets/crossvalidation.png',
    github: 'https://github.com/oceangiri23/Cross_Validation-Visualizer',
 
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
