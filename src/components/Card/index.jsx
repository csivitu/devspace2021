import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button } from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';

const index = ({ topic, company, description, image, link }) => {
    return (
        <div className="d-flex flex-column justify-content-around align-items-center mb-5 card-main-tw">
            <Card className="my-5" style={{ width: '20rem' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    className="float-center rounded-circle mx-auto img-fluid black-img"
                    id="profile"
                />
                <Card.Body className="d-flex flex-column justify-content-around align-items-center">
                    <h4 className="text-center" id="company">
                        {company}
                    </h4>
                    <div>
                        <h3 className="text-center" style={{ fontWeight: 900 }}>
                            {topic}
                        </h3>
                        <hr id="bodyDivider" />
                    </div>
                    <Card.Text className="text-center">{description}</Card.Text>
                </Card.Body>
            </Card>
            <Pulse>
                <Button
                    className="secondary-button get-your-badge-button"
                    href={{link}}
                    target="_blank"
                >
                    SET REMINDER
                </Button>
            </Pulse>
        </div>
    );
};

export default index;
