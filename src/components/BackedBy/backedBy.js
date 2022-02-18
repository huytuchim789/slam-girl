import React from 'react';
import Logo1 from '../../resources/images/ekoios_technology.svg';
import Logo2 from '../../resources/images/polka_foundry.svg';
import Logo3 from '../../resources/images/icetea_labs.svg';
import Logo4 from '../../resources/images/au21_capital.png';
import Logo5 from '../../resources/images/moonrock.svg';
import Logo6 from '../../resources/images/dfg_schriftzug.svg';
import Logo7 from '../../resources/images/inclusion_capital.svg';
import Logo8 from '../../resources/images/chain_capital.svg';
import Logo9 from '../../resources/images/das_kapital.svg';
import Logo10 from '../../resources/images/fomocraft.svg';
import Logo11 from '../../resources/images/master_ventures.png';
import Logo12 from '../../resources/images/x21_digital.svg';
import Logo13 from '../../resources/images/magnus_capital.png';
import Logo14 from '../../resources/images/vendetta_capital.svg';
import Logo15 from '../../resources/images/lotus_capital.svg';
import Logo16 from '../../resources/images/blocksync.png';
import Logo17 from '../../resources/images/momentum_6.png';
import Logo18 from '../../resources/images/gd10_ventures.svg';
import Logo19 from '../../resources/images/exntc.svg';
import Logo20 from '../../resources/images/mantra_dao.svg';
import Logo21 from '../../resources/images/sparklogo.svg';
import Logo22 from '../../resources/images/kylin.svg';
import Logo23 from '../../resources/images/sevenx.svg';
import Logo24 from '../../resources/images/unilend.svg';

import Logo1Light from '../../resources/images/ekoios_technology_light.svg';
import Logo2Light from '../../resources/images/polka_foundry_light.svg';
import Logo3Light from '../../resources/images/icetea_labs_light.svg';
import Logo4Light from '../../resources/images/au21_capital_light.png';
import Logo5Light from '../../resources/images/moonrock_light.svg';
import Logo6Light from '../../resources/images/dfg_schriftzug_light.svg';
import Logo7Light from '../../resources/images/inclusion_capital_light.svg';
import Logo8Light from '../../resources/images/chain_capital_light.svg';
import Logo9Light from '../../resources/images/das_kapital_light.svg';
import Logo10Light from '../../resources/images/fomocraft_light.svg';
import Logo11Light from '../../resources/images/master_ventures_light.png';
import Logo12Light from '../../resources/images/x21_digital_light.svg';
import Logo13Light from '../../resources/images/magnus_capital_light.png';
import Logo14Light from '../../resources/images/vendetta_capital_light.svg';
import Logo15Light from '../../resources/images/lotus_capital_light.svg';
import Logo16Light from '../../resources/images/blocksync_light.png';
import Logo17Light from '../../resources/images/momentum_6_light.png';
import Logo18Light from '../../resources/images/gd10_ventures_light.svg';
import Logo19Light from '../../resources/images/exntc_light.svg';
import Logo20Light from '../../resources/images/mantra_dao_light.svg';
import Logo21Light from '../../resources/images/sparklogo_light.svg';
import Logo22Light from '../../resources/images/kylin_light.svg';
import Logo23Light from '../../resources/images/sevenx_light.svg';
import Logo24Light from '../../resources/images/unilend_light.svg';

import Logo4LightNew from '../../resources/images/dao_maker_light.svg';
import Logo4New from '../../resources/images/dao_maker.svg';
import Logo6LightNew from '../../resources/images/morningstar_light.svg';
import Logo6New from '../../resources/images/morning_star.svg';
import Logo25 from '../../resources/images/nebula.png';
import Logo25Light from '../../resources/images/nebula_light.png';

export const backedByDarkMode = (t) => [
  {
    linkHref: 'https://ekoios.vn',
    img: () => <img width="170" height="37" className="logo--1" src={Logo1} alt="Ekoios Technology" />,
  },
  {
    linkHref: 'https://polkafoundry.com',
    img: () => <img width="170" height="28" className="logo--2" src={Logo2} alt="Polka Foundry" />,
  },
  {
    linkHref: 'https://icetea.io',
    img: () => <img width="160" height="28" className="logo--3" src={Logo3} alt="Icetea Labs" />,
  },
  {
    linkHref: 'https://master.ventures/',
    img: () => <img width="129" height="37" className="logo--master" src={Logo11} alt="Master Ventures" />,
  },
  {
    linkHref: 'https://www.moonrockcapital.io/',
    img: () => <img width="158" height="37" className="logo--moonrock" src={Logo5} alt="MoonRock Capital" />,
  },
  {
    linkHref: 'https://morningstar.ventures/',
    img: () => <img width="150" height="40" className="logo--moonrock" src={Logo6New} alt="Morning start" />,
  },
  {
    linkHref: 'https://momentum6.com/',
    img: () => <img width="85" height="41" className="logo--m6" src={Logo17} alt="Momentum_6" />,
  },
  {
    linkHref: 'https://www.sparkdigitalcapital.com/',
    img: () => <img width="165" height="45" className="logo--das_kapital" src={Logo21} alt="Spark" />,
  },
  {
    linkHref: 'https://x21digital.com/',
    img: () => <img width="80" height="44" className="logo--x21" src={Logo12} alt="x21 Digital" />,
  },
  {
    linkHref: 'https://au21.capital/',
    img: () => <img width="193" height="45" className="logo--4" src={Logo4} alt="AU21 Capital" />,
  },
  {
    linkHref: 'https://www.dfg.group/',
    img: () => <img width="104" height="38" className="logo--dfg" src={Logo6} alt="Dfg Group" />,
  },
  {
    linkHref: 'https://magnusdigitalassets.com/',
    img: () => <img width="105" height="57" className="logo--magnus" src={Logo13} alt="Magnus Capital" />,
  },
  {
    linkHref: 'https://daomaker.com/',
    img: () => <img width="170" height="38" className="logo--master" src={Logo4New} alt="Dao maker" />,
  },

  {
    linkHref: '',
    img: () => <img width="134" height="40" className="logo--7" src={Logo7} alt="Inclusion Capital" />,
  },
  {
    linkHref: 'http://capital-chain.com/',
    img: () => <img width="59" height="59" className="logo--7" src={Logo8} alt="Chain Capital" />,
  },
  {
    linkHref: 'http://www.das-kapital.io/',
    img: () => <img width="160" height="42" className="logo--das_kapital" src={Logo9} alt="Das Kapital" />,
  },
  {
    linkHref: 'https://fomocraft.com/',
    img: () => <img width="129" height="37" className="logo_fomocraft" src={Logo10} alt="Fomocraft" />,
  },

  {
    linkHref: 'https://www.vendetta.capital/',
    img: () => <img width="120" height="50" className="logo--8" src={Logo14} alt="Vendetta Capital" />,
  },
  {
    linkHref: 'https://www.lotuscapital.me/',
    img: () => <img width="80" height="51" className="logo--9" src={Logo15} alt="Lotus Capital" />,
  },
  {
    linkHref: 'https://www.blocksync.com/',
    img: () => <img width="109" height="32" className="logo--6" src={Logo16} alt="Blocksync" />,
  },

  {
    linkHref: 'http://www.gd10.ventures/',
    img: () => <img width="94" height="36" className="logo--gd10" src={Logo18} alt="Gd10 Ventures" />,
  },
  {
    linkHref: 'https://exnetworkcapital.com/',
    img: () => <img width="65" height="44" className="logo--gx" src={Logo19} alt="Exntc" />,
  },

  {
    linkHref: 'https://mantradao.com/',
    img: () => <img width="105" height="53" className="logo--magnus" src={Logo20} alt="Mantra dao" />,
  },

  {
    linkHref: 'https://kylin.network/',
    img: () => <img width="118" height="36" className="logo--gx" src={Logo22} alt="Kylin" />,
  },
  // {
  //   linkHref: 'http://www.7xvc.com/',
  //   img: () => <img width="149" height="40" className="logo--das_kapital" src={Logo23} alt="SevenX" />,
  // },
  {
    linkHref: 'https://unilend.finance/',
    img: () => <img width="156" height="54" className="logo--9" src={Logo24} alt="Unilend" />,
  },
  {
    linkHref: 'https://nebulaventures.inc/',
    img: () => <img width="156" className="logo--nebula" src={Logo25} alt="Nebula Ventures" />,
  },
];

export const backedBy = (t) => [
  {
    linkHref: 'https://ekoios.vn',
    img: () => <img width="170" height="37" className="logo--1" src={Logo1Light} alt="Ekoios Technology" />,
  },
  {
    linkHref: 'https://polkafoundry.com',
    img: () => <img width="170" height="28" className="logo--2" src={Logo2Light} alt="Polka Foundry" />,
  },
  {
    linkHref: 'https://icetea.io',
    img: () => <img width="160" height="28" className="logo--3" src={Logo3Light} alt="Icetea Labs" />,
  },
  {
    linkHref: 'https://master.ventures/',
    img: () => <img width="129" height="37" className="logo--master" src={Logo11Light} alt="Master Ventures" />,
  },
  {
    linkHref: 'https://www.moonrockcapital.io/',
    img: () => <img width="158" height="37" className="logo--moonrock" src={Logo5Light} alt="MoonRock Capital" />,
  },
  {
    linkHref: 'https://morningstar.ventures/',
    img: () => <img width="150" height="40" className="logo--moonrock" src={Logo6LightNew} alt="Morning start" />,
  },
  {
    linkHref: 'https://momentum6.com/',
    img: () => <img width="85" height="41" className="logo--m6" src={Logo17Light} alt="Momentum_6" />,
  },
  {
    linkHref: 'https://www.sparkdigitalcapital.com/',
    img: () => <img width="165" height="45" className="logo--das_kapital" src={Logo21Light} alt="Spark" />,
  },
  {
    linkHref: 'https://x21digital.com/',
    img: () => <img width="80" height="44" className="logo--x21" src={Logo12Light} alt="x21 Digital" />,
  },
  {
    linkHref: 'https://au21.capital/',
    img: () => <img width="193" height="45" className="logo--4" src={Logo4Light} alt="AU21 Capital" />,
  },

  {
    linkHref: 'https://www.dfg.group/',
    img: () => <img width="104" height="38" className="logo--dfg" src={Logo6Light} alt="Dfg Group" />,
  },
  {
    linkHref: 'https://magnusdigitalassets.com/',
    img: () => <img width="105" height="57" className="logo--magnus" src={Logo13Light} alt="Magnus Capital" />,
  },
  {
    linkHref: 'https://daomaker.com/',
    img: () => <img width="170" height="38" className="logo--master" src={Logo4LightNew} alt="Dao maker" />,
  },

  {
    linkHref: '',
    img: () => <img width="134" height="40" className="logo--7" src={Logo7Light} alt="Inclusion Capital" />,
  },
  {
    linkHref: 'http://capital-chain.com/',
    img: () => <img width="59" height="59" className="logo--7" src={Logo8Light} alt="Chain Capital" />,
  },
  {
    linkHref: 'http://www.das-kapital.io/',
    img: () => <img width="160" height="42" className="logo--das_kapital" src={Logo9Light} alt="Das Kapital" />,
  },
  {
    linkHref: 'https://fomocraft.com/',
    img: () => <img width="129" height="37" className="logo_fomocraft" src={Logo10Light} alt="Fomocraft" />,
  },
  {
    linkHref: 'https://www.vendetta.capital/',
    img: () => <img width="120" height="50" className="logo--8" src={Logo14Light} alt="Vendetta Capital" />,
  },
  {
    linkHref: 'https://www.lotuscapital.me/',
    img: () => <img width="80" height="51" className="logo--9" src={Logo15Light} alt="Lotus Capital" />,
  },
  {
    linkHref: 'https://www.blocksync.com/',
    img: () => <img width="109" height="32" className="logo--6" src={Logo16Light} alt="Blocksync" />,
  },

  {
    linkHref: 'http://www.gd10.ventures/',
    img: () => <img width="94" height="36" className="logo--gd10" src={Logo18Light} alt="Gd10 Ventures" />,
  },

  {
    linkHref: 'https://exnetworkcapital.com/',
    img: () => <img width="65" height="44" className="logo--gx" src={Logo19Light} alt="Exntc" />,
  },

  {
    linkHref: 'https://mantradao.com/',
    img: () => <img width="105" height="53" className="logo--magnus" src={Logo20Light} alt="Mantra dao" />,
  },

  {
    linkHref: 'https://kylin.network/',
    img: () => <img width="118" height="36" className="logo--gx" src={Logo22Light} alt="Kylin" />,
  },
  // {
  //   linkHref: 'http://www.7xvc.com/',
  //   img: () => <img width="149" height="40" className="logo--das_kapital" src={Logo23Light} alt="SevenX" />,
  // },
  {
    linkHref: 'https://unilend.finance/',
    img: () => <img width="156" height="54" className="logo--9" src={Logo24Light} alt="Unilend" />,
  },
  {
    linkHref: 'https://nebulaventures.inc/',
    img: () => <img width="156" className="logo--nebula" src={Logo25Light} alt="Nebula Ventures" />,
  },
];
