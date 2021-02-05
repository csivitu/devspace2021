import React from 'react';
import {Container,Row,Col,Carousel} from 'react-bootstrap'
import './css/about.css'
import Snippet from '../components/tinymessage'
import caroselitem1 from '../img/home-jumbotron-bg.png';

const data = [{title: 'HACKATHON',message: 'fsdoifjopisdjfsdjfopasjfpojksadopf\nksadpoisadjfoisjfioasjdfjsfjspofdfdaf       asedfsdfsdasfadfasdfsdfsdfsdf'},
            {title: 'HACKATHON',message: 'fsdoifjopisdjfsdjfopasjfpojksadopf\nksadpoisadjfoisjfioasjdfjsfjspofdfdaf       asedfsdfsdasfadfasdfsdfsdfsdf'},
            {title: 'HACKATHON',message: 'fsdoifjopisdjfsdjfopasjfpojksadopf\nksadpoisadjfoisjfioasjdfjsfjspofdfdaf       asedfsdfsdasfadfasdfsdfsdfsdf'}]
export default function About() {
    return (
        <Container fluid>
           <Row>
                <Col md={6} id="left">
                    <Container>
                            {data.map((element,index)=>(
                                 <Row key={index}>
                                    <Col style={{marginTop: 16}}>
                                        <Snippet title={element.title} message={element.message}/>
                                    </Col>
                                </Row>))}
                    </Container>
                </Col>
                <Col md={6} id="right">
                    <Carousel style={{height: '100%'}}>
                        <Carousel.Item>
                            <img src={caroselitem1} alt="Previous Devspace event Images"/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
           </Row>
        </Container>
    );
};

