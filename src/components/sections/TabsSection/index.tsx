'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './TabsSection.scss';

export type Img = {
  url: string;
  width: number;
  height: number;
};

type SectionData = {
  className?: string;
  title: string;
  tabs: {
    title: string;
    text?: string;
    description?: string;
    img: Img;
  }[];
  button?: {
    text: string;
    link?: string;
  };
};

// const TabsSection = ({ tabs, title, buttonText, buttonLink, className }: SectionData) => {
const TabsSection = ({ className, ...props }: SectionData) => {
  const [tabActive, setTabActive] = useState(0);
  const handleActiveTab = (index: number) => {
    setTabActive(index);
  };
  return (
    <section className={`tabs-block ${className ? className : ''}`}>
      <div className="tabs-block__cover">
        <h2>{props.title}</h2>
        <ul className="tabs-block__wrap">
          {props.tabs.map((item, index) => (
            <li
              key={index}
              className={`item ${tabActive === index ? 'active' : ''}`}
              onClick={() => handleActiveTab(index)}
            >
              <div className="info">
                <span className="number">0{index + 1}</span>
                <h6 className="title" dangerouslySetInnerHTML={{ __html: item.title }} />
                {item.text && <p className="text">{item.text}</p>}
                {item.description && (
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                )}
              </div>
              <Image
                src={item.img.url}
                alt="Image tab"
                width={item.img.width}
                height={item.img.height}
              />
            </li>
          ))}
        </ul>
        <div className="btn-cover">
          {props.button && (
            <Link className="btn btn-white" href={props.button.link || '#'}>
              <span>{props.button.text}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
