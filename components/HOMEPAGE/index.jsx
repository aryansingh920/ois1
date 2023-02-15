import "./HOMEPAGE.css";
import Component1 from "../Component1";
import Component4 from "../Component4";
import MOUSEOFFSOFTBALL from "../MOUSEOFFSOFTBALL";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../../Sequence";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import Ticker from '../../components/ticker/ticker.js';
import Coursel from '../../components/coursel/coursel.js';
import Nav from '../../components/milind/NavbarComp.js'
import Hero from '../../components/milind/Herosection.js'

function HOMEPAGE(props) {
  const {
    screenshot20230123At8321,
    place,
    theFacility1,
    memberships,
    battingCages,
    programsEvents,
    contactUs1,
    ois,
    eazy,
    comp11,
    spanText1,
    spanText2,
    spanText3,
    title,
    whatWeDo,
    ticker1,
    pexelsVladChean26943171,
    professionalBaseballPlayers1,
    imageseq,
    olympicIndoorSport,
    beHelpStudentAthl,
    haveFun,
    columbiaMd,
    aboutUs,
    theFacility2,
    contactUs2,
    specs,
    x25000SqFt1,
    x25000SqFt2,
    x25000SqFt3,
    x25000SqFt4,
    x25000SqFt5,
    area1,
    area2,
    area3,
    area4,
    area5,
    image1,
    haveAQuestionAbou,
    firstNameLastName,
    phoneNumber,
    emailAddress,
    messageOrQuestion,
    submit,
    x2023OlympicIndoo,
    component1Props,
    component4Props,
    mOUSEOFFSOFTBALLProps,
  } = props;

  const ref = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const writeToCSV = async () => {
    const data = {
      name,
      email,
      message,
      phone,
    };
    console.log(data);
  };

  useEffect(() => {
    var image = document.querySelectorAll(".pexels-vlad-chean-2694317-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.8,
      overflow: true,
      delay: 0,
      transition: "none",
    });
    var image = document.querySelectorAll(".professional-baseball-players-1");
    new window.simpleParallax(image, {
      orientation: "down",
      scale: 1.1,
      overflow: false,
      delay: -7,
      transition: "none",
    });
  }, []);

  const ticker_data={
    whatWeDo: "WHAT WE DO!",
    ticker:
      "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/ticker-1.gif"
  };
  return (
    <div className="container-center-horizontal">
      <div className="homepage screen">
      <Nav />
      <Hero />
      <Ticker whatwedo={ticker_data.whatWeDo} ticker={ticker_data.ticker}/>

        <div className="overlap-group7">
          
          <img
            className="pexels-vlad-chean-2694317-1 "
            src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65a1bb1f985b51a114209/img/pexels-vlad-che-an-2694317-1-1.png"
            alt="pexels-vlad-chean-2694317 1"
          />
          <div className="rectangle-15"></div>
          <div className="widget-wrapper">
            <img
              className="professional-baseball-players-1"
              src={professionalBaseballPlayers1}
              alt="professional-baseball-players 1"
            />
          </div>

          {/*<img className="imageseq" src={imageseq} alt="IMAGESEQ" />*/}
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              display: "table",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              top: '0px'
            }}
          >
            <Controller>
              <Scene duration="1100%" triggerHook="onLeave" pin>
                {(progress) => (
                  <div style={{ height: "100vh", position: "relative" }}>
                    <Sequence ref={ref} progress={progress} />
                  </div>
                )}
              </Scene>
            </Controller>
          </div>
          <div className="row">
            <a className="col-md-4" href="http://35.72.8.63:36475/">
              <Component1
                place={component1Props.place}
                baseball={component1Props.baseball}
                soft3={component1Props.soft3}
              />
            </a>

            <a className="col-md-4" href="http://35.72.8.63:36475/">
              <Component4
                cricket={component4Props.cricket}
                soft6={component4Props.soft6}
                place={component4Props.place}
              />
            </a>

            <a className="col-md-4" href="http://54.250.12.173:37815/">
              <MOUSEOFFSOFTBALL
                softball={mOUSEOFFSOFTBALLProps.softball}
                soft3={mOUSEOFFSOFTBALLProps.soft3}
                place={mOUSEOFFSOFTBALLProps.place}
              />
            </a>
          </div>

          <div className="rectangle-39"></div>

          <p className="olympic-indoor-sport inter-normal-quill-gray-23px">
            {olympicIndoorSport}
          </p>
          <p className="be-help-student-athl inter-normal-quill-gray-23px">
            {beHelpStudentAthl}
          </p>
          <div className="have-fun">{haveFun}</div>
          <div className="columbia-md">{columbiaMd}</div>
          <div className="about-us">{aboutUs}</div>
          <img
            className="vector-8"
            src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-8.svg"
            alt="Vector 8"
          />
          <img
            className="iconsax-linearcup"
            src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-cup.svg"
            alt="Iconsax/Linear/cup"
          />
        </div>
        <div
          style={{
            top: "11645px",
            position: "absolute",
          }}
          className="overlap-group6"
        >
          <div className="rectangle-38"></div>
          <div className="rectangle-40"></div>
          <div className="rectangle-52"></div>
          <div className="rectangle-35"></div>
          <div className="rectangle-42"></div>
          <div className="the-facility-1 dohyeon-normal-white-37px">
            {theFacility2}
          </div>
          <div className="contact-us-1 dohyeon-normal-white-37px">
            {contactUs2}
          </div>
          <div className="rectangle-36"></div>
          <div className="rectangle-43"></div>
          <div className="rectangle-37"></div>
          <div className="rectangle-44"></div>
          <div className="specs">{specs}</div>
          <div className="x25000-sq-ft inter-medium-cloud-40px">
            {x25000SqFt1}
          </div>
          <div className="x25000-sq-ft-1 inter-medium-cloud-40px">
            {x25000SqFt2}
          </div>
          <div className="x25000-sq-ft-2 inter-medium-cloud-40px">
            {x25000SqFt3}
          </div>
          <div className="x25000-sq-ft-3 inter-medium-cloud-40px">
            {x25000SqFt4}
          </div>
          <div className="x25000-sq-ft-4 inter-medium-cloud-40px">
            {x25000SqFt5}
          </div>
          <img className="area-1" src={area1} alt="area 1" />
          <img className="area-2" src={area2} alt="area 2" />
          <img className="area-3" src={area3} alt="area 3" />
          <img className="area-4" src={area4} alt="area 4" />
          <img className="area-5" src={area5} alt="area 5" />
          <img
            className="vector-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/vector-7.svg"
            alt="Vector 7"
          />
          <img className="image-1" src={image1} alt="image 1" />
          <p className="have-a-question-abou dohyeon-normal-celeste-54px">
            {haveAQuestionAbou}
          </p>
          <div className="rectangle-45"></div>
          <div className="rectangle-49"></div>
          <div className="rectangle-50"></div>
          <div className="rectangle-48"></div>
          {/* <p className="first-name-last-name inter-light-gray-nickel-20px">
            {firstNameLastName}
          </p>
          <div className="phone-number inter-light-gray-nickel-20px">
            {phoneNumber}
          </div>
          <div className="email-address inter-light-gray-nickel-20px">
            {emailAddress}
          </div>
          <div className="message-or-question inter-light-gray-nickel-20px">
            {messageOrQuestion}
          </div> */}
          <input
            placeholder={firstNameLastName}
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{
              backgroundColor: "transparent",
              width: "32%",
              // height: "2%",
              border: "none",
              outline: "none",
              // width: "100%",
              // height: "100%",
              // fontFamily: "Inter",
              // fontSize: "20px",
              // color: "rgba(255,255,255,1",
            }}
            className="first-name-last-name inter-light-gray-nickel-20px"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            style={{
              backgroundColor: "transparent",
              width: "32%",
              // height: "2%",
              border: "none",
              outline: "none",
              // width: "100%",
              // height: "100%",
              // fontFamily: "Inter",
              // fontSize: "20px",
              // color: "rgba(255,255,255,1",
            }}
            placeholder={phoneNumber}
            className="phone-number inter-light-gray-nickel-20px"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder={emailAddress}
            style={{
              backgroundColor: "transparent",
              width: "32%",
              // height: "2%",
              border: "none",
              outline: "none",
              // width: "100%",
              // height: "100%",
              // fontFamily: "Inter",
              // fontSize: "20px",
              // color: "rgba(255,255,255,1",
            }}
            className="email-address inter-light-gray-nickel-20px"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={messageOrQuestion}
            rows={4}
            style={{
              backgroundColor: "transparent",
              width: "32%",
              // height: "2%",
              border: "none",
              outline: "none",
              // width: "100%",
              // height: "100%",
              // fontFamily: "Inter",
              // fontSize: "20px",
              // color: "rgba(255,255,255,1",
            }}
            className="message-or-question inter-light-gray-nickel-20px"
          />
          <div className="rectangle-51"></div>
          <button
            onClick={() => writeToCSV()}
            border="none"
            style={{ background: "transparent", border: "none" }}
            className="submit inter-bold-black-30px"
          >
            {submit}
          </button>
          {/* <div className="submit inter-bold-black-30px">{submit}</div> */}
          <img
            className="iconsax-linearmessagequestion"
            src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-messagequestion.svg"
            alt="Iconsax/Linear/messagequestion"
          />
        </div>
        <div className="overlap-group8">
          <p className="x2023-olympic-indoo chakrapetch-normal-white-15px">
            {x2023OlympicIndoo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HOMEPAGE;
