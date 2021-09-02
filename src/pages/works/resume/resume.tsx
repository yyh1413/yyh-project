import React, {useEffect, useState} from "react";
import './resume.less'
import config from './config'
import tx from './static/tx.png'
import {Progress} from "antd";
import gwb from './static/公文包.svg'

let intal: any;
let index = 0;
let flag = '';
const Resume: React.FC = () => {
  const {info,} = config;
  const [text, setText] = useState('');
  useEffect(() => {
    intal = setInterval((text) => {

      if (text !== flag && text !== info.position && index < info.position.length) {
        const arr = info.position.split('');
        setText((text) => {
          flag = text + arr[index];
          return text + arr[index]
        })
        index = index + 1;
      } else if (flag === info.position) {
        setText(info.positionCn)
      }
    }, 200)
    return () => {
      clearInterval(intal);
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      if (text === info.positionCn) {
        setText('');
        flag = '';
        index = 0;
      }
    }, 2000)
  }, [text])
  // console.log(text)

  return (
    <div id={'resume'}>
      <div id={'home'}>
        <div className={'banner_info'}>
          <div className=" header_right">
            <h1>Hi !</h1>
            <div className={'flex_display home_top'}>
              <div className={'home_title'}>我是</div>
              <div className={'home_title_1'}>{text}</div>
            </div>
            <div className={"hr"}/>
            <HomeInfo/>
          </div>
          <div className="header_left">
            <img src={tx} alt=""/>
          </div>
        </div>
      </div>
      {/*-------------------------------我的经验---------------------------------------------------*/}
      <div id="about" style={{position: "relative"}}>
        <h1>工作参与</h1>
        <p className="underline1"/>
        <div className={'about_row'}>
          <div>
            <h2>我的教育</h2>
            <Experience data={info.experience.education}/>
          </div>

          <div>
            <h2>我的经验</h2>
            <Experience data={info.experience.work}/>
          </div>
        </div>
      </div>
      {/*-------------------------------我的经验---------------------------------------------------*/}
      {/*-------------------------------我的技能---------------------------------------------------*/}
      <div id="skill" style={{position: "relative"}}>
        <h1>我的技能</h1>
        <p className="underline1"/>
        <div className={'skill_row'}>
          <Skill data={info.skill}/>
        </div>
      </div>
      {/*-------------------------------我的技能---------------------------------------------------*/}
      {/*-------------------------------我的技能---------------------------------------------------*/}
      <div id="work" style={{position: "relative"}}>
        <h1>我的经历</h1>
        <p className="underline1"/>
        <Work data={config.info.work}/>
      </div>
      {/*-------------------------------我的技能---------------------------------------------------*/}
    </div>
  );
}

type wrkType = typeof config.info.work;
const Work: React.FC<{ data: wrkType }> = ({data}) => {
  const scrollWidth = window.innerWidth;
  console.log()
  const color = ['#44c7f4', '#eb5424', '#bb1e10', '#237f52', '#fdbd10'];
  return (
    <>
      {
        data.map((item, index) => {
          return (
            <div className={'work_row'} key={index}>
              <div className={'work_row_ex'}>
                <div className={'work_row_date'}><span>{item.date}</span></div>
                <div className={'work_row_icon'}>
                  <div className={'icon_div'} style={{backgroundColor: color[index]}}>
                    <img src={gwb} alt="" width={26}/>
                  </div>
                </div>
                <div className={'work_row_readme'}>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">{item.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        {item.readme}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

type skillType = typeof config.info.skill;
const Skill: React.FC<{ data: skillType }> = ({data}) => {
  return (
    <>
      {
        data.map((item, index) => {
          return (
            <div className={'skill_ex'} key={index}>
              <div className={'skill_ex_title'}>
                <div>{item.skill}</div>
                <div>{item.percentage + "%"}</div>
              </div>
              <div className={'skill_ex_progress'}>
                <Progress percent={item.percentage} showInfo={false} trailColor={'#e5e5e5'}
                          strokeColor={'#00A86B'} style={{height: '9px'}}/>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
type educationType = typeof config.info.experience.education;
const Experience: React.FC<{ data: educationType }> = ({data}) => {
  return (
    <>
      {
        data.map((item, index) => {
          return (
            <div className={'about_ex'} key={index}>
              <div className={'flex_display'} style={{marginBottom: "15px"}}>
                <div className={'about_img'}>
                  <img src={item.img} alt="" width={40} height={40}/>
                </div>
                <div>
                  <h3>{item.company}</h3>
                  <div className={'about_ex_date'}>{item.date}</div>
                </div>
              </div>
              <div className={'about_ex_readme'}>
                {item.readme}
              </div>
            </div>
          )
        })
      }
    </>
  )
}
const HomeInfo: React.FC = () => {
  const {info} = config;
  const openUrl = (flag: boolean, url: string) => {
    if (flag) {
      window.open(url);
    }
  }
  return (
    <div className={'home_info'}>
      {
        info.about.map((item, index) => {
          return (
            <div key={index} className={'home_info_ul'}>
              <div className={'home_label'}>{item.label}</div>
              <div className={'home_value ' + (!!item.url && 'home_value_url')}
                   onClick={() => openUrl(!!item?.url, item.value)}>{item.value}</div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Resume;
