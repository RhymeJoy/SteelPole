// 範例菜單資料
const menuItems = [
  {
    name: "鋼管雞",
    href: "#",
    onclick: "return false;",
    price: "700元",
    description: "皮脆、肉嫩、多汁香甜——林俊逸鋼管雞以鋼管慢烤方式烹調，每一隻都是十足份量、香氣四溢的招牌美味，讓你一口接一口停不下來！",
    img: "assets/img/menu/a la carte/roasted-chicken.png",
    alt: "鋼管雞",
    filter: "filter-dish"
  },
  {
    name: "翅杏仔骨",
    href: "#",
    onclick: "return false;",
    price: "100元",
    description: "翅杏仔骨是一種屏東在地鄉下野菜，富有天然清香與微微甘甜。簡單清炒，口感頗嫩，每一口都能品味自然的鮮脆口感，清爽又健康。",
    img: "assets/img/menu/a la carte/Chia-Xing.jpg",
    alt: "翅杏仔骨",
    filter: "filter-dish"
  },
  {
    name: "腱炒番茄",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "精選雞腱肉質彈嫩，與番茄一同快炒，保留酸甜鮮味。每一口都是雞腱的嚼勁與番茄的多汁香氣完美融合，清爽又開胃。",
    img: "assets/img/menu/a la carte/chicken-tendon-tomato.jpg",
    alt: "腱炒番茄",
    filter: "filter-dish"
  },
  {
    name: "和風脆豆腐",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "精選嫩豆腐，日式風味十足——香氣撲鼻，再淋上特製和風醬汁，每一口都是入口即化的完美口感，清爽又開胃。",
    img: "assets/img/menu/a la carte/crispy-tofu.png",
    alt: "和風脆豆腐",
    filter: "filter-dish"
  },
  {
    name: "蒸魚",
    href: "#",
    onclick: "return false;",
    price: "時價",
    description: "精選新鮮魚隻，搭配醬油與蔥段清蒸，完美保留魚肉鮮味與滑嫩口感。每一口都能感受到鮮美的自然風味，清爽又健康。(龍虎班目前一份500元)",
    img: "assets/img/menu/a la carte/Steamed-fish.png",
    alt: "蒸魚",
    filter: "filter-dish"
  },
  {
    name: "東坡肉",
    href: "#",
    onclick: "return false;",
    price: "460元",
    description: "選用優質五花肉，經慢火紅燒至軟嫩入味，色澤紅亮，肥而不膩，入口即化，醬香濃郁，每一口都是傳統經典的味道。",
    img: "assets/img/menu/a la carte/Dongpo-Pork.png",
    alt: "東坡肉",
    filter: "filter-dish"
  },
  {
    name: "蟹肉沙拉",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "新鮮蟹肉棒切片，與爽脆蔬菜拌勻，搭配特製沙拉醬，口感清爽，酸甜開胃，是輕食與開胃小菜的理想選擇。",
    img: "assets/img/menu/a la carte/Imitation-Crab-Salad.jpg",
    alt: "蟹肉沙拉",
    filter: "filter-dish"
  },
  {
    name: "山藥雙拼",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "精選新鮮山藥，外酥內軟油炸至金黃，再搭配甜而不膩的麻糬冰捲，每一口都是香酥、軟糯與冰涼的完美結合，讓甜點時光更愉快。",
    img: "assets/img/menu/a la carte/Yam-Duo-Platter.jpg",
    alt: "山藥雙拼",
    filter: "filter-dish"
  },
  {
    name: "薑絲大腸",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "精選新鮮大腸，去腥處理後與薑絲一同快炒，保留彈牙口感，香氣濃郁，每一口都是下飯的經典味道。",
    img: "assets/img/menu/a la carte/pork-intestines-with-ginger.png",
    alt: "薑絲大腸",
    filter: "filter-dish"
  },
  {
    name: "甜豆燴蝦仁",
    href: "#",
    onclick: "return false;",
    price: "300元",
    description: "蝦仁鮮嫩、甜豆爽脆，色彩鮮亮、口感多層次，是餐桌上不可錯過的美味佳餚！",
    img: "assets/img/menu/a la carte/shrimp-with-sweet-peas.png",
    alt: "甜豆燴蝦仁",
    filter: "filter-dish"
  },
  {
    name: "清炒白蝦",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "白蝦鮮嫩、口感彈牙，簡單清炒就能吃到最自然的鮮甜味，是餐桌上不可錯過的鮮味佳餚！",
    img: "assets/img/menu/a la carte/stir-fried-white-shrimp.png",
    alt: "清炒白蝦",
    filter: "filter-dish"
  },
  {
    name: "蛤蠣炒絲瓜",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "精選新鮮蛤蠣與絲瓜快炒，保留海味與蔬菜鮮甜，口感滑嫩清爽，是下飯與宴客的佳餚。",
    img: "assets/img/menu/a la carte/clams-loofah-stirfry.png",
    alt: "蛤蠣炒絲瓜",
    filter: "filter-dish"
  },
  {
    name: "芹菜鴨腸",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "新鮮鴨腸與香脆芹菜快炒，保留彈牙口感與香氣，是下飯與宴客的經典家常菜。",
    img: "assets/img/menu/a la carte/duck-intestines-with-celery.png",
    alt: "",
    filter: "filter-dish"
  },
  {
    name: "糖醋排骨",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "酥脆排骨遇上酸甜醬汁，香氣撲鼻、口感多層次，是餐桌上不可錯過的美味經典！",
    img: "assets/img/menu/a la carte/sweet-and-sour-pork-ribs.png",
    alt: "糖醋排骨",
    filter: "filter-dish"
  },
  {
    name: "香爆螺肉",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "新鮮螺肉快炒，香氣濃郁，辣而不嗆，口感彈牙。",
    img: "assets/img/menu/a la carte/stir-fried-spicy-whelk.png",
    alt: "香爆螺肉",
    filter: "filter-dish"
  },
  {
    name: "日本扇貝",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "精選日本扇貝，保留海味鮮甜，經簡單烹調後，口感滑嫩、香氣迷人，是下酒或宴客佳品。",
    img: "assets/img/menu/a la carte/japanese-scallops.png",
    alt: "日本扇貝",
    filter: "filter-dish"
  },
  {
    name: "北海岸小卷",
    href: "#",
    onclick: "return false;",
    price: "300元",
    description: "小卷鮮嫩彈牙、海味十足——北海岸小卷快炒後香氣四溢，每一口都令人回味無窮！",
    img: "assets/img/menu/a la carte/northern-coast-squid.png",
    alt: "北海岸小卷",
    filter: "filter-dish"
  },
  {
    name: "沙拉白蝦",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "白蝦鮮嫩多汁、沙拉爽口清新——搭配特調醬汁，每一口都能吃到海味與蔬菜的清香！",
    img: "assets/img/menu/a la carte/White-Shrimp-Salad.png",
    alt: "沙拉白蝦",
    filter: "filter-dish"
  },
 {
    name: "蛋炒海菜芽",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "蛋香與海菜芽清脆交織，香氣撲鼻、口感滑嫩，是餐桌上不可錯過的家常美味！",
    img: "assets/img/menu/a la carte/egg-seaweed-sprouts-stirfry.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "臘炒高麗菜",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "精選臘肉切片，搭配爽脆高麗菜快炒，臘肉香氣滲入菜中，口感脆嫩，是下飯與家常宴客的經典菜品。",
    img: "assets/img/menu/a la carte/stir-fried-cabbage-with-chinese-bacon.png",
    alt: "臘炒高麗菜",
    filter: "filter-dish"
  },
  {
    name: "涼拌海菜芽",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "精選海菜芽，搭配特製涼拌醬汁，保持脆嫩口感，清爽開胃，是健康的開胃小菜。",
    img: "assets/img/menu/a la carte/marinated-seaweed-sprouts.png",
    alt: "涼拌海菜芽",
    filter: "filter-dish"
  },
  {
    name: "野生海瓜子",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "野生海瓜子鮮美彈牙，保留海味甘甜，口感清爽。",
    img: "assets/img/menu/a la carte/stir-fried-Short-Necked-wild-clams.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "海苔蟹肉捲",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "酥脆的海苔外皮包裹鮮美蟹肉，炸至金黃香氣迷人——每一口都令人停不下來的美味！",
    img: "assets/img/menu/a la carte/crispy-seaweed-crab-rolls.png",
    alt: "海苔蟹肉捲",
    filter: "filter-dish"
  },
  {
    name: "雨來菇",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "雨來菇清脆滑嫩，口感清爽，清甜香氣撲鼻——，保留脆嫩口感，簡單快炒後清爽可口，是健康下飯佳品！",
    img: "assets/img/menu/a la carte/star-jelly.png",
    alt: "雨來菇",
    filter: "filter-dish"
  },
  {
    name: "蚵仔酥",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "新鮮蚵仔裹粉酥炸，外酥內嫩，保留海味鮮甜，鮮香可口。",
    img: "assets/img/menu/a la carte/crispy-fried-oysters.png",
    alt: "蚵仔酥",
    filter: "filter-dish"
  },
  {
    name: "鹽烤大蛤蠣",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "鹽香四溢的大蛤蠣，肉質鮮嫩多汁——每一口都能嚐到大海的鮮美滋味！",
    img: "assets/img/menu/a la carte/salt-grilled-large-clams.png",
    alt: "鹽烤大蛤蠣",
    filter: "filter-dish"
  },
  {
    name: "馬蹄條",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "以新鮮荸薺切條酥炸，外皮金黃酥脆，咬下清甜脆口，別具風味。",
    img: "assets/img/menu/a la carte/crispy-water-chestnut-sticks.png",
    alt: "馬蹄條",
    filter: "filter-dish"
  },
  {
    name: "朴子蓮",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "精選朴子水蓮，快炒保留脆嫩口感，清爽可口，是健康的家常佳餚。",
    img: "assets/img/menu/a la carte/puzih-water-lily.png",
    alt: "朴子蓮",
    filter: "filter-dish"
  },
  {
    name: "糖醋魚",
    href: "#",
    onclick: "return false;",
    price: "450元",
    description: "酥脆的黃魚包裹酸甜醬汁，鮮美多汁——糖醋黃魚帶來每一口都讓人停不下來的美味！",
    img: "assets/img/menu/a la carte/sweet-and-sour-yellow-croaker.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "櫻花蝦高麗菜",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "精選新鮮高麗菜與櫻花蝦快炒，保留爽脆口感與蝦香，酸甜清爽，是下飯與家常佳餚。",
    img: "assets/img/menu/a la carte/cabbage-crispy-sakura-shrimp.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "清炒高麗菜",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "高麗菜快炒至爽脆，保留自然鮮甜口感。",
    img: "assets/img/menu/a la carte/stir-fried-cabbage.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "蔥爆石斑肚",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "精選石斑魚肚，搭配新鮮蔥段快炒，保留魚肚鮮嫩口感與蔥香，是下飯與宴客的美味佳餚。",
    img: "assets/img/menu/a la carte/scallion-stir-fried-grouper-belly.png",
    alt: "蔥爆石斑肚",
    filter: "filter-dish"
  },
  {
    name: "半天筍花燴蟹肉",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "半天筍花脆嫩、蟹肉鮮美——慢燉後香氣迷人，每一口都令人回味無窮！",
    img: "assets/img/menu/a la carte/crab-meat-bamboo-shoot-flowers.png",
    alt: "半天筍花燴蟹肉",
    filter: "filter-dish"
  },
  {
    name: "豆鼓蚵仔",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "蚵仔鮮嫩多汁，豆鼓香氣四溢——每一口都令人停不下來的經典海味！",
    img: "assets/img/menu/a la carte/stir-fried-oysters-black-bean-sauce.png",
    alt: "豆鼓蚵仔",
    filter: "filter-dish"
  },
  {
    name: "香蒜雞油拌麵線",
    href: "#",
    onclick: "return false;",
    price: "60元",
    description: "麵線拌入雞油與蒜香，香氣濃郁，簡單卻耐人回味。",
    img: "assets/img/menu/a la carte/garlic-chicken-oil-noodles.png",
    alt: "香蒜雞油拌麵線",
    filter: "filter-dish"
  },
  {
    name: "美人腿燴蟹肉",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "嫩脆的水竹筍（美人腿）與鮮美蟹肉一同燴煮，融合清甜與鮮香，是饕客必嚐的台味佳餚。",
    img: "assets/img/menu/a la carte/water-bamboo-with-crab-meat.png",
    alt: "美人腿燴蟹肉",
    filter: "filter-dish"
  },
  {
    name: "櫻花蝦娃娃菜",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "娃娃菜的清甜加上櫻花蝦的香氣，一口接一口超涮嘴！",
    img: "assets/img/menu/a la carte/water-bamboo-with-crab-meat.png",
    alt: "櫻花蝦娃娃菜",
    filter: "filter-dish"
  },
  {
    name: "炒蛤蠣",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "新鮮蛤蠣快炒，鮮香十足。",
    img: "assets/img/menu/a la carte/stir-fried-clams.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "鳳梨蝦球",
    href: "#",
    onclick: "return false;",
    price: "300元",
    description: "外酥內嫩的蝦球，淋上美乃滋與鳳梨塊，酸甜清爽又不膩口。",
    img: "assets/img/menu/a la carte/pineapple-shrimp-balls.png",
    alt: "鳳梨蝦球",
    filter: "filter-dish"
  },
  {
    name: "清炒鴕鳥肉",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "精選鴕鳥肉片，清炒鎖住鮮甜，口感軟嫩多汁，健康又美味。",
    img: "assets/img/menu/a la carte/ostrich-meat-stir-fry.png",
    alt: "清炒鴕鳥肉",
    filter: "filter-dish"
  },
  {
    name: "炒劍筍",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "脆口的劍筍用大火快炒，簡單卻超好吃！",
    img: "assets/img/menu/a la carte/sword-bamboo-shoots.png",
    alt: "炒劍筍",
    filter: "filter-dish"
  },
  {
    name: "竹筍沙拉",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "夏天必吃的清爽沙拉，用竹筍帶來脆甜口感！",
    img: "assets/img/menu/a la carte/chilled-bamboo-salad.png",
    alt: "竹筍沙拉",
    filter: "filter-dish"
  },
  {
    name: "滑蛋蝦仁",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "精選蝦仁快炒至熟，拌入滑嫩蛋液，口感柔滑鮮甜，是經典家常佳餚。",
    img: "assets/img/menu/a la carte/soft-eggs-prawns.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "滑蛋蟹肉",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "精選蟹肉快炒入滑蛋，蛋香與蟹肉鮮味完美融合，是宴客經典菜餚。",
    img: "assets/img/menu/a la carte/soft-eggs-crab.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "鮮蝦歐姆蛋",
    href: "#",
    onclick: "return false;",
    price: "250元",
    description: "新鮮蝦丁與歐姆蛋融合，再淋上翠綠勾芡翡翠醬，口感滑嫩鮮美，是宴客佳餚。",
    img: "assets/img/menu/a la carte/shrimp-omelette-jade-sauce.png",
    alt: "鮮蝦歐姆蛋",
    filter: "filter-dish"
  },
  {
    name: "蒲燒魚麻油米糕",
    href: "#",
    onclick: "return false;",
    price: "500元",
    description: "米糕吸滿麻油香氣，搭配甜鹹蒲燒魚，每口都是濃郁台味。",
    img: "assets/img/menu/a la carte/sesame-oil-sticky-rice-eel.png",
    alt: "蒲燒魚麻油米糕",
    filter: "filter-dish"
  },
  {
    name: "麻油米糕",
    href: "#",
    onclick: "return false;",
    price: "350元",
    description: "傳統台式米糕，吸滿香濃麻油，口感軟糯，每口都是經典台味。",
    img: "assets/img/menu/a la carte/sesame-oil-glutinous-rice.png",
    alt: "麻油米糕",
    filter: "filter-dish"
  },
  {
    name: "香酥多麗魚",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "精選多麗魚，油炸至外皮金黃酥脆，內裡肉質鮮嫩多汁，是經典炸魚美味。",
    img: "assets/img/menu/a la carte/crispy-dory-fish.png",
    alt: "香酥多麗魚",
    filter: "filter-dish"
  },
  {
    name: "櫻花蝦拌飯(大)",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "香脆櫻花蝦拌入熱騰騰白飯，每口都充滿海味鮮香，是簡單又美味的家常拌飯。",
    img: "assets/img/menu/a la carte/sakura-shrimp-fried-rice.png",
    alt: "櫻花蝦拌飯大份",
    filter: "filter-dish"
  },
  {
    name: "櫻花蝦拌飯(小)",
    href: "#",
    onclick: "return false;",
    price: "120元",
    description: "白飯拌上香脆櫻花蝦，鮮甜又開胃，每一口都好涮嘴！",
    img: "assets/img/menu/a la carte/sakura-shrimp-fried-rice.png",
    alt: "櫻花蝦拌飯小份",
    filter: "filter-dish"
  },
  {
    name: "蝦仁蛋炒飯",
    href: "#",
    onclick: "return false;",
    price: "100元",
    description: "蝦仁鮮甜加上香滑蛋炒飯，每一口都讓人回味無窮！",
    img: "assets/img/menu/a la carte/egg-shrimp-fried-rice.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "肉絲蛋炒飯",
    href: "#",
    onclick: "return false;",
    price: "80元",
    description: "肉絲滑蛋炒飯，每一口都香噴噴又好吃！",
    img: "assets/img/menu/a la carte/egg-shredded-pork-fried-rice.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "白飯",
    href: "#",
    onclick: "return false;",
    price: "10元",
    description: "每一口白飯都香噴噴又好吃！",
    img: "assets/img/menu/a la carte/rice.png",
    alt: "沒圖片",
    filter: "filter-dish"
  },
  {
    name: "魚翅羹",
    href: "#",
    onclick: "return false;",
    price: "460元",
    description: "精選魚翅燉煮入味，湯汁濃郁滑順，口感細膩鮮美，是宴會與節慶的經典之選。",
    img: "assets/img/menu/soup/shark-fin-broth.png",
    alt: "魚翅羹",
    filter: "filter-soups"
  },
  {
    name: "蘿蔔排骨湯",
    href: "#",
    onclick: "return false;",
    price: "100元",
    description: "排骨鮮香、蘿蔔甜美，湯頭清爽又暖胃！",
    img: "assets/img/menu/soup/radish-pork-rib-soup.png",
    alt: "蘿蔔排骨湯",
    filter: "filter-soups"
  },
  {
    name: "香菇蛤蠣雞湯",
    href: "#",
    onclick: "return false;",
    price: "300元",
    description: "精選雞肉慢熬，搭配香菇與新鮮蛤蠣，湯頭鮮美甘甜，是養生家常湯品。",
    img: "assets/img/menu/soup/shiitake-clam-chicken-soup.png",
    alt: "香菇蛤蠣雞湯",
    filter: "filter-soups"
  },
  {
    name: "時節鮮魚湯",
    href: "#",
    onclick: "return false;",
    price: "時價",
    description: "當季鮮魚入湯，鮮甜清爽，一口就愛上！",
    img: "assets/img/menu/soup/seasonal-fresh-fish-soup.png",
    alt: "沒圖片",
    filter: "filter-soups"
  },
  {
    name: "山藥南瓜排骨湯",
    href: "#",
    onclick: "return false;",
    price: "300元",
    description: "精選排骨慢火熬煮，加入山藥與南瓜，湯頭甘甜鮮美，是健康家常滋補湯品。",
    img: "assets/img/menu/soup/pork-rib-soup-yam-pumpkin.png",
    alt: "山藥南瓜排骨湯",
    filter: "filter-soups"
  },
  {
    name: "海菜吻仔魚湯",
    href: "#",
    onclick: "return false;",
    price: "200元",
    description: "海菜與新鮮吻仔魚熬製而成，湯色清澈、味道鮮美，是健康家常湯品。",
    img: "assets/img/menu/soup/whitebait-seaweed-soup.png",
    alt: "海菜吻仔魚",
    filter: "filter-soups"
  },
  {
    name: "蛤蠣湯",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "蛤蠣鮮甜入味，湯頭清爽又開胃，一口就愛上！",
    img: "assets/img/menu/soup/fresh-clam-soup.png",
    alt: "沒圖片",
    filter: "filter-soups"
  },
  {
    name: "燒酒雞半隻",
    href: "#",
    onclick: "return false;",
    price: "400元",
    description: "溫潤的米酒香，嫩滑雞肉，每一口都暖心又美味！",
    img: "assets/img/menu/soup/Shaoxing-Wine-Chicken.png",
    alt: "燒酒雞半隻",
    filter: "filter-soups"
  },
  {
    name: "燒酒雞全隻",
    href: "#",
    onclick: "return false;",
    price: "750元",
    description: "選用新鮮雞肉，以米酒慢火燉煮，酒香四溢，肉質鮮嫩，是經典台式滋補料理。",
    img: "assets/img/menu/soup/Shaoxing-Wine-Chicken.png",
    alt: "燒酒雞全隻",
    filter: "filter-soups"
  },
  {
    name: "麻油雞半隻",
    href: "#",
    onclick: "return false;",
    price: "400元",
    description: "麻油香氣撲鼻，雞肉嫩滑，每一口都暖心又美味！",
    img: "assets/img/menu/soup/Sesame-Oil-Chicken.png",
    alt: "麻油雞半隻",
    filter: "filter-soups"
  },
  {
    name: "麻油雞全隻",
    href: "#",
    onclick: "return false;",
    price: "750元",
    description: "新鮮雞肉與香濃麻油慢火燉煮，肉質滑嫩、香氣四溢，是經典台式滋補料理。",
    img: "assets/img/menu/soup/Sesame-Oil-Chicken.png",
    alt: "麻油雞全隻",
    filter: "filter-soups"
  },
  {
    name: "水果",
    href: "#",
    onclick: "return false;",
    price: "時價",
    description: "目前供應新鮮西瓜。",
    img: "assets/img/menu/dessert/watermelon.png",
    alt: "水果",
    filter: "filter-dessert"
  },
  {
    name: "螺旋冰捲",
    href: "#",
    onclick: "return false;",
    price: "150元",
    description: "香濃冰卷包裹甜美紅豆餡，口感細膩，冰涼爽口，是夏日甜點首選。",
    img: "assets/img/menu/dessert/ice-roll.jpg",
    alt: "螺旋冰捲",
    filter: "filter-dessert"
  },
  {
    name: "杏仁凍",
    href: "#",
    onclick: "return false;",
    price: "10元",
    description: "香濃冰卷包裹甜美紅豆餡，口感細膩，冰涼爽口，是夏日甜點首選。",
    img: "assets/img/menu/dessert/almond-jelly.png",
    alt: "沒圖片",
    filter: "filter-dessert"
  },
  {
    name: "草莓杏仁凍",
    href: "#",
    onclick: "return false;",
    price: "10元",
    description: "香濃冰卷包裹甜美紅豆餡，口感細膩，冰涼爽口，是夏日甜點首選。",
    img: "assets/img/menu/dessert/strawberry-almond-jelly.png",
    alt: "沒圖片",
    filter: "filter-dessert"
  },
  {
    name: "經濟四菜一湯",
    href: "#",
    onclick: "return false;",
    price: "1350元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合四",
    filter: "filter-set"
  },
  {
    name: "經濟五菜一湯",
    href: "#",
    onclick: "return false;",
    price: "1650元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合五",
    filter: "filter-set"
  },
  {
    name: "經濟六菜一湯",
    href: "#",
    onclick: "return false;",
    price: "1900元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合六",
    filter: "filter-set"
  },
  {
    name: "經濟七菜一湯",
    href: "#",
    onclick: "return false;",
    price: "2100元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合七",
    filter: "filter-set"
  },
  {
    name: "經濟八菜一湯",
    href: "#",
    onclick: "return false;",
    price: "2400元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合八",
    filter: "filter-set"
  },
  {
    name: "經濟九菜一湯",
    href: "#",
    onclick: "return false;",
    price: "2600元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合九",
    filter: "filter-set"
  },
  {
    name: "經濟十菜一湯",
    href: "#",
    onclick: "return false;",
    price: "2800元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合十",
    filter: "filter-set"
  },
  {
    name: "經濟十一菜一湯",
    href: "#",
    onclick: "return false;",
    price: "3100元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合十一",
    filter: "filter-set"
  },
  {
    name: "經濟十二菜一湯",
    href: "#",
    onclick: "return false;",
    price: "3300元",
    description: "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蛤蠣炒絲瓜、蘿蔔排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "合十二",
    filter: "filter-set"
  },
  {
    name: "團體六菜一湯",
    href: "#",
    onclick: "return false;",
    price: "3000元",
    description: "鋼管雞、蒸(糖醋)魚、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "團六",
    filter: "filter-set"
  },
  {
    name: "團體十二菜一湯",
    href: "#",
    onclick: "return false;",
    price: "4800元",
    description: "鋼管雞、蒸(糖醋)魚、山藥雙拼、蟹肉沙拉、日本扇貝、清炒白蝦、清炒鴕鳥肉、甜豆燴蝦仁、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯",
    img: "assets/img/menu/set meal.png",
    alt: "團十二",
    filter: "filter-set"
  },
];

// 選取容器
const menuContainer = document.getElementById("menu-container");

// 生成菜單 HTML
menuItems.forEach(item => {
  const menuHTML = `
    <div class="col-lg-6 menu-item isotope-item ${item.filter}">
      <img src="${item.img}" class="menu-img" alt="${item.alt}">
      <div class="menu-content">
        <a href="${item.href}" onclick="${item.onclick}">${item.name}</a><span>${item.price}</span>
      </div>
      <div class="menu-ingredients">
        ${item.description}
      </div>
    </div>
  `;
  menuContainer.insertAdjacentHTML("beforeend", menuHTML);

});

