import React from 'react';
import './testimonial.css';
import p1 from './p1.webp';
import p2 from './p2.png';
import p3 from './p3.webp';

const testimonials = [
    {
        img: p1,
        name: 'Anushree Sain',
        review: '“They have a wide range of digital courses which are apt as per the current job market. The courses were explained really well & would recommend to job seekers & people in current workforces for upskilling themselves.”'
    },
    {
        img: p2,
        name: 'Mayank Johri',
        review: '“Quite impactful and affordable digital marketing classes in Gurgaon. Their courses are based on the needs of current industry standards. This knowledge also proves out to be very helpful in getting a job as well as handling the digital media of your own business.”'
    },
    {
        img: p3,
        name: 'Rahul Sharma',
        review: '“The quality of the utensils is top-notch. I\'ve been using their products for a year now, and I am very satisfied with the durability and performance. Highly recommend Camro Utensils to everyone!”'
    }
];

const Testimonial = () => {
    return (
        <section className="testimonial my-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="font-weight-bold">Our Happy Clients</h2>
                    <p className="text-muted">Here's what our clients have to say about Camro Utensils</p>
                </div>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={testimonial.img} alt="User Image" />
                                    <h5 className="card-title">{testimonial.name}</h5>
                                    <div className="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">{testimonial.review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
