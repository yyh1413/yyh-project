import * as React from 'react'
import {Button, Form, Input} from 'antd';
import './main.less'
// import log from '../../static/log.png'
import log2 from '../../static/log2.png'
import yx from '../../static/yx.png'
import api from './config'
import $ from 'jquery'

// import {SMTPClient} from 'emailjs'

interface IProps {
}

interface IState {
}


class Main extends React.Component<IProps, IState> {

  public componentDidMount() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("top").style.opacity = 1;
    }, 200)
    window.addEventListener('scroll', this.updateNav)

    $(function () {
      //  -------------------------------鼠标移入 鼠标滚动滑轮 左右移动滚动条---------------------------------------
      const scroll_width = 100;  // 设置每次滚动的长度，单位 px
      const scroll_events = "mousewheel DOMMouseScroll MozMousePixelScroll";  // 鼠标滚轮滚动事件名
      const logbox = $('#logBox');
      const main = $('#main');
      // 鼠标移入 移出事件
      logbox.mouseover(function () {
        main.bind('mousewheel', function (event, delta) {
          return false;
        });
      });

      logbox.mouseout(function () {
        main.unbind('mousewheel');
      });
      // 鼠标滚动滑轮 左右移动滚动条
      logbox.on(scroll_events, function (e) {
        // @ts-ignore
        const delta = e.originalEvent.wheelDelta;  // 鼠标滚轮滚动度数
        // 滑轮向上滚动，滚动条向左移动，scrollleft-
        if (delta > 0) {
          // @ts-ignore
          logbox.scrollLeft(logbox.scrollLeft() - scroll_width);
          // 这里的两个html是指包含横向滚动条的那一层
        }
        // 滑轮向下滚动，滚动条向右移动，scrollleft+
        else {
          // @ts-ignore
          logbox.scrollLeft(logbox.scrollLeft() + scroll_width);
        }
      });
      //  -------------------------------鼠标移入 鼠标滚动滑轮 左右移动滚动条----------------------------------------
      //  ----------------------------------监听锚点滚动条缓慢移动-------------------------------------------------
      $(".link_a").click(function () {
        // @ts-ignore
        // eslint-disable-next-line no-restricted-globals
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          // @ts-ignore
          let $target = $(this.hash);
          // @ts-ignore
          // eslint-disable-next-line no-mixed-operators
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            // @ts-ignore
            const targetOffset = $target.offset().top;
            $('html,body').animate({scrollTop: targetOffset}, 500);
            return false;
          }
        }
      });
      //  ----------------------------------监听锚点滚动条缓慢移动-------------------------------------------------

    });


    // const client: any = new SMTPClient({
    //   user: "17645221413@163.com", // 你的QQ用户
    //   password: "WEOMXGVKACCWYODE", // 这里是上面生成的授权码，不是QQ密码
    //   host: "smtp.your-email.com", // 主机，不改
    //   ssl: true // 开启ssl
    // });
    // // 开始发送邮件
    //
    // client.send({
    //   text: "这是发送的邮件内容哦！", // 邮件内容
    //   from: "17645221413@163.com", // 你的邮箱号
    //   to: "1429753073@qq.com", // 发送给谁的
    //   subject: "你有一封新的邮件啦！" // 邮件主题
    // }, function (err: any, message: any) {
    //   console.log(err, message)
    // });
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNav)
  }

  public updateNav = () => {
    // @ts-ignore
    if (document.documentElement.scrollTop < 600) {
      // @ts-ignore
      document.getElementById("navBar").style.display = 'none'
    } else {
      // @ts-ignore
      document.getElementById("navBar").style.display = 'block'
    }
  }

  public render() {
    const {info} = api;
    const border = true;
    return (
      <div id={'main'}>
        {/*-------------------------------悬浮nav---------------------------------------------------*/}
        <div className="navBar" id={'navBar'}>
          <div className="topLogo"/>
          <div className="navBox">
            {this.tobNavComponent()}
          </div>
        </div>
        {/*-------------------------------悬浮nav---------------------------------------------------*/}
        {/*-------------------------------首页---------------------------------------------------*/}

        <div id={'top'}>
          <div id="midground" className="wall"></div>
          <div id="foreground" className="wall"></div>
          <div id="top1" className="wall"></div>
          <a href={'top'}/>
          <div id={'top_title'}>
            <div>
              <img src={log2} alt="" className={"top_log"}/>
            </div>
            <div className={"tob_nav"}>
              {this.tobNavComponent()}
            </div>
          </div>
          <div className={"middle"}>
            <div id="topTitle">
              <h1 className={'top_title_main'}>{info.title}</h1>
              <p className="underline"/>
              <h2 style={{textAlign: "center"}}>
                <span style={{color: "rgba(255,255,255,0.6)"}}>/*</span>
                {` 这里是${info.name}的个人主页`}
                <span style={{color: "rgba(255,255,255,0.6)"}}>*/</span>
              </h2>
            </div>
          </div>
          <div className="bottom">
            <a id={"scrollDownIcon"} href={'#about'} className={'link_a'}>
            </a>
          </div>
        </div>
        {/*-------------------------------首页---------------------------------------------------*/}
        {/*-------------------------------关于---------------------------------------------------*/}
        <div id="about" style={{position: "relative"}}>
          <a href={'about'}/>
          <h3>关于我</h3>
          <p className="underline1"/>
          <div className="tagBox">
            {
              info.tag.map((item, index) => (
                <span className="tag" key={index}>{item}</span>
              ))
            }
          </div>
          <div className="aboutContent">
            {
              info.aboutContent.map((item, index) => (
                <p key={index}>{item}</p>
              ))
            }
          </div>
          <div className="ball"/>
          {/*<canvas id="canvas" style={{position: "absolute", width: "100%"}}/>*/}
        </div>
        {/*-------------------------------关于---------------------------------------------------*/}
        {/*---------------------------------作品-------------------------------------------------*/}
        <div id="work">
          <a href={'work'}/>
          <h3>我的作品</h3>
          <p className="underline1"/>
          <div className="workList">
            {
              info.work.map((item, index) => (
                <span key={index} className="workLink">
                  <div className="workLinkPic">
                    <img src={item.bgImg} alt="" width={300} height={155}/>
                  </div>
                  <div className="workLinkTextBox">
                    <p className="workLinkText1">{item.workLinkText1}</p>
                    <p className="workLinkText2">{item.workLinkText2}</p>
                    <p className="workLinkText3">{item.workLinkText3}</p>
                  </div>
                </span>
              ))
            }
          </div>
        </div>
        {/*---------------------------------作品-------------------------------------------------*/}
        {/*---------------------------------日志-------------------------------------------------*/}
        <div id="log">
          <a href={'log'}/>
          <h3>小站大事记</h3>
          <p className="underline1"/>
          <p className="tip">左右滑动来查看更多</p>
          <div className="logBoxOuter">
            <div className="logMaskL"/>
            <div id="logBox">
              {
                info.log.map((item, index) => (
                  <span key={index} className="logContent">
                    <p className="logText1">{item.data}</p>
                    <p className="logText2">{item.readme}</p>
                  </span>
                ))
              }
              <span className="logContent"><p className="logText3">TO BE</p><p className="logText3">CONTINUED...</p></span>
            </div>
            <div className="logMaskR"/>
          </div>
        </div>
        {/*---------------------------------日志-------------------------------------------------*/}
        {/*---------------------------------联系-------------------------------------------------*/}
        <div id="contact">
          <a href={'contact'}/>
          <h3>发送留言</h3>
          <p className="underline1"/>
          <div className={'contact_page'}>
            <div className={'contact_page_1 contact_page_padleft'}>
              <Form
                name="basic"
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="name"
                  rules={[{required: true, message: 'Please input your name!'}]}
                >
                  <Input placeholder="Your Name" bordered={border} style={{height: "60px"}}/>
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[{required: true, message: 'Please input your email!'}]}
                >
                  <Input placeholder="Your Email" bordered={border} style={{height: "60px"}}/>
                </Form.Item>
                <Form.Item
                  name="msg"
                  rules={[{required: true, message: 'Please input your msg!'}]}
                >
                  <Input.TextArea placeholder="Massage" bordered={border} autoSize={{minRows: 6, maxRows: 10}}/>

                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    发送
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className={'contact_page_1 contact_page_padright'}>
              <h2>联系我</h2>
              <p>
                <img src={yx} alt="" style={{height: "20px", width: "20px"}}/>&nbsp;&nbsp;&nbsp;
                <span>{info.email}</span>
              </p>
              <p>{`即时客服QQ：${info.qq}`}</p>
              <p>无休，8:00AM-21:00PM。紧急事件24小时响应。</p>
              <br/>
              <h2>社交媒体</h2>
            </div>
          </div>
        </div>
        {/*---------------------------------联系-------------------------------------------------*/}

        {/*---------------------------------footer-------------------------------------------------*/}
        <div id="footer">
          <div>©Copyright 2021 | 由杨宇豪服务提供™、旗下产品。</div>
          {/*<div> </div>*/}
        </div>
        {/*---------------------------------footer-------------------------------------------------*/}
      </div>
    )
  }

  private onFinish = (values: any) => {
    console.log('Success:', values);
  };
  private tobNavComponent = () => {
    return api.tobNav.map((item, index) => {
        return (
          <a key={index} href={item.position} className={"navLink link_a"}>{item.name}</a>
        )
      }
    );
  }
}

export default Main;
