import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import {
  adminCredentials,
  categories,
  defaultSiteSettings,
  initialMessages,
  initialOrders,
  items
} from "../data/mockData";
import type { Message, MuseumItem, Order, OrderStatus, SiteSettings } from "../types";

// 定义 localStorage 的键名常量
const STORAGE_KEYS = {
  ITEMS: 'pig_museum_items',
  ORDERS: 'pig_museum_orders',
  MESSAGES: 'pig_museum_messages',
  FAVORITES: 'pig_museum_favorites',
  SETTINGS: 'pig_museum_settings',
};

type AppContextType = {
  categories: typeof categories;
  items: MuseumItem[];
  orders: Order[];
  messages: Message[];
  favorites: string[];
  siteSettings: SiteSettings;
  isAdminLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  toggleFavorite: (itemId: string) => void;
  updateItem: (item: MuseumItem) => void;
  addItem: (item: MuseumItem) => void;
  removeItem: (itemId: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  replyMessage: (messageId: string, reply: string) => void;
  toggleMessageReplied: (messageId: string) => void;
  deleteMessage: (messageId: string) => void;
  updateSiteSettings: (next: SiteSettings) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  // ---------- 初始化 state（优先从 localStorage 读取） ----------
  const [museumItems, setMuseumItems] = useState<MuseumItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.ITEMS);
    return stored ? JSON.parse(stored) : items;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return stored ? JSON.parse(stored) : initialOrders;
  });

  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return stored ? JSON.parse(stored) : initialMessages;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return stored ? JSON.parse(stored) : [];
  });

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return stored ? JSON.parse(stored) : defaultSiteSettings;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // 登录状态不持久化

  // ---------- 每当 state 变化，自动保存到 localStorage ----------
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(museumItems));
  }, [museumItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(siteSettings));
  }, [siteSettings]);

  // ---------- 以下是原有函数，保持不变 ----------
  const login = useCallback((username: string, password: string) => {
    const ok = username === adminCredentials.username && password === adminCredentials.password;
    setIsAdminLoggedIn(ok);
    return ok;
  }, []);

  const logout = useCallback(() => {
    setIsAdminLoggedIn(false);
  }, []);

  const toggleFavorite = useCallback((itemId: string) => {
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  }, []);

  const updateItem = useCallback((nextItem: MuseumItem) => {
    setMuseumItems((prev) => prev.map((item) => (item.id === nextItem.id ? nextItem : item)));
  }, []);

  const addItem = useCallback((nextItem: MuseumItem) => {
    setMuseumItems((prev) => [...prev, nextItem]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setMuseumItems((prev) => prev.filter((item) => item.id !== itemId));
    setFavorites((prev) => prev.filter((id) => id !== itemId));
  }, []);

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status } : order)));
  }, []);

  const replyMessage = useCallback((messageId: string, reply: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              isReplied: true,
              reply,
              replyAt: new Date().toISOString().slice(0, 10)
            }
          : msg
      )
    );
  }, []);

  const toggleMessageReplied = useCallback((messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              isReplied: !msg.isReplied,
              reply: msg.isReplied ? undefined : msg.reply,
              replyAt: msg.isReplied ? undefined : msg.replyAt
            }
          : msg
      )
    );
  }, []);

  const deleteMessage = useCallback((messageId: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
  }, []);

  const updateSiteSettings = useCallback((next: SiteSettings) => {
    setSiteSettings(next);
  }, []);

  const value = useMemo<AppContextType>(
    () => ({
      categories,
      items: museumItems,
      orders,
      messages,
      favorites,
      siteSettings,
      isAdminLoggedIn,
      login,
      logout,
      toggleFavorite,
      updateItem,
      addItem,
      removeItem,
      updateOrderStatus,
      replyMessage,
      toggleMessageReplied,
      deleteMessage,
      updateSiteSettings
    }),
    [
      museumItems,
      orders,
      messages,
      favorites,
      siteSettings,
      isAdminLoggedIn,
      login,
      logout,
      toggleFavorite,
      updateItem,
      addItem,
      removeItem,
      updateOrderStatus,
      replyMessage,
      toggleMessageReplied,
      deleteMessage,
      updateSiteSettings
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return ctx;
}
