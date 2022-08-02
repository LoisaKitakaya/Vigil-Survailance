import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const Services = () => {
  PageTitle("Vigil | Services");
  return (
    <div className="App-sub-container">
      <div className="this-container">
        <div className="display-container">
          <h1 className="text-center">Services</h1>
          <h4 className="text-center">Check out all the services we offer</h4>
          <br />
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Alarm System Monitoring</Accordion.Header>
              <Accordion.Body>
                <h3>Alarm System Monitoring</h3>
                <br />
                <p>
                  GPS Security Group is a certified alarm system monitoring
                  company in Western Canada. We provide complete alarm
                  monitoring services to our clients. It's essential to have
                  quick and comprehensive communication between your security
                  system, security provider, and law and enforcement
                  authorities.
                </p>
                <br />
                <p>
                  Our trained staff makes sure that proper authorities are
                  alerted when an alarm is triggered at your property. Our
                  comprehensive system sends alerts to the alarm owner as well.
                  Through our services, you can have remote access to your
                  security system at all times, and you can monitor your
                  security cameras from your smartphone and other digital
                  devices. The full features of our alarm monitoring system can
                  be viewed below.
                </p>
                <br />
                <div className="card">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        We provide a full range of security services contact us
                        for a free consultation today
                      </p>
                      <Link to={"/quote"} className="btn btn-dark">
                        Get free quote
                      </Link>
                    </blockquote>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Video Monitoring</Accordion.Header>
              <Accordion.Body>
                <h3>24/7 Video Monitoring</h3>
                <br />
                <p>
                  GPS Security Group offers a 24/7 video monitoring service to
                  its commercial and industrial clients throughout Alberta,
                  British Columbia, and Saskatchewan. The primary advantage of
                  an online surveillance system like this is that it is
                  operational around the clock. Our real-time video surveillance
                  system allows a single person to man several screens
                  simultaneously. This eliminates the need for deploying a
                  security guard in every room, floor, or premise/location. You
                  can catch an ongoing suspicious or criminal activity on your
                  security camera and help investigation agencies find the
                  culprits.
                </p>
                <br />
                <h3>Remote Surveillance</h3>
                <br />
                <p>
                  This is another powerful feature offered by GPS Security Group
                  that allows our clients to conduct remote surveillance across
                  Alberta, Saskatchewan, and BC. It enables you to access your
                  video even when you’re not on-site. You can receive security
                  alerts and images by SMS and/or email from our automated
                  surveillance system.
                </p>
                <br />
                <h3>Remote Cam</h3>
                <br />
                <p>
                  This smartphone app allows you to view a live feed of your
                  complete surveillance system anytime from your cell phone or
                  tablet.
                </p>
                <br />
                <h3>False Alarm Detection</h3>
                <br />
                <p>
                  Many companies face false alarm issues at their facilities,
                  resulting in wasting crucial time on unnecessary
                  investigations. False alarms can be caused by bugs,
                  trees/leaves, shadows, reflections, lights, wind, and weather
                  conditions. GPS Security Group uses Advanced AI technology to
                  reduce the number of false alarms significantly. Our advanced
                  AI cloud-based false alarm filtering technology reduces false
                  alarms by up to 90%.
                  <br />
                  <br />
                  GPS Security’s video monitoring software focuses on triggering
                  true alarms. This includes real human activity, like
                  identifying a person walking through a construction site, a
                  man carrying a flashlight from a distance, vehicle movement
                  on-site or within the area of interest, and additional related
                  activities.
                  <br />
                  <br />
                  Our video monitoring software also focuses on filtering out
                  false alarms. This includes changing weather conditions, like
                  lightning, animal activity, vehicle movement outside the area
                  of interest, and other related activities.
                </p>
                <br />
                <div className="card">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        We provide a full range of security services contact us
                        for a free consultation today
                      </p>
                      <Link to={"/quote"} className="btn btn-dark">
                        Get free quote
                      </Link>
                    </blockquote>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Electronic Security</Accordion.Header>
              <Accordion.Body>
                <h3>Cameras, Access Control {"&"} Electronic Security</h3>
                <br />
                <p>
                  24/7 monitoring and access control security ensures that only
                  those who are authorized can enter your premises. A basic
                  access control system includes a computerized controller,
                  tracking app and an electronic lock. This is one of the most
                  important steps any organization has to take to create a
                  secure working space and protect information. Select the most
                  appropriate access control security for your business using
                  the following tips.
                </p>
                <br />
                <h3>Size of Organization</h3>
                <p>
                  The size of the organization or business matters the most in
                  determining the level of access control security. There will
                  be a huge difference in the access control system required for
                  a large enterprise as compared to that of a retail store. An
                  open site that allows entry to a number of people throughout
                  the day will need to have mobile surveillance trailers so that
                  a watchful eye can be kept on every intruder. Whereas an
                  office that has employees entering in the morning and leaving
                  in the evening can be checked by the security guard alone.
                </p>
                <br />
                <h3>Access Control Cards {"&"} 24/7 Surveillance</h3>
                <br />
                <p>
                  Access control cards are a good way to ensure that only the
                  people who are needed inside the buildings gain access to it.
                  They restrict outside visitors from passing through and ensure
                  the safety of the premise. Protect your home and business,
                  while providing hassle-free access to your loved ones, assets,
                  {"&"} employees with an efficient access control security
                  system. GPS Security provides an end to end service for
                  designing, installing and maintaining access control security
                  systems. Our professionals have extensive experience working
                  with small businesses as well as large enterprises. Get in
                  touch with us today to learn more about the services we offer.
                </p>
                <br />
                <div className="card">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        We provide a full range of security services contact us
                        for a free consultation today
                      </p>
                      <Link to={"/quote"} className="btn btn-dark">
                        Get free quote
                      </Link>
                    </blockquote>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Mobile Surveillance Trailers</Accordion.Header>
              <Accordion.Body>
                <h3>Mobile Surveillance Trailers</h3>
                <br />
                <p>
                  GET MAXIMUM PROTECTION BY ADDING MOBILE SURVEILLANCE UNITS TO
                  YOUR CURRENT STATIC AND MOBILE GUARD SERVICES Video enhanced
                  security packages use traditional patrol guards with mobile
                  surveillance units. Our newest solar solution, the MSU HYBRID,
                  provides a flexible and energy-efficient surveillance
                  solution. The MSU Hybrid offers complete flexibility for
                  temporary remote video surveillance. The unit is powered by
                  solar panels for clean operation with an environmentally
                  friendly diesel generator to recharge the batteries during
                  cloudy or rainy days.
                  <br />
                  <br />
                  Without refuelling, the unit can last for up to 4 months in
                  the summer and up to 2 months in winter. It is easy to deploy
                  and it is remotely monitored with IP HD cameras featuring up
                  to 6 months of localized recording and remote recording. With
                  a combination of mobile patrols and mobile surveillance units,
                  we can optimally deliver a wide range of security services.
                </p>
                <br />
                <div className="card">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        We provide a full range of security services contact us
                        for a free consultation today
                      </p>
                      <Link to={"/quote"} className="btn btn-dark">
                        Get free quote
                      </Link>
                    </blockquote>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Surveillance Equipment</Accordion.Header>
              <Accordion.Body>
                <h3>Surveillance Equipment</h3>
                <br />
                <p>
                  GPS Security Group offers cyber security and IT security
                  solutions for companies in Western Canada. GPS is one of
                  Canada’s premier providers of cyber security services.
                  <br />
                  <br />
                  We are dedicated to assisting organizations in protecting
                  their data and technology infrastructure while also mitigating
                  risk. We take a proactive approach in monitoring client
                  network environment(s) and providing regulatory compliance. We
                  have partnerships with some of the most trusted companies and
                  institutions in the security sector. Additionally, we also
                  consult with provincial and federal government bodies to
                  ensure our services meet the latest cyber security standards.
                  <br />
                  <br />
                  Let us be your virtual chief information security officers.
                  Should your organization lack a CISO, we have a flexible and
                  scalable solution. This role is not always fulfilled, even
                  though it can be mission critical. It isn’t always due to lack
                  of budget either; it is actually difficult to put together a
                  team of skilled IT security professionals. GPS offers a
                  virtualized solution that not only addresses threats but also
                  adequately meets the security demands of modern organizations.
                  With our head office in Edmonton, we offer security services
                  throughout western Canada.
                </p>
                <br />
                <div className="card">
                  <div className="card-header">Quote</div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>
                        We provide a full range of security services contact us
                        for a free consultation today
                      </p>
                      <Link to={"/quote"} className="btn btn-dark">
                        Get free quote
                      </Link>
                    </blockquote>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Services;
