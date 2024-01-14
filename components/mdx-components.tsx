import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import CountSample from './posts/CountSample';

const components = {
  Image,
  CountSample,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
