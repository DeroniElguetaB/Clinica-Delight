import React from 'react';
import { Button, Input } from '../ModeloFormularios/Form';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

function ChangePassword() {
  return (
    <div className="flex-colo gap-4">
      {/* old password */}
      <Input label="Contraseña anterior" color={true} type="password" />
      {/* new password */}
      <Input label="Nueva contraseña" color={true} type="password" />
      {/* confirm password */}
      <Input label="Repetir nueva contraseña" color={true} type="password" />
      {/* submit */}
      <Button
        label={'Guardar cambios'}
        Icon={HiOutlineCheckCircle}
        onClick={() => {
          toast.error('This feature is not available yet');
        }}
      />
    </div>
  );
}

export default ChangePassword;
