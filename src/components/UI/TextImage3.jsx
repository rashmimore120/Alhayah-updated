import React from 'react'
import {Container} from "reactstrap"
import '../../styles/textImage3.css';

const TextImage3 = ({title}) => {
  return (
    <section className='section03'>
        <Container className="text03">
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default TextImage3;