import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOMEPAGE from "./components/HOMEPAGE";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|homepage)">
          <HOMEPAGE {...hOMEPAGEData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component1Data = {
  place: "REGISTER",
  baseball: "BASEBALL",
  soft3:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65ca7911c74820293a1ec/img/soft-3@2x.png",
};

const component4Data = {
  cricket: "CRICKET",
  soft6:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65a1bb1f985b51a114209/img/soft-6@2x.png",
  place: "REGISTER",
};

const mOUSEOFFSOFTBALLData = {
  softball: "SOFTBALL",
  soft3:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65a1bb1f985b51a114209/img/soft-3-1@2x.png",
  place: "REGISTER",
};

const hOMEPAGEData = {
  screenshot20230123At8321:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/screenshot-2023-01-23-at-8-32-1.png",
  place: "Home",
  theFacility1: "The Facility",
  memberships: "Memberships",
  battingCages: "Batting Cages",
  programsEvents: "Programs & Events",
  contactUs1: "Contact Us",
  ois: "OIS",
  eazy: "SIGN UP",
  comp11: "vid.gif",
  spanText1: "Biggest Performance Facility",
  spanText2: " ",
  spanText3: "in the BA.",
  title: "OLYMPIC INDOOR SPORTS",
  whatWeDo: "WHAT WE DO!",
  ticker1:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/ticker-1.gif",
  pexelsVladChean26943171: "./BASEBALL_HAND.jpg",
  professionalBaseballPlayers1:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65ca7911c74820293a1ec/img/professional-baseball-players-1.png",
  imageseq:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/imageseq.png",
  olympicIndoorSport: (
    <React.Fragment>
      Olympic Indoor Sports is a high-performance facility that provides
      <br />
      training in Baseball, Softball &amp; Cricket skills.
    </React.Fragment>
  ),
  beHelpStudentAthl:
    "Be help student-athletes gain confidence, get better, and..",
  haveFun: "HAVE FUN!",
  columbiaMd: "Columbia, MD",
  aboutUs: "ABOUT US",
  theFacility2: "THE FACILITY",
  contactUs2: "CONTACT US",
  specs: "SPECS",
  x25000SqFt1: "25,000 Sq ft",
  x25000SqFt2: "25,000 Sq ft",
  x25000SqFt3: "25,000 Sq ft",
  x25000SqFt4: "25,000 Sq ft",
  x25000SqFt5: "25,000 Sq ft",
  area1:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/area-1@2x.png",
  area2:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/area-1@2x.png",
  area3:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/area-1@2x.png",
  area4:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/area-1@2x.png",
  area5:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/area-1@2x.png",
  image1:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65a1bb1f985b51a114209/img/image-1.png",
  haveAQuestionAbou: (
    <React.Fragment>
      Have a question about signing up
      <br />
      for a game or renting the facility?
    </React.Fragment>
  ),
  firstNameLastName: "First Name & Last Name",
  phoneNumber: "Phone Number",
  emailAddress: "Email Address",
  messageOrQuestion: "Message or Question",
  submit: "SUBMIT",
  x2023OlympicIndoo: (
    <React.Fragment>
      <br />© 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
    </React.Fragment>
  ),
  component1Props: component1Data,
  component4Props: component4Data,
  mOUSEOFFSOFTBALLProps: mOUSEOFFSOFTBALLData,
};
