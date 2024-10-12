import Link from 'next/link';

type ButtonProps = {
  title: string;
  link: string;
};
export default function Button({ title, link }: ButtonProps) {
  return (
    <Link target="_blank" href={link}>
      <div className="border-[#c7d966] p-2 border rounded-md hover:border-[#c7d966]/20 transition duration-700 ease-in-out text-center">
        {title}
      </div>
    </Link>
  );
}
