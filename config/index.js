export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "养猪大户",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oWbBN5lbLJbD6E93xnUJWhZ98rjU",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "PnO-uiJH5uTzTqYBf-oPMhZCXnTRDwOzGuuMT2Y_MrM",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://e.xiaohongshu.com/home?sourceId=7&gt_ki=449807635834&gt_ui=39609550&gt_pi=202508642&gt_uni=7115145289&gt_ci=63534770004&gt_mt=1&gt_dt=0&gt_of=nm&gt_cpi=0&gt_kw=%E5%B0%8F%E7%BA%A2%E4%B9%A6&utm_source=baidu_sem&utm_campaign=e_xiaohongshu&bd_vid=11587720581150155848"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "养猪大户",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oWbBN5iabZl1v--MyeyWPXRU8yBw",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "PnO-uiJH5uTzTqYBf-oPMhZCXnTRDwOzGuuMT2Y_MrM",
      // 所在省份
      province: "广东",
      // 所在城市
      city: "珠海",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://e.xiaohongshu.com/home?sourceId=7&gt_ki=449807635834&gt_ui=39609550&gt_pi=202508642&gt_uni=7115145289&gt_ci=63534770004&gt_mt=1&gt_dt=0&gt_of=nm&gt_cpi=0&gt_kw=%E5%B0%8F%E7%BA%A2%E4%B9%A6&utm_source=baidu_sem&utm_campaign=e_xiaohongshu&bd_vid=11587720581150155848"
    }, 
    {
      name: "放牛小贝", 
      id: "oloJU6CWWL1ddjgp0tq3IOAlRuFA",
      useTemplateId: "PnO-uiJH5uTzTqYBf-oPMhZCXnTRDwOzGuuMT2Y_MrM",
      province: "陕西",
      city: "杨凌",
      openUrl: "https://s.weibo.com/top/summary/"
    }, 
    {
      name: "老婆2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "老婆3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "养猪大户",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oloJU6Cm5-4CqhYey4aaPz1gjrUU",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "陕西",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "咸阳",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "放牛小贝", "year": "1997", "date": "11-15"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-03-12"},
   
    
   
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "我是你最大的底气。",
      "新的一天，爱你。",
      "今天也要努力啊！",
     
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
