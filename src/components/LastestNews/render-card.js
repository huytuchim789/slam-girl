import Image1 from '../../resources/images/nftify-news-1.png';
import Image4 from '../../resources/images/nftify-news-4.png';
import Image3 from '../../resources/images/nftify-news-3.png';
import Image2 from '../../resources/images/nftify-news-2.png';
import Image5 from '../../resources/images/nftify-news-5.png';
import Image6 from '../../resources/images/nftify-news-6.png';
import Image7 from '../../resources/images/nftify-news-7.png';
import Image8 from '../../resources/images/nftify-news-8.jpeg';
import Image9 from '../../resources/images/nftify-news-9.jpeg';
import Image10 from '../../resources/images/nftify-news-10.jpeg';
import Image11 from '../../resources/images/nftify-news-11.jpeg';

export const renderCards = (t) => [
  {
    isLink: true,
    date: '28-06-2021',
    title:
      'NFTify to launch on Reef Chain to Provide NFT Shops Access to Cross-Chain DeFi',
    content:
      'NFTs have rapidly evolved from cryptographic tokens representing collectibles to unique financial assets when combined with decentralized finance (DeFi). With a myriad of new ways to create value, more NFT holders are seeking to maximize returns through DeFi services like liquidity mining, index funds, and loan collateralization. NFTify is pleased to announce its launch on Reef Chain, a customized blockchain that allows developers to build DApps or deploy existing projects from Ethereum.',
    url: 'https://news.nftify.network/nftify-to-launch-on-reef-chain-to-provide-nft-shops-access-to-cross-chain-defi-de4853f5e60c',
    img: <img src={Image8} alt='Learn About NFTify' />
  },
  {
    isLink: true,
    date: '25-06-2021',
    title: 'NFTify Launches on Polygon for Low Cost and Fast NFT e-Commerce',
    content:
      'NFTify, the e-commerce platform designed for digital content, has been optimized to provide infinite possibilities to expand its e-commerce features and market. Leveraging its interoperable platform, NFTify is excited to announce that NFT shops have more choices to mint and exchange NFTs through its cross-chain link with Polygon.',
    url: 'https://news.nftify.network/nftify-launches-on-polygon-for-low-cost-and-fast-nft-e-commerce-3a98fc738883',
    img: <img src={Image9} alt='Learn About NFTify' />
  },
  {
    isLink: true,
    date: '03-06-2021',
    title:
      'Rage.Fan to Launch the First Fantasy Sports NFT Card Shop on NFTify',
    content:
      'As sales of sports trading cards backed by NFTs boom, trading markets are becoming increasingly fragmented as new NFT marketplaces are introduced. NFTify, an e-commerce platform designed for the digital content world, is pleased to announce it will host the first fantasy sports NFT store being launched by Rage.Fan, a fan-first decentralized sports platform on the blockchain.',
    url: 'https://news.nftify.network/rage-fan-to-launch-the-first-fantasy-sports-nft-card-shop-on-nftify-de0f5dc16f2d',
    img: <img src={Image11} alt='Learn About NFTify' />
  },
  {
    isLink: true,
    date: '20-05-2021',
    title:
      'Blockchain’s Biggest War Game Faraland to Launch its NFT Shop on NFTify',
    content:
      'Blockchain games are creating new game playing experiences with tokenized game assets represented by unique NFTs yet lack an e-commerce platform to fully benefit from all their features, such as cross-chain trading and programmable NFTs. NFTify, an e-commerce platform designed for the digital content world, is pleased to announce it will host the NFT store of Faraland, the biggest war game on the Binance Smart Chain, to bring nextgen e-commerce features to the first gamified NFT store.',
    url: 'https://news.nftify.network/blockchains-biggest-war-game-faraland-to-launch-its-nft-shop-on-nftify-6497cf31569',
    img: <img src={Image10} alt='Learn About NFTify' />
  },
  {
    isLink: true,
    date: '05-05-2021',
    title: 'Shopify of Web3 Is Coming in NFTify',
    content:
      'With a smooth UI, cheap pricing, easy-to-understand utilities and step-by-step guidance, NFTify is primed to step into Shopify’s shoes and traverse this new frontier of online shopping.',
    url: 'https://www.coinspeaker.com/shopify-web3-nftify/',
    img: <img src={Image7} alt='Learn About NFTify' />
  },
  {
    isLink: false,
    date: '05-05-2021',
    title:
      'Learn About NFTify and Unlock Rewards and Staking Opportunities on DAO Maker',
    content:
      'We are excited to announce a strategic partnership between NFTify and DAO Maker. NFTify users now have more ways to earn on the DAO Maker crypto fundraising platform through learn to earn, staking, and other DeFi opportunities.',
    url: 'https://news.nftify.network/learn-about-nftify-and-unlock-rewards-and-staking-opportunities-on-dao-maker-d324890e2937',
    img: <img src={Image6} alt='Learn About NFTify' />
  },
  {
    isLink: true,
    date: '05-05-2021',
    title: 'How NFTify Is Creating a Shopify Marketplace for NFTs',
    content:
      'NFTify, which calls itself “the Shopify of NFT,” is an all-in-one bundle that allows you to create your own NFT marketplace. Shopify is the comprehensive build-a-store online product that has taken the internet by storm',
    url: 'https://blocktelegraph.io/nftify-creating-shopify-marketplace-for-nfts/',
    img: <img src={Image5} alt='Marketplace for NFTs' />
  },
  {
    isLink: false,
    date: '01-05-2021',
    title: t('news.title_1'),
    content: t('news.desc_1'),
    url: 'https://news.nftify.network/protect-your-nft-copyrights-with-the-nftify-ai-services-demo-now-live-3284c832167e',
    img: <img src={Image1} alt={t('news.title_1')} />
  },
  {
    isLink: false,
    date: '24-04-2021',
    title: t('news.title_2'),
    content: t('news.desc_2'),
    url: 'https://news.nftify.network/announcing-the-nftify-dual-ido-launch-on-the-paid-ignition-and-polkafoundry-red-kite-launchpads-f89b1f08cdcf',
    img: <img src={Image2} alt={t('news.title_2')} />
  },
  {
    isLink: false,
    date: '07-05-2021',
    title: t('news.title_3'),
    content: t('news.desc_3'),
    url: 'https://news.nftify.network/nftify-announces-partnership-bringing-staking-of-n1-token-to-mantra-dao-d826389115b9',
    img: <img src={Image3} alt={t('news.title_3')} />
  },
  {
    isLink: false,
    date: '05-05-2021',
    title: t('news.title_4'),
    content: t('news.desc_4'),
    url: 'https://news.nftify.network/introducing-nftify-3740a77289d5',
    img: <img src={Image4} alt={t('news.title_4')} />
  }
];
