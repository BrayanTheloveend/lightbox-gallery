import React from "react";
import "../../styles/style.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <Navbar/>

        <div className="overlap-5">
          <div className="slide-dashboard">
            <div className="text-wrapper-8">Dashboard</div>
            <div className="text-wrapper-9">Wellcome back, Brayan</div>
            <div className="expenvise-chart">
              <div className="overlap-6">
                <div className="text-wrapper-10">Ventes</div>
                <div className="text-wrapper-11">28</div>
                
                <img className="sales" alt="Sales" src="../static/img/sales.svg" />
              </div>
            </div>
            <div className="revenue-chart">
              <div className="overlap-6">
                <div className="text-wrapper-23">commision</div>
                <div className="text-wrapper-24">10500 XAF</div>
                <img className="downward-trend" alt="Downward trend" src="../static/img/downward-trend.svg" />
                <div className="second-chart">
                  <div className="bar">
                    <div className="rectangle-2" />
                  </div>
                  <div className="rectangle-wrapper">
                    <div className="rectangle-3" />
                  </div>
                  <div className="bar-2">
                    <div className="rectangle-4" />
                  </div>
                  <div className="bar-3">
                    <div className="rectangle-5" />
                  </div>
                  <div className="bar-4">
                    <div className="rectangle-3" />
                  </div>
                  <div className="bar-5">
                    <div className="rectangle-6" />
                  </div>
                  <div className="bar-6">
                    <div className="rectangle-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="benefit-chart">
              <div className="overlap-6">
                <div className="text-wrapper-10">Revenue</div>
                <div className="text-wrapper-11">150000.90 XAF</div>
                <img className="upward-trend" alt="Upward trend" src="../static/img/upward-trend.svg" />
                <div className="first-chart">
                  <div className="bar">
                    <div className="rectangle-7" />
                  </div>
                  <div className="rectangle-wrapper">
                    <div className="rectangle-8" />
                  </div>
                  <div className="bar-2">
                    <div className="rectangle-9" />
                  </div>
                  <div className="bar-3">
                    <div className="rectangle-10" />
                  </div>
                  <div className="bar-4">
                    <div className="rectangle-8" />
                  </div>
                  <div className="bar-5">
                    <div className="rectangle-11" />
                  </div>
                  <div className="bar-6">
                    <div className="rectangle-12" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-25">Transactions recentes</div>
            <div className="recent-deals">
              <div className="overlap-7">
                <div className="rectangle-13" />
                <div className="title">
                  <div className="text-wrapper-26">Nom/Courriel</div>
                  <div className="text-wrapper-27">Achats</div>
                  <div className="text-wrapper-28">Unité</div>
                  <div className="text-wrapper-29">Prix Unitaire (XAF)</div>
                  <div className="total-xaf">Total&nbsp;&nbsp;(XAF)</div>
                  <div className="text-wrapper-30">Date</div>
                </div>
                <div className="group">
                  <img className="ellipse-3" alt="Ellipse" src="../s tatic/img/ellipse-1.png" />
                  <div className="name-mail">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-31">Jhon marcel</div>
                      <div className="text-wrapper-32">tanya.hill@example.com</div>
                    </div>
                  </div>
                  <div className="text-wrapper-33">Iphone 14 Pro</div>
                  <div className="text-wrapper-34">1</div>
                  <div className="text-wrapper-35">980 500</div>
                  <div className="text-wrapper-36">980 500</div>
                  <div className="text-wrapper-37">12-08-2022</div>
                </div>
                <div className="group-2">
                  <img className="ellipse-3" alt="Ellipse" src="../static/img/ellipse-2.png" />
                  <div className="name-mail">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-31">Leslie Alexander</div>
                      <div className="text-wrapper-32">debra.holt@example.com</div>
                    </div>
                  </div>
                  <div className="text-wrapper-33">Iphone 14 Pro</div>
                  <div className="text-wrapper-34">1</div>
                  <div className="text-wrapper-35">980 500</div>
                  <div className="text-wrapper-36">980 500</div>
                  <div className="text-wrapper-37">12-08-2022</div>
                </div>
                <div className="group-3">
                  <img className="ellipse-3" alt="Ellipse" src="../static/img/ellipse-3.png" />
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-31">Wade Warren</div>
                      <div className="text-wrapper-32">nevaeh.simmons@example.com</div>
                    </div>
                  </div>
                  <div className="text-wrapper-33">Iphone 14 Pro</div>
                  <div className="text-wrapper-34">1</div>
                  <div className="text-wrapper-35">980 500</div>
                  <div className="text-wrapper-36">980 500</div>
                  <div className="text-wrapper-37">12-08-2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nbcharts-linechats">
            <div className="overlap-8">
              <div className="left-text">
                <div className="text-wrapper-38">0</div>
                <div className="text-wrapper-39">25</div>
                <div className="text-wrapper-40">50</div>
                <div className="text-wrapper-41">75</div>
                <div className="text-wrapper-42">100</div>
              </div>
              <div className="bottom-text">
                <div className="text-wrapper-43">M</div>
                <div className="text-wrapper-44">T</div>
                <div className="text-wrapper-45">W</div>
                <div className="text-wrapper-46">T</div>
                <div className="text-wrapper-47">F</div>
                <div className="text-wrapper-48">S</div>
                <div className="text-wrapper-49">S</div>
              </div>
              <img className="line-area" alt="Line area" src="../static/img/line-area.png" />
              <div className="points">
                <div className="point" />
                <div className="point-2" />
                <div className="point-3" />
                <div className="point-4" />
                <div className="point-5" />
                <div className="point-6" />
                <div className="point-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
