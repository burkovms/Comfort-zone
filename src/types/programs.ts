export interface Program {
  id?: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  videoUrl: string;
  extra?: boolean;
}

export interface ProgramCategory {
  id: number;
  title: string;
  image: string;
  programs: Program[];
}
