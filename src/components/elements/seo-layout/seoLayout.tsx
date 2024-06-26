import React from 'react';
import Head from 'next/head';
import { appTitle, appDescription } from '@/constants/modelConstants';
import { NextSeo } from 'next-seo';

interface Props {
  title?: string | null;
  description?: string | null;
}

function SeoLayout({ title, description }: Props) {
  return (
    <>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        ></meta>
        <meta name={'msapplication-TileColor'} content={'#FFFFFF'}></meta>
        <meta
          name={'msapplication-TileImage'}
          content={'/ms-icon-144x144.png'}
        ></meta>
        <meta
          name="keywords"
          content="nexxos, educacion, simulacion, simulacro, educativo, educativa, educativos, educativas, simulaciones, simulacros, actividades educativas, jovenes, politica, debate, internacional"
        />
      </Head>
      <NextSeo
        title={title ?? appTitle}
        description={description ?? appDescription}
        openGraph={{
          type: 'website',
          url: 'https://nexxos.com.ar',
          title: title ?? appTitle,
          description: description ?? appDescription,
          images: [
            {
              url: 'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709937140/nexxos/xx_pauawm.jpg?_s=public-apps',
              width: 282,
              height: 241,
              alt: 'Nexxos ONG',
            },
          ],
          siteName: 'Nexxos ONG',
        }}
        twitter={{
          cardType: 'app',
          site: '@NexxosAR',
          handle: '@NexxosAR',
        }}
      />
    </>
  );
}

export default SeoLayout;
