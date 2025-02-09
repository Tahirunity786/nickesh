'use client';
import Image from 'next/image';
import styles from './Faqa.module.css'; // Import styles
import { useState } from 'react';
import data from '@/app/icData'

const Faqa = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('about');
  // State to track which FAQ is open (stores index)
  const [openIndex, setOpenIndex] = useState(null);

  // Categories and associated styles
  const categories = [
    { name: 'about', style: styles.activenav },
    { name: 'service', style: styles.outlinenav },
    { name: 'support', style: styles.outlinenav },
  ];

  // FAQ data structure with categories
  const faqs = {
    About: [
      { question: 'Are the questions on ATPLPro the same as those in the real EASA exam?', answer: 'Yes, we regularly update our database to match the latest exam formats.' },
      { question: 'Which examination database is currently implemented in my country?', answer: 'You can check the supported databases in our platform settings.' },
    ],
    'Our Services': [
      { question: 'Does ATPLPro help save time in exam preparation?', answer: 'Absolutely! Our platform is designed for efficient learning with exam-like questions.' },
      { question: 'How often are new questions added?', answer: 'New questions are added every month based on syllabus updates.' },
    ],
    Support: [
      { question: 'How can I contact customer support?', answer: 'You can reach out via email or live chat support on our website.' },
      { question: 'Is there a refund policy?', answer: 'Yes, we offer a refund within the first 7 days of subscription.' },
    ],
  };

  // Toggle collapse state for FAQ items
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mb-5">
      {/* Section Header */}
      <div className="text-center mb-4">
        <h4 style={{ fontWeight: 'bold' }}>
          Frequently Asked <span style={{ color: '#1A73E8' }}>Questions</span>
        </h4>
        <p style={{ fontSize: '14px' }}>Trusted by more than 17K customers</p>
      </div>

      {/* Category Navigation Buttons */}
      <div className="d-flex justify-content-center align-items-center mb-5">
        {categories.map((category) => (
          <div key={category.name} className="me-3 ms-3">
            <button
              className={activeCategory === category.name ? styles.activenav : styles.outlinenav}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>

      <div className="row">
        {/* Image Section */}
        <div className="col-lg-6">
          <Image src="/Images/background__82221.svg" width={300} height={300} alt="faq" className="w-100" />
        </div>

        {/* FAQ List Section */}
        <div className="col-lg-6">
          {data.faqs[activeCategory]?.map((faq, index) => (
            <div key={index} className="card shadow-sm border border-light rounded-4 mb-3">
              <div
                className="card-body d-flex justify-content-start align-items-center"
                onClick={() => toggleFaq(index)}
                style={{ cursor: 'pointer' }}
              >
                {/* Toggle Icon */}
                <div className="text-center me-3">
                  <Image
                    src={openIndex === index ? '/Images/plus.svg' : '/Images/plus.svg'}
                    width={25}
                    height={25}
                    alt="toggle"
                  />
                </div>
                {/* Question Text */}
                <div>
                  <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{faq.question}</h6>
                </div>
              </div>
              {/* Collapsible Answer Section */}
              <div
                className={`collapse-content ${openIndex === index ? 'show' : ''}`}
                style={{
                  maxHeight: openIndex === index ? '100px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out',
                }}
              >
                <p className="px-3 py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqa;
