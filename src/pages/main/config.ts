import wkBg1 from '../../static/ksh.jpg'
import wkBg2 from '../../static/sclog.jpg'
import wkBg3 from '../../static/dsp.jpg'

const tobNav = [
  {name: "首页", position: "#top"},
  {name: "关于", position: "#about"},
  {name: "作品", position: "#work"},
  {name: "日志", position: "#log"},
  {name: "联系", position: "#contact"},
]
const info = {
  name: "杨宇豪",
  email: "17645221413@163.com",
  qq: "1429753073",
  title: "一朝风月",
  tag: ['95后', 'I T', '前 端', '理科生'],
  aboutContent: [
    '我是杨宇豪 .',
    '一名摄影爱好者、白日梦想家',
    '某知名视频站的不知名up主',
    '强迫症、拖延症、懒癌晚期',
    '热衷钻研与计算机有关的一切：',
    '编程、UI设计、Photoshop、3D建模...',
    '白日梦想：',
    '带着相机和好心情 与喜欢的人环游世界',
    '请多指教！',
  ],
  work: [
    {
      link: '#',
      bgImg: wkBg1,
      workLinkText1: '杨宇豪 | 可视化数据大屏',
      workLinkText2: '数据可视化平台、图形组件、视频组件',
      workLinkText3: 'Web端',
    },
    {
      link: '#',
      bgImg: wkBg2,
      workLinkText1: '随缘创意Log',
      workLinkText2: '现在生成Log 在线,多种设计风格',
      workLinkText3: 'web平台 线上应用',
    },
    {
      link: '#',
      bgImg: wkBg3,
      workLinkText1: 'Featured Video',
      workLinkText2: '灵感短视频',
      workLinkText3: '实现ios,Android,小程序混合应用',
    },
  ],
  log: [
    {data: '2021.8.12', readme: '注册域名yangyuhao.cn'},
    {data: '2021.8.20', readme: '域名完成ICP备案'},
    {data: '2021.8.20', readme: '网站Beta版原创界面上线'},
    {data: '2021.8.24', readme: '网站1.0版原创界面上线'},
    {data: '2021.8.24', readme: '网站加入响应式界面框架'},
  ]
}

export default {
  tobNav,
  info
}