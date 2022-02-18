const MENU_ITEMS_KEY = {
  PRODUCT: 'product',
  OVERVIEW: 'overview',
  ROADMAP: 'roadmap',
  TEAM: 'team',
  NEW: 'new',
  ONE_PAGER: 'one_pager',
  PROJECT_OVERVIEW: 'project_overview',
  TOKENOMIC: 'tokenomic',
  WHITE_PAPER: 'white_paper',
  TELEGRAM: 'telegram',
  TWITTER: 'twitter',
  MEDIUM: 'medium',
  YOUTUBE: 'YOUTUBE',
  AI: 'nftifyAi',
  PLATFORM: 'nftifyPlatform',
  TOKEN_INFORMATION: 'Token_Information'
};

export const renderNavigation = (t) => [
  {
    key: MENU_ITEMS_KEY.PRODUCT,
    text: t('header.product'),
    link: '',
    isHash: false,
    children: [
      {
        key: MENU_ITEMS_KEY.AI,
        text: t('header.nftifyAi'),
        link: 'https://ai-live-demo.nftify.network/',
        isHash: false
      },
      {
        key: MENU_ITEMS_KEY.PLATFORM,
        text: t('header.nftifyPlatform'),
        link: 'https://platform.nftify.network/',
        isHash: false
      }
    ]
  },
  {
    key: MENU_ITEMS_KEY.OVERVIEW,
    text: t('header.overview'),
    link: 'overview',
    isHash: true,
    children: []
  },
  {
    key: MENU_ITEMS_KEY.ROADMAP,
    text: t('header.road_map'),
    link: 'road-map',
    isHash: true,
    children: []
  },
  {
    key: MENU_ITEMS_KEY.TEAM,
    text: t('header.team'),
    link: 'team',
    isHash: true,
    children: []
  },
  {
    key: MENU_ITEMS_KEY.NEW,
    text: t('header.community'),
    link: '',
    isHash: false,
    children: [
      {
        key: MENU_ITEMS_KEY.TELEGRAM,
        text: t('footer.telegram'),
        link: 'https://t.me/nftify_official',
        isHash: false
      },
      {
        key: MENU_ITEMS_KEY.TWITTER,
        text: t('footer.twitter'),
        link: 'https://twitter.com/nftify_official',
        isHash: false
      },
      {
        key: MENU_ITEMS_KEY.MEDIUM,
        text: t('footer.medium'),
        link: 'https://news.nftify.network/',
        isHash: false,
        children: []
      },
      {
        key: MENU_ITEMS_KEY.YOUTUBE,
        text: 'Youtube',
        link: 'https://www.youtube.com/c/nftify',
        isHash: false,
        children: []
      }
    ]
  },
  {
    key: MENU_ITEMS_KEY.ONE_PAGER,
    text: t('header.onePagers'),
    link: 'https://nftify.docsend.com/view/6278984fjp7bpwxe',
    isHash: false,
    children: [
      {
        key: MENU_ITEMS_KEY.PROJECT_OVERVIEW,
        text: t('menu.project_overview'),
        link: 'https://nftify.docsend.com/view/6278984fjp7bpwxe',
        isHash: false
      },
      {
        key: MENU_ITEMS_KEY.TOKENOMIC,
        text: t('menu.tokenomic'),
        link: 'https://nftify.docsend.com/view/h4uzfzbpxqtrwt9g',
        isHash: false
      },
      {
        key: MENU_ITEMS_KEY.WHITE_PAPER,
        text: t('header.white-paper'),
        link: 'https://nftify.docsend.com/view/f5fjx9jgy7keimbi',
        isHash: false,
        children: []
      }
    ]
  }
];
