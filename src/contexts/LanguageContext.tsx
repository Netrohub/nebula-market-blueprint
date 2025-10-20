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
    about: 'About',
    help: 'Help Center',
    
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
    filters: 'Filters',
    sortBy: 'Sort By',
    allCategories: 'All Categories',
    loadMore: 'Load More',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    required: 'Required',
    optional: 'Optional',
    
    // Products
    allProducts: 'All Products',
    browseProducts: 'Browse thousands of verified digital products and accounts',
    searchPlaceholder: 'Search for products, accounts, or services...',
    showing: 'Showing',
    of: 'of',
    productsText: 'products',
    noProductsFound: 'No products found matching your filters.',
    featured: 'Featured',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    highestRated: 'Highest Rated',
    newestFirst: 'Newest First',
    
    // Price Ranges
    allPrices: 'All Prices',
    under100: 'Under $100',
    range100to300: '$100 - $300',
    range300to500: '$300 - $500',
    over500: 'Over $500',
    
    // Categories
    socialMedia: 'Social Media',
    gaming: 'Gaming',
    digitalServices: 'Digital Services',
    software: 'Software',
    entertainment: 'Entertainment',
    
    // Games Page
    gamingMarketplace: 'Gaming Marketplace',
    gameAccounts: 'Game Accounts',
    gameAccountsDesc: 'Buy premium game accounts across all major platforms. Secure, verified, and ready to play.',
    searchGames: 'Search for game accounts, platforms, or titles...',
    activeListings: 'Active Listings',
    successRate: 'Success Rate',
    support247: '24/7 Support',
    browseByPlatform: 'Browse by Platform',
    choosePlatform: 'Choose your gaming platform',
    featuredAccounts: 'Featured Accounts',
    premiumVerified: 'Premium verified accounts',
    viewAll: 'View All',
    verifiedAccounts: 'Verified Accounts',
    verifiedAccountsDesc: 'All accounts are verified and checked before listing',
    instantAccess: 'Instant Access',
    instantAccessDesc: 'Get your account details immediately after purchase',
    moneyBack: 'Money Back',
    moneyBackDesc: '7-day money back guarantee on all purchases',
    accounts: 'accounts',
    
    // Seller
    listProduct: 'List Product',
    sellOn: 'Sell on Nexo',
    sellerDashboard: 'Seller Dashboard',
    startSellingOn: 'Start Selling on',
    chooseWhatToSell: 'What would you like to sell?',
    sellerOnboardingDesc: 'Choose what you want to sell and get started in minutes. No upfront costs, just list and earn.',
    trustedBy: 'Trusted by 10,000+ Sellers',
    quickSetup: 'Quick Setup',
    securePayments: 'Secure Payments',
    lowFees: 'Low Fees',
    socialMediaAccounts: 'Social Media Accounts',
    gamingAccounts: 'Gaming Accounts',
    sellSocialDesc: 'Sell Instagram, TikTok, YouTube, Twitter, and other social media accounts',
    sellGamingDesc: 'Sell Steam, PlayStation, Xbox, Epic Games, and other gaming accounts',
    listSocialAccount: 'List Social Account',
    listGamingAccount: 'List Gaming Account',
    whySellOnNexo: 'Why Sell on Nexo?',
    fastPayouts: 'Fast Payouts',
    fastPayoutsDesc: 'Get paid quickly with multiple withdrawal options',
    buyerProtection: 'Buyer Protection',
    buyerProtectionDesc: 'Secure transactions with built-in dispute resolution',
    largeAudience: 'Large Audience',
    largeAudienceDesc: 'Reach thousands of active buyers daily',
    
    // Seller Forms
    accountInformation: 'Account Information',
    title: 'Title',
    username: 'Username',
    platform: 'Platform',
    game: 'Game',
    accountDescription: 'Account Description',
    selectPlatform: 'Select platform',
    selectGame: 'Select game',
    configurationSetup: 'Configuration Setup',
    setupInstructions: 'Setup Instructions',
    phoneNumber: 'Phone Number',
    ifApplicable: 'If Applicable',
    sellerType: 'Seller Type',
    individual: 'Individual',
    business: 'Business',
    verifiedSeller: 'Verified Seller',
    pricingInformation: 'Pricing Information',
    discountPrice: 'Discount Price',
    discountDescription: 'Discount Description',
    accountScreenshots: 'Account Screenshots',
    uploadImage: 'Upload Image',
    termsAndConditions: 'Terms & Conditions',
    submitAccount: 'Submit Account',
    accountListedSuccess: 'Account Listed Successfully',
    accountSubmittedReview: 'Your account has been submitted for review',
    termsRequired: 'Terms Required',
    agreeToTerms: 'Please agree to all terms and conditions',
    
    // Form Placeholders
    enterUsername: 'Enter username only',
    provideDescription: 'Provide detailed description of your account',
    enterInstructions: 'Enter instructions (or accounting or banking details)',
    enterPhoneNumber: 'Enter phone number (e.g., +1234567890)',
    enterPrice: 'Enter your price',
    enterDiscountPrice: 'Enter discount price (optional)',
    selectSellerType: 'Select seller type',
    uploadScreenshots: 'Upload screenshots or images of the account (max 6 images)',
    
    // Instructions
    socialDescriptionHelp: 'If you want to submit additional details in one of the categories (Snapchat - TikTok - Pubg - Facebook), you must add the exact name of the category. Otherwise, please just describe it briefly, as well as clarify whether or not the account has 2FA. It is recommended to mention some of the account\'s problems if they exist.',
    configInstructionsHelp: 'Briefly describe the product, whether it contains an email, phone number, or has a double (2FA)',
    pricingWarning: 'If you want to create any external communication outside the platform in an attempt to scam, appeal, or scam, this will expose your account to theft',
    noExternalLinks: 'Please do not include external links in the description field, as this may result in account suspension and possible exposure of your account to theft',
    setupInstructionsDesc: 'Instructions to wait for buyer to buy and after buyer confirms purchase',
    specialOffer: 'Special Offer',
    specialOfferDesc: 'Get 10% free offers on top 100 users who confirm their bids and provide sales continuity',
    
    // Terms
    term1: 'I pledge to only advertise available products and not to sell prohibited or inappropriate products',
    term2: 'I fully assume legal liability for any lawsuit arising from the date of sale or breach of the legal buyer and seller agreement which guarantees the right to withdraw from the sale of electronic crimes',
    securityCommitment: 'We are committed to providing a secure platform for buying and selling accounts. You must complete these steps to complete your account addition.',
    
    // Account
    myAccount: 'My Account',
    dashboard: 'Dashboard',
    profile: 'Profile',
    orders: 'Orders',
    wallet: 'Wallet',
    notifications: 'Notifications',
    billing: 'Billing',
    logout: 'Logout',
    
    // About Page
    aboutUs: 'About Us',
    empoweringDigitalCommerce: 'Empowering Digital Commerce',
    aboutDescription: 'Nexo is the premier marketplace for digital gaming assets. We connect buyers and sellers in a secure, transparent environment where trust and quality come first.',
    activeUsers: 'Active Users',
    productsSold: 'Products Sold',
    countries: 'Countries',
    ourStory: 'Our Story',
    buildingFuture: 'Building the future of digital marketplaces',
    storyParagraph1: 'Founded in 2024, Nexo was born from a simple observation: the digital gaming marketplace was fragmented, insecure, and lacked the trust that modern commerce demands.',
    storyParagraph2: 'We set out to change that. By combining cutting-edge technology, rigorous verification processes, and a customer-first approach, we created a platform where trading digital assets is as simple and secure as it should be.',
    storyParagraph3: 'Today, Nexo is more than just a marketplace - it\'s a community. A place where gamers connect, trade grows, and digital commerce thrives in a safe, transparent environment.',
    ourValues: 'Our Values',
    principlesGuide: 'The principles that guide everything we do',
    securityFirst: 'Security First',
    securityFirstDesc: 'Your safety is our top priority. We use industry-leading security measures to protect every transaction.',
    lightningFast: 'Lightning Fast',
    lightningFastDesc: 'Instant delivery of digital products. No waiting, no delays - get what you paid for immediately.',
    qualityAssured: 'Quality Assured',
    qualityAssuredDesc: 'Every product and seller is verified. We maintain the highest standards in the marketplace.',
    communityDriven: 'Community Driven',
    communityDrivenDesc: 'Built by gamers, for gamers. We listen to our community and constantly improve based on your feedback.',
    ourMission: 'Our Mission',
    missionStatement: 'To create the world\'s most trusted digital marketplace where gamers can buy, sell, and trade with absolute confidence, knowing their transactions are secure, their assets are verified, and their community values integrity above all else.',

    // Pricing Page
    sellerPlans: 'Seller Plans',
    startSellingToday: 'Start Selling Today',
    choosePerfectPlan: 'Choose the perfect plan for your business. Upgrade or downgrade anytime.',
    mostPopular: 'MOST POPULAR',
    free: 'Free',
    forever: 'forever',
    perfectForGettingStarted: 'Perfect for getting started',
    pro: 'Pro',
    perMonth: 'per month',
    forSeriousSellers: 'For serious sellers',
    elite: 'Elite',
    forTopTierSellers: 'For top-tier sellers',
    getStarted: 'Get Started',
    upgradeNow: 'Upgrade Now',
    whatsIncluded: 'What\'s included:',
    listUpTo3Products: 'List up to 3 products',
    transactionFee5: '5% transaction fee',
    basicSellerProfile: 'Basic seller profile',
    communitySupport: 'Community support',
    standardVerification: 'Standard verification',
    featuredListings: 'Featured listings',
    prioritySupport: 'Priority support',
    advancedAnalytics: 'Advanced analytics',
    customBranding: 'Custom branding',
    unlimitedProductListings: 'Unlimited product listings',
    transactionFee3: '3% transaction fee',
    enhancedSellerProfile: 'Enhanced seller profile',
    fastTrackVerification: 'Fast-track verification',
    featuredListings5PerMonth: 'Featured listings (5/month)',
    customProfileBanner: 'Custom profile banner',
    dedicatedAccountManager: 'Dedicated account manager',
    apiAccess: 'API access',
    everythingInPro: 'Everything in Pro',
    transactionFee1_5: '1.5% transaction fee',
    verifiedBadge: 'Verified badge',
    unlimitedFeaturedListings: 'Unlimited featured listings',
    earlyAccessToFeatures: 'Early access to features',
    premiumSupport24_7: 'Premium support (24/7)',
    promotedInLeaderboard: 'Promoted in leaderboard',
    faqTitle: 'Frequently Asked Questions',
    faqQuestion1: 'Can I change plans anytime?',
    faqAnswer1: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    faqQuestion2: 'What payment methods do you accept?',
    faqAnswer2: 'We accept all major credit cards, PayPal, and cryptocurrency payments.',
    faqQuestion3: 'Is there a refund policy?',
    faqAnswer3: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your plan.',

    // Login Page
    welcomeBack: 'Welcome Back',
    signInToAccount: 'Sign in to your Nexo account',
    emailAddress: 'Email Address',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    cloudflareTurnstile: '🔒 Cloudflare Turnstile CAPTCHA',
    signIn: 'Sign In',
    orContinueWith: 'Or continue with',
    dontHaveAccount: 'Don\'t have an account?',

    // Register Page
    joinNexoMarketplace: 'Join Nexo marketplace today',
    chooseUsername: 'Choose a username',
    createStrongPassword: 'Create a strong password',
    passwordRequirements: 'Must be at least 8 characters with numbers and symbols',
    confirmPassword: 'Confirm Password',
    confirmYourPassword: 'Confirm your password',
    iAgreeToThe: 'I agree to the',
    and: 'and',
    alreadyHaveAccount: 'Already have an account?',

    // MobileNav
    wishlist: 'Wishlist',
    
    // Footer
    marketplace: 'Marketplace',
    allRightsReserved: 'All rights reserved',
    company: 'Company',
    support: 'Support',
    legal: 'Legal',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    
    // Leaderboard
    topPerformers: 'Top Performers',
    leaderboardDesc: 'Discover the top sellers, most popular products, and active buyers in the Nexo community',
    topSellers: 'Top Sellers',
    topProducts: 'Top Products',
    topBuyers: 'Top Buyers',
    sales: 'sales',
    totalRevenue: 'Total Revenue',
    sold: 'sold',
    purchases: 'purchases',
    totalSpent: 'Total Spent',
    by: 'by',
    refundPolicy: 'Refund Policy',
    disputeCenter: 'Dispute Center',
    verifiedSellers: 'Verified Sellers',
    builtForGamers: 'Built with 💜 for gamers',
    sellOnNexo: 'Sell on Nexo',
    legalAndSupport: 'Legal & Support',
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
    about: 'حول',
    help: 'مركز المساعدة',
    
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
    filters: 'الفلاتر',
    sortBy: 'ترتيب حسب',
    allCategories: 'جميع الفئات',
    loadMore: 'تحميل المزيد',
    submit: 'إرسال',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    back: 'رجوع',
    next: 'التالي',
    previous: 'السابق',
    required: 'مطلوب',
    optional: 'اختياري',
    
    // Products
    allProducts: 'جميع المنتجات',
    browseProducts: 'تصفح آلاف المنتجات الرقمية والحسابات الموثقة',
    searchPlaceholder: 'ابحث عن منتجات أو حسابات أو خدمات...',
    showing: 'عرض',
    of: 'من',
    productsText: 'منتج',
    noProductsFound: 'لم يتم العثور على منتجات مطابقة للفلاتر.',
    featured: 'مميز',
    priceLowToHigh: 'السعر: من الأقل للأعلى',
    priceHighToLow: 'السعر: من الأعلى للأقل',
    highestRated: 'الأعلى تقييماً',
    newestFirst: 'الأحدث أولاً',
    
    // Price Ranges
    allPrices: 'جميع الأسعار',
    under100: 'أقل من 100$',
    range100to300: '100$ - 300$',
    range300to500: '300$ - 500$',
    over500: 'أكثر من 500$',
    
    // Categories
    socialMedia: 'وسائل التواصل الاجتماعي',
    gaming: 'الألعاب',
    digitalServices: 'الخدمات الرقمية',
    software: 'البرمجيات',
    entertainment: 'الترفيه',
    
    // Games Page
    gamingMarketplace: 'سوق الألعاب',
    gameAccounts: 'حسابات الألعاب',
    gameAccountsDesc: 'اشترِ حسابات ألعاب مميزة عبر جميع المنصات الرئيسية. آمنة وموثقة وجاهزة للعب.',
    searchGames: 'ابحث عن حسابات الألعاب أو المنصات أو الألقاب...',
    activeListings: 'قوائم نشطة',
    successRate: 'معدل النجاح',
    support247: 'دعم على مدار الساعة',
    browseByPlatform: 'تصفح حسب المنصة',
    choosePlatform: 'اختر منصة الألعاب الخاصة بك',
    featuredAccounts: 'حسابات مميزة',
    premiumVerified: 'حسابات موثقة مميزة',
    viewAll: 'عرض الكل',
    verifiedAccounts: 'حسابات موثقة',
    verifiedAccountsDesc: 'جميع الحسابات موثقة ومفحوصة قبل الإدراج',
    instantAccess: 'وصول فوري',
    instantAccessDesc: 'احصل على تفاصيل حسابك فوراً بعد الشراء',
    moneyBack: 'استرداد الأموال',
    moneyBackDesc: 'ضمان استرداد الأموال لمدة 7 أيام على جميع المشتريات',
    accounts: 'حسابات',
    
    // Seller
    listProduct: 'إضافة منتج',
    sellOn: 'البيع على نيكسو',
    sellerDashboard: 'لوحة البائع',
    startSellingOn: 'ابدأ البيع على',
    chooseWhatToSell: 'ماذا تريد أن تبيع؟',
    sellerOnboardingDesc: 'اختر ما تريد بيعه وابدأ في دقائق. لا توجد تكاليف مقدمة، فقط قم بالإدراج والربح.',
    trustedBy: 'موثوق به من قبل 10,000+ بائع',
    quickSetup: 'إعداد سريع',
    securePayments: 'مدفوعات آمنة',
    lowFees: 'رسوم منخفضة',
    socialMediaAccounts: 'حسابات وسائل التواصل الاجتماعي',
    gamingAccounts: 'حسابات الألعاب',
    sellSocialDesc: 'بيع حسابات إنستغرام وتيك توك ويوتيوب وتويتر وغيرها من وسائل التواصل الاجتماعي',
    sellGamingDesc: 'بيع حسابات ستيم وبلايستيشن وإكس بوكس وإيبك جيمز وغيرها من حسابات الألعاب',
    listSocialAccount: 'إدراج حساب تواصل اجتماعي',
    listGamingAccount: 'إدراج حساب ألعاب',
    whySellOnNexo: 'لماذا البيع على نيكسو؟',
    fastPayouts: 'مدفوعات سريعة',
    fastPayoutsDesc: 'احصل على أموالك بسرعة مع خيارات سحب متعددة',
    buyerProtection: 'حماية المشتري',
    buyerProtectionDesc: 'معاملات آمنة مع حل النزاعات المدمج',
    largeAudience: 'جمهور كبير',
    largeAudienceDesc: 'الوصول إلى الآلاف من المشترين النشطين يومياً',
    
    // Seller Forms
    accountInformation: 'معلومات الحساب',
    title: 'العنوان',
    username: 'اسم المستخدم',
    platform: 'المنصة',
    game: 'اللعبة',
    accountDescription: 'وصف الحساب',
    selectPlatform: 'اختر المنصة',
    selectGame: 'اختر اللعبة',
    configurationSetup: 'إعداد التكوين',
    setupInstructions: 'تعليمات الإعداد',
    phoneNumber: 'رقم الهاتف',
    ifApplicable: 'إن وجد',
    sellerType: 'نوع البائع',
    individual: 'فردي',
    business: 'تجاري',
    verifiedSeller: 'بائع موثق',
    pricingInformation: 'معلومات التسعير',
    discountPrice: 'سعر الخصم',
    discountDescription: 'وصف الخصم',
    accountScreenshots: 'لقطات شاشة الحساب',
    uploadImage: 'رفع صورة',
    termsAndConditions: 'الشروط والأحكام',
    submitAccount: 'إرسال الحساب',
    accountListedSuccess: 'تم إدراج الحساب بنجاح',
    accountSubmittedReview: 'تم تقديم حسابك للمراجعة',
    termsRequired: 'الشروط مطلوبة',
    agreeToTerms: 'يرجى الموافقة على جميع الشروط والأحكام',
    
    // Form Placeholders
    enterUsername: 'أدخل اسم المستخدم فقط',
    provideDescription: 'قدم وصفاً تفصيلياً لحسابك',
    enterInstructions: 'أدخل التعليمات (أو تفاصيل المحاسبة أو البنك)',
    enterPhoneNumber: 'أدخل رقم الهاتف (مثال: +1234567890)',
    enterPrice: 'أدخل السعر الخاص بك',
    enterDiscountPrice: 'أدخل سعر الخصم (اختياري)',
    selectSellerType: 'اختر نوع البائع',
    uploadScreenshots: 'رفع لقطات شاشة أو صور للحساب (بحد أقصى 6 صور)',
    
    // Instructions
    socialDescriptionHelp: 'إذا كنت تريد إرسال تفاصيل إضافية في إحدى الفئات (سناب شات - تيك توك - ببجي - فيسبوك)، يجب عليك إضافة الاسم الدقيق للفئة. خلاف ذلك، يرجى وصفه بإيجاز، وكذلك توضيح ما إذا كان الحساب يحتوي على 2FA أم لا. يُنصح بذكر بعض مشاكل الحساب إن وجدت.',
    configInstructionsHelp: 'وصف موجز للمنتج، سواء كان يحتوي على بريد إلكتروني أو رقم هاتف أو يحتوي على مضاعف (2FA)',
    pricingWarning: 'إذا كنت تريد إنشاء أي تواصل خارجي خارج المنصة في محاولة للاحتيال، فسيعرض هذا حسابك للسرقة',
    noExternalLinks: 'يرجى عدم تضمين روابط خارجية في حقل الوصف، حيث قد يؤدي ذلك إلى تعليق الحساب واحتمال تعرض حسابك للسرقة',
    setupInstructionsDesc: 'تعليمات الانتظار للمشتري للشراء وبعد تأكيد المشتري للشراء',
    specialOffer: 'عرض خاص',
    specialOfferDesc: 'احصل على عروض مجانية بنسبة 10٪ على أفضل 100 مستخدم يؤكدون عروضهم ويقدمون استمرارية المبيعات',
    
    // Terms
    term1: 'أتعهد بالإعلان فقط عن المنتجات المتاحة وعدم بيع المنتجات المحظورة أو غير المناسبة',
    term2: 'أتحمل كامل المسؤولية القانونية عن أي دعوى قضائية تنشأ من تاريخ البيع أو خرق اتفاقية المشتري والبائع القانونية التي تضمن الحق في الانسحاب من بيع الجرائم الإلكترونية',
    securityCommitment: 'نحن ملتزمون بتوفير منصة آمنة لشراء وبيع الحسابات. يجب عليك إكمال هذه الخطوات لإكمال إضافة حسابك.',
    
    // Account
    myAccount: 'حسابي',
    dashboard: 'لوحة التحكم',
    profile: 'الملف الشخصي',
    orders: 'الطلبات',
    wallet: 'المحفظة',
    notifications: 'الإشعارات',
    billing: 'الفواتير',
    logout: 'تسجيل الخروج',
    
    // About Page
    aboutUs: 'من نحن',
    empoweringDigitalCommerce: 'تمكين التجارة الرقمية',
    aboutDescription: 'نكسو هو السوق الرائد للأصول الرقمية للألعاب. نحن نربط المشترين والبائعين في بيئة آمنة وشفافة حيث الثقة والجودة تأتي أولاً.',
    activeUsers: 'مستخدمون نشطون',
    productsSold: 'منتجات مباعة',
    countries: 'دول',
    ourStory: 'قصتنا',
    buildingFuture: 'بناء مستقبل الأسواق الرقمية',
    storyParagraph1: 'تأسست نكسو في عام 2024، من ملاحظة بسيطة: كان سوق الألعاب الرقمية مجزأً وغير آمن ويفتقر إلى الثقة التي تتطلبها التجارة الحديثة.',
    storyParagraph2: 'شرعنا في تغيير ذلك. من خلال الجمع بين التكنولوجيا المتطورة وعمليات التحقق الصارمة والنهج الذي يركز على العميل، أنشأنا منصة يكون فيها تداول الأصول الرقمية بسيطاً وآمناً كما ينبغي أن يكون.',
    storyParagraph3: 'اليوم، نكسو أكثر من مجرد سوق - إنه مجتمع. مكان يتواصل فيه اللاعبون، وينمو التداول، وتزدهر التجارة الرقمية في بيئة آمنة وشفافة.',
    ourValues: 'قيمنا',
    principlesGuide: 'المبادئ التي توجه كل ما نقوم به',
    securityFirst: 'الأمان أولاً',
    securityFirstDesc: 'سلامتك هي أولويتنا القصوى. نستخدم إجراءات أمان رائدة في الصناعة لحماية كل معاملة.',
    lightningFast: 'سريع كالبرق',
    lightningFastDesc: 'تسليم فوري للمنتجات الرقمية. لا انتظار، لا تأخير - احصل على ما دفعت ثمنه على الفور.',
    qualityAssured: 'جودة مضمونة',
    qualityAssuredDesc: 'يتم التحقق من كل منتج وبائع. نحافظ على أعلى المعايير في السوق.',
    communityDriven: 'مدفوع بالمجتمع',
    communityDrivenDesc: 'صُنع بواسطة اللاعبين، للاعبين. نستمع إلى مجتمعنا ونتحسن باستمرار بناءً على ملاحظاتك.',
    ourMission: 'مهمتنا',
    missionStatement: 'إنشاء السوق الرقمي الأكثر موثوقية في العالم حيث يمكن للاعبين الشراء والبيع والتداول بثقة مطلقة، مع العلم أن معاملاتهم آمنة، وأصولهم تم التحقق منها، ومجتمعهم يقدر النزاهة قبل كل شيء.',

    // Pricing Page
    sellerPlans: 'خطط البائعين',
    startSellingToday: 'ابدأ البيع اليوم',
    choosePerfectPlan: 'اختر الخطة المثالية لعملك. ترقية أو تخفيض الدرجة في أي وقت.',
    mostPopular: 'الأكثر شعبية',
    free: 'مجاني',
    forever: 'للأبد',
    perfectForGettingStarted: 'مثالي للبدء',
    pro: 'احترافي',
    perMonth: 'شهرياً',
    forSeriousSellers: 'للبائعين الجادين',
    elite: 'نخبة',
    forTopTierSellers: 'للبائعين من الدرجة الأولى',
    getStarted: 'ابدأ الآن',
    upgradeNow: 'ترقية الآن',
    whatsIncluded: 'ما هو المتضمن:',
    listUpTo3Products: 'قائمة تصل إلى 3 منتجات',
    transactionFee5: 'رسوم معاملة 5%',
    basicSellerProfile: 'ملف تعريف البائع الأساسي',
    communitySupport: 'دعم المجتمع',
    standardVerification: 'تحقق قياسي',
    featuredListings: 'قوائم مميزة',
    prioritySupport: 'دعم ذو أولوية',
    advancedAnalytics: 'تحليلات متقدمة',
    customBranding: 'علامة تجارية مخصصة',
    unlimitedProductListings: 'قوائم منتجات غير محدودة',
    transactionFee3: 'رسوم معاملة 3%',
    enhancedSellerProfile: 'ملف تعريف البائع المحسّن',
    fastTrackVerification: 'تحقق سريع',
    featuredListings5PerMonth: 'قوائم مميزة (5/شهر)',
    customProfileBanner: 'شعار ملف تعريف مخصص',
    dedicatedAccountManager: 'مدير حساب مخصص',
    apiAccess: 'وصول إلى API',
    everythingInPro: 'كل شيء في الخطة الاحترافية',
    transactionFee1_5: 'رسوم معاملة 1.5%',
    verifiedBadge: 'شارة موثقة',
    unlimitedFeaturedListings: 'قوائم مميزة غير محدودة',
    earlyAccessToFeatures: 'الوصول المبكر إلى الميزات',
    premiumSupport24_7: 'دعم متميز (24/7)',
    promotedInLeaderboard: 'ترويج في لوحة المتصدرين',
    faqTitle: 'الأسئلة المتكررة',
    faqQuestion1: 'هل يمكنني تغيير الخطط في أي وقت؟',
    faqAnswer1: 'نعم! يمكنك الترقية أو التخفيض في أي وقت. تسري التغييرات على الفور.',
    faqQuestion2: 'ما هي طرق الدفع التي تقبلونها؟',
    faqAnswer2: 'نقبل جميع بطاقات الائتمان الرئيسية، PayPal، ومدفوعات العملات المشفرة.',
    faqQuestion3: 'هل هناك سياسة استرداد؟',
    faqAnswer3: 'نعم، نقدم ضمان استرداد الأموال لمدة 30 يوماً إذا لم تكن راضياً عن خطتك.',

    // Login Page
    welcomeBack: 'مرحباً بعودتك',
    signInToAccount: 'تسجيل الدخول إلى حساب نكسو الخاص بك',
    emailAddress: 'عنوان البريد الإلكتروني',
    password: 'كلمة المرور',
    rememberMe: 'تذكرني',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    cloudflareTurnstile: '🔒 Cloudflare Turnstile CAPTCHA',
    signIn: 'تسجيل الدخول',
    orContinueWith: 'أو المتابعة باستخدام',
    dontHaveAccount: 'ليس لديك حساب؟',

    // Register Page
    joinNexoMarketplace: 'انضم إلى سوق نكسو اليوم',
    chooseUsername: 'اختر اسم المستخدم',
    createStrongPassword: 'أنشئ كلمة مرور قوية',
    passwordRequirements: 'يجب أن تكون 8 أحرف على الأقل مع أرقام ورموز',
    confirmPassword: 'تأكيد كلمة المرور',
    confirmYourPassword: 'أكد كلمة المرور الخاصة بك',
    iAgreeToThe: 'أوافق على',
    and: 'و',
    alreadyHaveAccount: 'هل لديك حساب بالفعل؟',

    // MobileNav
    wishlist: 'المفضلة',
    
    // Footer
    marketplace: 'سوق',
    allRightsReserved: 'جميع الحقوق محفوظة',
    company: 'الشركة',
    support: 'الدعم',
    legal: 'قانوني',
    termsOfService: 'شروط الخدمة',
    privacyPolicy: 'سياسة الخصوصية',
    
    // Leaderboard
    topPerformers: 'أفضل المؤدين',
    leaderboardDesc: 'اكتشف أفضل البائعين والمنتجات الأكثر شعبية والمشترين النشطين في مجتمع نيكسو',
    topSellers: 'أفضل البائعين',
    topProducts: 'أفضل المنتجات',
    topBuyers: 'أفضل المشترين',
    sales: 'مبيعات',
    totalRevenue: 'إجمالي الإيرادات',
    sold: 'مباع',
    purchases: 'مشتريات',
    totalSpent: 'إجمالي الإنفاق',
    by: 'بواسطة',
    refundPolicy: 'سياسة الاسترداد',
    disputeCenter: 'مركز النزاعات',
    verifiedSellers: 'بائعون موثقون',
    builtForGamers: 'مصنوع بـ 💜 للاعبين',
    sellOnNexo: 'البيع على نيكسو',
    legalAndSupport: 'القانونية والدعم',
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
