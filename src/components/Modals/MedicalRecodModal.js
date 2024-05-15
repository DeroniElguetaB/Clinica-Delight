import Modal from './Modal';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { RiShareBoxLine } from 'react-icons/ri';
import { MdOutlineCloudDownload } from 'react-icons/md';
import { AiOutlinePrinter } from 'react-icons/ai';
import '../../styles/MedicalRecodModal.css'

//MODELO DE RECETAS
function MedicalRecodModal({ closeModal, isOpen, datas }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const buttonClass =
    'bg-subMain flex-rows gap-3 bg-opacity-5 text-subMain rounded-lg border border-subMain border-dashed px-4 py-3 text-sm';
    return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title="12 May 2021"
      width={'max-w-4xl'}
    >
      <div className="flex-colo gap-6">
        {datas?.data?.slice(0, 3).map((data) => (
          <div key={data.id} className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-12 md:col-span-3">
              <p className="text-sm font-medium">{data.title}:</p>
            </div>
            <div className="col-span-12 md:col-span-9 border-[1px] border-border rounded-xl p-6">
              <p className="text-xs text-main font-light leading-5">
                {data.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="download">
          {/* button */}
          <button
            onClick={() => {
              setIsShareOpen(true);
            }}
            className={buttonClass}
          >
            Share <RiShareBoxLine />
          </button>
          <button
            onClick={() => {
              toast.error('This feature is not available yet');
            }}
            className={buttonClass}
          >
            Download <MdOutlineCloudDownload />
          </button>
          <button
            onClick={() => {
              toast.error('This feature is not available yet');
            }}
            className={buttonClass}
          >
            Print <AiOutlinePrinter />
          </button>
        </div>
    </Modal>
  );
}

export default MedicalRecodModal;
