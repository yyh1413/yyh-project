import wkBg1 from './static/公司.svg'
import wkBg2 from './static/学校.svg'

const info = {
  position: 'Web Developer.',
  positionCn: 'Web 开发工程师.',
  name: "杨宇豪",
  email: "17645221413@163.com",
  qq: "1429753073",
  about: [
    {label: "NAME", value: '杨宇豪'},
    {label: "BIRTH", value: '97.10.20'},
    {label: "PHONE", value: '17645221413'},
    {label: "ADDRESS", value: 'DA.LIAN'},
    {label: "E-MAIL", value: '17645221413@163.com'},
    {label: "WEBSITE", value: 'yangyuhao.cn', url: true},
    {label: "gitHub", value: 'https://github.com/yyh1413', url: true},
  ],
  experience: {
    education: [{
      img: wkBg2,
      company: '东北林业大学 本',
      date: '2018.9-2021.6',
      readme: '园林专业： 景观设计 photoShop 3dMax cad ',
    },
      {
        img: wkBg2,
        company: '东北林业大学 专',
        date: '2014.9-2016.6',
        readme: '园林专业： 景观设计 photoShop 3dMax cad ',
      },
    ],
    work: [{
      img: wkBg1,
      company: '深圳鹰硕 ',
      date: '2018.1-2020.11',
      readme: '全栈开发： javaScript jquery html css java spring mysql nginx ',
    },
      {
        img: wkBg1,
        company: '文思海辉',
        date: '2020.9-2021',
        readme: 'web前端： javaScript jquery html css java spring mysql nginx ',
      },
    ]
  },
  skill: [
    {
      skill: 'React/Hooks',
      percentage: 90
    },
    {
      skill: 'HTML/CSS',
      percentage: 90
    },
    {
      skill: 'JavaScript/TypeScript',
      percentage: 90
    },
    {
      skill: 'Redux',
      percentage: 90
    },
    {
      skill: 'Es5/Es6',
      percentage: 90
    },
    {
      skill: 'AntD/Material-Ui',
      percentage: 90
    },
    {
      skill: 'ECharts',
      percentage: 80
    },
    {
      skill: 'Git/Svn/Visual SourceSafe',
      percentage: 80
    },
    {
      skill: 'Less/Sass',
      percentage: 70
    },
    {
      skill: 'Vue',
      percentage: 60
    },
    {
      skill: 'Jquery',
      percentage: 60
    },
    {
      skill: 'Jenkins/Linux命令/Nginx',
      percentage: 60
    },
    {
      skill: 'Java/SpringMVC/Mybatis',
      percentage: 50
    },
    {
      skill: 'IndexDB/MySql',
      percentage: 50
    },
  ],
  work: [
    {
      date: '2021',
      title: '消防系统次期（对日）',
      readme: '项目是给日本客户做的消防系统产品，主要的模块包含：救急事案，消防水利，对象物防火，灾害事案，几大模块，我主要负责根据设计完成前端页面制造,编写通用组件,与后端接口连携，单体测试，和客户反馈的对应。'
    },
    {
      date: '2020',
      title: '货代管理系统',
      readme: '项目是一个物流货代管理项目,主要用于物流进出口公司,主要模块分为海运进口出口管理,空运进口出口管理,报关管理,财务管理,统计管理,针对客户的业务需求做处理'
    },
    {
      date: '2019',
      title: '场站管理系统',
      readme: '针对于装箱场站的管理项目,主要用于海运装箱抽批审核,主要模块报批管理,抽批审核,集装箱位图等等,货物报关后海关进行抽批检查,合格放行, 和集装箱位图布局的设计'
    },
    {
      date: '2018',
      title: '创新融合平台',
      readme: '项目主要做的是关于教育方向的管理平台，项目具体模块分为，管理中心，开放平台，应用市场，面向的用户对象包括个人,学校,教育局'
    },
  ]
}

export default {
  info
}