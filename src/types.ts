export type Category = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
};

export type ItemStatus = "available" | "sold" | "collection";

export type MuseumItem = {
  id: string;
  name: string;
  category: string;
  country: string;
  era: string;
  collectionDate: string;
  material: string;
  dimensions: string;
  description: string;
  status: ItemStatus;
  price: number;
  images: string[];
  tags: string[];
  story?: string;
  isRecommended?: boolean;
  isNew?: boolean;
};

export type OrderStatus = "pending" | "paid" | "shipped" | "completed" | "cancelled";

export type Order = {
  id: string;
  itemId: string;
  itemName: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  buyerAddress: string;
  price: number;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
  shippedAt?: string;
  completedAt?: string;
};

export type Message = {
  id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
  isReplied: boolean;
  reply?: string;
  replyAt?: string;
};

export type SiteSettings = {
  siteName: string;
  siteNameEn: string;
  contactEmail: string;
  contactPhone: string;
  wechatId: string;
  wechatPayEnabled: boolean;
  alipayEnabled: boolean;
  paypalEnabled: boolean;
};

export type AdminCredentials = {
  username: string;
  password: string;
};
