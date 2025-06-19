'use client';

import { useState } from 'react';
import Image from 'next/image';
import './TabsSection.scss';
import { SectionData } from '@/types/firstMeeting';
import Button from '@/components/ui/Button';

const TabsSection = ({ className, imagesBlock, ...props }: SectionData) => {
  const [tabActive, setTabActive] = useState<number>(0);
  const handleActiveTab = (index: number) => {
    setTabActive(index);
  };
  return (
    <section className={`tabs-block p-block ${className ? className : ''}`}>
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
                <h6 className="title text-lg" dangerouslySetInnerHTML={{ __html: item.title }} />
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
                quality={90}
              />
            </li>
          ))}
        </ul>
        {props.button && (
          <div className="btn-cover">
            <Button color="white">{props.button.text}</Button>
          </div>
        )}
      </div>
      {imagesBlock && (
        <div className="images">
          {props.tabs.map((item, index) => (
            <div key={index} className={`${tabActive === index ? 'active' : ''}`}>
              <Image
                src={item.img.url}
                alt="Image tab"
                width={item.img.width}
                height={item.img.height}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TabsSection;
