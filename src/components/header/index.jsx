import React,
{
    Fragment,
    useState
}
    from 'react'

import Image from 'next/image'
import JogaJuntoLogo from "../../assets/logo.png"
import ContainerHeader from './styles'
import Buttons from '../buttons/styles'
import Sidebar from '../sidebar'
import Layout from '../layout'

function Header() {
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Fragment>
            <ContainerHeader>
                    <nav className='navigation'>
                        <h1>Sagrado Neon</h1>
                        <ul className='list'>
                        </ul>
                        <button
                            className='amburger'
                            onClick={showSiderbar}>menu
                        </button>
                        {sidebar &&
                            <Sidebar
                            active={setSidebar}
                        />}
                    </nav>
            </ContainerHeader>
        </Fragment>
    )
}

export default Header;