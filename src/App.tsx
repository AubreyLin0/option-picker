import { Button, SimpleGrid } from "@chakra-ui/react";
import AddOptionsForm from "./components/AddOptionsForm";
import Option from "./components/Option";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { OptionType } from "./type";

function App() {
  const [options, setOptions] = useState<OptionType[]>([]);

  const addNewOption = (text: string) => {
    setOptions((prev) => [...prev, { id: uuidv4(), text }]);
  };
  const deleteOption = (id: string) => {
    setOptions(options.filter((option) => option.id !== id));
  };
  return (
    <div className="border h-screen w-full">
      <h5 className="font-madimi-one text-3xl">Option Picker</h5>
      <AddOptionsForm addNewOption={addNewOption} />
      <SimpleGrid
        columns={3}
        spacing={5}
        width={"50vw"}
        className="border mx-auto"
      >
        {options.map((option) => {
          return (
            <Option
              key={option.id}
              option={option}
              deleteOption={deleteOption}
            />
          );
        })}
      </SimpleGrid>
      <Button marginX={"auto"} display={"block"}>
        Next
      </Button>
    </div>
  );
}

export default App;
