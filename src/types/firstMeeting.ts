export type Img = {
  url: string;
  width: number;
  height: number;
};

export type Tabs = {
  title: string;
  text?: string;
  description?: string;
  img: Img;
};

export type SectionData = {
  imagesBlock?: boolean;
  className?: string;
  title: string;
  tabs: Tabs[];
  button?: {
    text: string;
    link?: string;
  };
};
