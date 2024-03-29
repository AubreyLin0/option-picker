import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type OptionForm = { option: "string" };

type Props = {
  addNewOption: (text: string) => void;
};

const AddOptionsForm = ({ addNewOption }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<OptionForm>();

  const onSubmit = (data: OptionForm) => {
    addNewOption(data.option);
    reset();
  };
  return (
    <form
      className="border flex flex-col w-[50vw] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AddIcon color="gray.300" />
          </InputLeftElement>
          <Input
            {...register("option", { required: "必須項目です" })}
            type="text"
            placeholder="Write some thing"
            focusBorderColor="teal.400"
          />
        </InputGroup>
        <Button
          colorScheme="teal"
          marginLeft={"10px"}
          width={"6vw"}
          type="submit"
        >
          Add
        </Button>
      </div>
      <ErrorMessage
        name="option"
        errors={errors}
        render={({ message }) => (
          <p className="text-red-600 text-sm my-2">{message}</p>
        )}
      />
    </form>
  );
};

export default AddOptionsForm;
