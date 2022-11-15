import React from 'react'
import {Container} from "reactstrap"
import '../../styles/textImage.css';

const TextImage = ({title,text}) => {
  return (
    <section className='common_section'>
        <Container className="text-center">
            <p>{text}</p>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}

export default TextImage