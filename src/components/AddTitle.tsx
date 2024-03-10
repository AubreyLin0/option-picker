import { Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type OptionForm = { title: "string" };

const AddTitle = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<OptionForm>();

  const onSubmit = (data: OptionForm) => {
    reset();
  };
  return (
    <form
      className="border flex flex-col w-[50vw] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("title", { required: "必須項目です" })}
        type="text"
        placeholder="Write some thing"
        focusBorderColor="teal.400"
      />
      <ErrorMessage
        name="title"
        errors={errors}
        render={({ message }) => (
          <p className="text-red-600 text-sm my-2">{message}</p>
        )}
      />
      <Button
        colorScheme="teal"
        marginLeft={"10px"}
        width={"6vw"}
        type="submit"
      >
        Next
      </Button>
    </form>
  );
};

export default AddTitle;
