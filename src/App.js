import React from "react";

import Maps from "./Components/Maps";
import Meals from "./Components/Meals";
import Header from "./Components/Header";
import Schedule from "./Components/Schedule";
import Challenges from "./Components/Challenges";
import Announcements from "./Components/Announcements";
import Workshops from "./Components/Workshops";

import { BlobTop, DashBlobCircle } from "./Components/Shared/Blobs";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BlobTop
          style={{ position: "absolute", zIndex: "-1" }}
          topColor="#FF2D2D"
          bottomColor="#FFA52D"
        />
        <div className="container">
          <div className="header">
            <Header />
            <div className="header-info">
              <h5>
                <b>WIFI:</b> FIUMangoHacks
              </h5>
              <h5>
                <b>WIFI Password:</b> fiumangohax
              </h5>
            </div>
          </div>

          <div className="schedule-announcements">
            <Schedule />
            <Announcements />
          </div>
          <hr />
          <Meals />
          <hr />
          <Challenges />
          <hr />
          <Workshops />
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
