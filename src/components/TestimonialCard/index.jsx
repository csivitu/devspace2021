import React from 'react';

const TestimonialCard = ({ testimonial, name, designation, index }) => (
    <div className="testimonial-card blue-bg p-4 d-flex flex-column justify-content-around align-items-left">
        <div className="mb-5" style={{ position: 'relative' }}>
            <h1 className="open-quote black">"</h1>
            <h1 className="close-quote black">"</h1>
            {index === 0 ? <h5 className="black p-3">{testimonial}</h5> : <h4 className="black p-3">{testimonial}</h4>}
        </div>
        <div className="pl-3">
            <h4 style={{ margin: '0', padding: '0' }}>{name}</h4>
            <p>{designation}</p>
        </div>
    </div>
);

export default TestimonialCard;
