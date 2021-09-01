import React from "react";
import './resume.less'
import config from './config'
import tx from './static/tx.png'

const Resume: React.FC = () => {
  const {info} = config;
  return (
    <div id={'resume'}>
      <div id={'home'}>
        <div className={'banner_info'}>
          <div className=" header_right">
            <h1>Hi !</h1>
            <h2>{info.position}</h2>
            <div className={"hr"}/>
            <HomeInfo/>
          </div>
          <div className="header_left">
            <img src={tx} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
const HomeInfo: React.FC = () => {
  const {info} = config;
  return (
    <div className={'home_info'}>
      {
        info.about.map((item, index) => {
          return (
            <div key={index} className={'home_info_ul'}>
              <div className={'home_label'}>{item.label}</div>
              <div className={'home_value'}>{item.value}</div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Resume;
