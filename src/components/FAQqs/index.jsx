import React, { useContext } from 'react';
import {
    Card,
    Accordion,
    useAccordionToggle,
    AccordionContext,
    Container,
    Image,
} from 'react-bootstrap';
import expandIcon from '../../img/expand.png';

import './styles.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function Example({ children, eKey }) {
    return (
        <Card
            style={{
                height: 'min-content',
                width: '30rem',
                marginTop: '1rem',
                minWidth: '20rem',
            }}
            className="black-bg faq-card"
        >
            <Accordion.Toggle as={Card.Header} eventKey={eKey}>
                <Container
                    fluid
                    className="d-flex justify-content-between align-items-center faq-container"
                >
                    <h5>How will I know if I've been registered or not?</h5>
                    <ContextAwareToggle eventKey={eKey} className="tbutton">
                        <Image src={expandIcon} />
                    </ContextAwareToggle>
                </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eKey}>
                <Card.Body as="p">{children}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default Example;
