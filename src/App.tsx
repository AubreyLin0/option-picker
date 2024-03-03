import { SimpleGrid } from "@chakra-ui/react";
import AddOptionsForm from "./components/AddOptionsForm";
import Option from "./components/Option";

function App() {
  return (
    <div className="border h-screen w-full">
      <h5 className="font-madimi-one text-3xl">Option Picker</h5>
      <AddOptionsForm />
      <SimpleGrid
        columns={3}
        spacing={5}
        width={"50vw"}
        className="border mx-auto"
      >
        <Option />
        <Option />
        <Option />
        <Option />
      </SimpleGrid>
    </div>
  );
}

export default App;
