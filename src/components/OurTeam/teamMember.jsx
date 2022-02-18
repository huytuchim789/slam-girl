import React from 'react';
import Team1 from '../../resources/images/team-nikita-ngan-nguyen.jpg';
import Team2 from '../../resources/images/team-dylan-dong-do.jpg';
import Team3 from '../../resources/images/team-minami-truong.jpg';
import Team4 from '../../resources/images/team-dung-nguyen.jpg';
import Team5 from '../../resources/images/team-hana-vu.jpg';
import Team11 from '../../resources/images/team-duy-nguyen.jpeg';
import Team6 from '../../resources/images/advisor-thi-truong.jpg';
import Team7 from '../../resources/images/advisor-trung-ng.jpg';
import Team8 from '../../resources/images/advisor-garlam-won.jpg';
import Team9 from '../../resources/images/advisor-kyle-chasse.jpg';
import Team10 from '../../resources/images/advisor-deeban-ratneswaran.jpeg';

export const ourTeam = (t) => [
  {
    name: 'Nikita Ngan Nguyen',
    role: t('team.role__1'),
    img: () => (
      <img width='267' height='346' src={Team1} alt='Nikita Ngan Nguyen' />
    ),
    description: () => {
      return t('team.description__1');
    },
    shortDescription: () => {
      return t('team.description__short__1');
    },
    linkedin: 'https://www.linkedin.com/in/ngan-ekoios/'
  },
  {
    name: 'Dylan Dong Do',
    role: t('team.role__2'),
    img: () => <img width='267' height='346' src={Team2} alt='Dylan Dong Do' />,
    description: () => {
      return t('team.description__2');
    },
    shortDescription: () => {
      return t('team.description__short__2');
    },
    linkedin: 'https://www.linkedin.com/in/dong-do/'
  },
  {
    name: 'Minami Truong',
    role: t('team.role__3'),
    img: () => <img width='267' height='346' src={Team3} alt='Minami Truong' />,
    description: () => {
      return t('team.description__3');
    },
    shortDescription: () => {
      return t('team.description__short__3');
    },
    linkedin: 'https://www.linkedin.com/in/minami-truong/'
  },
  {
    name: 'Aidan Nguyen',
    role: t('team.role__11'),
    img: () => <img width='267' height='346' src={Team11} alt='Aidan nguyen' />,
    description: () => {
      return t('team.description__11');
    },
    shortDescription: () => {
      return t('team.description__short__11');
    },
    linkedin: 'https://www.linkedin.com/in/nguyen-xuan-duy-7b1576179/'
  },
  {
    name: 'Dung Nguyen',
    role: t('team.role__4'),
    img: () => <img width='267' height='346' src={Team4} alt='Dung Nguyen' />,
    description: () => {
      return t('team.description__4');
    },
    shortDescription: () => {
      return t('team.description__short__4');
    },
    linkedin: 'https://www.linkedin.com/in/dung-nguyenmanh-9ab48216b/'
  },
  {
    name: 'Hana Vu',
    role: t('team.role__5'),
    img: () => <img width='267' height='346' src={Team5} alt='Hana Vu' />,
    description: () => {
      return t('team.description__5');
    },
    shortDescription: () => {
      return t('team.description__short__5');
    },
    linkedin: 'https://www.linkedin.com/in/hanhvu1812/'
  }
];

export const advisors = (t) => [
  {
    name: 'Thi Truong',
    role: t('team.role__6'),
    img: () => <img width='267' height='346' src={Team6} alt='Thi Truong' />,
    description: () => {
      return t('team.description__6');
    },
    shortDescription: () => {
      return t('team.description__short__6');
    },
    linkedin: 'https://www.linkedin.com/in/mangcut/'
  },
  {
    name: 'Kyle Chasse',
    role: t('team.role__9'),
    shortRole: t('team.role__short__9'),
    img: () => <img width='267' height='346' src={Team9} alt='Kyle Chasse' />,
    description: () => {
      return t('team.description__9');
    },
    shortDescription: () => {
      return t('team.description__short__9');
    },
    linkedin: 'https://www.linkedin.com/in/kylechasse/'
  },
  {
    name: 'Garlam Won',
    role: t('team.role__8'),
    img: () => <img width='267' height='346' src={Team8} alt='Garlam Won' />,
    description: () => {
      return t('team.description__8');
    },
    shortDescription: () => {
      return t('team.description__short__8');
    },
    linkedin: 'https://www.linkedin.com/in/garlam/'
  },

  {
    name: 'Dr Deeban Ratneswaran',
    role: t('team.role__7'),
    img: () => (
      <img width='266' height='346' src={Team10} alt='Deeban Ratneswaran' />
    ),
    description: () => {
      return t('team.description__10');
    },
    shortDescription: () => {
      return t('team.description__short__10');
    },
    linkedin: 'https://www.linkedin.com/in/deeban-ratneswaran/'
  }
];
