type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface Icon {
  identifier: string;
  alt: string;
}

interface Button {
  label: string;
  href: string;
  title?: string;
  target?: string;
  variant?: ButtonVariant;
  icon?: Icon;
}

interface Image {
  src: string;
  alt: string;
}

// Components
interface Slides {
  title: string;
  subtitle: string;
  description: string;
  image?: Image;
  buttons: Button[];
}

// pages
export interface HomeProps {
  contents: {
    hero: Slides[];
  };
}

//  Sections
export interface HomeHeroProps {
  heroData: {
    slides: Slides[];
  };
}
