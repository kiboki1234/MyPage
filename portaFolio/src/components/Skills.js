import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
//Skills View
import meter1 from "../assets/img/Skills/BDNoRelacional.svg";
import meter2 from "../assets/img/Skills/c++.svg";
import meter3 from "../assets/img/Skills/css.svg";
import meter4 from "../assets/img/Skills/HackWifi.svg";
import meter5 from "../assets/img/Skills/html.svg";
import meter6 from "../assets/img/Skills/java.svg";
import meter7 from "../assets/img/Skills/javaScript.svg";
import meter8 from "../assets/img/Skills/kotlin.svg";
import meter9 from "../assets/img/Skills/Matlab.svg";
import meter10 from "../assets/img/Skills/MV.svg";
import meter11 from "../assets/img/Skills/python.svg";
import meter12 from "../assets/img/Skills/React.svg";
import meter13 from "../assets/img/Skills/Unity2d.svg";
import meter14 from "../assets/img/Skills/HackWeb.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Aquí encontrarás una lista de las habilidades técnicas y herramientas con las que cuento, desarrolladas a lo largo de mi trayectoria.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Base de datos no relacional" />
                                <h5>Base de datos no relacional</h5>
                                <h9>Optimización y diseño de esquemas para bases de datos no relacionales como MongoDB y Firebase.</h9>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="C++" />
                                <h5>C++ </h5>
                                <h9>Desarrollo de aplicaciones y sistemas con enfoque en rendimiento y algoritmos.</h9>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="CSS" />
                                <h5>CSS</h5>
                                <h9>Diseño y estilización de sitios web para diferentes dispositivos y navegadores.</h9>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Hacking WIFI" />
                                <h5>Hacking WIFI</h5>
                                <h9>Conocimientos avanzados en seguridad WiFi y técnicas de penetración.</h9>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Hacking WEB" />
                                <h5>Hacking WEB</h5>
                                <h9>Pentesting web y análisis de vulnerabilidades con herramientas avanzadas.</h9>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Resolución de máquinas virtuales para Pentesting" />
                                <h5>Resolución de máquinas virtuales para Pentesting</h5>
                                <h9>Configuración y solución de máquinas virtuales para pruebas de pentesting con VirtualBox y VMware.</h9>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="HTML" />
                                <h5>Html</h5>
                                <h9>Desarrollo de estructuras y contenido web para sitios dinámicos y optimizados.</h9>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Java" />
                                <h5>Java</h5>
                                <h9>Desarrollo de aplicaciones empresariales y backend robustas y escalables.</h9>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="JavaScript" />
                                <h5>JavaScript</h5>
                                <h9>Programación de funcionalidades interactivas y dinámicas en sitios web.</h9>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Kotlin" />
                                <h5>Kotlin</h5>
                                <h9>Desarrollo de aplicaciones móviles innovadoras para Android.</h9>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Matlab" />
                                <h5>Matlab</h5>
                                <h9>Análisis numérico, modelado y simulación para resolver problemas complejos en ingeniería.</h9>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Python" />
                                <h5>Python</h5>
                                <h9>Automatización de tareas y desarrollo de aplicaciones eficientes con Django y Flask.</h9>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="React" />
                                <h5>React</h5>
                                <h9>Desarrollo de interfaces de usuario interactivas y eficientes con tecnologías modernas.</h9>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Unity 2D" />
                                <h5>Unity 2D y Realidad Aumentada</h5>
                                <h9>Desarrollo de videojuegos 2D y simulaciones interactivas con Unity.</h9>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Color Sharp" />
    </section>
  )
}
