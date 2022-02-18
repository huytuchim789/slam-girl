import React, { useState, useMemo } from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { ourTeam, advisors } from './teamMember';
import { Typography, Button } from 'antd';
import ModalComponent from '../Modal';
import linkedinImg from '../../resources/images/linkedin.svg';
const { Title } = Typography;

function OurTeamSection() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTeamMember, setCurrentTeamMember] = useState({
    name: '',
    role: '',
    img: () => {},
    description: () => {},
    linkedin: ''
  });

  const openModal = (currentTeamMember) => {
    setIsModalOpen(true);
    setCurrentTeamMember(currentTeamMember);
  };

  const detail = useMemo(() => {
    const { name, role, img, description, linkedin } = currentTeamMember;
    return (
      <div className='detail__modal'>
        <div className='detail__modal__img'>
          {img()}
          {linkedin && (
            <a href={linkedin} target='_blank' rel='noreferrer'>
              <img src={linkedinImg} alt='Linkedin' />
            </a>
          )}
        </div>

        <div className='detail__modal__content'>
          <Title level={5} class='name'>
            {name}
          </Title>
          <p class='role'>{role}</p>
          <div dangerouslySetInnerHTML={{ __html: description() }}></div>
        </div>
        <Button
          className='detail__modal__close'
          onClick={() => setIsModalOpen(false)}
        >
          {t('team.close')}
        </Button>
      </div>
    );
  }, [currentTeamMember]);

  const detailModal = useMemo(() => {
    return (
      <ModalComponent
        content={detail}
        onClose={() => setIsModalOpen(false)}
        visible={isModalOpen}
        wrapClass='our__team'
      />
    );
  }, [detail, isModalOpen]);

  return (
    <section className='section section--dark our__team' id='team'>
      <div className='container'>
        <div className='background__blur blur--5'></div>
        <Row className='title'>
          <Title level={4} class='section__header'>
            {t('team.header')}
          </Title>
          {t('team.content') && (
            <p
              class='section__content'
            ></p>
          )}
        </Row>
        <Row className='card__section'>
          {ourTeam(t).map(
            ({ name, role, img, description, shortDescription, linkedin }) => (
              <div className='team__card'>
                <div className='img__wrapper'>{img()}</div>
                <div class='team__card__title'>
                  <Title level={5} class='name'>
                    {name}
                  </Title>
                  <p class='role'>{role}</p>
                </div>
                <div className='see__more'>
                  <Title level={5} class='name'>
                    {name}
                  </Title>
                  <p class='role'>{role}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: shortDescription() }}
                  ></div>
                  <span
                    onClick={() =>
                      openModal({ name, role, img, description, linkedin })
                    }
                  >
                    {t('team.see_more')}
                  </span>
                </div>
              </div>
            )
          )}
        </Row>
        <Row className='title'>
          <Title level={4} class='section__header advisor'>
            {t('team.advisor')}
          </Title>
        </Row>
        <Row className='card__section'>
          {advisors(t).map(
            ({
              name,
              role,
              img,
              description,
              shortDescription,
              linkedin,
              shortRole
            }) => (
              <div className='team__card'>
                <div className='img__wrapper'>{img()}</div>
                <div class='team__card__title'>
                  <Title level={5} class='name'>
                    {name}
                  </Title>
                  <p class='role'>{shortRole ? shortRole : role}</p>
                </div>
                <div className='see__more'>
                  <Title level={5} class='name'>
                    {name}
                  </Title>
                  <p class='role'>{role}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: shortDescription() }}
                  ></div>
                  <span
                    onClick={() =>
                      openModal({ name, role, img, description, linkedin })
                    }
                  >
                    {t('team.see_more')}
                  </span>
                </div>
              </div>
            )
          )}
        </Row>
        {detailModal}
      </div>
    </section>
  );
}

export default OurTeamSection;
