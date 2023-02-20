export interface CardInformation {
  id: number;
  title: string;
  tier: string;
  description: string;
  img: boolean;
  features: [
    {
      id: string;
      title: string;
    }
  ];
}
export interface CardI {
  information: CardInformation;
}

export interface HeadersI {
  children?: JSX.Element;
  title: string;
  subtitle: string;
}
