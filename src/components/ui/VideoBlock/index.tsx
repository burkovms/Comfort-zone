'use client';
import Image from 'next/image';
import { useState } from 'react';
import './VideoBlock.scss';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('../Modal'));

export const VideoBlock = ({
  posterUrl,
  alt = 'Poster for video',
  videoUrl,
}: {
  posterUrl: string;
  alt?: string;
  videoUrl: string;
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div onClick={() => setOpenModal(true)} className="video-block">
        <span className="play">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" fill="none" />
            <polygon points="26,20 26,44 46,32" fill="white" />
          </svg>
        </span>
        <div className="poster">
          <Image src={posterUrl} alt={alt} fill unoptimized />
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <iframe
          src={videoUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};
