
const cards = [
    { id: 1, image: "/Images/Countries/1.svg", title: "Germany", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 2, image: "/Images/Countries/2.svg", title: "UK CAA", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 3, image: "/Images/Countries/3.svg", title: "Portugal", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 4, image: "/Images/Countries/4.svg", title: "Spain", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 5, image: "/Images/Countries/5.svg", title: "Austria", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 6, image: "/Images/Countries/6.svg", title: "Belgium", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 7, image: "/Images/Countries/7.svg", title: "Czech Republic", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 8, image: "/Images/Countries/8.svg", title: "Greece", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 9, image: "/Images/Countries/9.svg", title: "Iceland", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 10, image: "/Images/Countries/10.svg", title: "Luxemburg", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 11, image: "/Images/Countries/11.svg", title: "Malta", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 12, image: "/Images/Countries/12.svg", title: "Montenegro", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 13, image: "/Images/Countries/13.svg", title: "Norway", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 14, image: "/Images/Countries/14.svg", title: "Romania", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 15, image: "/Images/Countries/15.svg", title: "Slovenia", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 16, image: "/Images/Countries/16.svg", title: "Botswana", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 17, image: "/Images/Countries/17.svg", title: "Burundi", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 18, image: "/Images/Countries/18.svg", title: "Kenya", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 19, image: "/Images/Countries/19.svg", title: "Namibia", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 20, image: "/Images/Countries/20.svg", title: "Rwanda", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 21, image: "/Images/Countries/21.svg", title: "South Africa", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 22, image: "/Images/Countries/22.svg", title: "Tanzania", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 23, image: "/Images/Countries/23.svg", title: "Uganda", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 24, image: "/Images/Countries/24.svg", title: "UAE", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },
    { id: 25, image: "/Images/Countries/25.svg", title: "Qatar", slogan: "Professional Flight Exam Prep", subSlogan: "Real exam level questions", questions: "8,000+ Questions", activeUsers: "25K+ Active Users", description: "This is the first card." },

  ];

const faqs = {
  about: [
    {
      question: "Are the questions on ATPLPro the same as those in the real EASA exam?",
      answer: "Yes, the questions on ATPLPro are identical to those you will encounter in the actual EASA exam. Our database is meticulously updated to reflect the latest ECQB (European Central Question Bank) standards, ensuring you are fully prepared for the real test."
    },
    {
      question: "Which examination database is currently implemented in my country?",
      answer: "Most countries now use the latest ECQB database for pilot licensing examinations. The following aviation authorities have adopted this database: Austria, Belgium, Czech Republic, Germany, Greece, Iceland, Luxembourg, Malta, Montenegro, Norway, Romania, Slovenia, Spain, the UK CAA, and Portugal. Additionally, several aviation authorities outside Europe, including Botswana, Burundi, Kenya, Namibia, Rwanda, South Africa, Tanzania, Uganda, Dubai, and Qatar, also utilize the latest ECQB database."
    },
    {
      question: "How often are new questions added?",
      answer: "At ATPLPro, our experts add new questions daily and ensure outdated ones are removed, maintaining an up-to-date database. While we strive for regular updates—at least weekly, often daily—our primary goal is to help students truly understand aviation theory, not just pass exams. We believe that a solid theoretical foundation is crucial, especially as the real test begins during airline interviews."
    },
    {
      question: "Does ATPLPro help save time in exam preparation?",
      answer: "Absolutely. ATPLPro is designed to optimize your study time by providing top-quality, highly accurate questions tailored to ensure exam success. Our intelligent system prevents unnecessary repetition of questions you have already mastered, allowing you to focus on areas that require more attention."
    }
  ],
  service: [
    {
      question: "Which databases does ATPLPro provide?",
      answer: "ATPLPro offers a comprehensive range of question databases to support your aviation training. Our platform includes: ATPL (A/H) – Airline Transport Pilot License for both Aeroplanes and Helicopters, PPL (A/H) – Private Pilot License for both Aeroplanes and Helicopters, Instrument Rating (A/H) – Instrument Rating for both Aeroplanes and Helicopters, and a free Drone Course."
    },
    {
      question: "I am a CPL student. Can I use the ATPL database?",
      answer: "Absolutely—without a doubt! The ATPL database is fully suitable for CPL students. There is only a slight difference between ATPL and CPL questions, as confirmed by the EASA syllabus. By using the ATPLPro database, CPL students can confidently prepare with high-quality questions that align closely with their syllabus, ensuring a strong foundation for their exams and future career progression."
    },
    {
      question: "Can I access both ATPL Aeroplane and Helicopter databases with one subscription?",
      answer: "Yes, we provide access to both ATPL, PPL databases for Aeroplanes and Helicopters under a single subscription. However, for the Instrument Rating (IR) database, a separate subscription is required. This ensures you receive the most relevant and focused study material for your specific training needs."
    },
    {
      question: "In which languages is the question database available?",
      answer: "Our question database is available in English. We are committed to providing high-quality training material in this language to ensure clarity and precision, allowing students to prepare effectively for their exams."
    }
  ],
  support: [
    {
      question: "Where can I contact if I have queries regarding subscription issues or the database?",
      answer: "You can contact us at support@atplpro.eu for any subscription or database-related inquiries. Our support team is available 24/7 to assist you with any concerns you may have."
    },
    {
      question: "We are an aviation authority looking for a database developer. Where can we contact for this?",
      answer: "For inquiries regarding database development, please reach out to us at info@atplpro.eu. We would be happy to discuss your requirements and explore potential collaborations."
    },
    {
      question: "Can I request a refund for my subscription?",
      answer: "Unfortunately, once you have subscribed to a service, we are unable to offer refunds for one-time subscriptions. Please ensure you review all terms before making a purchase."
    },
    {
      question: "I am an expert in designing questions and explanations for a specific authority and am looking for opportunities. Where can I contact for this?",
      answer: "If you are an experienced flight instructor or a retired pilot with a strong aviation theory background and are interested in contributing to our question and explanation development, we’d love to hear from you! Please contact us at careers@atplpro.eu. We are always looking for dedicated professionals to join our team and help enhance our database."
    }
  ]
};


const certificate = {
  leftcertificate : [
    {id:1, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:2, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:3, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:4, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:5, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
  ],
  rightcertificate : [
    {id:1, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:2, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:3, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:4, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
    {id:5, user:"/Images/userReal.svg", image:"/Images/certificate.svg", name:"Lorem", issueDate:"9 days", score:"10"},
  ]
}
 
export default {cards, faqs, certificate};

