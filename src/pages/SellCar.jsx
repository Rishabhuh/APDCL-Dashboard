import React from "react";
import "../styles/sell-car.css";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BiRupee } from "react-icons/bi"; // Importing the rupee icon from react-icons
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Example data for the Radar chart (APDCL revenue data)
const data = [
  {
    subject: 'Guwahati',
    A: 810,
    fullMark: 1000,
  },
  {
    subject: 'Rangiya',
    A: 392,
    fullMark: 1000,
  },
  {
    subject: 'Mongoldoi',
    A: 492,
    fullMark: 1000,
  },
  {
    subject: 'Jagiroad',
    A: 636,
    fullMark: 1000,
  },
];

const SellCar = () => {
  const percentage = 55;
  const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">ARMS Revenue</h2>
        <div className="sell__car-top">
          {/* Replaced car image with Radar Chart */}
          <div className="sell__car-img">
            <h2>APDCL Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius="80%" width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 1000]} />
                <Radar name="APDCL Revenue" dataKey="A" stroke="#01d293" fill="#01d293" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="tracking__history">
            <h3>Revenue Statistics</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Zonal Revenue</h2>

            <div className="filter__widget-01">
              <select>
                <option value="Guwahati">Guwahati</option>
                <option value="Jagiroad">Jagiroad</option>
                <option value="Rangiya">Rangiya</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Guwahati</h3>
                <h6 className="avg__price">
                  ₹605 <span>average recharge</span>
                </h6>

                <h6 className="market__price">National average is ₹244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Smart Meters Installed</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <BiRupee /> {/* Updated to use the Rupee icon */}
                </span>
                <h6 className="spend__amount">₹1174</h6>
                <p className="spend__title">Outstanding Amount</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">₹862</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-funds-line"></i> {/* Updated to use the funds icon for Spend Per Unit Turned */}
                </span>
                <h6 className="spend__amount">₹605</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>

            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Jagiroad</h3>
                <h6 className="avg__price">
                  ₹368 <span>average price</span>
                </h6>

                <h6 className="market__price">National average is ₹244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Smart Meters Installed</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <BiRupee /> {/* Updated to use the Rupee icon */}
                </span>
                <h6 className="spend__amount">₹2558</h6>
                <p className="spend__title">Outstanding Amount</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">₹982</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-funds-line"></i> {/* Updated to use the funds icon for Spend Per Unit Turned */}
                </span>
                <h6 className="spend__amount">₹368</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
