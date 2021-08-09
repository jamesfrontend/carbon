export interface OverlayProps {
  linkedinName?: string;
  linkedinUrl?: string;
}

export interface LandingPageProps {
  onClick: Function;
  buttonClicked?: boolean;
}

export type LandingPageTypes = {
  recPos?: string | number;
  opacity?: string | number;
};

export interface ImageLayoutProps extends OverlayProps {
  src: string;
  title: string;
  content?: string;
}
export interface ProfileImageProps extends ImageLayoutProps {
  top: string | number;
  className?: string;
}

export type ProfileImageTypes = {
  top: string | number;
};
