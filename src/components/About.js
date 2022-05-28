import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.jpg';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Sobre</h1>
                        <p className="lead mb-4">
                            Somos importadores de produtos com foco em smartphone da Apple. Nosso objetivo é trazer preços justos e segurança nas compras online.
                        </p>
                        <p className="lead mb-4">Nosso website ainda está em construção, porém você pode entrar em contato para saber mais.</p>
                        <p className="lead mb-4">Fazemos importação de qualquer produto que tenha nas lojas do Ebay e Amazon.</p>
                        <img className="mb-5" src={logo} width="610px" alt="Logo Importação" />
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Entre em contato e faça já seu orçamento</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
