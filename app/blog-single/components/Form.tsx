import Mail1 from '@/assets/img/icons/mail1.svg'
import { currentYear } from '@/helper/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Form = () => {
  return (
    <>
      <div id="list-item-8">
        <div className="contact-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="space50" />
                <div className="contact-boxarea">
                  <h3>Leave A Message</h3>
                  <div className="space12" />
                  <Row>
                    <Col lg={12}>
                      <div className="input-area">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <input type="number" placeholder="Phone Number" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <textarea placeholder="Message" />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="input-area">
                        <button type="submit" className="vl-btn1">
                          Send <Image src={Mail1} alt="" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12}>
                <div className="space50" />
                <div className="footer-area">
                  <div className="btn-area1">
                    <Link href="" className="vl-btn1">
                      HIRE ME <Image src={Mail1} alt="" />
                    </Link>
                  </div>
                  <p>© {currentYear} OVRO. All Rights Reserved.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Form
