import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navBarTabs from '@/constants/navConstants';
import BurgerIcon from '../../../../public/images/icons/burger-menu.svg';
import LazyLoad from 'react-lazyload';

interface Props {
  activeTab: string;
}

function NavBar({ activeTab }: Props) {
  const activeButtonClass =
    'w-full py-3 h-full row centered bg-RED_MEDIUM text-WHITE';
  const inactiveButtonClass = 'w-full py-3 h-full row centered hover:shadow-md';

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <>
      <div className={'hidden lg:flex col'}>
        <div
          className={
            'w-full h-16 bg-GREY_LIGHT row justify-between items-center'
          }
        >
          <Link href={'/'}>
            <LazyLoad once>
              <Image
                src="https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710015441/nexxos/nexxos-nav_jfnvie.jpg?_s=public-apps"
                alt={'nexxos'}
                width={160}
                height={80}
              />
            </LazyLoad>
          </Link>
          <nav className={'w-2/5 h-full row justify-between items-center'}>
            {navBarTabs.map((item, key) => {
              return (
                <Link
                  href={item.path}
                  key={key}
                  className={
                    activeTab === item.value
                      ? activeButtonClass
                      : inactiveButtonClass
                  }
                >
                  <p className={'text-sm font-bold text-center'}>
                    {item.description.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className={'lg:hidden col'}>
        <div
          className={
            'w-full h-20 bg-GREY_LIGHT row justify-between items-center px-4'
          }
        >
          <Link href={'/'}>
            <LazyLoad once>
              <Image
                src="https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710015441/nexxos/nexxos-nav_jfnvie.jpg?_s=public-apps"
                alt={'nexxos'}
                width={120}
                height={60}
              />
            </LazyLoad>
          </Link>
          <button className={'w-[48px] h-[48px] row justify-end items-center'}>
            <Image
              src={BurgerIcon}
              alt={'icon nexxos'}
              className={'cursor-pointer'}
              onClick={() => {
                setIsMenuOpened(!isMenuOpened);
              }}
              width={24}
            />
          </button>
        </div>
      </div>
      {isMenuOpened && (
        <div
          className={
            'w-full h-auto bg-GREY_LIGHT shadow-GREY_LIGHT absolute top-20'
          }
          style={{ animation: 'scale-in-ver-top .4s ease-in' }}
        >
          <nav className={'w-full col'}>
            {navBarTabs.map((item, key) => {
              return (
                <Link
                  href={item.path}
                  key={key}
                  className={
                    activeTab === item.value
                      ? activeButtonClass
                      : inactiveButtonClass
                  }
                >
                  <p className={'text-sm font-bold'}>
                    {item.description.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}

export default NavBar;
