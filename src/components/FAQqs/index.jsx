import React, { useContext } from 'react';
import {
    Card,
    Accordion,
    useAccordionToggle,
    AccordionContext,
} from 'react-bootstrap';

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

function Example({children}) {
    return (
        <Accordion>
            <Card style={{height:"200px"}}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
					How will I know if I've been registered or not?
					&nbsp; &nbsp; &nbsp;
                    <ContextAwareToggle eventKey="0">
                        Click me!
                    </ContextAwareToggle>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
					<Card.Body>{children}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Example;
