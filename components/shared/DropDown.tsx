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
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState(initialCategories);


  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
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
