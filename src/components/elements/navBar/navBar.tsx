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
      <div className={'hidden lg:flex col font-vietnam'}>
        <div
          className={
            'w-full h-12 bg-GREY_LIGHT row justify-between items-center px-8'
          }
        >
          <div className={'w-1/5 h-full row justify-start items-center'}>
            <Link href={'/'}>
              <Image src={IconNexxos} alt={'icon nexxos'} width={120} />
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
                    {item.locale.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </nav>
          {/* <div className={'w-2/5 h-full row justify-end items-center'}>
            <Link
              href={'/contact'}
              className={
                'bg-RED_MEDIUM hover:shadow-md px-2 py-1 rounded-full font-bold row centered mx-2 text-BLUE_DARK'
              }
            >
              <p>SECCION 1</p>
            </Link>
            <Link
              href={'https://pro.nash21.io/'}
              target={'_blank'}
              className={
                'bg-BLACK hover:shadow-md px-2 py-1 rounded-full font-bold row centered mx-2 text-RED_MEDIUM'
              }
            >
              <p>SECCION 2</p>
            </Link>
          </div> */}
        </div>
      </div>
      <div className={'lg:hidden col font-vietnam'}>
        <div
          className={
            'w-full h-12 bg-GREY_LIGHT row justify-between items-center px-8'
          }
        >
          <div className={'w-1/5 h-full row justify-start items-center'}>
            <Link href={'/'}>
              <Image src={IconNexxos} alt={'icon nexxos'} width={120} />
            </Link>
          </div>
          <button className={'w-1/6 h-full row justify-end items-center'}>
            <Image
              src={BurgerIcon}
              alt={'icon nash21'}
              style={{ transform: 'scale(0.5)' }}
              className={'cursor-pointer'}
              onClick={() => {
                setIsMenuOpened(!isMenuOpened);
              }}
            />
          </button>
        </div>
      </div>
      {isMenuOpened && (
        <div
          className={
            'w-full h-2/5 bg-GREY_LIGHT shadow-GREY_LIGHT shadow-sm absolute top-0'
          }
        >
          <div className={'lg:hidden col font-vietnam'}>
            <div
              className={
                'w-full h-12 bg-GREY_LIGHT row justify-between items-center px-8'
              }
            >
              <div className={'w-1/5 h-full row justify-start items-center'}>
                <Link href={'/'}>
                  <Image src={IconNexxos} alt={'icon nexxos'} width={120} />
                </Link>
              </div>
              <button className={'w-1/6 h-full row justify-end items-center'}>
                <Image
                  src={BurgerIcon}
                  alt={'icon nexxos'}
                  style={{ transform: 'scale(0.5)' }}
                  className={'cursor-pointer'}
                  onClick={() => {
                    setIsMenuOpened(!isMenuOpened);
                  }}
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
                  <p className={'text-sm font-bold'}>SECCION 3</p>
                </Link>
              );
            })}
          </nav>
          <div
            className={
              'w-full row justify-center items-center absolute bottom-2'
            }
          >
            <Link
              href={'/contact'}
              className={
                'bg-RED_MEDIUM w-2/5 mx-1 px-2 py-1 rounded-full font-bold row centered text-BLUE_DARK'
              }
            >
              <p>SECCION 4</p>
            </Link>
            <Link
              href={'https://pro.nash21.io/'}
              target={'_blank'}
              className={
                'bg-BLACK w-2/5 mx-1 px-2 py-1 rounded-full font-bold row centered text-RED_MEDIUM'
              }
            >
              <p>SECCION 5</p>
            </Link>
          </div>
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
