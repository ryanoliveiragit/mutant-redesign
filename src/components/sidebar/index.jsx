import React from "react";
import { Container, Content } from './styles'
import Image from 'next/image'
import JogaJuntoLogo from "../../assets/logo.png"
import Buttons from '../buttons/styles'

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
    return (
        <Container sidebar={active}>
            <div
                className="button">
                <Buttons
                    onClick={closeSidebar}>menu
                </Buttons>
            </div>
            <Content>
                <nav className="sideBarNavigation">
                    <h1>Cliente</h1>
                    <ul className="sidebar">
                        <li>Sobre</li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}
export default Sidebar