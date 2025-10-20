import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    games: 'Games',
    leaderboard: 'Leaderboard',
    becomeASeller: 'Become a Seller',
    login: 'Login',
    register: 'Register',
    
    // Hero
    welcomeMessage: 'Welcome to Nexo Marketplace',
    heroTitle: 'Your Digital Gaming Marketplace',
    heroDescription: 'Buy and sell game accounts, social media profiles, and digital products in a secure, trusted marketplace powered by cutting-edge technology.',
    exploreProducts: 'Explore Products',
    
    // Common
    addToCart: 'Add to Cart',
    price: 'Price',
    category: 'Category',
    rating: 'Rating',
    search: 'Search',
    filter: 'Filter',
    sortBy: 'Sort By',
    allCategories: 'All Categories',
    loadMore: 'Load More',
    
    // Seller
    listProduct: 'List Product',
    sellOn: 'Sell on Nexo',
    sellerDashboard: 'Seller Dashboard',
    
    // Account
    myAccount: 'My Account',
    dashboard: 'Dashboard',
    profile: 'Profile',
    orders: 'Orders',
    wallet: 'Wallet',
    notifications: 'Notifications',
    billing: 'Billing',
    logout: 'Logout',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    games: 'الألعاب',
    leaderboard: 'لوحة المتصدرين',
    becomeASeller: 'كن بائعاً',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    
    // Hero
    welcomeMessage: 'مرحباً بك في سوق نيكسو',
    heroTitle: 'سوقك الرقمي للألعاب',
    heroDescription: 'قم بشراء وبيع حسابات الألعاب وملفات التواصل الاجتماعي والمنتجات الرقمية في سوق آمن وموثوق مدعوم بأحدث التقنيات.',
    exploreProducts: 'استكشف المنتجات',
    
    // Common
    addToCart: 'أضف للسلة',
    price: 'السعر',
    category: 'الفئة',
    rating: 'التقييم',
    search: 'بحث',
    filter: 'تصفية',
    sortBy: 'ترتيب حسب',
    allCategories: 'جميع الفئات',
    loadMore: 'تحميل المزيد',
    
    // Seller
    listProduct: 'إضافة منتج',
    sellOn: 'البيع على نيكسو',
    sellerDashboard: 'لوحة البائع',
    
    // Account
    myAccount: 'حسابي',
    dashboard: 'لوحة التحكم',
    profile: 'الملف الشخصي',
    orders: 'الطلبات',
    wallet: 'المحفظة',
    notifications: 'الإشعارات',
    billing: 'الفواتير',
    logout: 'تسجيل الخروج',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
