import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 1000;
    const toRotate = ["Desarrollador junior", "Programador","Pentester junior"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row >
                    <Col xs={12} md={6} xl={7} className="text-center">
                        <span className="tagline">Bienvenido a mi Portafolio</span>
                        <h1>{'Hola, soy Andres Es '}<span className="wrap">{text}</span></h1>
                        <p>
                            Soy un apasio nado desarrollador junior con experiencia en diversas tecnologías y lenguajes de programación. 
                            Mi objetivo es crear soluciones innovadoras y eficientes que impulsen el éxito de los proyectos en los que trabajo. 
                            Con una sólida formación académica y habilidades técnicas, estoy listo para enfrentar nuevos desafíos y aprender 
                            constantemente para mejorar mis habilidades y contribuir al crecimiento de cualquier equipo.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
    
}
