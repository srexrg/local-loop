import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";


const initialCategories = [
  { _id: "1", name: "Tech" },
  { _id: "2", name: "Sports" },
  { _id: "3", name: "Other" },
];

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
  className?:string
};

const Dropdown = ({ value, onChangeHandler,className }: DropdownProps) => {
  const [categories, setCategories] = useState(initialCategories);


  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger
        className={`w-full h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent !important ${className}`}
      >
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category.name}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
