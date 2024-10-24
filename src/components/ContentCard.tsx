import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ContentProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Content: FC<ContentProps> = ({ title, description, imgSrc }) => {
  return (
    <Card className='h-full overflow-hidden'>
      <AspectRatio ratio={3 / 2}>
        <img className='w-full h-full object-cover' src={imgSrc} />
      </AspectRatio>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

const Clickable: FC<{ to: string } & PropsWithChildren> = ({
  to,
  children,
}) => {
  return (
    <NavLink to={to}>
      <div className='h-full'>{children}</div>
    </NavLink>
  );
};

const Unclickable: FC<PropsWithChildren> = ({ children }) => {
  return <div className='h-full'>{children}</div>;
};

interface Props extends ContentProps {
  to?: string;
}

const ContentCard: FC<Props> = ({ to, ...rest }) => {
  if (to) {
    return (
      <Clickable to={to}>
        <Content {...rest} />
      </Clickable>
    );
  } else {
  }
  return (
    <Unclickable>
      <Content {...rest} />
    </Unclickable>
  );
};

export default ContentCard;
