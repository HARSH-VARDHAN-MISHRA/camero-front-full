import React from 'react'
import './Faq.css'
import { Link } from 'react-router-dom';

const Faq = () => {

    const faqs = [
        {
          question: "What is CAMRO Products?",
          answer: "CAMRO Products is one of the fastest growing manufacturers of stainless steel kitchenware and a full range of cookware, known for its high-quality materials and innovative designs."
        },
        {
          question: "Where are CAMRO Products manufactured?",
          answer: "Our products are manufactured in a facility spanning a total area of 40,000 square feet, utilizing both handcrafted and automated processes to ensure the highest quality."
        },
        {
          question: "What materials are used in CAMRO Products?",
          answer: "We use the highest quality raw materials combined with the best handcrafting and automation to create long-lasting, ergonomic, and design-oriented products."
        },
        {
          question: "How can I contact CAMRO Products for support?",
          answer: "You can contact our support team via email at support@camroproducts.com or call us at (123) 456-7890. We are dedicated to providing exceptional customer service."
        },
        {
          question: "What is the warranty period for CAMRO Products?",
          answer: "CAMRO Products come with a one-year warranty from the date of purchase, covering manufacturing defects and quality issues."
        },
        {
          question: "Are CAMRO Products dishwasher safe?",
          answer: "Yes, most of our stainless steel kitchenware and cookware products are dishwasher safe. Please refer to the product manual for specific care instructions."
        },
        {
          question: "Do CAMRO Products use non-stick coatings?",
          answer: "Some of our cookware products feature high-quality non-stick coatings for easy cooking and cleaning. Please check the product details for more information."
        },
        {
          question: "Can I find CAMRO Products in retail stores?",
          answer: "Yes, CAMRO Products are available in various retail stores nationwide. You can also purchase our products online through our official website and authorized retailers."
        }
      ];
      

    return (
        <>
            <div className="container faq my-5">
                <h2 className="py-4 text-center">Frequently Asked Questions</h2>
                
                <div className="accordion" id="faqAccordion">
                    
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-more-container">
                    <Link to="/faqs" className="viewMoreBtn">
                        View More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Faq