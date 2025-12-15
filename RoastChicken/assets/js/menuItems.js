//時價
const marketPrice = {
  "zh-tw": "時價",
  "en": "Market Price"
};
//價格
const p10 = {
  "zh-tw": "10元",
  "en": "NT$10"
};
const p60 = {
  "zh-tw": "60元",
  "en": "NT$60"
};
const p80 = {
  "zh-tw": "80元",
  "en": "NT$80"
};
const p100 = {
  "zh-tw": "100元",
  "en": "NT$100"
};
const p120 = {
  "zh-tw": "120元",
  "en": "NT$120"
};
const p150 = {
  "zh-tw": "150元",
  "en": "NT$150"
};
const p200 = {
  "zh-tw": "200元",
  "en": "NT$200"
};
const p250 = {
  "zh-tw": "250元",
  "en": "NT$250"
};
const p300 = {
  "zh-tw": "300元",
  "en": "NT$300"
};
const p350 = {
  "zh-tw": "350元",
  "en": "NT$350"
};
const p400 = {
  "zh-tw": "400元",
  "en": "NT$400"
};
const p450 = {
  "zh-tw": "450元",
  "en": "NT$450"
};
const p500 = {
  "zh-tw": "500元",
  "en": "NT$500"
};
const p600 = {
  "zh-tw": "600元",
  "en": "NT$600"
};
const p650 = {
  "zh-tw": "650元",
  "en": "NT$650"
};
const p700 = {
  "zh-tw": "700元",
  "en": "NT$700"
};
const p800 = {
  "zh-tw": "800元",
  "en": "NT$800"
};
// 範例菜單資料
const menuItems = [
  {
    name: {
      "zh-tw": "鋼管雞",
      "en": "Roasted Steel-Pole Chicken"
    },
    price: p700,
    description: {
      "zh-tw": "皮脆、肉嫩、多汁香甜——林俊逸鋼管雞，必點招牌！",
      "en": "Crispy skin, tender and juicy — our signature roasted chicken, a must-try favorite!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "鋼管雞",
      "en": "Roasted Chicken"
    },
    img: "assets/img/menu/a la carte/avif/roasted-chicken.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "1"
  },
  {
    name: {
      "zh-tw": "脆皮雞",
      "en": "Crispy Roasted Chicken"
    },
    price: p700,
    description: {
      "zh-tw": "外皮酥脆，肉質鮮嫩多汁，令人回味無窮！",
      "en": "Golden crispy skin with tender juicy meat, an irresistible delight!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "脆皮雞",
      "en": "Crispy Roasted Chicken"
    },
    img: "assets/img/menu/a la carte/avif/crispy-roasted-chicken.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "2"
  },
  {
    name: {
      "zh-tw": "翅杏仔骨",
      "en": "Stir-Fried Wild Spiny Stems"
    },
    price: p100,
    description: {
      "zh-tw": "翅杏仔骨是一種屏東在地鄉下野菜，富有天然清香與微微甘甜。簡單清炒，口感頗嫩，每一口都能品味自然的鮮脆口感，清爽又健康。",
      "en": "A local wild vegetable from Pingtung, naturally fragrant with a hint of sweetness. Simply stir-fried, it has a tender texture, letting you enjoy the crisp freshness of nature in every bite—light, refreshing, and healthy."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "翅杏仔骨",
      "en": "Stir-Fried Wild Spiny Stems"
    },
    img: "assets/img/menu/a la carte/avif/Chia-Xing.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "3"
  },
  {
    name: {
      "zh-tw": "腱炒番茄",
      "en": "Stir-Fried Chicken Tendons with Tomatoes"
    },
    price: p250,
    description: {
      "zh-tw": "精選雞腱肉質彈嫩，與番茄一同快炒，保留酸甜鮮味。每一口都是雞腱的嚼勁與番茄的多汁香氣完美融合，清爽又開胃。",
      "en": "Selected chicken tendons are tender and springy, quickly stir-fried with tomatoes to preserve their sweet and tangy freshness. Each bite perfectly combines the chewy texture of the chicken tendons with the juicy aroma of the tomatoes—light, refreshing, and appetizing."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "腱炒番茄",
      "en": "Stir-fried Chicken Tendons with Tomatoes"
    },
    img: "assets/img/menu/a la carte/avif/chicken-tendon-tomato.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "4"
  },
  {
    name: {
      "zh-tw": "和風脆豆腐",
      "en": "Japanese-Style Peanut Tofu with Savory Sauce"
    },
    price: p150,
    description: {
      "zh-tw": "精選嫩花生豆腐，日式風味十足——香氣撲鼻，再淋上特製和風醬汁，每一口都是入口即化的完美口感，清爽又開胃。",
      "en": "Premium tender peanut tofu with authentic Japanese flavors — fragrant and topped with our special Japanese-style sauce, each bite melts in your mouth, light and appetizing."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "和風脆豆腐",
      "en": "Peanut Tofu (Japanese Style)"
    },
    img: "assets/img/menu/a la carte/avif/crispy-tofu.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "5"
  },
  {
    name: {
      "zh-tw": "蒸魚",
      "en": "Steamed Fish"
    },
    price: marketPrice,
    description: {
      "zh-tw": "精選新鮮魚隻，搭配醬油與蔥段清蒸，完美保留魚肉鮮味與滑嫩口感。每一口都能感受到鮮美的自然風味，清爽又健康。(龍虎石班目前一份500元)",
      "en": "Carefully selected fresh fish, steamed with soy sauce and scallions to perfectly preserve its natural flavor and tender texture. Every bite delivers the fresh, delicate taste of the fish — light, healthy, and satisfying. (Currently, a portion of Giant Grouper is NT$500)"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蒸魚",
      "en": "Steamed Fish"
    },
    img: "assets/img/menu/a la carte/avif/steamed-Giant-Grouper.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "6"
  },
  {
    name: {
      "zh-tw": "東坡肉",
      "en": "Dongpo Pork"
    },
    price: p500,
    description: {
      "zh-tw": "選用優質五花肉，經慢火紅燒至軟嫩入味，色澤紅亮，肥而不膩，入口即化，醬香濃郁，每一口都是傳統經典的味道。",
      "en": "Premium pork belly, slowly braised until tender and flavorful, with a glossy reddish hue. Rich yet not greasy, it melts in your mouth with every bite, delivering the deep, savory taste of this traditional classic."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "東坡肉",
      "en": "Dongpo Pork"
    },
    img: "assets/img/menu/a la carte/avif/Dongpo-Pork.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "7"
  },
  {
    name: {
      "zh-tw": "蟹肉沙拉",
      "en": "Crab Meat Salad"
    },
    price: p150,
    description: {
      "zh-tw": "新鮮蟹肉棒切片，與爽脆蔬菜拌勻，搭配特製沙拉醬，口感清爽，酸甜開胃，是輕食與開胃小菜的理想選擇。",
      "en": "Fresh crab meat served with shredded cabbage and creamy salad dressing — light, refreshing, and perfect as a side or appetizer."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蟹肉沙拉",
      "en": "Crab Meat Salad"
    },
    img: "assets/img/menu/a la carte/avif/Imitation-Crab-Salad.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "8"
  },
  {
    name: {
      "zh-tw": "山藥雙拼",
      "en": "Yam & Mochi Duo"
    },
    price: p300,
    description: {
      "zh-tw": "精選新鮮山藥，外酥內軟油炸至金黃，再搭配甜而不膩的麻糬冰捲，每一口都是香酥、軟糯與冰涼的完美結合，讓甜點時光更愉快。",
      "en": "A delightful duo featuring freshly selected yam, fried to golden crispiness outside yet soft inside, paired with two kinds of mochi ice rolls — sweet but not heavy. Each bite combines crispy, soft, and chilled textures for a perfect dessert experience."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "山藥雙拼",
      "en": "Yam Duo Platter"
    },
    img: "assets/img/menu/a la carte/avif/Yam-Duo-Platter.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "9"
  },
  {
    name: {
      "zh-tw": "薑絲大腸",
      "en": "Stir-Fried Pork Intestines with Ginger"
    },
    price: p200,
    description: {
      "zh-tw": "精選新鮮大腸，去腥處理後與薑絲一同快炒，保留彈牙口感，香氣濃郁，每一口都是下飯的經典味道。",
      "en": "Freshly selected pork intestines, carefully cleaned to remove any odor, stir-fried with julienned ginger. Retains a chewy texture and rich aroma, making every bite a classic, flavorful dish perfect with rice.."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "薑絲大腸",
      "en": "Pork Intestines with Ginger"
    },
    img: "assets/img/menu/a la carte/avif/pork-intestines-with-ginger.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "10"
  },
  {
    name: {
      "zh-tw": "甜豆燴蝦仁",
      "en": "Stir-Fried Shrimp with Sweet Peas"
    },
    price: p350,
    description: {
      "zh-tw": "蝦仁鮮嫩、甜豆爽脆，色彩鮮亮、口感多層次，是餐桌上不可錯過的美味佳餚！",
      "en": "Tender shrimp and crisp sweet peas come together in a colorful, multi-textured dish that’s a must-have on any dining table!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "甜豆燴蝦仁",
      "en": "Shrimp with Sweet Peas"
    },
    img: "assets/img/menu/a la carte/avif/shrimp-with-sweet-peas.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "11"
  },
  {
    name: {
      "zh-tw": "清炒白蝦",
      "en": "Stir-Fried White Shrimp"
    },
    price: p350,
    description: {
      "zh-tw": "白蝦鮮嫩、口感彈牙，簡單清炒就能吃到最自然的鮮甜味，是餐桌上不可錯過的鮮味佳餚！",
      "en": "Fresh and tender white shrimp with a pleasantly springy bite, simply stir-fried to highlight their natural sweetness — a seafood delicacy not to be missed!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "清炒白蝦",
      "en": "Stir-fried White Shrimp"
    },
    img: "assets/img/menu/a la carte/avif/stir-fried-white-shrimp.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "12"
  },
  {
    name: {
      "zh-tw": "蛤蠣炒絲瓜",
      "en": "Stir-Fried Loofah with Clams"
    },
    price: p200,
    description: {
      "zh-tw": "精選新鮮蛤蠣與絲瓜快炒，保留海味與蔬菜鮮甜，口感滑嫩清爽，是下飯與宴客的佳餚。",
      "en": "Fresh clams stir-fried with loofah, preserving the briny seafood flavor and the vegetable’s natural sweetness. Smooth, refreshing, and perfect both with rice or as a dish for gatherings."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蛤蠣炒絲瓜",
      "en": "Clams & Loofah"
    },
    img: "assets/img/menu/a la carte/avif/clams-loofah-stirfry.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "13"
  },
  {
    name: {
      "zh-tw": "蟹肉燴絲瓜",
      "en": "Stir-Fried Loofah with Crab Meat"
    },
    price: p350,
    description: {
      "zh-tw": "新鮮蟹肉與絲瓜快炒，保留海味與蔬菜鮮甜，口感滑嫩清爽，是下飯與宴客的佳餚。",
      "en": "Fresh crab meat stir-fried with loofah, preserving the briny seafood essence and the vegetable’s natural sweetness. Smooth, refreshing, and perfect both with rice or as a dish for gatherings."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "14"
  },
  {
    name: {
      "zh-tw": "蝦仁燴絲瓜",
      "en": "Stir-Fried Loofah with Shrimp"
    },
    price: p350,
    description: {
      "zh-tw": "新鮮蝦仁與絲瓜快炒，保留海味與蔬菜鮮甜，口感滑嫩清爽，是下飯與宴客的佳餚。",
      "en": "Fresh shrimp stir-fried with loofah, preserving the delicate seafood flavor and the vegetable’s natural sweetness. Smooth, refreshing, and perfect both with rice or as a dish for gatherings"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "15"
  },
  {
    name: {
      "zh-tw": "芹菜鴨腸",
      "en": "Stir-Fried Duck Intestines with Celery"
    },
    price: p200,
    description: {
      "zh-tw": "新鮮鴨腸與香脆芹菜快炒，保留彈牙口感與香氣，是下飯與宴客的經典家常菜。",
      "en": "Fresh duck intestines stir-fried with crisp celery, retaining a chewy texture and rich aroma — a classic homestyle dish perfect with rice or for gatherings."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "芹菜鴨腸",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/duck-intestines-with-celery.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "16"
  },
  {
    name: {
      "zh-tw": "芹菜燴蟹肉",
      "en": "Stir-Fried Crab Meat with Celery"
    },
    price: {
      "zh-tw": "350元",
      "en": "NT$350"
    },
    description: {
      "zh-tw": "新鮮蟹肉與芹菜快炒，保留海味與蔬菜鮮甜，口感滑嫩清爽，是下飯與宴客的佳餚。",
      "en": "Fresh crab meat stir-fried with crisp celery, preserving the natural ocean flavor and vegetable sweetness. Smooth and refreshing in texture, it’s a delightful dish perfect with rice or for gatherings."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "17"
  },
  {
    name: {
      "zh-tw": "糖醋排骨",
      "en": "Sweet and Sour Pork Ribs"
    },
    price: p200,
    description: {
      "zh-tw": "酥脆排骨遇上酸甜醬汁，香氣撲鼻、口感多層次，是餐桌上不可錯過的美味經典！",
      "en": "Crispy pork ribs coated in a tangy-sweet sauce, bursting with aroma and layered textures. A timeless classic that no table should be without!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "糖醋排骨",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/sweet-and-sour-pork-ribs.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "18"
  },
  {
    name: {
      "zh-tw": "香爆螺肉",
      "en": "Stir-Fried Snail Meat"
    },
    price: p200,
    description: {
      "zh-tw": "新鮮本土蝸牛肉快炒，香氣濃郁，口感彈牙。",
      "en": "Fresh Taiwanese snail meat, quickly stir-fried to preserve its tender, bouncy texture and rich aroma. Mild and flavorful."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "香爆螺肉",
      "en": "Snail Meat"
    },
    img: "assets/img/menu/a la carte/avif/stir-fried-spicy-whelk.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "19"
  },
  {
    name: {
      "zh-tw": "照燒小羊排",
      "en": "Teriyaki Lamb Chops"
    },
    price: p600,
    description: {
      "zh-tw": "嫩小羊排，淋上濃郁照燒醬，香氣四溢，口感鮮美，是肉食愛好者的絕佳選擇。",
      "en": "Tender lamb chops, grilled to perfection and glazed with a rich teriyaki sauce, offering a savory-sweet flavor that's both aromatic and satisfying."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "20"
  },
  {
    name: {
      "zh-tw": "滿漢虎蹄鮑",
      "en": "Braised Pork Trotter with Taro and Chestnuts"
    },
    price: p650,
    description: {
      "zh-tw": "這道滿漢風味菜以軟嫩的豬腳為主角，搭配切丁芋頭與栗子，慢火燉煮至完美入味。雖名為虎蹄鮑，實際上並不含虎蹄與鮑魚，但豬腳帶來濃郁的香味與令人滿足的口感。",
      "en": "A hearty dish centered on tender pork trotter, combined with diced taro and chestnuts, slow-cooked to perfection. Despite the Chinese name, it contains no actual tiger paw or abalone, but the pork trotter provides rich, savory flavors and a comforting texture."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "21"
  },
  {
    name: {
      "zh-tw": "日本扇貝",
      "en": "Japanese Scallops"
    },
    price: p350,
    description: {
      "zh-tw": "精選日本扇貝，保留海味鮮甜，經簡單烹調後，搭配五味醬，口感滑嫩、香氣迷人，是下酒或宴客佳品。",
      "en": "Fresh Japanese scallops topped with our signature five-flavor sauce, perfectly balancing sweet, savory, and umami notes in every bite."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "日本扇貝",
      "en": "Japanese Scallops"
    },
    img: "assets/img/menu/a la carte/avif/japanese-scallops.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "22"
  },
  {
    name: {
      "zh-tw": "北海岸小卷",
      "en": "Stir-fried Mitre Squid"
    },
    price: {
      "zh-tw": "300元",
      "en": "NT$300"
    },
    description: {
      "zh-tw": "小卷鮮嫩彈牙、海味十足——北海岸小卷快炒後香氣四溢，每一口都令人回味無窮！",
      "en": "Stir-fried Mitre Squid, tender and bouncy with full-bodied ocean flavor — quickly sautéed to release a fragrant aroma, each bite is irresistibly delicious!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "北海岸小卷",
      "en": "Mitre Squid"
    },
    img: "assets/img/menu/a la carte/avif/northern-coast-squid.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "23"
  },
  {
    name: {
      "zh-tw": "沙拉白蝦",
      "en": "White Shrimp Salad"
    },
    price: p350,
    description: {
      "zh-tw": "白蝦鮮嫩多汁、沙拉爽口清新——每一口都能吃到海味與沙拉的清香！",
      "en": "Fresh and juicy white shrimp paired with crisp, refreshing salad — every bite bursts with the natural flavor of the sea and the freshness of the greens!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沙拉白蝦",
      "en": "White Shrimp Salad"
    },
    img: "assets/img/menu/a la carte/avif/White-Shrimp-Salad.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "24"
  },
  {
    name: {
      "zh-tw": "沙拉草蝦",
      "en": "Giant Tiger Prawn Salad"
    },
    price: p450,
    description: {
      "zh-tw": "鮮嫩多汁的大草蝦，搭配爽脆清新的沙拉，每一口都能感受到蝦的自然鮮甜。",
      "en": "Juicy and tender giant tiger prawns paired with crisp, refreshing salad — every bite bursts with natural sweetness."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "25"
  },
 {
    name: {
      "zh-tw": "蛋炒海菜芽",
      "en": "Stir-fried Seaweed Sprouts with Scrambled Egg"
    },
    price: p200,
    description: {
      "zh-tw": "蛋香與海菜芽清脆交織，香氣撲鼻、口感滑嫩，是餐桌上不可錯過的家常美味！",
      "en": "Fragrant scrambled eggs combined with crisp seaweed sprouts — aromatic and tender, a classic homemade favorite for the table!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蛋炒海菜芽",
      "en": "Seaweed Sprouts with Egg"
    },
    img: "assets/img/menu/a la carte/avif/egg-seaweed-sprouts-stirfry.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "26"
  },
  {
    name: {
      "zh-tw": "臘炒高麗菜",
      "en": "Stir-fried Cabbage with Chinese Bacon"
    },
    price: p150,
    description: {
      "zh-tw": "精選臘肉切片，搭配爽脆高麗菜快炒，臘肉香氣滲入菜中，口感脆嫩，是下飯與家常宴客的經典菜品。",
      "en": "Sliced Chinese bacon stir-fried with crisp cabbage, infusing the dish with savory aromas and tender textures — a classic choice for home dining and entertaining."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "臘炒高麗菜",
      "en": "Stir-fried Cabbage with Chinese Bacon"
    },
    img: "assets/img/menu/a la carte/avif/stir-fried-cabbage-with-chinese-bacon.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "27"
  },
  {
    name: {
      "zh-tw": "涼拌海菜芽",
      "en": "Chilled Marinated Seaweed Sprouts"
    },
    price: p150,
    description: {
      "zh-tw": "精選海菜芽，搭配特製涼拌醬汁，保持脆嫩口感，清爽開胃，是健康的開胃小菜。",
      "en": "Selected seaweed sprouts paired with a special marinated sauce, maintaining a crisp texture and refreshing taste — a healthy appetizer."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "涼拌海菜芽",
      "en": "Seaweed Sprouts"
    },
    img: "assets/img/menu/a la carte/avif/marinated-seaweed-sprouts.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "28"
  },
  {
    name: {
      "zh-tw": "野生海瓜子",
      "en": "Stir-fried Wild Short Necked Clams"
    },
    price: p200,
    description: {
      "zh-tw": "野生海瓜子鮮美彈牙，保留海味甘甜，口感清爽。",
      "en": "Wild short-necked clams are fresh and chewy, retaining the sweet taste of the sea with a refreshing texture."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "野生海瓜子",
      "en": "Short Necked Clams"
    },
    img: "assets/img/menu/a la carte/avif/stir-fried-Short-Necked-wild-clams.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "29"
  },
  {
    name: {
      "zh-tw": "海苔蟹肉捲",
      "en": "Fried Seaweed Crab Rolls"
    },
    price: p200,
    description: {
      "zh-tw": "酥脆的海苔外皮包裹鮮美蟹肉，炸至金黃香氣迷人——每一口都令人停不下來的美味！",
      "en": "Crispy seaweed wraps around delicious crab meat, fried to a golden perfection — every bite is irresistibly tasty!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "海苔蟹肉捲",
      "en": "Seaweed Crab Rolls"
    },
    img: "assets/img/menu/a la carte/avif/crispy-seaweed-crab-rolls.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "30"
  },
  {
    name: {
      "zh-tw": "蛋炒雨來菇",
      "en": "Stir-fried Star Mushroom with Scrambled Egg"
    },
    price: p200,
    description: {
      "zh-tw": "雨來菇清脆滑嫩，口感清爽，清甜香氣撲鼻——，保留脆嫩口感，簡單快炒後清爽可口，是健康下飯佳品！",
      "en": "Star Mushroom is crisp and tender, with a refreshing texture and sweet aroma — retaining its crunchiness, it is quickly stir-fried for a healthy and delicious dish!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蛋炒雨來菇",
      "en": "Star Mushroom with Egg"
    },
    img: "assets/img/menu/a la carte/avif/star-jelly.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "31"
  },
  {
    name: {
      "zh-tw": "蚵仔酥",
      "en": "Crispy Fried Oysters"
    },
    price: p250,
    description: {
      "zh-tw": "新鮮蚵仔裹粉酥炸，外酥內嫩，保留海味鮮甜，鮮香可口。",
      "en": "Fresh oysters are battered and deep-fried to a crispy perfection, retaining their sweet and briny flavor."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蚵仔酥",
      "en": "Fried Oysters"
    },
    img: "assets/img/menu/a la carte/avif/crispy-fried-oysters.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "32"
  },
  {
    name: {
      "zh-tw": "鹽烤大蛤蠣",
      "en": "Salt-Grilled Large Clams"
    },
    price: p200,
    description: {
      "zh-tw": "鹽香四溢的大蛤蠣，肉質鮮嫩多汁——每一口都能嚐到大海的鮮美滋味！",
      "en": "The salt-grilled large clams are fragrant and juicy, with a tender texture — every bite is a taste of the ocean's freshness!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "鹽烤大蛤蠣",
      "en": "Salt-Grilled Clams"
    },
    img: "assets/img/menu/a la carte/avif/salt-grilled-large-clams.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "33"
  },
  {
    name: {
      "zh-tw": "馬蹄條",
      "en": "Crispy Water Chestnut Sticks"
    },
    price: p150,
    description: {
      "zh-tw": "以新鮮荸薺切條酥炸，外皮金黃酥脆，咬下清甜脆口，別具風味。",
      "en": "Fresh water chestnuts cut into sticks and deep-fried until golden and crispy — each bite is sweet, crunchy, and full of delightful flavor"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "馬蹄條",
      "en": "Water Chestnut Sticks"
    },
    img: "assets/img/menu/a la carte/avif/crispy-water-chestnut-sticks.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "34"
  },
  {
    name: {
      "zh-tw": "朴子蓮",
      "en": "stir-fried white water snowflake stems"
    },
    price: p150,
    description: {
      "zh-tw": "精選朴子水蓮，快炒保留脆嫩口感，清爽可口，是健康的家常佳餚。",
      "en": "Tender white water snowflake stems stir-fried to perfection — crisp, fresh, and lightly seasoned for a simple yet flavorful dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "朴子蓮",
      "en": "white water snowflake"
    },
    img: "assets/img/menu/a la carte/avif/puzih-water-lily.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "35"
  },
  {
    name: {
      "zh-tw": "糖醋黃魚",
      "en": "Sweet & Sour Crispy Yellow Croaker"
    },
    price: p500,
    description: {
      "zh-tw": "酥脆的黃魚包裹酸甜醬汁，鮮美多汁——糖醋黃魚帶來每一口都讓人停不下來的美味！",
      "en": "Crispy yellow croaker coated in a tangy sweet and sour sauce, juicy and flavorful — every bite is irresistibly delicious!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "糖醋魚",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/Sweet and Sour Yellow Croaker.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "36"
  },
  {
    name: {
      "zh-tw": "櫻花蝦高麗菜",
      "en": "Stir-Fried Cabbage with Sakura Shrimp"
    },
    price: p200,
    description: {
      "zh-tw": "精選新鮮高麗菜與櫻花蝦快炒，保留爽脆口感與蝦香，酸甜清爽，是下飯與家常佳餚。",
      "en": "Stir-fried fresh cabbage with sakura shrimp, retaining a crisp texture and shrimp aroma — a refreshing and delicious home-style dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "櫻花蝦高麗菜",
      "en": "Cabbage with Sakura Shrimp"
    },
    img: "assets/img/menu/a la carte/avif/cabbage-crispy-sakura-shrimp.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "37"
  },
  {
    name: {
      "zh-tw": "清炒高麗菜",
      "en": "Stir-Fried Cabbage"
    },
    price: p150,
    description: {
      "zh-tw": "高麗菜快炒至爽脆，保留自然鮮甜口感。",
      "en": "Stir-fried cabbage cooked until crisp, retaining its natural sweetness."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "38"
  },
  {
    name: {
      "zh-tw": "蔥爆石斑肚",
      "en": "Stir-Fried Grouper Belly with Scallions"
    },
    price: p250,
    description: {
      "zh-tw": "精選石斑魚肚，搭配新鮮蔥段快炒，保留魚肚鮮嫩口感與蔥香，是下飯與宴客的美味佳餚。",
      "en": "Selected grouper stomach stir-fried with fresh scallions, retaining the stomach's tenderness and the scallion's aroma — a delicious dish for both everyday meals and entertaining guests."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蔥爆石斑肚",
      "en": "Grouper Belly with Scallions"
    },
    img: "assets/img/menu/a la carte/avif/scallion-stir-fried-grouper-belly.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "39"
  },
  {
    name: {
      "zh-tw": "半天筍花燴蟹肉",
      "en": "Stir-Fried Crab Meat with Betel Palm Heart"
    },
    price: p400,
    description: {
      "zh-tw": "半天筍花脆嫩、蟹肉鮮美——快炒後香氣迷人，每一口都令人回味無窮！",
      "en": "Tender Betel Palm Heart and fresh crab meat, quickly stir-fried to release fragrant aromas — each bite bursts with delicate flavor and texture!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "半天筍花燴蟹肉",
      "en": "Crab Meat with Betel Palm Heart"
    },
    img: "assets/img/menu/a la carte/avif/crab-meat-bamboo-shoot-flowers.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "40"
  },
  {
    name: {
      "zh-tw": "豆鼓蚵仔",
      "en": "Stir-Fried Oysters with Black Beans"
    },
    price: p200,
    description: {
      "zh-tw": "蚵仔鮮嫩多汁，豆鼓香氣四溢——每一口都令人停不下來的經典海味！",
      "en": "Fresh and juicy oysters with a fragrant black beans — a classic seafood dish that's simply irresistible!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "豆鼓蚵仔",
      "en": "Oysters with Black Beans"
    },
    img: "assets/img/menu/a la carte/avif/stir-fried-oysters-black-bean-sauce.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "41"
  },
  {
    name: {
      "zh-tw": "香蒜雞油拌麵線",
      "en": "Garlic Chicken Oil Tossed Noodles"
    },
    price: p60,
    description: {
      "zh-tw": "以蒜末、蔥末、雞油與醬油拌炒細麵線，再撒上香脆的油蔥酥，每一口都充滿蒜香與濃郁雞油香氣。",
      "en": "Thin noodles tossed with minced garlic, chopped scallions, chicken fat, and soy sauce, topped with crispy fried shallots. Every bite is rich with savory garlic and aromatic chicken oil."
    },
    detail:{
      "zh-tw": "以新鮮蒜末慢火爆香至金黃，加入少量雞油、醬油與油蔥酥提味，迅速拌入煮至彈嫩的細麵線，使每根麵線均勻包裹蒜香與油脂。最後撒上蔥花增加清香並帶微脆口感。入口先是香濃蒜味與雞油的溫潤，接著油蔥酥的酥脆提升層次，整體滑順不膩，適合搭配清爽小菜或熱湯。",
      "en": "Minced fresh garlic is gently sautéed over low heat until golden, then a small amount of chicken fat, soy sauce, and crispy fried shallots are added for flavor. Cooked tender thin noodles are quickly tossed in, ensuring each strand is evenly coated with garlic aroma and savory oil. Finally, chopped scallions are sprinkled on top for a fresh fragrance and a slightly crisp texture. The first bite delivers the rich aroma of garlic and the smooth warmth of chicken fat, followed by the crunch of fried shallots that adds depth. The overall texture is silky yet light, making it perfect to enjoy with refreshing side dishes or a hot soup." 
    },
    alt: {
      "zh-tw": "香蒜雞油拌麵線",
      "en": "Garlic Chicken Oil Tossed Noodles"
    },
    img: "assets/img/menu/a la carte/avif/garlic-chicken-oil-noodles.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "42",
    images: [
      "../assets/img/Cuisine/garlic-chicken-oil-noodles/1.avif",
      "../assets/img/Cuisine/garlic-chicken-oil-noodles/2.avif",
      "../assets/img/Cuisine/garlic-chicken-oil-noodles/3.avif"
    ]
  },
  {
    name: {
      "zh-tw": "美人腿燴蟹肉",
      "en": "Stir-Fried Water Bamboo with Crab Meat"
    },
    price: p400,
    description: {
      "zh-tw": "嫩脆的水竹筍（美人腿）與鮮美蟹肉一同燴煮，融合清甜與鮮香，是饕客必嚐的台味佳餚。",
      "en": "Tender and crisp water bamboo shoots braised with fresh crab meat, blending natural sweetness and savory flavors. A must-try Taiwanese delicacy for seafood lovers."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "美人腿燴蟹肉",
      "en": "Water Bamboo with Crab Meat"
    },
    img: "assets/img/menu/a la carte/avif/water-bamboo-with-crab-meat.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "43"
  },
  {
    name: {
      "zh-tw": "櫻花蝦娃娃菜",
      "en": "Stir-Fried Baby Napa Cabbage with Sakura Shrimp"
    },
    price: p200,
    description: {
      "zh-tw": "娃娃菜的清甜加上櫻花蝦的香氣，一口接一口超涮嘴！",
      "en": "Tender and crisp baby napa cabbage stir-fried with fragrant, crunchy sakura shrimp, blending natural sweetness and savory flavors. A perfect dish for both everyday meals and special occasions!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "櫻花娃娃菜",
      "en": "Stir-Fried-Baby-Cabbage-Sakura-Shrimp"
    },
    img: "assets/img/menu/a la carte/avif/Stir-Fried-Baby-Cabbage-Sakura-Shrimp.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "44",
    images: [
      "../assets/img/Cuisine/Stir-Fried-Baby-Cabbage-Sakura-Shrimp/1.avif",
      "../assets/img/Cuisine/Stir-Fried-Baby-Cabbage-Sakura-Shrimp/2.avif",
    ]
  },
  {
    name: {
      "zh-tw": "炒蛤蠣",
      "en": "Stir-Fried Clams"
    },
    price: p200,
    description: {
      "zh-tw": "新鮮蛤蠣快炒，鮮香十足。",
      "en": "Fresh clams stir-fried to perfection, bursting with flavor."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "45"
  },
  {
    name: {
      "zh-tw": "鳳梨蝦球",
      "en": "Crispy Shrimp Balls with Fresh Pineapple"
    },
    price: p300,
    description: {
      "zh-tw": "外酥內嫩的蝦球，淋上美乃滋與鳳梨塊，酸甜清爽又不膩口。",
      "en": "Crispy on the outside and tender on the inside, these shrimp balls are drizzled with creamy mayonnaise and topped with pineapple chunks, offering a refreshing balance of sweet and tangy flavors."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "鳳梨蝦球",
      "en": "Pineapple Shrimp Balls"
    },
    img: "assets/img/menu/a la carte/avif/pineapple-shrimp-balls.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "46"
  },
  {
    name: {
      "zh-tw": "清炒鴕鳥肉",
      "en": "Stir-Fried Bok Choy with Ostrich Meat"
    },
    price: p200,
    description: {
      "zh-tw": "精選鴕鳥肉片，清炒鎖住鮮甜，口感軟嫩多汁，健康又美味。",
      "en": "Tender ostrich meat stir-fried with fresh bok choy, preserving the natural sweetness of the vegetables and the juicy, lean texture of the meat — a healthy and flavorful choice for the table."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "清炒鴕鳥肉",
      "en": "Bok Choy with Ostrich"
    },
    img: "assets/img/menu/a la carte/avif/ostrich-meat-stir-fry.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "47"
  },
  {
    name: {
      "zh-tw": "清炒草蝦",
      "en": "Stir-Fried Giant Tiger Prawn"
    },
    price: p450,
    description: {
      "zh-tw": "新鮮草蝦快炒，鮮香四溢。",
      "en": "Fresh prawns quickly stir-fried to preserve their natural sweetness and tender texture, delivering a simple yet flavorful seafood dish perfect for any meal."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/Stir-Fried-Giant-Tiger-Prawn.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "48"
  },
  {
    name: {
      "zh-tw": "炒劍筍",
      "en": "Stir-Fried Sword Bamboo Shoots"
    },
    price: p150,
    description: {
      "zh-tw": "脆口的劍筍用大火快炒，簡單卻超好吃！",
      "en": "Crispy sword bamboo shoots quickly stir-fried over high heat — simple, yet irresistibly delicious!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "炒劍筍",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/sword-bamboo-shoots.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "49"
  },
  {
    name: {
      "zh-tw": "蘆筍蝦仁",
      "en": "Stir-Fried Asparagus with Shrimp"
    },
    price: p300,
    description: {
      "zh-tw": "精選新鮮蘆筍與鮮嫩蝦仁快炒，保留爽脆口感與鮮甜味道，每一口都香氣四溢，是下飯與宴客的經典佳餚。",
      "en": "Fresh asparagus stir-fried with tender shrimp, preserving crisp texture and natural sweetness — a flavorful and classic dish perfect for both everyday meals and special occasions."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蘆筍蝦仁",
      "en": "Asparagus with Shrimp"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "50"
  },
  {
    name: {
      "zh-tw": "竹筍沙拉",
      "en": "Chilled Bamboo Shoot Salad"
    },
    price: p200,
    description: {
      "zh-tw": "夏天必吃的清爽沙拉，用竹筍帶來脆甜口感！",
      "en": "A refreshing salad perfect for summer, featuring crunchy bamboo shoots for a delightful sweetness!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "竹筍沙拉",
      "en": "Bamboo Shoot Salad"
    },
    img: "assets/img/menu/a la carte/avif/chilled-bamboo-salad.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "51"
  },
  {
    name: {
      "zh-tw": "滑蛋蝦仁",
      "en": "Shrimp with Scrambled Eggs"
    },
    price: p400,
    description: {
      "zh-tw": "精選蝦仁快炒至熟，拌入滑嫩蛋液，口感柔滑鮮甜，是經典家常佳餚。",
      "en": "Fresh shrimp quickly stir-fried and mixed with creamy scrambled eggs, offering a smooth and sweet flavor — a classic home-style dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/Shrimp-Scrambled-Eggs.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "52"
  },
  {
    name: {
      "zh-tw": "滑蛋蟹肉",
      "en": "Crab with Scrambled Eggs"
    },
    price: p400,
    description: {
      "zh-tw": "精選蟹肉快炒入滑蛋，蛋香與蟹肉鮮味完美融合，是宴客經典菜餚。",
      "en": "Fresh crab meat quickly stir-fried and mixed with creamy scrambled eggs, offering a smooth and sweet flavor — a classic home-style dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/Crab-Scrambled-Eggs.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "53"
  },
  {
    name: {
      "zh-tw": "鮮蝦歐姆蛋",
      "en": "Omelette with Fresh Shrimp and Jade Sauce"
    },
    price: p250,
    description: {
      "zh-tw": "新鮮蝦丁在歐姆蛋旁裝飾，再淋上翠綠勾芡翡翠醬，口感滑嫩鮮美，是宴客佳餚。",
      "en": "A silky omelette topped with diced fresh shrimp and drizzled with a glossy green jade sauce — tender, savory, and perfect for banquets."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "鮮蝦歐姆蛋",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/shrimp-omelette-jade-sauce.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "54"
  },
  {
    name: {
      "zh-tw": "蒲燒魚麻油米糕",
      "en": "Glutinous Rice with Grilled Eel in Sesame Oil"
    },
    price: p500,
    description: {
      "zh-tw": "米糕吸滿麻油香氣，搭配甜鹹蒲燒魚，每口都是濃郁台味。",
      "en": "Fragrant glutinous rice infused with sesame oil, paired with savory-sweet grilled eel — every bite is rich with authentic Taiwanese flavor."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蒲燒魚麻油米糕",
      "en": "Glutinous Rice with Grilled Eel in Sesame Oil"
    },
    img: "assets/img/menu/a la carte/avif/sesame-oil-sticky-rice-eel.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "55"
  },
  {
    name: {
      "zh-tw": "麻油米糕",
      "en": "Glutinous Rice with Sesame Oil"
    },
    price: p350,
    description: {
      "zh-tw": "傳統台式米糕，吸滿香濃麻油，口感軟糯，每口都是經典台味。",
      "en": "A traditional Taiwanese sticky rice dish infused with rich sesame oil aroma, soft and chewy in texture — every bite brings a taste of authentic Taiwanese heritage."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "麻油米糕",
      "en": "Glutinous Rice with Sesame Oil"
    },
    img: "assets/img/menu/a la carte/avif/sesame-oil-glutinous-rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "56"
  },
  {
    name: {
      "zh-tw": "香酥多麗魚",
      "en": "Crispy John Dory Fish"
    },
    price: p200,
    description: {
      "zh-tw": "精選多麗魚，油炸至外皮金黃酥脆，內裡肉質鮮嫩多汁，是經典炸魚美味。",
      "en": "Selected John Dory fish, deep-fried to a golden, crispy exterior while keeping the flesh tender and juicy — a classic fried fish favorite."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "香酥多麗魚",
      "en": "John Dory"
    },
    img: "assets/img/menu/a la carte/avif/crispy-dory-fish.avif",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "57"
  },
  {
    name: {
      "zh-tw": "蔥蛋",
      "en": "Scallion Omelette"
    },
    price: p200,
    description: {
      "zh-tw": "香氣四溢的蔥蛋，四顆雞蛋，口感滑嫩，是經典的台式家常菜。",
      "en": "A fragrant scallion omelette made with four eggs, tender and silky in texture — a classic Taiwanese home-style dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "",
    filter: "filter-dish",
    onclick: "",
    categories: ["dish", "all"],
    number: "58"
  },
  {
    name: { "zh-tw": "櫻花蝦拌飯(大)", "en": "Sakura Shrimp Rice Bowl(large)" },
    price: { "zh-tw": "200元", "en": "NT$200" },
    description: {
      "zh-tw": "香脆櫻花蝦拌入熱騰騰白飯，每口都充滿海味鮮香，是簡單又美味的家常拌飯。",
      "en": "[Large portion]Crispy sakura shrimp and savory pork floss atop steaming white rice flavored with garlic soy sauce — each bite bursts with umami from the sea, making this a simple yet delicious home-style rice dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: { "zh-tw": "櫻花蝦拌飯大份", "en": "Sakura Shrimp Rice Bowl(large)" },
    img: "assets/img/menu/a la carte/avif/sakura-shrimp-fried-rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "59"
  },
  {
    name: {
      "zh-tw": "櫻花蝦拌飯(小)",
      "en": "Sakura Shrimp Rice Bowl(small)"
    },
    price: p120,
    description: {
      "zh-tw": "白飯拌上香脆櫻花蝦，鮮甜又開胃，每一口都好涮嘴！",
      "en": "[Small portion]Crispy sakura shrimp and savory pork floss atop steaming white rice flavored with garlic soy sauce — each bite bursts with umami from the sea, making this a simple yet delicious home-style rice dish."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "櫻花蝦拌飯小份",
      "en": "Sakura Shrimp Rice Bowl(small)"
    },
    img: "assets/img/menu/a la carte/avif/sakura-shrimp-fried-rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "60"
  },
  {
    name: {
      "zh-tw": "蝦仁蛋炒飯",
      "en": "Shrimp and Egg Fried Rice"
    },
    price: p100,
    description: {
      "zh-tw": "蝦仁鮮甜加上香滑蛋炒飯，每一口都讓人回味無窮！",
      "en": "Sweet, tender shrimp combined with fluffy scrambled eggs and perfectly fried rice — every bite is flavorful and satisfying!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蝦仁蛋炒飯",
      "en": "Shrimp Egg Rice"
    },
    img: "assets/img/menu/a la carte/avif/egg-shrimp-fried-rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "61"
  },
  {
    name: {
      "zh-tw": "肉絲蛋炒飯",
      "en": "Shredded Pork and Egg Fried Rice"
    },
    price: p80,
    description: {
      "zh-tw": "肉絲滑蛋炒飯，每一口都香噴噴又好吃！",
      "en": "Tender shredded pork stir-fried with fluffy scrambled eggs and fragrant rice — each bite is savory, comforting, and full of classic flavor."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "沒圖片",
      "en": "No image"
    },
    img: "assets/img/menu/a la carte/avif/Shredded-Pork-Egg-Fried-Rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "62"
  },
  {
    name: {
      "zh-tw": "白飯",
      "en": "Rice"
    },
    price: p10,
    description: {
      "zh-tw": "每一口白飯都香噴噴又好吃！",
      "en": "Every bite of rice is fragrant and delicious!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "白飯",
      "en": "rice"
    },
    img: "assets/img/menu/a la carte/avif/rice.avif",
    filter: "filter-staple",
    onclick: "",
    categories: ["staple", "all"],
    number: "63"
  },
  {
    name: {
      "zh-tw": "魚翅羹",
      "en": "Shark Fin Broth"
    },
    price: p500,
    description: {
      "zh-tw": "精選魚翅燉煮入味，湯汁濃郁滑順，口感細膩鮮美，是宴會與節慶的經典之選。",
      "en": "Selected shark fin simmered to perfection, with a rich and smooth broth that's delicate and delicious — a classic choice for banquets and celebrations."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "魚翅羹",
      "en": "Shark Fin Broth"
    },
    img: "assets/img/menu/soup/avif/shark-fin-broth.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s1"
  },
  {
    name: {
      "zh-tw": "蘿蔔排骨湯",
      "en": "Radish and Pork Rib Soup"
    },
    price: p100,
    description: {
      "zh-tw": "排骨鮮香、蘿蔔甜美，湯頭清爽又暖胃！",
      "en": "Tender pork ribs simmered with sweet, fresh radish, creating a light and flavorful broth that’s both comforting and nourishing!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蘿蔔排骨湯",
      "en": "Radish & Pork Rib Soup"
    },
    img: "assets/img/menu/soup/avif/radish-pork-rib-soup.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s2"
  },
  {
    name: {
      "zh-tw": "香菇蛤蠣雞湯",
      "en": "Mushroom, Clam & Chicken Soup"
    },
    price: p400,
    description: {
      "zh-tw": "精選雞肉慢熬，搭配香菇與新鮮蛤蠣，湯頭鮮美甘甜，是養生家常湯品。",
      "en": "Tender chicken slow-cooked with fragrant mushrooms and fresh clams, resulting in a naturally sweet and savory broth — a wholesome and nourishing homemade soup."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "香菇蛤蠣雞湯",
      "en": "Shiitake Clam Chicken Soup"
    },
    img: "assets/img/menu/soup/avif/shiitake-clam-chicken-soup.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s3"
  },
  {
    name: {
      "zh-tw": "時節鮮魚湯",
      "en": "Seasonal Fresh Fish Soup"
    },
    price: marketPrice,
    description: {
      "zh-tw": "當季鮮魚入湯，鮮甜清爽，一口就愛上！",
      "en": "Fresh, seasonal fish simmered to create a light and naturally sweet broth — refreshing and full of delicate ocean flavors in every sip."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "時節鮮魚湯",
      "en": "Fish Soup"
    },
    img: "",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s4"
  },
  {
    name: {
      "zh-tw": "龍膽石斑湯",
      "en": "Giant Grouper Soup"
    },
    price: p450,
    description: {
      "zh-tw": "精選新鮮龍膽石斑，慢火熬煮湯頭，保留魚肉鮮甜與滑嫩口感，每一口都是鮮美滋味。",
      "en": "Fresh Giant Grouper simmered slowly to preserve its delicate sweetness and tender texture — each sip delivers rich, natural ocean flavors."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "龍膽石斑湯",
      "en": "Giant Grouper Soup"
    },
    img: "assets/img/menu/soup/avif/Giant-Grouper-Soup.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s5",
    images: [
      "../assets/img/Cuisine/Giant-Grouper-Soup/1.avif",
      "../assets/img/Cuisine/Giant-Grouper-Soup/2.avif",
      "../assets/img/Cuisine/Giant-Grouper-Soup/3.avif",
    ]
  },
  {
    name: {
      "zh-tw": "山藥南瓜排骨湯",
      "en": "Pork Rib Soup with Yam and Pumpkin"
    },
    price: p350,
    description: {
      "zh-tw": "精選排骨慢火熬煮，加入山藥與南瓜，湯頭甘甜鮮美，是健康家常滋補湯品。",
      "en": "Tender pork ribs simmered with yam and pumpkin, creating a naturally sweet and comforting broth — rich in flavor and perfect for warming the soul."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "山藥南瓜排骨湯",
      "en": "No image"
    },
    img: "assets/img/menu/soup/avif/pork-rib-soup-yam-pumpkin.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s6"
  },
  {
    name: {
      "zh-tw": "海菜吻仔魚湯",
      "en": "Seaweed and Whitebait Soup"
    },
    price: p200,
    description: {
      "zh-tw": "吻仔魚搭配海菜慢火熬煮，湯頭鮮美甘甜，口感清爽，是下飯又暖胃的家常湯品。",
      "en": "Fresh whitebait simmered with seaweed to create a naturally sweet and savory broth — light, refreshing, and perfect for pairing with rice."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "海菜吻仔魚",
      "en": "Seaweed & Whitebait Soup"
    },
    img: "assets/img/menu/soup/avif/whitebait-seaweed-soup.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s7"
  },
  {
    name: {
      "zh-tw": "蛤蠣湯",
      "en": "Clam Soup"
    },
    price: p150,
    description: {
      "zh-tw": "新鮮蛤蠣慢火熬煮，湯頭鮮美甘甜，口感清爽，是下飯又暖胃的家常湯品。",
    "en": "Fresh clams simmered to create a naturally sweet and savory broth — light, refreshing, and perfect with rice."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "蛤蠣湯",
      "en": "Clam Soup"
    },
    img: "assets/img/menu/soup/avif/fresh-clam-soup.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s8"
  },
  {
    name: {
      "zh-tw": "燒酒雞湯半隻",
      "en": "Half Portion Shaoxing Wine Chicken Soup"
    },
    price: p450,
    description: {
      "zh-tw": "半隻雞搭配米酒慢燉入味，湯頭香醇暖胃，肉質鮮嫩多汁，是寒冬必嚐的家常佳餚。",
      "en": "Half a chicken simmered with Shaoxing wine to create a rich, warming broth. Tender, juicy meat and flavorful soup make this a perfect dish for colder days."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "燒酒雞湯半隻",
      "en": "Half Shaoxing Wine Chicken"
    },
    img: "assets/img/menu/soup/avif/Shaoxing-Wine-Chicken.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s9"
  },
  {
    name: {
      "zh-tw": "燒酒雞湯全隻",
      "en": "Whole Shaoxing Wine Chicken Soup"
    },
    price: p800,
    description: {
      "zh-tw": "整隻雞搭配米酒慢燉入味，湯頭香醇暖胃，肉質鮮嫩多汁，是寒冬必嚐的家常佳餚。",
    "en": "A whole chicken simmered with Shaoxing wine to create a rich, warming broth. Tender, juicy meat and flavorful soup make this a perfect dish for colder days."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "燒酒雞湯全隻",
      "en": "Whole Shaoxing Wine Chicken"
    },
    img: "assets/img/menu/soup/avif/Shaoxing-Wine-Chicken.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s10"
  },
  {
    name: {
      "zh-tw": "麻油雞湯半隻",
      "en": "Half Sesame Oil Chicken Soup"
    },
    price: p450,
    description: {
      "zh-tw": "整隻雞搭配麻油慢燉入味，湯頭香醇暖胃，肉質鮮嫩多汁，是寒冬必嚐的家常佳餚。",
      "en": "A whole chicken simmered with sesame oil to create a rich, warming broth. Tender, juicy meat and flavorful soup make this a perfect dish for colder days."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "麻油雞半隻",
      "en": "Half Sesame Oil Chicken Soup"
    },
    img: "assets/img/menu/soup/avif/Sesame-Oil-Chicken.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s11"
  },
  {
    name: {
      "zh-tw": "麻油雞湯全隻",
      "en": "Whole Sesame Oil Chicken Soup"
    },
    price: p800,
    description: {
      "zh-tw": "整隻雞搭配麻油慢燉入味，湯頭香醇暖胃，肉質鮮嫩多汁，是寒冬必嚐的家常佳餚。",
      "en": "A whole chicken simmered with sesame oil to create a rich, warming broth. Tender, juicy meat and flavorful soup make this a perfect dish for colder days."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "麻油雞全隻",
      "en": "Whole Sesame Oil Chicken Soup"
    },
    img: "assets/img/menu/soup/avif/Sesame-Oil-Chicken.avif",
    filter: "filter-soups",
    onclick: "",
    categories: ["soup", "all"],
    number: "s12"
  },
  {
    name: {
      "zh-tw": "水果",
      "en": "Fruit"
    },
    price: marketPrice,
    description: {
      "zh-tw": "目前供應新鮮西瓜。",
      "en": "Currently serving fresh watermelon!"
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "水果",
      "en": "Fruit"
    },
    img: "assets/img/menu/dessert/avif/watermelon.avif",
    filter: "filter-dessert",
    onclick: "",
    categories: ["dessert", "all"],
    number: "d1"
  },
  {
    name: {
      "zh-tw": "螺旋冰捲",
      "en": "Chilled Spiral Ice Rolls"
    },
    price: p150,
    description: {
      "zh-tw": "香甜的黑糖醬與白麻糬皮包裹濃密的紅豆餡，冰涼又好吃，帶來清爽的甜點享受。",
      "en": "Sweet brown sugar syrup and chewy glutinous rice skin encase rich red bean filling, offering a refreshing and delightful dessert experience."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "螺旋冰捲",
      "en": "Spiral Ice Rolls"
    },
    img: "assets/img/menu/dessert/avif/ice-roll.avif",
    filter: "filter-dessert",
    onclick: "",
    categories: ["dessert", "all"],
    number: "d2"
  },
  {
    name: {
      "zh-tw": "明月冰捲",
      "en": "Mingyue Ice Rolls"
    },
    price: p150,
    description: {
      "zh-tw": "豆餡（紅豆、綠豆）包裹於麥芽糖與馬鈴薯粉製成的皮中，奶素，開封後即可食用。",
      "en": "Sweet red and green bean paste wrapped in a maltose and potato starch skin. Dairy-free and ready to eat upon opening."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: { "zh-tw": "明月冰捲", "en": "Mingyue Ice Rolls" },
    img: "",
    filter: "filter-dessert",
    onclick: "",
    categories: ["dessert", "all"],
    number: "d3"
  },
  {
    name: {
      "zh-tw": "雪天使",
      "en": "Snow Angel"
    },
    price: p200,
    description: {
      "zh-tw": "芒果手工麻糬皮包裹新鮮果凍與海綿蛋糕，Q彈綿密，香醇可口。",
      "en": "Mango handmade mochi skin wrapped around fresh fruit jelly and sponge cake, offering a chewy and creamy texture with delightful flavors."
    },
    detail:{
      "zh-tw": "",
      "en": "" 
    },
    alt: {
      "zh-tw": "雪天使",
      "en": "Snow Angel"
    },
    img: "assets/img/menu/dessert/avif/snow-angel.avif",
    filter: "filter-dessert",
    onclick: "",
    categories: ["dessert", "all"],
    number: "d4"
  },
  // {
  //   name: {
  //     "zh-tw": "杏仁凍",
  //     "en": "Almond Jelly"
  //   },
  //   price: p10,
  //   description: {
  //     "zh-tw": "以杏仁粉製作，這款手工杏仁凍口感滑嫩清爽，杏仁香氣濃郁，是餐後完美的輕甜點。",
  //     "en": "Made from almond powder, this handmade almond jelly is smooth, refreshing, and rich in almond aroma — a perfect light dessert to finish your meal."
  //   },
  //   detail:{
  //     "zh-tw": "",
  //     "en": "" 
  //   },
  //   alt: {
  //     "zh-tw": "杏仁凍",
  //     "en": "Almond Jelly"
  //   },
  //   img: "assets/img/menu/dessert/avif/almond-jelly.avif",
  //   filter: "filter-dessert",
  //   onclick: "",
  //   categories: ["dessert", "all"],
  //   number: "d5"
  // },
  {
    name: {
      "zh-tw": "草莓杏仁凍",
      "en": "Strawberry Almond Jelly"
    },
    price: p10,
    description: {
      "zh-tw": "以草莓粉與杏仁粉製作的手工杏仁凍，口感滑嫩清爽，帶有草莓香甜與杏仁濃郁風味，是餐後清爽甜點。",
      "en": "Handmade jelly made with strawberry powder and almond powder, smooth and refreshing, with the sweet aroma of strawberries and the rich flavor of almonds — a light dessert to finish your meal."
    },
    alt: {
      "zh-tw": "草莓杏仁凍",
      "en": "Strawberry Almond Jelly"
    },
    img: "assets/img/menu/dessert/avif/strawberry-almond-jelly.avif",
    filter: "filter-dessert",
  
    onclick: "",
    categories: ["dessert", "all"],
    number: "d6"
  },
  {
    name: {
      "zh-tw": "經濟四菜一湯",
      "en": "Economical Set: Four Dishes with One Soup"
    },
    price: {
      "zh-tw": "1350元",
      "en": "NT$1350"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蘿蔔排骨湯。附上四碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Radish and Pork Rib Soup. Served with four bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合四",
      "en": "set 4"
    },
    img: "assets/img/menu/set/e4.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se4"
  },
  {
    name: {
      "zh-tw": "經濟五菜一湯",
      "en": "Economical Set: Five Dishes with One Soup"
    },
    price: {
      "zh-tw": "1650元",
      "en": "NT$1650"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、蘿蔔排骨湯。附上五碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Radish and Pork Rib Soup. Served with five bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: { "zh-tw": "合五", "en": "set 5" },
    img: "assets/img/menu/set/e5.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se5"
  },
  {
    name: {
      "zh-tw": "經濟六菜一湯",
      "en": "Economical Set: Six Dishes with One Soup"
    },
    price: {
      "zh-tw": "1900元",
      "en": "NT$1900"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蘿蔔排骨湯。附上六碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Radish and Pork Rib Soup. Served with six bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合六",
      "en": "set 6"
    },
    img: "assets/img/menu/set/e6.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se6"
  },
  {
    name: {
      "zh-tw": "經濟七菜一湯",
      "en": "Economical Set: Seven Dishes with One Soup"
    },
    price: {
      "zh-tw": "2100元",
      "en": "NT$2100"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、蘿蔔排骨湯。附上七碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Radish and Pork Rib Soup. Served with seven bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合七",
      "en": "set 7"
    },
    img: "assets/img/menu/set/e7.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se7"
  },
  {
    name: {
      "zh-tw": "經濟八菜一湯",
      "en": "Economical Set: Eight Dishes with One Soup"
    },
    price: {
      "zh-tw": "2400元",
      "en": "NT$2400"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、蘿蔔排骨湯。附上八碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Radish and Pork Rib Soup. Served with eight bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合八",
      "en": "set 8"
    },
    img: "assets/img/menu/set/e8.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se8"
  },
  {
    name: {
      "zh-tw": "經濟九菜一湯",
      "en": "Economical Set: Nine Dishes with One Soup"
    },
    price: {
      "zh-tw": "2600元",
      "en": "NT$2600"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、蘿蔔排骨湯。附上九碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Radish and Pork Rib Soup. Served with nine bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: { "zh-tw": "合九", "en": "set 9" },
    img: "assets/img/menu/set/e9.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se9"
  },
  {
    name: {
      "zh-tw": "經濟十菜一湯",
      "en": "Economical Set: Ten Dishes with One Soup"
    },
    price: {
      "zh-tw": "2800元",
      "en": "NT$2800"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、蘿蔔排骨湯。附上十碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Radish and Pork Rib Soup. Served with ten bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合十",
      "en": "set 10"
    },
    img: "assets/img/menu/set/e10.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se10"
  },
  {
    name: {
      "zh-tw": "經濟十一菜一湯",
      "en": "Economical Set: Eleven Dishes with One Soup"
    },
    price: {
      "zh-tw": "3100元",
      "en": "NT$3100"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Stir-Fried White Shrimp, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蘿蔔排骨湯。附上十一碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Stir-Fried White Shrimp, Radish and Pork Rib Soup. Served with eleven bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合十一",
      "en": "set 11"
    },
    img: "assets/img/menu/set/e11.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se11"
  },
  {
    name: {
      "zh-tw": "經濟十二菜一湯",
      "en": "Economical Set: Twelve Dishes with One Soup"
    },
    price: {
      "zh-tw": "3300元",
      "en": "NT$3300"
    },
    description: {
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蛤蠣炒絲瓜、蘿蔔排骨湯",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Stir-Fried White Shrimp, Stir-Fried Loofah with Clams, Radish and Pork Rib Soup"
    },
    detail:{
      "zh-tw": "鋼管雞、翅杏仔骨、腱炒番茄、和風脆豆腐、蒸魚、東坡肉、蟹肉沙拉、山藥雙拼、薑絲大腸、甜豆燴蝦仁、清炒白蝦、蛤蠣炒絲瓜、蘿蔔排骨湯。附上十二碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, Stir-Fried Wild Spiny Stems, Stir-Fried Chicken Tendons with Tomatoes, Japanese-Style Peanut Tofu with Savory Sauce, Steamed Fish, Dongpo Pork, Crab Meat Salad, Yam & Mochi Duo, Stir-Fried Pork Intestines with Ginger, Stir-Fried Shrimp with Sweet Peas, Stir-Fried White Shrimp, Stir-Fried Loofah with Clams, Radish and Pork Rib Soup. Served with twelve bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "合十二",
      "en": "set 12"
    },
    img: "assets/img/menu/set/e12.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "se12"
  },
  {
    name: {
      "zh-tw": "團體六菜一湯",
      "en": "Deluxe Set: Six Dishes with One Soup"
    },
    price: {
      "zh-tw": "3200元",
      "en": "NT$3200"
    },
    description: {
      "zh-tw": "鋼管雞、蒸(糖醋黃)魚、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯",
      "en": "Roasted Steel-Pole Chicken, (Steamed Fish / Sweet and Sour Crispy Yellow Croaker), Dongpo Pork, Stir-Fried Cabbage with Sakura Shrimp, Stir-Fried Crab Meat with Betel Palm Heart, Shark Fin Broth, Pork Rib Soup with Yam and Pumpkin"
    },
    detail:{
      "zh-tw": "鋼管雞、蒸(糖醋黃)魚、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯。附上六碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, (Steamed Fish / Sweet and Sour Crispy Yellow Croaker), Dongpo Pork, Stir-Fried Cabbage with Sakura Shrimp, Stir-Fried Crab Meat with Betel Palm Heart, Shark Fin Broth, Pork Rib Soup with Yam and Pumpkin. Served with six bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "團六",
      "en": "Deluxe 6"
    },
    img: "assets/img/menu/set/d6.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "sd6"
  },
  {
    name: {
      "zh-tw": "團體十二菜一湯",
      "en": "Deluxe Set: Twelve Dishes with One Soup"
    },
    price: {
      "zh-tw": "5300元",
      "en": "NT$5300"
    },
    description: {
      "zh-tw": "鋼管雞、蒸(糖醋黃)魚、山藥雙拼、蟹肉沙拉、日本扇貝、清炒白蝦、清炒鴕鳥肉、甜豆燴蝦仁、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯",
      "en": "Roasted Steel-Pole Chicken, (Steamed Fish / Sweet and Sour Crispy Yellow Croaker), Yam & Mochi Duo, Crab Meat Salad, Japanese Scallops, Stir-Fried White Shrimp, Stir-Fried Bok Choy with Ostrich Meat, Stir-Fried Shrimp with Sweet Peas, Dongpo Pork, Stir-Fried Cabbage with Sakura Shrimp, Stir-Fried Crab Meat with Betel Palm Heart, Shark Fin Broth, Pork Rib Soup with Yam and Pumpkin"
    },
    detail:{
      "zh-tw": "鋼管雞、蒸(糖醋黃)魚、山藥雙拼、蟹肉沙拉、日本扇貝、清炒白蝦、清炒鴕鳥肉、甜豆燴蝦仁、東坡肉、櫻花蝦高麗菜、半天筍花燴蟹肉、魚翅羹、山藥南瓜排骨湯。附上十二碗白飯，並贈送當日水果和當日甜點。",
      "en": "Roasted Steel-Pole Chicken, (Steamed Fish / Sweet and Sour Crispy Yellow Croaker), Yam & Mochi Duo, Crab Meat Salad, Japanese Scallops, Stir-Fried White Shrimp, Stir-Fried Bok Choy with Ostrich Meat, Stir-Fried Shrimp with Sweet Peas, Dongpo Pork, Stir-Fried Cabbage with Sakura Shrimp, Stir-Fried Crab Meat with Betel Palm Heart, Shark Fin Broth, Pork Rib Soup with Yam and Pumpkin. Served with twelve bowls of rice, plus complimentary fruit of the day and dessert of the day."
    },
    alt: {
      "zh-tw": "團十二",
      "en": "Deluxe 12"
    },
    img: "assets/img/menu/set/d12.avif",
    filter: "filter-set",
    onclick: "",
    categories: ["set", "all"],
    number: "sd12"
  },

];




