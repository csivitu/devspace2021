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
import collapseIcon from '../../img/collapse.png'

import './styles.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;
    
    if (isCurrentEventKey) {
        return (
            <button
            type="button"
            onClick={decoratedOnClick}
        >
            <Image src={collapseIcon} />
        </button>
        )
    }
    return (
        <button
        type="button"
        onClick={decoratedOnClick}
    >
        <Image src={expandIcon} />
    </button>
    )
}

function Example({ qs, ans, eKey }) {
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
                    <h5>{qs}</h5>
                    <ContextAwareToggle eventKey={eKey} className="tbutton" />
                </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eKey}>
                <Card.Body as="p">{ans}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default Example;
