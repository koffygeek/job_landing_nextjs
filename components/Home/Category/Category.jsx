import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";

const categoryData = [
  {
    id: 1,
    categoryName: "Accounting / Finance",
    openPositions: 2,
    icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 2,
    categoryName: "Marketing",
    openPositions: 86,
    icon: (
      <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 3,
    categoryName: "Design",
    openPositions: 43,
    icon: (
      <PiPaintBrushDuotone className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 4,
    categoryName: "Development",
    openPositions: 12,
    icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 5,
    categoryName: "Project Management",
    openPositions: 2,
    icon: <LuRocket className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 6,
    categoryName: "Customer Service",
    openPositions: 2,
    icon: (
      <RiCustomerService2Fill className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 7,
    categoryName: "Health and Care",
    openPositions: 25,
    icon: (
      <MdOutlineMedicalServices className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 8,
    categoryName: "Automotive Jobs",
    openPositions: 92,
    icon: (
      <LiaCarSideSolid className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
];



const Category = () => {
  return (
    <div>Category</div>
  )
}

export default Category