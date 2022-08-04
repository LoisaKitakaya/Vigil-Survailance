import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import PageTitle from "../components/PageTitle";
import QuoteForm from "../components/QuoteForm";

const Services = () => {
  PageTitle("Vigil | Services");
  return (
    <div className="App-sub-container">
      <div className="this-container">
        <br />
        <h1 className="text-center">Services</h1>
        <h4 className="text-center">Check out all the services we offer</h4>
        <br />
        <div className="card">
          <Tabs defaultActiveKey="consultancy" className="mb-3 card-header">
            <Tab
              eventKey="consultancy"
              title="Surveillance consultancy"
              className="card-body"
            >
              <h3>Cameras, Access Control {"&"} Electronic Security</h3>
              <br />
              <p>
                24/7 monitoring and access control security ensures that only
                those who are authorized can enter your premises. A basic access
                control system includes a computerized controller, tracking app
                and an electronic lock. This is one of the most important steps
                any organization has to take to create a secure working space
                and protect information. Select the most appropriate access
                control security for your business using the following tips.
              </p>
              <br />
              <h3>Size of Organization</h3>
              <p>
                The size of the organization or business matters the most in
                determining the level of access control security. There will be
                a huge difference in the access control system required for a
                large enterprise as compared to that of a retail store. An open
                site that allows entry to a number of people throughout the day
                will need to have mobile surveillance trailers so that a
                watchful eye can be kept on every intruder. Whereas an office
                that has employees entering in the morning and leaving in the
                evening can be checked by the security guard alone.
              </p>
              <br />
              <h3>Access Control Cards {"&"} 24/7 Surveillance</h3>
              <br />
              <p>
                Access control cards are a good way to ensure that only the
                people who are needed inside the buildings gain access to it.
                They restrict outside visitors from passing through and ensure
                the safety of the premise. Protect your home and business, while
                providing hassle-free access to your loved ones, assets,
                {"&"} employees with an efficient access control security
                system. GPS Security provides an end to end service for
                designing, installing and maintaining access control security
                systems. Our professionals have extensive experience working
                with small businesses as well as large enterprises. Get in touch
                with us today to learn more about the services we offer.
              </p>
              <br />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Get free quote</Accordion.Header>
                  <Accordion.Body>
                    <QuoteForm service={"Surveillance consultancy"} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
            <Tab
              eventKey="equipment"
              title="Surveillance equipment"
              className="card-body"
            >
              <h3>Surveillance Equipment</h3>
              <br />
              <p>
                GPS Security Group offers cyber security and IT security
                solutions for companies in Western Canada. GPS is one of
                Canada’s premier providers of cyber security services.
                <br />
                <br />
                We are dedicated to assisting organizations in protecting their
                data and technology infrastructure while also mitigating risk.
                We take a proactive approach in monitoring client network
                environment(s) and providing regulatory compliance. We have
                partnerships with some of the most trusted companies and
                institutions in the security sector. Additionally, we also
                consult with provincial and federal government bodies to ensure
                our services meet the latest cyber security standards.
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
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Get free quote</Accordion.Header>
                  <Accordion.Body>
                    <QuoteForm service={"Purchase surveillance equipment"} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
            <Tab
              eventKey="installation"
              title="Surveillance installation"
              className="card-body"
            >
              <h3>Surveillance Equipment</h3>
              <br />
              <p>
                GPS Security Group offers cyber security and IT security
                solutions for companies in Western Canada. GPS is one of
                Canada’s premier providers of cyber security services.
                <br />
                <br />
                We are dedicated to assisting organizations in protecting their
                data and technology infrastructure while also mitigating risk.
                We take a proactive approach in monitoring client network
                environment(s) and providing regulatory compliance. We have
                partnerships with some of the most trusted companies and
                institutions in the security sector. Additionally, we also
                consult with provincial and federal government bodies to ensure
                our services meet the latest cyber security standards.
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
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Get free quote</Accordion.Header>
                  <Accordion.Body>
                    <QuoteForm service={"Install surveillance equipment"} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
          </Tabs>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Services;
