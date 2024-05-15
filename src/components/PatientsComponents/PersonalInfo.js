import React from 'react';
import { sortsDatas } from '../Data/Datas';
import { Button, DatePickerComp, Input, Select } from '../ModeloFormularios/Form';
import { BiChevronDown } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiDeleteBin5Line } from 'react-icons/ri';

function PersonalInfo({ titles }) {
  const [title, setTitle] = React.useState(sortsDatas.title[0]);
  const [date, setDate] = React.useState(new Date());
  const [gender, setGender] = React.useState(sortsDatas.genderFilter[0]);
  return (
    <div className="flex-colo gap-4">
      {/* select  */}
      {titles && (
        <div className="flex w-full flex-col gap-3">
          <p className="text-black text-sm">Dr/Dra</p>
          <Select
            selectedPerson={title}
            setSelectedPerson={setTitle}
            datas={sortsDatas.title}
          >
            <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
              {title?.name} <BiChevronDown className="text-xl" />
            </div>
          </Select>
        </div>
      )}

      {/* fullName */}
      <Input label="Nombre Completo" color={true} type="text" />
      {/* phone */}
      <Input label="Celular" color={true} type="number" />
      {/* email */}
      <Input label="Email" color={true} type="email" />
      {!titles && (
        <>
          {/* gender */}
          <div className="flex w-full flex-col gap-3">
            <p className="text-black text-sm">Sexo</p>
            <Select
              selectedPerson={gender}
              setSelectedPerson={setGender}
              datas={sortsDatas.genderFilter}
            >
              <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
                {gender?.name} <BiChevronDown className="text-xl" />
              </div>
            </Select>
          </div>
          {/* emergancy contact */}
          <Input label="Contacto de emergencia" color={true} type="number" />
          {/* date */}
          <DatePickerComp
            label="Fecha de nacimiento"
            startDate={date}
            onChange={(date) => setDate(date)}
          />
          {/* address */}
          <Input label="Direccion" color={true} type="text" />
        </>
      )}
      {/* submit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Button
          label={'Eliminar'}
          Icon={RiDeleteBin5Line}
          onClick={() => {
            toast.error('This feature is not available yet');
          }}
        />
        <Button
          label={'Guardar'}
          Icon={HiOutlineCheckCircle}
          onClick={() => {
            toast.error('This feature is not available yet');
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
