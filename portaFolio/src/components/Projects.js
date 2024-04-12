import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ImgProjects/projectPC-img1.png";
import projImg2 from "../assets/img/ImgProjects/projectPC-img2.png";
import projImg3 from "../assets/img/ImgProjects/projectPC-img3.png";
import projImg4 from "../assets/img/ImgProjects/projectPC-img4.png";
import projImg5 from "../assets/img/ImgProjects/projectPC-img5.png";
import projImg6 from "../assets/img/ImgProjects/projectPC-img6.png";
import projImg7 from "../assets/img/ImgProjects/projectPC-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Generador de Cheques",
      description: "Esta aplicación, desarrollada en Python, permite generar cheques a partir de datos extraídos de hojas de cálculo en Excel y los imprime en el formato adecuado.",
      imgUrl: projImg1,
    },
    {
      title: "Damas Chinas",
      description: "Este juego, implementado en Python, ofrece dos modos de juego: jugador contra jugador (P1 vs P2) y jugador contra la computadora.",
      imgUrl: projImg2,
    },
    {
      title: "PDFView",
      description: "Desarrollada en Python, PDFView facilita diversas operaciones con documentos PDF y se encuentra en constante proceso de actualización.",
      imgUrl: projImg3,
    },
    {
      title: "Convertidor de Imágenes a ASCII",
      description: "Esta herramienta, desarrollada en Python, convierte imágenes en formato PNG a un formato ASCII, reemplazando la imagen por un conjunto de símbolos.",
      imgUrl: projImg4,
    },
    {
      title: "Organizador de Archivos",
      description: "Desarrollado en Python, este programa organiza los archivos de un directorio seleccionado y los guarda en carpetas según sus extensiones correspondientes.",
      imgUrl: projImg5,
    },
    {
      title: "Calculadora Multifunción",
      description: "Esta calculadora, desarrollada en C, ofrece diversas funciones matemáticas, incluyendo la resolución de derivadas e integrales definidas.",
      imgUrl: projImg6,
    },
    {
      title: "Unir Archivos PDF",
      description: "Esta es la primera versión de PDFView, desarrollada en Python, que permite únicamente la unión de documentos PDF.",
      imgUrl: projImg7,
    },
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Aqui encontraras una lista de algunos de mis proyectos realizados en distintas areas y lenguajes de programacion, ademas de las certificaciones que poseo hasta la fecha.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PC Windows</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Moviles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Pentesting</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Certificados</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Contenido para Proyectos Web</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Contenido para Proyectos Moviles</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Contenido para Proyectos Pentesting</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <p>Contenido para Certificados</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
    </section>
  )
}
