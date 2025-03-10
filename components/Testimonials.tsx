'use client'
import TestimonialsImg from '@/assets/img/all-images/testimonials/tesi-img1.png'
import TestimonialsImg2 from '@/assets/img/all-images/testimonials/tesi-img2.png'
import TestimonialsImg3 from '@/assets/img/all-images/testimonials/tesi-img3.png'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'

const Testimonial = () => {
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
      <div id="list-item-6">
        <div className="testimonial-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="testimonial-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={900}>
                    <Image src={Sublogo1} alt="" />
                    Testimonial
                  </h5>
                  <div className="space24" />
                  <h2 data-aos="fade-left" data-aos-duration={1000}>
                    What Client Says
                  </h2>
                  <div className="space24" />
                  <h2 className="head" data-aos="fade-left" data-aos-duration={1100}>
                    About <span> My Work</span>
                  </h2>
                </div>
                <div className="space60" />
              </Col>
              <Col lg={7} md={6} data-aos="zoom-in" data-aos-duration={900}>
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 24 20" fill="none">
                      <path
                        d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="space20" />
                  <p>
                    "Working with Alex was a game-changer for our brand. Their attention to detail and focus on creating a seamless user experience
                    truly transformed our website. We’ve seen an incredible boost in user engagement and satisfaction."
                  </p>
                  <div className="space24" />
                  <div className="mans-area">
                    <div className="man">
                      <Image src={TestimonialsImg} alt="" />
                    </div>
                    <div className="content">
                      <Link href="">David Elson</Link>
                      <p>Ezhe Source</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} data-aos="zoom-in" data-aos-duration={1000}>
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 24 20" fill="none">
                      <path
                        d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="space20" />
                  <p>
                    "Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with
                    our audience."
                  </p>
                  <div className="space24" />
                  <div className="mans-area">
                    <div className="man">
                      <Image src={TestimonialsImg2} alt="" />
                    </div>
                    <div className="content">
                      <Link href="">Chris Glasser</Link>
                      <p>Auto Works</p>
                    </div>
                  </div>
                </div>
              </Col>
              <div className="col-lg-5 col-md-6" data-aos="zoom-in" data-aos-duration={1100}>
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 24 20" fill="none">
                      <path
                        d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="space20" />
                  <p>
                    The designs delivered by [Your Name] were intuitive and engaging, making a significant difference in how users interacted with our
                    platform."
                  </p>
                  <div className="space24" />
                  <div className="mans-area">
                    <div className="man">
                      <Image src={TestimonialsImg3} alt="" />
                    </div>
                    <div className="content">
                      <Link href="">Rodger Struck</Link>
                      <p>Specialty Restaurant Group</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 24 20" fill="none">
                      <path
                        d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="space20" />
                  <p>
                    "From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only
                    looks fantastic but also works flawlessly across devices."
                  </p>
                  <div className="space24" />
                  <div className="mans-area">
                    <div className="man">
                      <Image src={TestimonialsImg3} alt="" />
                    </div>
                    <div className="content">
                      <Link href="">Mary Freund</Link>
                      <p>Rink's</p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Testimonial
