import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const { theme } = this.props;

    return (
      <div className="main" id="opensource-charts">
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions
            </h1>
          </Fade>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart theme={theme} />
          <IssueChart theme={theme} />
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
