import IconVertical from '@/components/IconVertical'
import { default as SidebarPage } from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import { Col, Container, Row } from 'react-bootstrap'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Portfolio from '@/components/Portfolio'
import Service from '@/components/Service'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonials'
const Demo7Page = () => {
  return (
    <>
      <div className="body1">
        <TopNav />
        <div className="main-hero-area7 parallaxie">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="personal-contact-box" data-aos="fade-right" data-aos-duration={1000}>
                  <IconVertical />
                  <SidebarPage />
                </div>
              </Col>
              <Col lg={8}>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                  <Main />
                  <div className="space50" />
                  <About />
                  <Service />
                  <div className="space50" />
                  <Skills />
                  <div className="space30" />
                  <Portfolio />
                  <div className="space30" />
                  <Testimonial />
                  <div className="space30" />
                  <Blog />
                  <div className="space60" />
                  <Contact />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Demo7Page
