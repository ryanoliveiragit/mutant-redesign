import React, { Fragment } from 'react'
import { Text, Container } from './styles'

const Title = ({ cnpj, fantasyName, fantasyNameStyled}) => {
    return (
        <Fragment>
            <Container>
                <Text>{cnpj}</Text>
                <Text className={fantasyNameStyled}>{fantasyName}</Text>
            </Container>
        </Fragment>
    )
}

export default Title