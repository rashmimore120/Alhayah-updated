import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../styles/number.css'
import Emp03 from "../../images/empower3.png"
import CountUp from 'react-countup';

const Number = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className='number_img'>
                    <img src={Emp03} alt=""
                    className='w-100' />
                </div>    
                </Col>

                <Col lg='6' md='6'>
                   <div className='number_content'>
                   <h2>About US</h2>
                    <p>Lorem your are mine Lorem your are mine Lorem your are mine Lorem your are mine
                    Lorem your are mine Lorem your are mine Lorem your are mine Lorem your are mine</p>

                    <div className='number_counter'>
                        <div className='d-flex gap-5 align-items-center'>
                            <div className='single_counter'>
                                <span className='counter'>
                                <CountUp start={0} end={25} duration={2} suffix="k" />
                                </span>

                                <p className='counter_title'>Completed Projects

                                </p>

                            </div>


                            <div className='single_counter'>
                                <span className='counter'>
                                <CountUp start={0} end={12} duration={2} suffix="M" />
                                </span>

                                <p className='counter_title'>Patient around world

                                </p>

                            </div>
                        </div>


                    <div className='d-flex gap-5 align-items-center'>
                            <div className='single_counter'>
                                <span className='counter'>
                                <CountUp start={0} end={25} duration={2} suffix="k" />
                                </span>

                                <p className='counter_title'>Completed Projects

                                </p>

                            </div>


                            <div className='single_counter'>
                                <span className='counter'>
                                <CountUp start={0} end={12} duration={2} suffix="M" />
                                </span>

                                <p className='counter_title'>Patient around world

                                </p>

                            </div>
                        </div>                



                    </div>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Number