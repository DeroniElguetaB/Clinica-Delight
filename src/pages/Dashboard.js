import React from 'react';
import Layout from '../Layout';
import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { dashboardCards, memberData, transactionData } from '../components/Data/Datas';
import { Transactiontable } from '../components/Tables/Tables';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <Layout>
      {/* boxes */}
      <div className="w-full grid xl:grid-cols-4 gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {dashboardCards.map((card, index) => (
          <div
            key={card.id}
            className=" bg-white rounded-xl border-[1px] border-border p-5"
          >
            <div className="flex gap-4 items-center">
              <div
                className={`w-10 h-10 flex-colo bg-opacity-10 rounded-md ${card.color[1]} ${card.color[0]}`}
              >
                <card.icon />
              </div>
              <h2 className="text-sm font-medium">{card.title}</h2>
            </div>
            <div className="grid grid-cols-8 gap-4 mt-4 bg-dry py-5 px-8 items-center rounded-xl">
              <div className="flex flex-col gap-4 col-span-3">
                <h4 className="text-md font-medium">
                  {card.value}
                  {
                    // if the id === 4 then add the $ sign
                    card.id === 4 ? '$' : '+'
                  }
                </h4>
                <p className={`text-sm flex gap-2 ${card.color[1]}`}>
                  {card.percent > 50 && <BsArrowUpRight />}
                  {card.percent > 30 && card.percent < 50 && (
                    <BsArrowDownRight />
                  )}
                  {card.percent < 30 && <BsArrowDownLeft />}
                  {card.percent}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6">
          <div className="xl:col-span-6  w-full">
            {/* transaction */}
            <div className="bg-white rounded-xl border-[1px] border-border p-5">
              <div className="flex-btn gap-2">
                <h2 className="text-sm font-medium">Transaciones recientes</h2>
                <p className="flex gap-4 text-sm items-center">
                  Today{' '}
                  <span className="py-1 px-2 bg-subMain text-white text-xs rounded-xl">
                    27000$
                  </span>
                </p>
              </div>
              {/* table */}
              <div className="mt-4 overflow-x-scroll">
                <Transactiontable
                  data={transactionData.slice(0, 5)}
                  action={false}
                />
              </div>
            </div>
          </div>
        {/* side 2 */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="10"
          data-aos-offset="200"
          className="xl:col-span-2 xl:block grid sm:grid-cols-2 gap-6"
        >
          {/* recent patients */}
          <div className="bg-white rounded-xl border-[1px] border-border p-5">
            <h2 className="text-sm font-medium">Pacientes recientes</h2>
            {memberData.slice(3, 8).map((member, index) => (
              <Link
                to={`/patients/preview/${member.id}`}
                key={index}
                className="flex-btn gap-4 mt-6 border-b pb-4 border-border"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={member.image}
                    alt="member"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xs font-medium">{member.title}</h3>
                    <p className="text-xs text-gray-400">{member.phone}</p>
                  </div>
                </div>
                <p className="text-xs text-textGray">2:00 PM</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
