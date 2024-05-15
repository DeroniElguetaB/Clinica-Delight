import { HiOutlineHome } from 'react-icons/hi';
import { TbCalendar, TbChartHistogram, TbFile,TbUsers } from 'react-icons/tb';
import { RiHeartLine, RiImageLine, RiUserLine } from 'react-icons/ri';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';

export const MenuDatas = [
  {
    title: 'Home',
    path: '/',
    icon: HiOutlineHome,
  },
  {
    title: 'Pacientes',
    path: '/patients',
    icon: TbUsers,
  },
  {
    title: 'Perfil',
    path: '/settings',
    icon: AiOutlineSetting,
  },
];
export const memberData = [
  {
    id: 1,
    title: 'Hugo Lloris',
    image: '/images/user1.png',
    admin: false,
    email: 'hugolloris@gmail.com',
    phone: '+1 234 567 890',
    age: 25,
    gender: 'Male',
    blood: 'A+',
    totalAppointments: 5,
    date: '20 Aug 2021',
  },
  {
    id: 2,
    title: 'Mauris auctor',
    image: '/images/user2.png',
    admin: false,
    email: 'maurisauctor@gmail.com',
    phone: '+1 456 789 123',
    age: 34,
    gender: 'Female',
    blood: 'B+',
    totalAppointments: 3,
    date: '22 Nov 2023',
  },
  {
    id: 3,
    title: 'Michael Owen',
    image: '/images/user3.png',
    admin: false,
    phone: '+1 890 123 456',
    email: 'michaelowen@gmail.com',
    age: 45,
    gender: 'Male',
    blood: 'O+',
    totalAppointments: 26,
    date: '12 Jan 2020',
  },
  {
    id: 4,
    title: 'Amina Smith',
    image: '/images/user4.png',
    admin: true,
    phone: '+1 908 765 432',
    email: 'aminasmith@gmail.com',
    age: 28,
    gender: 'Female',
    blood: 'AB+',
    totalAppointments: 17,
    date: '07 Feb 2001',
  },
  {
    id: 5,
    title: 'Minahil Khan',
    image: '/images/user5.png',
    admin: false,
    phone: '+1 890 123 456',
    email: 'minahilkhan@gmail.com',
    age: 35,
    gender: 'Female',
    blood: 'A+',
    totalAppointments: 9,
    date: '30 Dec 2019',
  },
  {
    id: 6,
    title: 'Alex Morgan',
    image: '/images/user6.png',
    admin: false,
    phone: '+1 908 765 432',
    email: 'alexmorgan@gmail.com',
    age: 29,
    gender: 'Male',
    blood: 'B+',
    totalAppointments: 34,
    date: '12 Jan 2020',
  },
  {
    id: 7,
    title: 'John Doe',
    image: '/images/user7.png',
    admin: false,
    phone: '+1 234 567 890',
    email: 'johndoe@gmail.com',
    age: 32,
    gender: 'Male',
    blood: 'O-',
    totalAppointments: 12,
    date: '18 Mar 2023',
  },
  {
    id: 8,
    title: 'David Beckham',
    image: '/images/user8.png',
    admin: false,
    phone: '+1 456 789 123',
    email: 'davidbackham@gmail.com',
    age: 27,
    gender: 'Female',
    blood: 'AB+',
    totalAppointments: 70,
    date: '01 June 2018',
  },
];
export const sortsDatas = {
  status: [
    {
      id: 1,
      name: 'Status...',
    },
    {
      id: 2,
      name: 'Pending',
    },
    {
      id: 3,
      name: 'Approved',
    },
    {
      id: 4,
      name: 'Cancelled',
    },
  ],
  method: [
    {
      id: 1,
      name: 'Payment method',
    },
    {
      id: 2,
      name: 'Cash',
    },
    {
      id: 3,
      name: 'NHCF Insurance',
    },
    {
      id: 4,
      name: 'Britam Insurance',
    },
  ],
  currency: [
    {
      id: 1,
      name: 'Select Currency',
    },
    {
      id: 2,
      name: 'USD (US Dollar)',
    },
    {
      id: 3,
      name: 'EUR (Euro)',
    },
    {
      id: 4,
      name: 'TSH (Tanzanian Shilling)',
    },
  ],
  instractions: [
    {
      id: 1,
      name: 'Select Instraction',
    },
    {
      id: 2,
      name: 'After Meal',
    },
    {
      id: 3,
      name: 'Before Meal',
    },
  ],
  measure: [
    {
      id: 1,
      name: 'Select Measure',
    },
    {
      id: 2,
      name: 'mg',
    },
    {
      id: 3,
      name: 'ml',
    },
    {
      id: 4,
      name: 'gm',
    },
    {
      id: 5,
      name: 'kg',
    },
    {
      id: 6,
      name: 'lb',
    },
    {
      id: 7,
      name: 'tbsp',
    },
    {
      id: 8,
      name: 'tablet',
    },
    {
      id: 9,
      name: 'capsule',
    },
  ],
  stocks: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Available',
    },
    {
      id: 3,
      name: 'Out of Stock',
    },
  ],
  service: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Enabled',
    },
    {
      id: 3,
      name: 'Disabled',
    },
  ],
  title: [
    {
      id: 1,
      name: 'Dr.',
    },
    {
      id: 2,
      name: 'Dra.',
    }
  ],
  filterPatient: [
    {
      id: 1,
      name: 'Filtrar por...',
    },
    {
      id: 2,
      name: 'Pacientes mas nuevos',
    },
    {
      id: 3,
      name: 'Pacientes mas antiguos',
    },
  ],
  genderFilter: [
    {
      id: 1,
      name: 'Indefinido',
    },
    {
      id: 2,
      name: 'Femenino',
    },
    {
      id: 3,
      name: 'Masculino',
    },
  ],
  bloodTypeFilter: [
    {
      id: 1,
      name: 'Grupo Sanguineo',
    },
    {
      id: 2,
      name: 'A+',
    },
    {
      id: 3,
      name: 'A-',
    },
    {
      id: 4,
      name: 'B+',
    },
    {
      id: 5,
      name: 'B-',
    },
    {
      id: 6,
      name: 'AB+',
    },
    {
      id: 7,
      name: 'AB-',
    },
    {
      id: 8,
      name: 'O+',
    },
    {
      id: 9,
      name: 'O-',
    },
  ]
};
export const transactionData = [
  {
    id: 1,
    user: memberData[0],
    date: 'Mar 12, 2022',
    amount: 1000,
    status: 'Paid',
    method: 'Cash',
    doctor: memberData[3],
  },
  {
    id: 2,
    user: memberData[1],
    date: 'Agus 12, 2023',
    amount: 2300,
    status: 'Approved',
    method: 'NHCF',
    doctor: memberData[4],
  },
  {
    id: 3,
    user: memberData[2],
    date: 'Jan 06, 2024',
    amount: 1200,
    status: 'Pending',
    method: 'Britam',
    doctor: memberData[5],
  },
  {
    id: 4,
    user: memberData[3],
    date: 'Feb 18, 2025',
    amount: 1400,
    status: 'Cancel',
    method: 'NHCF',
    doctor: memberData[6],
  },
  {
    id: 5,
    user: memberData[4],
    date: 'Mar 12, 2026',
    amount: 1230,
    status: 'Pending',
    method: 'Cash',
    doctor: memberData[7],
  },
  {
    id: 6,
    user: memberData[5],
    date: 'Apr 12, 2027',
    amount: 1000,
    status: 'Paid',
    method: 'NHCF',
    doctor: memberData[0],
  },
  {
    id: 7,
    user: memberData[6],
    date: 'May 12, 2028',
    amount: 8900,
    status: 'Cancel',
    method: 'Britam',
    doctor: memberData[1],
  },
  {
    id: 8,
    user: memberData[7],
    date: 'Jun 12, 2029',
    amount: 1000,
    status: 'Pending',
    method: 'Britam',
    doctor: memberData[2],
  },
];
export const dashboardCards = [
  {
    id: 1,
    title: 'Total Pacientes',
    icon: TbUsers,
    value: 1600,
    percent: 45.06,
    color: ['bg-subMain', 'text-subMain', '#66B5A3'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 2,
    title: 'Turnos',
    icon: TbCalendar,
    value: 130,
    percent: 25.06,
    color: ['bg-yellow-500', 'text-yellow-500', '#F9C851'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
  {
    id: 3,
    title: 'Preinscripciones',
    icon: TbFile,
    value: 4160,
    percent: 65.06,
    color: ['bg-green-500', 'text-green-500', '#34C759'],
    datas: [92, 80, 45, 15, 49, 77, 70, 51, 110, 20, 90, 60],
  },
  {
    id: 4,
    title: 'Total Ganado',
    icon: MdOutlineAttachMoney,
    value: 4590,
    percent: 45.06,
    color: ['bg-red-500', 'text-red-500', '#FF3B30'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
];
export const patientTab = [
  {
    id: 1,
    title: 'Historial Medico',
    icon: TbChartHistogram,
  },
  {
    id: 2,
    title: 'Archivos',
    icon: RiImageLine,
  },
  {
    id: 3,
    title: 'Perfil',
    icon: RiUserLine,
  },
  {
    id: 4,
    title: 'Informacion',
    icon: RiHeartLine,
  },
];
export const medicalRecodData = [
  {
    id: 1,
    date: '13 Abril 2024',
    amount: 150000,
    data: [
      {
        id: 1,
        title: 'Observaciones',
        value: 'Presion alta, taquicardia',
      },
      {
        id: 2,
        title: 'Diagnostico',
        value: 'Peritonitis',
      },
      {
        id: 3,
        title: 'Medicacion',
        value: 'Ibuprofeno 600ml c/8 hrs',
      },
    ]
  },
];
export const doctorsData = [
  {
    id: 1,
    user: memberData[0],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[1],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[3],
    title: 'Dr.',
  },
];
