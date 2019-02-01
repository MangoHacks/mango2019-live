import React from "react";
import openSocket from "socket.io-client";

import config from "../services/config";
import announcements from "../services/announcements";

const socket = openSocket(config.API_URL);

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { announcements: [] };

    socket.on("announcement", data => {
      let { announcements } = this.state;

      announcements.unshift(data);

      this.setState({ announcements });
    });
  }

  async componentDidMount() {
    const data = await announcements.read();

    this.setState({ announcements: data });
  }

  read = async () => {
    const data = await announcements.read();

    this.setState({ announcements: data });
  };

  render() {
    const { announcements } = this.state;

    return (
      <div
        className="announcements"
        style={{
          height: "fit-content",
          maxHeight: "300px"
        }}
      >
        <h2>
          <b>Announcements</b>
        </h2>
        <ul className="schedule-list" style={{ padding: 0 }}>
          {announcements.length > 0 ? (
            announcements.map(announcement => (
              <li>
                <span style={{ fontSize: "20px" }}>
                  <span>
                    <b style={{ color: "#FF4A36" }}>{announcement.time}</b>
                  </span>
                  &nbsp;
                  <span>{announcement.message}</span>
                </span>
              </li>
            ))
          ) : (
            <p>No current announcements.</p>
          )}
        </ul>
      </div>
    );
  }
}
