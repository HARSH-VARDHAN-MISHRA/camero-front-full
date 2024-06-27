import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const FaqPage = () => {

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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <section class="bread mb-5">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <h2>FAQ's</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">FAQ's</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="container faq my-5">
                
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

            </div>

        </>
    )
}

export default FaqPage