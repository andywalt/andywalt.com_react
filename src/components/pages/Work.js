import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './work.css';

export default class Work extends Component {

  // Make Webpage go to top.
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="work">
        <div className="work_content">
          <h3 className="work_title">Work</h3>
          <div className="work_history">
            <div className="roles">
              <h5>Role</h5>
              <img src="../../images/icons/work_icon.png" alt="desk-icon" height="75" />
              <ul className="role_list">
                <li>Customer Marketing</li>
                <li>Operations &amp; Sales</li>
                <li>Barista</li>
                <li>Sports Marketing</li>
                <li>Sponsors &amp; Events</li>
                <li>Creative Director</li>
                <li>Operations Director</li>
                <li>Front Desk Agent</li>
                <li>Student Engagement</li>
                <li>Team Member</li>
                <li>Red Zone Specialist</li>
                <li>Stylist</li>
                <li>Cadet</li>
              </ul>
            </div>
            <div className="organizations">
              <h5>Organization</h5>
              <img src="images/icons/cog_icon.png" alt="wheel-cog-icon" height="75" />
              <ul className="org_list">
                <li>Salesforce</li>
                <li>Tailors' Keep</li>
                <li>Blue Bottle Inc</li>
                <li>Oracle</li>
                <li>Gateway Church</li>
                <li>MAP1040</li>
                <li>Core Credit Enhancement</li>
                <li>Renaissance Hotel</li>
                <li>Church of the Highlands</li>
                <li>Chick-fil-a</li>
                <li>Apple Inc</li>
                <li>Lucky Brand Jeans</li>
                <li>Air Force Academy</li>
              </ul>
            </div>
            <div className="non_profit_role">
              <h5>Non Profit Role</h5>
              <img src="images/icons/hand_icon.png" alt="hand-icon" height="75" />
              <ul className="nonprofit_list_role">
                <li>Small Groups Director </li>
                <li>Creative Director</li>
                <li>Founder of Basketball Outreach</li>
                <li>Executive Event Support</li>
              </ul>
            </div>
            <div className="non_profit_org">
              <h5>Non Profit Org</h5>
              <img src="images/icons/org_icon.png" alt="org-icon" height="75" />
              <ul className="nonprofit_list_org">
                <li>Sozo Church</li>
                <li>MAP1040</li>
                <li>Baller's Club</li>
                <li>Association of Related Churches</li>
              </ul>
            </div>

          </div>
        </div>
        
        <Link to="/">
          <button className="home_button">AW</button> 
        </Link>
      

      </div>
    );
  }
}