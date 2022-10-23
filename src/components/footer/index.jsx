import React, { Fragment } from 'react'
import { FooterStyled, Content, MadeWith } from './styles'
import Layout from '../layout'

const Footer = () => {
  return (
    <Fragment>
      <FooterStyled>
        <Layout>
          <div className="footer">
            <Content>
                <h1>Sagrado Neon</h1>
              <p>
Endereço: R GUARAITA, 1437, VILA CURUCA - São Paulo - SP</p>
<p>Telefone: (11) 1656-6845</p>
            </Content>
          </div>
        </Layout>
      </FooterStyled>
      <MadeWith>
        <div className="footer-copy">
          <div className="footer-copy-items">
            <a href="#">Política de Privacidade</a>
            <p>CNPJ: 00.000.000/0001-00</p>
            <p><span>Made with</span>
              <span>by Ryanvs</span>
            </p>
          </div>
        </div>
      </MadeWith>
    </Fragment>
  )
}

export default Footer