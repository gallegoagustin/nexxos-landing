import React from 'react';
import Image from 'next/image';
import BoosterRocket from '../../../../public/images/services/boosterrenta.svg';
import NashVal from '../../../../public/images/services/nashval.svg';
import BoosterNash21 from '../../../../public/images/services/boosternash21.svg';
import Learning from '../../../../public/images/services/learninigpeople.jpeg';
import Services1 from '../../../../public/images/services1.jpeg';
import ArrowUpServices from '../../../../public/images/icons/arrow-up-services.svg';
import ServiceForm from '@/components/elements/serviceForm/serviceForm';
import Bg1 from '../../../../public/images/icons/services/bg1.svg';

function ActivitiesTemplate() {
  const [showContactForm, setShowContactForm] = React.useState(false);

  const handleOnRentAdvanceSubmit = (e: any) => {
    setShowContactForm(true);
  };

  return (
    <main className={'full col justify-start items-center'}>
      {/* BLOCK 1 */}
      <div
        className={`w-full bg-no-repeat py-20 px-12 lg:py-40 lg:px-24 row centered`}
        style={{
          background: `url(${Services1.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '23%',
          boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.3)',
        }}
      >
        <h1 className={'text-WHITE text-3xl lg:text-5xl'}>
          Nuestros Servicios
        </h1>
      </div>

      {/* BLOCK 2 */}
      <div
        className={
          'w-full col lg:row items-center justify-center py-20 bg-GREY_LIGHT'
        }
      >
        <div className={'w-4/6 lg:w-1/4 col lg:mr-12'}>
          <h2 className={'text-4xl text-GREEN_MEDIUM'}>
            {'services.renta_fluida'}
          </h2>
          <p className={'font-bold mt-2'}>
            {'services.real_time'.toUpperCase()}
          </p>
          <p className={'font-light mt-2'}>{'services.cobra_text'}</p>
          <div
            className={
              'w-full row items-center mt-8 p-4 shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE'
            }
          >
            <Image src={ArrowUpServices} alt={'icon'} className={'w-1/4'} />
            <div className={'col w-full ml-4'}>
              <p>RENTA FLUIDA</p>
              {/* <Image src={Counter} alt={'counter'} className={'w-1/2'} /> */}
            </div>
          </div>
        </div>
        <div
          className={
            'w-4/6 lg:w-1/4 mt-8 lg:mt-0 col lg:ml-12 p-6 lg:p-10 justify-between items-center shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE'
          }
        >
          <div
            className={
              'w-full self-center mb-3 row items-center justify-between p-3 rounded-2xl shadow-sm shadow-BLUE_LIGHT'
            }
          >
            <p className={'font-aldrich text-4xl text-BLUE_DARK'}>5,5%</p>
            <p className={'text-BLUE_LIGHT ml-2 text-xs lg:text-sm font-bol'}>
              *DE LA RENTA ANUAL, IVA INCLUIDO
            </p>
          </div>
          <div className={'w-full'}>
            <p className={'font-light my-6 text-BLUE_DARK text-xs'}>
              <span className={'font-bold'}>
                · Acceso instantáneo a rentas:
              </span>{' '}
              cobro del alquiler disponible por día o incluso por hora
            </p>
            <p className={'font-light my-6 text-BLUE_DARK text-xs'}>
              <span className={'font-bold'}>· Pago garantizado:</span> pague o
              no tu inquilino, tú cobras igual{' '}
            </p>
            <p className={'font-light my-6 text-BLUE_DARK text-xs'}>
              <span className={'font-bold'}>· En caso de impago,</span> todos
              los gastos legales y pagos se encuentran cubiertos, hasta la
              restitución del inmueble
            </p>
            <p className={'font-bold my-6 text-BLUE_DARK text-xs'}>
              · Protección ante actos voluntarios
            </p>
          </div>
          <div className={'w-full row'}>
            <button
              onClick={() => setShowContactForm(true)}
              className={'main-green-button w-full lg:w-3/5 mt-4 lg:mt-0'}
            >
              SABER MÁS
            </button>
          </div>
        </div>
        <Image src={Bg1} alt={'icon'} className={'absolute right-0 w-1/6'} />
      </div>

      {/* CALCULADORA */}
      <div className={'py-12 w-full px-16 lg:px-0 bg-GREEN_LIGHT'}>
        <div className="max-w-4xl mx-auto col items-center">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <h2 className={'text-4xl text-GREEN_MEDIUM'}>
              {'services.anticipo_renta'}
            </h2>
            <h3 className="uppercase font-bold">
              {'services.subtit_anticipo'}
            </h3>
            <p className="font-bold">{'services.subtit2_anticipo'}</p>
            <p>{'services.subtit3_anticipo'}</p>
          </div>
          <div className="w-full lg:px-16 lg:px-0 mt-10">
            {/* <RentAdvanceCalc onSubmit={handleOnRentAdvanceSubmit} /> */}
            <h1>ACA IBA EL CALCULO DE RENTA</h1>
          </div>
        </div>
      </div>

      {/* BLOCK 4 */}
      <div className={'col lg:row bg-GREY_LIGHT centered py-12'}>
        <div className={'col w-5/6 lg:w-1/3 mx-4'}>
          <Image src={BoosterRocket} alt={'image'} className={'w-full'} />
          <p className={'text-xs text-BLUE_DARK'}>
            {'services.booster_aclaration'}
          </p>
        </div>

        <div
          className={
            'w-5/6 lg:w-1/3 mt-8 lg:mt-0 mx-4 h-full col justify-between'
          }
        >
          <h1 className={'text-4xl text-BLUE_MEDIUM'}>
            {'services.booster_renta'}
          </h1>
          <p className={'text-GREEN_MEDIUM font-bold'}>
            {'services.booster_subt'.toUpperCase()}
          </p>
          <p className={'font-light mt-4'}>{'services.booster_text1'}</p>
          <p className={'font-light mt-4'}>{'services.booster_text2'}</p>
          <button
            onClick={() => setShowContactForm(true)}
            className={'main-green-button lg:w-1/3 mt-4 w-full'}
          >
            {'services.saber_mas'.toUpperCase()}
          </button>
        </div>
      </div>

      {/* BLOCK 5 */}
      <div
        className={'flex col lg:flex-row-reverse bg-GREEN_LIGHT centered py-12'}
      >
        <div className={'col w-5/6 lg:w-1/3 mx-4'}>
          <Image src={NashVal} alt={'image'} className={'w-full'} />
        </div>

        <div
          className={
            'w-5/6 lg:w-1/3 mt-8 lg:mt-0 mx-4 h-full col justify-between'
          }
        >
          <h1 className={'text-4xl text-BLUE_MEDIUM'}>{'services.nashval'}</h1>
          <p className={'text-GREEN_MEDIUM font-bold'}>
            {'services.nashval_subt'.toUpperCase()}
          </p>
          <p className={'font-light mt-4'}>{'services.nashval_text'}</p>
          <button
            onClick={() => setShowContactForm(true)}
            className={'main-green-button lg:w-1/3 mt-4 w-full'}
          >
            {'services.saber_mas'.toUpperCase()}
          </button>
        </div>
      </div>

      {/* BLOCK 6 */}
      <div
        className={
          'w-full col items-center lg:items-stretch p-4 lg:pl-32 lg:py-12'
        }
        style={{
          background: `url(${Learning.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '12%',
          boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.7)',
        }}
      >
        <div className={'col w-5/6 lg:w-1/2 pt-8 lg:pt-32 pb-8'}>
          <h1 className={'text-WHITE text-4xl'}>
            Compra contratos de alquiler
          </h1>
          <p className={'text-GREEN_LIGHT mt-4'}>
            PRIMER MARKETPLACE MUNDIAL DE CONTRATOS DE ALQUILER GARANTIZADOS
          </p>
          <p className={'text-WHITE mt-4'}>
            <span className={'font-bold'}>
              Ahora puedes recibir un alquiler mensual sin ser dueño de una
              propiedad
            </span>{' '}
            Imagina tener acceso a una amplia gama de contratos de alquiler con
            garantías incorporadas, lo que significa que cobrarás rentas sin
            preocuparte por impagos o incumplimientos. De esta forma, estarás
            invirtiendo en derechos de renta que se encuentran documentados en
            la economía real. Tanto si eres propietario y deseas aumentar tu
            rentabilidad, como si eres inversor y buscas oportunidades
            rentables, nuestro marketplace es el lugar perfecto para ti. Accede
            hoy y aprovecha las ventajas que te ofrecemos.
          </p>
          <p className={'text-GREEN_FLUO font-bold mt-4'}>
            Abierto 24/7, puedes operar en el momento que tú quieras desde
            cualquier parte del mundo.
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className={'main-green-button w-full lg:w-1/3 mt-4'}
          >
            ACCEDE AHORA
          </button>
        </div>
      </div>

      {/* BLOCK 7 */}
      <div
        className={
          'w-full py-10 lg:py-0 row items-center justify-center bg-BLUE_LIGHT'
        }
      >
        <Image src={BoosterNash21} alt={'image'} className={'w-1/4 mx-4'} />
        <div className={'col mx-4'}>
          <h1 className={'text-4xl text-BLUE_MEDIUM'}>
            {'services.boostern21'}
          </h1>
          <p className={'text-WHITE font-bold mt-4'}>
            {'services.booster_proximamente'.toUpperCase()}
          </p>
        </div>
      </div>
      {showContactForm && (
        <ServiceForm onClose={() => setShowContactForm(false)} />
      )}
    </main>
  );
}

export default ActivitiesTemplate;
