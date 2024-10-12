import Image from 'next/image';
import profile from '../../public/profile.jpeg';
import Button from '@/components/Button';
export default function LinkTree() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center w-80">
        <div className="flex flex-col items-center justify-center py-6">
          <Image
            src={profile}
            alt="profile picture"
            width={200}
            className="rounded-full border-[#c7d966]/50  border-2"
          />{' '}
          <div className="flex flex-col py-3">
            <p className="text-sm text-center">
              Fundador e CTO na Nuai Tech e Consultor/Engenheiro de Software na
              EximiaCo
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            title="Linkedin"
            link="https://www.linkedin.com/in/lesimoess"
          />
          <Button title="Github" link="https://github.com/lesimoes" />
          <Button
            title="Pinterest"
            link="https://www.pinterest.com/lesimoes0/"
          />
          <Button title="Substack Nuai" link="https://nuaitech.substack.com/" />

          <Button title="Nuai" link="https://www.nuai.com.br" />
          <Button
            title="EximiaCo"
            link="https://ontologia.eximia.co/consultores/leandro-simoes/"
          />
        </div>
      </div>
    </div>
  );
}
