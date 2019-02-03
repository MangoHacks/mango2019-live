import React from "react";

export default class Header extends React.Component {
  state = { timer: "00:00:00" };

  componentDidMount = () => this.countdown();

  countdown = () => {
    let countDownDate = new Date("Feb 3, 2019 9:00:00").getTime();

    return setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval();
      }

      let f_days = ("0" + days).slice(-2);
      let f_hours = ("0" + hours).slice(-2);
      let f_minutes = ("0" + minutes).slice(-2);
      let f_seconds = ("0" + seconds).slice(-2);

      let timer = f_days + ":" + f_hours + ":" + f_minutes + ":" + f_seconds;
      this.setState({ timer });
    }, 1000);
  };

  render() {
    const { timer } = this.state;
    return (
      <React.Fragment>
        <h2>Hacking Ends in</h2>
        <h1 className="timer">{timer}</h1>
        <div className="header-btn-container">
          <a href="https://go.fiu.edu/mangohacks-slack" target="_blank">
            <button className="btn header-btn">Slack invite</button>
          </a>
          <a href="https://mangohacks.devpost.com/" target="_blank">
            <button className="btn header-btn">Devpost</button>
          </a>
          <a href="https://www.facebook.com/mangohacks" target="_blank">
            <button className="btn header-btn">Facebook Group</button>
          </a>
          <a href="https://hardware.mlh.io/" target="_blank">
            <button className="btn header-btn">MLH Hardware</button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
