import TableSearch from "@/components/tableSearch";
import Pagination from "@/components/Pagination";
import {
  Delete,
  Eye,
  Filter,
  FilterIcon,
  Plus,
  SortAscIcon,
  Trash,
  View,
} from "lucide-react";
import React from "react";
import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
// import FormModal from "@/components/FormModal";
import { role, userData } from "@/lib/data";

type User = {
  userId: string;
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  staff: Staff;
};

type Staff = {
  staffId: string;
  branchId: string;
  staffName: string;
  birthday: string;
  address: string;
  title: string;
  hireDate: string;
};

const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Id",
    accessor: "userId",
    className: "hidden md:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden md:table-cell",
  },
  {
    header: "Role",
    accessor: "role",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "actions",
  },
];

const Management = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const renderRow = (item: User) => (
    <tr
      key={item.userId}
      className="border-b border-gray-200 even:bg-gray-50 text-sm hover:bg-gray-100"
    >
      {/* <td className="flex items-center gap-4 p-4">
        <Image
          src={
            "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg"
          }
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td> */}
      <td className="flex items-center gap-4 p-4">
        <Image
          src={"/laptop1.jpg"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        {item.name}
      </td>
      <td className="hidden md:table-cell">{item.name}</td>
      <td className="hidden md:table-cell">{item.userId}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.role.toLowerCase()}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.userId}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full ">
              {/* <Image src="/view.png" alt="" width={16} height={16} /> */}
              <Eye width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full ">
              <Trash width={16} height={16} />
            </button>
            // <FormModal table="teacher" type="delete" id={item.itemId} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          User Management
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              {/* <Icon src={Filter} alt="" width={14} height={14} /> */}
              <FilterIcon width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              {/* <Image src="/sort.png" alt="" width={14} height={14} /> */}
              <SortAscIcon width={14} height={14} />
            </button>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                {/* <Image src="/sort.png" alt="" width={14} height={14} /> */}
                <Plus width={14} height={14} />
              </button>
            )}
            {/* {role === "admin" && (
              <FormContainer table="teacher" type="create" />
            )} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={userData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default Management;
