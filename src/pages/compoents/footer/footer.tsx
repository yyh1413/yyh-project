import React from "react"
import beian from '../../../static/beian.png'
import './footer.less'
const Footer: React.FC = () => {

    return (
        <div id="footer">
            <div className='footer_flex'>
                <div className='footer_flex_beian'>
                    <span className='beian'>备案号：</span>
                    <a className='beian' href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2021009135号-1</a>
                </div>
                <div  className='footer_flex_beian'>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021009135">
                        <img src={beian} />
                        辽公网安备 2021009135号</a>
                </div>
            </div>
            {/*<div> </div>*/}
        </div>
    )

}

export default Footer;
