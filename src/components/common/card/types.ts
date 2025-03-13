export interface UserProps {
  name: string;
  picture: string;
}

export interface CardProps {
  id?: string;
  title: string;
  readTime: number;
  description: string;
  user: UserProps;
  // picture: string;
  link: string;
  className?: string;
}
