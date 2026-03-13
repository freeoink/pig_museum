import type {
  AdminCredentials,
  Category,
  Message,
  MuseumItem,
  Order,
  SiteSettings
} from "../types";

export const categories: Category[] = [
  {
    id: "treasure",
    name: "镇馆之宝",
    nameEn: "Treasures",
    description: "馆藏最珍贵的精品，代表小猪博物馆的最高收藏水准",
    icon: "Crown"
  },
  {
    id: "antique",
    name: "古董收藏",
    nameEn: "Antiques",
    description: "历经岁月沉淀的古老猪形艺术品，承载着历史的记忆",
    icon: "History"
  },
  {
    id: "contemporary",
    name: "当代艺术",
    nameEn: "Contemporary",
    description: "现代艺术家创作的猪主题作品，展现当代审美",
    icon: "Palette"
  },
  {
    id: "folk",
    name: "民俗民艺",
    nameEn: "Folk Art",
    description: "民间传统工艺制作的猪形器物，充满生活气息",
    icon: "Heart"
  },
  {
    id: "western",
    name: "欧美艺术",
    nameEn: "Western Art",
    description: "来自欧美国家的猪主题艺术品，展现异域风情",
    icon: "Globe"
  },
  {
    id: "japanese",
    name: "日本艺术",
    nameEn: "Japanese Art",
    description: "日本风格的猪形工艺品，精致典雅",
    icon: "Cherry"
  },
  {
    id: "wall",
    name: "壁挂艺术",
    nameEn: "Wall Art",
    description: "可悬挂展示的猪主题装饰艺术品",
    icon: "Frame"
  }
];

export const items: MuseumItem[] = [
  {
    id: "1",
    name: "搪瓷招财猪",
    category: "antique",
    country: "中国",
    era: "1980s",
    collectionDate: "2023-05-10",
    material: "搪瓷",
    dimensions: "12×8×10",
    description:
      "80年代工厂出品，红底白猪，寓意招财进宝，保存完好。这件搪瓷猪来自浙江的一家老工厂，是当时流行的居家摆件。",
    status: "available",
    price: 120,
    images: ["/images/item-enamel-pig.png"],
    tags: ["搪瓷", "招财", "复古", "80年代"],
    story: "这件搪瓷猪是我从一位老工人手中收来的。",
    isRecommended: true,
    isNew: false
  },
  {
    id: "2",
    name: "陶瓷存钱猪",
    category: "folk",
    country: "中国",
    era: "1990s",
    collectionDate: "2023-06-15",
    material: "陶瓷",
    dimensions: "10×9×11",
    description:
      "手工绘制花纹，底部可开盖存钱，陪伴两代人的成长。这件青花瓷猪采用传统景德镇工艺制作。",
    status: "collection",
    price: 0,
    images: ["/images/item-ceramic-pig.png"],
    tags: ["陶瓷", "存钱", "童年", "青花"],
    story: "这是我童年时的存钱罐。",
    isRecommended: false,
    isNew: false
  },
  {
    id: "3",
    name: "布艺小猪抱枕",
    category: "contemporary",
    country: "中国",
    era: "2015",
    collectionDate: "2024-01-08",
    material: "棉麻",
    dimensions: "35×35×15",
    description:
      "手工缝制，采用植物染布，柔软亲肤，断舍离前的最爱。这件作品出自独立设计师之手。",
    status: "sold",
    price: 0,
    images: ["/images/item-fabric-pig.png"],
    tags: ["布艺", "手工", "断舍离", "植物染"],
    story: "这件抱枕曾是我沙发上的常客。",
    isRecommended: false,
    isNew: true
  },
  {
    id: "4",
    name: "铁皮音乐猪",
    category: "wall",
    country: "德国",
    era: "1970s",
    collectionDate: "2023-09-20",
    material: "铁皮/机械",
    dimensions: "15×10×8",
    description: "上弦可播放简单旋律，表面烤漆略有斑驳，工业风装饰佳品。",
    status: "available",
    price: 280,
    images: ["/images/item-tin-pig.png"],
    tags: ["铁皮", "音乐", "欧美", "机械"],
    story: "从柏林的一家古董店淘来。",
    isRecommended: true,
    isNew: false
  },
  {
    id: "5",
    name: "木雕小猪摆件",
    category: "japanese",
    country: "日本",
    era: "2000s",
    collectionDate: "2024-02-01",
    material: "榉木",
    dimensions: "9×6×5",
    description: "北海道匠人雕刻，线条圆润，表面涂天然木蜡油。",
    status: "available",
    price: 350,
    images: ["/images/item-wood-pig.png"],
    tags: ["木雕", "日本", "工艺", "手工"],
    story: "在北海道旅行时购入。",
    isRecommended: true,
    isNew: true
  },
  {
    id: "6",
    name: "水晶切割猪",
    category: "western",
    country: "奥地利",
    era: "2010s",
    collectionDate: "2024-03-15",
    material: "水晶玻璃",
    dimensions: "8×5×6",
    description: "水晶切割工艺，折射七彩光芒，现代装饰艺术精品。",
    status: "available",
    price: 580,
    images: ["/images/item-glass-pig.png"],
    tags: ["水晶", "欧美", "现代", "装饰"],
    story: "来自维也纳收藏家。",
    isRecommended: true,
    isNew: true
  },
  {
    id: "7",
    name: "青铜猪钮印章",
    category: "treasure",
    country: "中国",
    era: "清代",
    collectionDate: "2023-08-20",
    material: "青铜",
    dimensions: "3×3×4",
    description: "清代文人书房用品，青铜铸造，底部篆刻“福寿”二字。",
    status: "collection",
    price: 0,
    images: ["/images/item-bronze-pig.png"],
    tags: ["青铜", "印章", "文房", "清代"],
    story: "从资深藏家手中转让而来。",
    isRecommended: true,
    isNew: false
  },
  {
    id: "8",
    name: "软陶花猪",
    category: "contemporary",
    country: "中国",
    era: "2022",
    collectionDate: "2024-04-10",
    material: "软陶",
    dimensions: "12×10×10",
    description: "当代软陶艺术家手工制作，色彩鲜艳，造型可爱。",
    status: "available",
    price: 168,
    images: ["/images/item-clay-pig.png"],
    tags: ["软陶", "手工", "当代", "艺术"],
    story: "支持本土艺术家的作品。",
    isRecommended: false,
    isNew: true
  },
  {
    id: "9",
    name: "像素艺术猪",
    category: "contemporary",
    country: "美国",
    era: "2023",
    collectionDate: "2024-05-01",
    material: "数字艺术/亚克力",
    dimensions: "30×30×2",
    description: "8-bit 复古游戏风格像素艺术，数字藏品实体化。",
    status: "available",
    price: 220,
    images: ["/images/item-pixel-pig.png"],
    tags: ["像素", "数字艺术", "当代", "游戏"],
    story: "美国数字艺术家限量实体版本。",
    isRecommended: false,
    isNew: true
  }
];

export const initialOrders: Order[] = [
  {
    id: "ORD001",
    itemId: "3",
    itemName: "布艺小猪抱枕",
    buyerName: "张小美",
    buyerEmail: "zhangxiaomei@example.com",
    buyerPhone: "138****8888",
    buyerAddress: "上海市浦东新区***",
    price: 168,
    status: "completed",
    createdAt: "2024-01-15",
    paidAt: "2024-01-15",
    shippedAt: "2024-01-16",
    completedAt: "2024-01-18"
  },
  {
    id: "ORD002",
    itemId: "5",
    itemName: "木雕小猪摆件",
    buyerName: "李大明",
    buyerEmail: "lidaming@example.com",
    buyerPhone: "139****9999",
    buyerAddress: "北京市海淀区***",
    price: 350,
    status: "shipped",
    createdAt: "2024-02-05",
    paidAt: "2024-02-05",
    shippedAt: "2024-02-06"
  },
  {
    id: "ORD003",
    itemId: "1",
    itemName: "搪瓷招财猪",
    buyerName: "王小雨",
    buyerEmail: "wangxiaoyu@example.com",
    buyerPhone: "137****6666",
    buyerAddress: "广州市天河区***",
    price: 120,
    status: "paid",
    createdAt: "2024-02-20",
    paidAt: "2024-02-20"
  }
];

export const initialMessages: Message[] = [
  {
    id: "MSG001",
    name: "陈阿姨",
    email: "chenayi@example.com",
    content: "小时候家里也有类似的小猪存钱罐，看了很感动！",
    createdAt: "2024-03-02",
    isReplied: true,
    reply: "谢谢您的留言，欢迎有空来线上常逛逛。",
    replyAt: "2024-03-03"
  },
  {
    id: "MSG002",
    name: "小宇",
    email: "xiaoyu@example.com",
    content: "请问像素艺术猪还有库存吗？",
    createdAt: "2024-03-10",
    isReplied: false
  }
];

export const defaultSiteSettings: SiteSettings = {
  siteName: "网上小猪博物馆",
  siteNameEn: "Pig Museum Online",
  contactEmail: "museum@pig.example.com",
  contactPhone: "400-800-8888",
  wechatId: "pig-museum",
  wechatPayEnabled: true,
  alipayEnabled: true,
  paypalEnabled: false
};

export const adminCredentials: AdminCredentials = {
  username: "freeoink",
  password: "ustb1115"
};
