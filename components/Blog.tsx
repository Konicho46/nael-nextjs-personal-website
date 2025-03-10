'use client'
import Blog01 from '@/assets/img/all-images/blog/blog-img1.png'
import Blog2 from '@/assets/img/all-images/blog/blog-img2.png'
import Blog3 from '@/assets/img/all-images/blog/blog-img3.png'
import Blog4 from '@/assets/img/all-images/blog/blog-img4.png'
import Blog5 from '@/assets/img/all-images/blog/blog-img5.png'
import Sublog1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaCalendar, FaClock } from 'react-icons/fa6'

const Blog = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })

    return () => {
      Aos.refresh()
    }
  }, [])
  return (
    <>
      <div id="list-item-7">
        <div className="blog-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="blog-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={900}>
                    <Image src={Sublog1} alt="" />
                    Our Blog
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    Our Latest Blog Idea
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1200}>
                    UI/UX <span>Trends</span>
                  </h2>
                  <div className="space60" />
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="blog-boxarea">
                        <div className="reveal-item img1  rounded" data-aos="reveal-item">
                          <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
                          <Image className="w-100" src={Blog01} alt="Portfolio image" />
                        </div>
                        <div className="content-area">
                          <ul>
                            <li>
                              <Link href="">UI/UX</Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaClock className="fa-regular" />
                                &nbsp; 3 min read
                              </Link>
                            </li>
                          </ul>
                          <div className="space16" />
                          <a href="/blog-single">Behind the Pixels: My Favorite Design Projects</a>
                          <div className="space16" />
                          <ul>
                            <li>
                              <Link href="">
                                <Image src={Blog5} alt="" />
                                Alex Carry
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaCalendar className="fa-regular" />
                                &nbsp; Oct 26, 2024
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="blog-boxarea">
                        <div className="reveal-item img1  rounded" data-aos="reveal-item">
                          <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
                          <Image className="w-100" src={Blog2} alt="image" />
                        </div>
                        <div className="content-area">
                          <ul>
                            <li>
                              <Link href="">UI/UX</Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaClock className="fa-regular" />
                                &nbsp; 3 min read
                              </Link>
                            </li>
                          </ul>
                          <div className="space16" />
                          <a href="/blog-single">Crafting Seamless Experiences: My UI/UX Design Philosophy</a>
                          <div className="space16" />
                          <ul>
                            <li>
                              <Link href="">
                                <Image src={Blog5} alt="" />
                                Alex Carry
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaCalendar className="fa-regular" />
                                &nbsp; Oct 26, 2024
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="blog-boxarea">
                        <div className="reveal-item img1  rounded" data-aos="reveal-item">
                          <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
                          <Image className="w-100" src={Blog3} alt="image" />
                        </div>
                        <div className="content-area">
                          <ul>
                            <li>
                              <Link href="">UI/UX</Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaClock className="fa-regular" />
                                &nbsp;3 min read
                              </Link>
                            </li>
                          </ul>
                          <div className="space16" />
                          <Link href="/blog-single">Staying Ahead: Trends Shaping UI/UX in 2024</Link>
                          <div className="space16" />
                          <ul>
                            <li>
                              <Link href="">
                                <Image src={Blog5} alt="" />
                                Alex Carry
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaCalendar className="fa-regular" />
                                Oct 26, 2024
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="blog-boxarea">
                        <div className="reveal-item img1  rounded" data-aos="reveal-item">
                          <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
                          <Image className="w-100" src={Blog4} alt="image" />
                        </div>
                        <div className="content-area">
                          <ul>
                            <li>
                              <Link href="">UI/UX</Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaClock className="fa-regular" /> 3 min read
                              </Link>
                            </li>
                          </ul>
                          <div className="space16" />
                          <Link href="/blog-single">From Concept to Reality: My Design Process</Link>
                          <div className="space16" />
                          <ul>
                            <li>
                              <Link href="">
                                <Image src={Blog5} alt="" />
                                Alex Carry
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <FaCalendar className="fa-regular" />
                                Oct 26, 2024
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <div className="space30" />
                    <div className="pagination-area">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <Link className="page-link" href="" aria-label="Previous">
                              <FaAngleLeft className="fa-solid" />
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link active" href="">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" href="">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" href="">
                              ...
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" href="">
                              12
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" href="" aria-label="Next">
                              <FaAngleRight className="fa-solid fa-angle-right" />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Blog
