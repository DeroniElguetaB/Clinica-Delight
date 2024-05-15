import React from 'react';
import { MenuSelect } from '../ModeloFormularios/Form';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiEdit, FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-hot-toast';

const thclass = 'text-start text-sm font-medium py-3 px-2 whitespace-nowrap';
const tdclass = 'text-start text-sm py-4 px-2 whitespace-nowrap';

export function Transactiontable({ data, action, functions }) {
  const DropDown1 = [
    {
      title: 'Edit',
      icon: FiEdit,
      onClick: (data) => {
        functions.edit(data.id);
      },
    },
    {
      title: 'View',
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data.id);
      },
    },
    {
      title: 'Delete',
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error('This feature is not available yet');
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Date</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>
            Amout <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Method</th>
          {action && <th className={thclass}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>{index + 1}</td>
            <td className={tdclass}>
              <div className="flex gap-4 items-center">
                <span className="w-12">
                  <img
                    src={item.user.image}
                    alt={item.user.title}
                    className="w-full h-12 rounded-full object-cover border border-border"
                  />
                </span>

                <div>
                  <h4 className="text-sm font-medium">{item.user.title}</h4>
                  <p className="text-xs mt-1 text-textGray">
                    {item.user.phone}
                  </p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{item.date}</td>
            <td className={tdclass}>
              <span
                className={`py-1 px-4 ${
                  item.status === 'Paid'
                    ? 'bg-subMain text-subMain'
                    : item.status === 'Pending'
                    ? 'bg-orange-500 text-orange-500'
                    : item.status === 'Cancel' && 'bg-red-600 text-red-600'
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.status}
              </span>
            </td>
            <td className={`${tdclass} font-semibold`}>{item.amount}</td>
            <td className={tdclass}>{item.method}</td>
            {action && (
              <td className={tdclass}>
                <MenuSelect datas={DropDown1} item={item}>
                  <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                    <BiDotsHorizontalRounded />
                  </div>
                </MenuSelect>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// prescription table
export function MedicineTable({ data, onEdit }) {
  const DropDown1 = [
    {
      title: 'Edit',
      icon: FiEdit,
      onClick: (item) => {
        onEdit(item);
      },
    },
    {
      title: 'Delete',
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error('This feature is not available yet');
      },
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>Name</th>
          <th className={thclass}>
            Price <span className="text-xs font-light">(Tsh)</span>
          </th>
          <th className={thclass}>Status</th>
          <th className={thclass}>InStock</th>
          <th className={thclass}>Measure</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclass}>
              <h4 className="text-sm font-medium">{item?.name}</h4>
            </td>
            <td className={`${tdclass} font-semibold`}>{item?.price}</td>
            <td className={tdclass}>
              <span
                className={`text-xs font-medium ${
                  item?.status === 'Out of stock'
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}
              >
                {item?.status}
              </span>
            </td>
            <td className={tdclass}>{item?.stock}</td>
            <td className={tdclass}>{item?.measure}</td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// patient table
export function PatientTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: 'Ver',
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
        {
          title: 'Borrar',
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error('This feature is not available yet');
          },
        },
      ]
    : [
        {
          title: 'View',
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data.id);
          },
        },
      ];
  const thclasse = 'text-start text-sm font-medium py-3 px-2 whitespace-nowrap';
  const tdclasse = 'text-start text-xs py-4 px-2 whitespace-nowrap';
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclasse}>#</th>
          <th className={thclasse}>Patient</th>
          <th className={thclasse}>Created At</th>
          <th className={thclasse}>Gender</th>
          {!used && (
            <>
              <th className={thclasse}>Blood Group</th>
              <th className={thclasse}>Age</th>
            </>
          )}

          <th className={thclasse}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className="border-b border-border hover:bg-greyed transitions"
          >
            <td className={tdclasse}>{index + 1}</td>
            <td className={tdclasse}>
              <div className="flex gap-4 items-center">
                {!used && (
                  <span className="w-12">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-12 rounded-full object-cover border border-border"
                    />
                  </span>
                )}

                <div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="text-xs mt-1 text-textGray">{item.phone}</p>
                </div>
              </div>
            </td>
            <td className={tdclasse}>{item.date}</td>

            <td className={tdclasse}>
              <span
                className={`py-1 px-4 ${
                  item.gender === 'Male'
                    ? 'bg-subMain text-subMain'
                    : 'bg-orange-500 text-orange-500'
                } bg-opacity-10 text-xs rounded-xl`}
              >
                {item.gender}
              </span>
            </td>
            {!used && (
              <>
                <td className={tdclasse}>{item.blood}</td>
                <td className={tdclasse}>{item.age}</td>
              </>
            )}

            <td className={tdclasse}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg">
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
