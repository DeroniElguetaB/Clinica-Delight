import React from 'react';
import { sortsDatas } from '../Data/Datas';
import { Button, Input, Select, Textarea } from '../ModeloFormularios/Form';
import { BiChevronDown } from 'react-icons/bi';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

// Health Information
// allergies
// habits
// Medical History

function HealthInfomation() {
  const [bloodType, setBloodType] = React.useState(
    sortsDatas.bloodTypeFilter[0]
  );
  return (
    <div className="flex-colo gap-4">
      {/* uploader */}
      <div className="flex gap-3 flex-col w-full col-span-6">
        {/* select  */}
        <div className="flex w-full flex-col gap-3">
          <p className="text-black text-sm">Grupo Sanguineo</p>
          <Select
            selectedPerson={bloodType}
            setSelectedPerson={setBloodType}
            datas={sortsDatas.bloodTypeFilter}
          >
            <div className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain">
              {bloodType?.name} <BiChevronDown className="text-xl" />
            </div>
          </Select>
        </div>

        {/* weight */}
        <Input label="Peso" color={true} type="number" placeholder={'60'} />
        {/* height */}
        <Input label="Altura" color={true} type="text" placeholder={'1,73'} />
        {/* allergies */}
        <Textarea
          label="Alergias"
          color={true}
          rows={3}
          placeholder={'Nueces, ibuprofeno, etc'}
        />
        {/* habits */}
        <Textarea
          label="Habitos"
          color={true}
          rows={3}
          placeholder={'El paciente fuma, toma alcohol, etc'}
        />
        {/* Medical History */}
        <Textarea
          label="Informacion adicional"
          color={true}
          rows={3}
          placeholder={'Diabetes, malaria, glaucoma, etc'}
        />

        {/* submit */}
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

export default HealthInfomation;
