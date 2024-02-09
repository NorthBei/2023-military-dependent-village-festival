import { WorkshopProps } from '@/components/Workshop';
import { ActiveItem, WorkshopType } from '@/types';

export const LINE_OA_LINK = 'https://lin.ee/ZGtUdlQ';

export const INTERNAL_EVENTS = [
  {
    name: '轉生歌舞大廳',
    link: null,
    description:
      '新手村的遊戲大廳，在這裡有一位「時空運將」會為你點播不同年代的歌曲，有幾位神秘角色，會跟你分享關於村子的秘密。還有一些角落，可能會出現麻將桌、紅色計程車、巨大遊戲機台，在這裡什麼都不奇怪。',
    image: '/村內療癒世界/轉生歌舞大廳 .jpg',
    type: ActiveItem.RebornLobby
  },
  {
    name: '老同學電影館',
    link: 'https://www.facebook.com/art.supply.station',
    description:
      '舊時代的三重大大小小電影院林立，在「天台」後巷也曾有多間電影海報畫室。跟著眷村文史工作者「眷補。集」，帶我們來到老同學電影館，館內有著手繪電影海報畫師李國明一幅又一幅精彩的作品，帶我們一探那個年代的電影風采。',
    image: '/村內療癒世界/老同學電影館.jpg',
    type: ActiveItem.Cinema
  },
  {
    name: '白鹿亂撞租書店',
    link: 'https://www.facebook.com/search/top?q=%E5%B8%AB%E5%A4%A7%E7%99%BD%E9%B9%BF%E6%B4%9Emoose',
    description:
      '師大白鹿洞這次來到了新手村，化身為一間神奇的租書店，陪同玩家去了解20世紀末的租書店發展，在那個沒有智慧型手機的年代，人們都在閱讀什麼呢？',
    image: '/村內療癒世界/白鹿亂撞租書店.jpeg',
    type: ActiveItem.BookRentalStore
  },
  {
    name: '我家裁縫店',
    link: 'https://www.facebook.com/TAILORSPACE/about',
    description:
      '民國60年代，每家客廳堆滿各式的材料，客廳即工廠。「縷舍」是縫紉機維修的老店家，現在傳承到第二代，這次進駐新手村將帶你回到家家戶戶都有台縫紉機、人人都會做手工的年代。',
    image: '/村內療癒世界/我家裁縫店.JPG',
    type: ActiveItem.TailorShop
  },
  {
    name: '大樹下故事區',
    link: 'https://www.facebook.com/ridgebooks',
    description:
      '大樹下，孩子們東奔西跑、長輩們閒話家常，這是眷村最平常也最珍貴的景象。在新手村的樹下，來了一台「山峸二手書店」的腳踏車書車，一個愛書人將會和你分享眷村書籍。這裡也會不定時有特別嘉賓出現說故事！',
    image: '/村內療癒世界/大樹下故事區.jpeg',
    type: ActiveItem.StoryTelling
  }
];

export const EXTERNAL_EVENTS = [
  {
    name: '週四待在家',
    tag: '三重',
    link: 'https://www.facebook.com/profile.php?id=100057432430023',
    image: '/村外冒險世界/週四待在家.jpg'
  },
  {
    name: '選品室',
    tag: '三重',
    link: 'https://www.facebook.com/profile.php?id=100072069016050',
    image: '/村外冒險世界/選品店.jpg'
  },
  {
    name: '暗坑x廣興x烏來',
    tag: '新店',
    link: 'https://www.facebook.com/AmKhenn/',
    image: '/村外冒險世界/暗坑文化工作室.jpeg'
  },
  {
    name: '我很醜可是我很Natural',
    tag: '樹林',
    link: 'https://www.facebook.com/uglybuthealthy',
    image: '/村外冒險世界/我很醜但是我很natural.jpeg'
  },
  {
    name: '阿員姐竹編故事',
    tag: '泰山',
    link: 'https://www.facebook.com/groups/239057391572778?locale=zh_TW',
    image: '/村外冒險世界/阿員姐竹編故事.jpeg'
  },
  {
    name: '嘻哈平溪X三耕早',
    tag: '平溪',
    link: 'https://www.facebook.com/profile.php?id=100057119335169',
    image: '/村外冒險世界/嘻哈平溪 x 三耕早.jpg'
  },
  {
    name: '學校旁的大市場',
    tag: '三重',
    link: 'https://www.facebook.com/sepnine',
    image: '/村外冒險世界/學校旁的大市場.jpg'
  },
  {
    name: '新莊故事遊藝隊X新莊社大',
    tag: '新莊',
    link: 'https://www.facebook.com/roaminginstory/?locale=zh_TW',
    image: '/村外冒險世界/新莊故事遊藝隊.jpg'
  },
  {
    name: '礦男的媳婦',
    tag: '平溪',
    link: 'https://www.facebook.com/jingtong.community',
    image: '/村外冒險世界/礦男的媳婦.jpg'
  },
  {
    name: '田間文創',
    tag: '汐止',
    link: 'https://www.facebook.com/profile.php?id=100079189023251',
    image: '/村外冒險世界/田間文創.jpeg'
  },
  {
    name: 'Stand By YOU / 憂',
    tag: '板橋',
    link: 'https://www.instagram.com/tw.standbyyou/',
    image: '/村外冒險世界/Stand By YOU _ 憂.jpg'
  },
  {
    name: '泰山娃娃—尚琪工坊',
    tag: '泰山',
    link: 'https://event.cts.com.tw/2018newtaipeicityshokunin/item3.php?m=18&fbclid=IwAR3BJAyPglroRAxvTpTg3jN6In0q16tLAQkm_elEmLMjIIBaoyfiT-yFb4A_aem_AXmISqLhIUeGeVOGXwv_iGrvg6n8nsv5v46bUYJCQI1luotAt1xLQRIBCTlFKgDkpe0&mibextid=r5uJeJ',
    image: '/村外冒險世界/泰山娃娃產業文化館.jpg'
  },
  {
    name: '永和友善動物店家地圖',
    tag: '永和',
    link: 'https://www.facebook.com/northernlinartist',
    image: '/村外冒險世界/永和友善動物店家地圖.jpeg'
  },
  {
    name: '銀髮導演實驗室',
    tag: '土城',
    link: 'https://www.facebook.com/65plus.lab',
    image: '/村外冒險世界/銀髮導演.jpeg'
  },
  {
    name: '大學哈佛物語',
    tag: '樹林',
    link: null,
    image: '/村外冒險世界/大學哈佛物語.jpg'
  },
  {
    name: '三重社區大學',
    tag: '三重',
    link: 'https://www.facebook.com/sanchong.twl',
    image: '/村外冒險世界/三重社區大學.jpg'
  }
];

export const LIVE_EVENTS: WorkshopProps[] = [
  {
    type: WorkshopType.Healing,
    name: '裁縫機體驗',
    image: '/現場體驗活動/裁縫機體驗.JPG',
    team: '縷舍',
    locationName: '我家裁縫店',
    locationLink: 'https://goo.gl/maps/8LAiLKue23dzayt19',
    date: '9/29-30',
    time: '15:00-18:00',
    fee: 'NT$ 100',
    register: '現場登記',
    link: null,
    description: '利用1970年代腳踩式縫紉機，體驗到當時的縫紉機使用方法，只要車縫一條直線，完成的人就可以得到小束口袋！'
  },
  {
    type: WorkshopType.Adventure,
    name: '竹編體驗',
    image: '/現場體驗活動/竹編體驗.JPG',
    team: '阿員姐',
    locationName: '冒險區-泰山',
    locationLink: 'https://goo.gl/maps/XCxVMtQgQ1esALB1A',
    date: '9/29-30',
    time: '15:00-19:00 ',
    fee: 'NT$ 50-150',
    register: '現場登記',
    link: null,
    description: '你知道竹子也可以編織嗎？竹哨、竹風車、竹花籃、小燈籠，跟著老師的手勢，編織出你的竹編作品。'
  },
  {
    type: WorkshopType.Adventure,
    name: '遇眷你拼拼版畫',
    image: '/現場體驗活動/遇眷你拼拼版畫.jpg',
    team: '週四待在家',
    locationName: '週四待在家',
    locationLink: 'https://goo.gl/maps/3yvhwgNi3HvtBuWF6',
    date: '9/29',
    time: '15:00-18:00',
    fee: 'NT$ 500',
    register: '點擊圖片報名',
    link: 'https://www.facebook.com/profile.php?id=100057432430023',
    description: '接近故事豐富的中秋節，節日記憶發揮在積木與紙張上，一起來度過特別又趣味的美好假期。（私訊粉專報名）'
  },
  {
    type: WorkshopType.Adventure,
    name: '轉生成美寧姑娘',
    image: '/現場體驗活動/轉生成美寧姑娘.jpg',
    team: '尚琪工坊',
    locationName: '冒險區-泰山',
    locationLink: 'https://goo.gl/maps/3z53GXKEkjjReSTg6',
    date: '9/29-30',
    time: '15:00',
    fee: 'NT$ 350',
    register: '點擊圖片報名',
    link: 'https://www.facebook.com/TaiShanWaWa?mibextid=LQQJ4d',
    description: '你有過芭比娃娃嗎？他是什麼樣子？邀請你一起轉生成美寧姑娘，妝扮自己的美寧娃娃！ '
  },
  {
    type: WorkshopType.Adventure,
    name: '戀鍊草珠子',
    image: '/現場體驗活動/戀鍊草珠子.jpeg',
    team: '邱昌宏',
    locationName: '冒險區-樹林',
    locationLink: 'https://goo.gl/maps/ePurE3JDvy3SrFC17',
    date: '9/30',
    time: '16:00-19:00',
    fee: 'NT$ 100',
    register: '現場登記',
    link: null,
    description: "薏苡，英文Job's Tears 約伯的眼淚象徵莫忘初衷。中秋月圓，親手製作薏苡手鍊送給你最關心的人。"
  },
  {
    type: WorkshopType.Adventure,
    name: '記憶復刻：拼貼創作',
    image: '/現場體驗活動/記憶復刻：拼貼創作.jpg',
    team: '新莊街仔聲',
    locationName: '冒險區-新莊',
    locationLink: 'https://goo.gl/maps/XCxVMtQgQ1esALB1A',
    date: '9/30',
    time: '15:30',
    fee: 'NT$ 250',
    register: '點擊圖片報名',
    link: 'https://www.accupass.com/event/2309070437399511159110',
    description: '望向窗外輪轉的風景，交織出人們在城市的移動軌跡，拾起剪刀和畫筆，一起復刻埋藏心底的動人時光。'
  },
  {
    type: WorkshopType.Adventure,
    name: '孩子們的市場桌遊',
    image: '/現場體驗活動/孩子們的市場桌遊.jpg',
    team: '學校旁的大市場',
    locationName: '冒險區-三重',
    locationLink: 'https://goo.gl/maps/XCxVMtQgQ1esALB1A',
    date: '9/29-30',
    time: '16:00-20:00',
    fee: 'NT$ 0',
    register: '現場登記',
    link: null,
    description:
      '來玩孩子和大人一起設計的市場桌遊！多認識市場一點，就會對吃更有想法，就能發現那些隱藏在食物背後的新滋味。'
  },
  {
    type: WorkshopType.Adventure,
    name: '桐花螞蟻野菜插畫',
    image: '/現場體驗活動/桐花螞蟻野菜插畫.jpg',
    team: '銀髮導演實驗室',
    locationName: '冒險區-土城',
    locationLink: 'https://goo.gl/maps/LdojzZkSqtbontGu7',
    date: '9/29-30',
    time: '15:30、16:30',
    fee: 'NT$ 50-100',
    register: '現場登記',
    link: null,
    description: '桐花螞蟻手工藝品、清化里野菜彩繪。讓小金螞為你帶路，踏上土城桐花探險之旅，結交山林野菜朋友。'
  },
  {
    type: WorkshopType.Adventure,
    name: 'DIY手作種子項鍊',
    image: '/現場體驗活動/DIY手作種子項鍊.jpg',
    team: '田間文創工作室',
    locationName: '冒險區-汐止',
    locationLink: 'https://goo.gl/maps/LdojzZkSqtbontGu7',
    date: '9/29-30',
    time: '15:00-18:00',
    fee: 'NT$ 150',
    register: '現場登記',
    link: null,
    description: '取材汐止流域的無患子、沙盒子等植物的種子，加工切割，挑選自己喜愛的切片和飾品，搭配出自己的項鍊。'
  },
  {
    type: WorkshopType.Adventure,
    name: '綠生活療癒手作',
    image: '/現場體驗活動/綠生活療癒手作.jpeg',
    team: '愛與關懷社區',
    locationName: '冒險區-樹林',
    locationLink: 'https://goo.gl/maps/ePurE3JDvy3SrFC17',
    date: '9/29-30',
    time: '15:00-20:30',
    fee: 'NT$ 150-550',
    register: '現場登記',
    link: null,
    description: '隱身在都市叢林的綠生活專家們將引領你進入香氣瀰漫的世界。兩天手作內容不同，詳情請洽攤位。'
  }
];

export const OTHER_EVENTS = [
  {
    name: ['走讀：一日眷村約會', '（月光場）'],
    date: '10/7、10/14 (六)',
    time: '15:00-21:00 ',
    // buttonText: '立即報名',
    buttonText: '報名額滿',
    isButtonDisable: true,
    buttonLink: 'https://www.accupass.com/event/2309020951297895219160',
    image: '/其他系列活動/三重小旅行.png'
  },
  {
    name: ['走讀：一日眷村約會', '（日光場）'],
    date: '10/8、10/22 (日)',
    time: '10:00-16:00',
    // buttonText: '立即報名',
    buttonText: '報名額滿',
    isButtonDisable: true,
    buttonLink: 'https://www.accupass.com/event/2309020951297895219160',
    image: '/其他系列活動/三重小旅行.png'
  },
  {
    name: ['走讀：一日眷村約會', '（平日場）'],
    date: '10/18 (三)',
    time: '13:00-19:00',
    // buttonText: '立即報名',
    buttonText: '報名額滿',
    isButtonDisable: true,
    buttonLink: 'https://www.accupass.com/event/2309020951297895219160',
    image: '/其他系列活動/三重小旅行.png'
  },
  {
    name: ['開村大喜：一村重新開張'],
    date: '9/23、9/24',
    time: '依一村粉專公告',
    buttonText: '了解更多',
    isButtonDisable: false,
    buttonLink: 'https://www.facebook.com/militaryavillage/?locale=zh_TW',
    image: '/其他系列活動/開村大喜：一村重新開張.jpg'
  },
  {
    name: ['日本藝術家大石曉規特展'],
    date: '9/23 (六) 起',
    time: '10:00-18:00',
    buttonText: '了解更多',
    isButtonDisable: false,
    buttonLink: 'https://mediasphere.com.tw/exhibitions/12',
    image: '/其他系列活動/大石曉規.jpeg'
  },
  {
    name: ['好日開幕市集'],
    date: '9/23、9/24',
    time: '13:00-18:00',
    buttonText: '了解更多',
    isButtonDisable: false,
    buttonLink: 'https://www.facebook.com/militaryavillage/?locale=zh_TW',
    image: '/其他系列活動/假日市集.jpeg'
  },
  {
    name: ['2023基北北桃眷村文化節聯合推廣活動'],
    date: '9/28-10/31',
    time: '依基隆市文化局粉專公告',
    buttonText: '了解更多',
    isButtonDisable: false,
    buttonLink: 'https://www.facebook.com/KLCCABTW/?locale=zh_TW',
    image: '/其他系列活動/基北北桃眷村文化節聯合.png'
  }
];
