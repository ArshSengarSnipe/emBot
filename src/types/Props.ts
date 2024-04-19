export type SideBarLayoutProps = {
  children: React.ReactNode;
};

export type SideBarListItemProps = {
  readonly key: string;
  route: string;
  icon: string;
  text: string;
};

export type SearchBarProps = {
  onClick: () => void;
};

export type AlertIconProps = {
  src: string;
  alt: string;
};

export type UserIconProps = {
  src: string;
};

export type SplineChartProps = {
  label: string;
  data: {
    monthIndex: number;
    value: number;
  }[];
  background_colors: string[];
  border_color: string;
};

export type StackedDoughnutChartProps = {
  label: string;
  data: {
    emailType: string;
    views: number;
  }[];
  background_colors: string[];
  border_colors: string[];
};
