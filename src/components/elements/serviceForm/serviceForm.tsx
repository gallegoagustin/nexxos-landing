import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
function ServiceForm({ onClose }: any) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center bg-BLUE_DARK">
      <div className="max-w-3xl mx-auto p-4">
        <div className={'full centered'}>
          <div className="flex justify-end translate-y-4 translate-x-2">
            <button
              onClick={onClose}
              className="text-WHITE h-8 w-8 bg-BLACK rounded-full hover:text-gray-300"
            >
              X
            </button>
          </div>
          <div className={'bg-WHITE p-8 pb-4 justify-between rounded-xl'}>
            <div className="font-avaunt text-GREEN_MEDIUM text-2xl mb-4">
              {'home.contacta_nosotros'}
            </div>
            <div id={'hubspot-contact-form-wrapper-service'} />
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

type Props = InferProps<typeof ServiceForm.propTypes>;

export default ServiceForm;
