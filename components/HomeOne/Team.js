import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Team extends React.Component {
    render() {
        return (
            <section id="team" className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={50}
                                animateOnce={true}
                            >
                                <div className="section-title">
                                    <h2>Colaboradores</h2>
                                    <p>
                                        Nuestros colaboradores son los que generan valor en la empresa. Su conocimiento y compromiso, hacen que nuestros servicos sean de calidad.
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={100}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/1.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Responsable de la administraci??n y organizaci??n de la empresa
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Wilder Chuquil??n Mu??oz</h4>
                                    <p className="designation">Gerente General</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={150}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/2.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Encargado de la direcci??n, ejecuc??on y especificaciones t??cnicas de nuestros proyectos
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Samuel Mart??nez Quispe</h4>
                                    <p className="designation">Residente</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={200}
                                animateOnce={true}
                            >
                                <div className="single-member">
                                    <div className="member-img">
                                        <img
                                            src="/images/team/3.jpg"
                                            alt="Team Member Image"
                                        />
                                        <div className="overlay">
                                            <div className="member-info">
                                                <p>
                                                    Encargada de dar cumplimiento a las normas de salud y seguridad
                                                </p>
                                                <div className="social-links">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-facebook"></i>
                                                    </a>

                                                    <a
                                                        href="https://twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-twitter"></i>
                                                    </a>

                                                    <a
                                                        href="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="member-name">Sonia V??squez V??squez</h4>
                                    <p className="designation">Supervisora de Seguridad</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
