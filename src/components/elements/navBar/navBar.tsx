import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes, { InferProps } from 'prop-types';
import navBarTabs from '@/constants/navConstants';
import IconNexxos from '../../../../public/images/icons/nexxos-nav.png';
import BurgerIcon from '../../../../public/images/icons/burger-menu.svg';

function NavBar({ activeTab }: Props) {
  const activeButtonClass =
    'w-full py-3 h-full row centered bg-RED_MEDIUM text-WHITE';
  const inactiveButtonClass = 'w-full py-3 h-full row centered hover:shadow-md';

  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  return (
    <>
      <div className={'hidden lg:flex col'}>
        <div
          className={
            'w-full h-16 bg-GREY_LIGHT row justify-between items-center'
          }
        >
          <div className={'w-[160px] h-full col justify-center'}>
            <Link href={'/'}>
              <Image src={IconNexxos} alt={'nexxos'} />
            </Link>
          </div>
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
          <div className={'w-[150px] h-full row justify-start items-center'}>
            <Link href={'/'}>
              <Image src={IconNexxos} alt={'icon nexxos'} width={120} />
            </Link>
          </div>
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
            'w-full h-auto bg-GREY_LIGHT shadow-GREY_LIGHT absolute top-0'
          }
        >
          <div className={'lg:hidden col'}>
            <div
              className={
                'w-full h-12 bg-GREY_LIGHT row justify-between items-center'
              }
            >
              <div
                className={'w-[150px] h-full row justify-start items-center'}
              >
                <Link href={'/'}>
                  <Image src={IconNexxos} alt={'icon nexxos'} width={120} />
                </Link>
              </div>
              <button
                className={'w-[48px] h-full row justify-end items-center'}
              >
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
          <nav className={'w-full col mt-4'}>
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

NavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

type Props = InferProps<typeof NavBar.propTypes>;

export default NavBar;
