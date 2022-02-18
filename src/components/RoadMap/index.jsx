import React from "react";
import { Row } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import RoadmapItem from "./raodmapItem";

const { Title, Paragraph } = Typography;

const options = (t) => [
  {
    title: t("roadmap.txt_column1_title"),
    list: [
      {
        title: t("roadmap.txt_column1_item1_title"),
        content: [t("roadmap.txt_column1_item1_content")],
      },
      {
        title: t("roadmap.txt_column1_item2_title"),
        content: [
          t("roadmap.txt_column1_item2_content1"),
          t("roadmap.txt_column1_item2_content2"),
        ],
      },
      {
        title: t("roadmap.txt_column1_item3_title"),
        content: [t("roadmap.txt_column1_item3_content")],
      },
    ],
  },
  {
    title: t("roadmap.txt_column2_title"),
    list: [
      {
        title: t("roadmap.txt_column1_item1_title"),
        content: [t("roadmap.txt_column2_item1_content")],
      },
      {
        title: t("roadmap.txt_column2_item2_title"),
        content: [t("roadmap.txt_column2_item2_content")],
      },
      {
        title: t("roadmap.txt_column2_item3_title"),
        content: [t("roadmap.txt_column2_item3_content")],
      },
    ],
  },
  {
    title: t("roadmap.txt_column3_title"),
    list: [
      {
        title: t("roadmap.txt_column3_item1_title"),
        content: [
          t("roadmap.txt_column3_item1_content1"),
          t("roadmap.txt_column3_item1_content2"),
        ],
      },
      {
        title: t("roadmap.txt_column3_item2_title"),
        content: [t("roadmap.txt_column3_item2_content")],
      },
    ],
  },
  {
    title: t("roadmap.txt_column4_title"),
    list: [
      {
        title: t("roadmap.txt_column4_item1_title"),
        content: [
          t("roadmap.txt_column4_item1_content1"),
          t("roadmap.txt_column4_item1_content2"),
        ],
      },
      {
        title: t("roadmap.txt_column4_item2_title"),
        content: [t("roadmap.txt_column4_item2_content")],
      },
    ],
  },
];

function RoadmapSection() {
  const { t } = useTranslation();

  return (
    <section className="section section--dark Roadmap" id="road-map">
      <div className="container">
        <Row className="Roadmap--header">
          <Title level={4} class="title">
            {t("roadmap.title")}
          </Title>
          {t("roadmap.description") && (
            <Paragraph className="description">
              {}
            </Paragraph>
          )}
        </Row>
        <Row className="Roadmap--body">
          {options(t).map((item, index) => (
            <RoadmapItem key={index} title={item.title} list={item.list} />
          ))}
        </Row>
      </div>
    </section>
  );
}

export default RoadmapSection;
