import React from 'react';

const generateTestimonial = (index, testimonial) => {
    if (index === 0) {
        return <h5 className="black font-italic p-3" style={{fontSize: "1rem"}}>{testimonial}</h5>;
    } else if (index === 1) {
        return <h5 className="black font-italic p-3">{testimonial}</h5>;
    } else if (index === 2) {
        return <h5 className="black font-italic p-3">{testimonial}</h5>;
    } else if (index === 3) {
        return <h5 className="black font-italic p-3" style={{fontSize: "0.9rem"}}>{testimonial}</h5>;
    } else {
        return <h5 className="black font-italic p-3" style={{fontSize: "1rem"}}>{testimonial}</h5>;
    }
}

const TestimonialCard = ({ testimonial, name, designation, index }) => (
    <div className="testimonial-card blue-bg p-5 d-flex flex-column justify-content-around align-items-left">
        <div className="mb-5" style={{ position: 'relative' }}>
            <h1 className="open-quote black">"</h1>
            <h1 className="close-quote black">"</h1>
            { generateTestimonial(index,testimonial) }
        </div>
        <div className="pl-3">
            <h4 style={{ margin: '0', padding: '0' }}>{name}</h4>
            <p>{designation}</p>
        </div>
    </div>
);

export default TestimonialCard;
