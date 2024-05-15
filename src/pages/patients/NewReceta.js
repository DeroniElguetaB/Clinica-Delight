import React, { useState } from 'react';
import Layout from '../../Layout';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Button, Select, Textarea } from '../../components/ModeloFormularios/Form';
import { BiChevronDown} from 'react-icons/bi';
import {  memberData } from '../../components/Data/Datas';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const doctorsData = memberData.map((item) => {
  return {
    id: item.id,
    name: item.title,
  };
});

function NewReceta() {
  const [doctors, setDoctors] = useState(doctorsData[0]);
  return (
    <Layout>
      <div className="flex items-center gap-4">
        <Link
          to={`/patients/preview/1`}
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Crear nueva receta</h1>
      </div>
      <div className=" grid grid-cols-12 gap-6 my-8 items-start">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 flex-colo gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
        >
          <img
            src="/images/user7.png"
            alt="setting"
            className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
          />
          <div className="gap-2 flex-colo">
            <h2 className="text-sm font-semibold">Amani Mmassy</h2>
            <p className="text-xs text-textGray">amanimmassy@gmail.com</p>
            <p className="text-xs">+254 712 345 678</p>
            <p className="text-xs text-subMain bg-text font-medium py-1 px-4 rounded-full border-[0.5px] border-subMain">
              45 yrs{' '}
            </p>
          </div>
        </div>
        {/* tab panel */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
        >
          <div className="flex w-full flex-col gap-5">
            {/* doctor */}
            <div className="flex w-full flex-col gap-3">
              <p className="text-black text-sm">Doctor</p>
              <Select
                selectedPerson={doctors}
                setSelectedPerson={setDoctors}
                datas={doctorsData}
              >
                <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                  {doctors.name} <BiChevronDown className="text-xl" />
                </div>
              </Select>
            </div>
            {/* complains */}
            <Textarea
              label="Observaciones"
              color={true}
              rows={3}
              placeholder={'Presion alta, taquicardia , etc...'}
            />
            {/* Diagnosis */}
            <Textarea
              label="Diagnostico"
              color={true}
              rows={3}
              placeholder={'Gengivitis, Peritonitis, etc...'}
            />
            {/* Vital Signs */}
            <Textarea
              label="Informacion adicional"
              color={true}
              rows={3}
              placeholder={'El paciente se observa con presion, pulsaciones, etc...'}
            />
            {/* submit */}
            <Button
              label={'Guardar'}
              Icon={HiOutlineCheckCircle}
              onClick={() => {
                toast.error('Esta opcion aun no esta disponible');
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewReceta;
