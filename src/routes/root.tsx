import { useForm } from "react-hook-form";
import { LoginInfo } from "../type";
import { AddIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";

const Root = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginInfo>();

  const onSubmit = (data: LoginInfo) => {
    console.log(data);
  };
  return (
    <div className="flex items-center h-screen">
      <form
        className="border flex flex-col w-[40vw] mx-auto items-center gap-5 px-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div className="flex"> */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FontAwesomeIcon icon={faUser} color="gray" />
          </InputLeftElement>
          <Input
            {...register("username", { required: "必須項目です" })}
            type="text"
            placeholder="id"
            focusBorderColor="teal.400"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FontAwesomeIcon icon={faUnlock} color="gray" />
          </InputLeftElement>
          <Input
            {...register("password", { required: "必須項目です" })}
            type="text"
            placeholder="password"
            focusBorderColor="teal.400"
          />
        </InputGroup>
        <Button
          colorScheme="teal"
          marginLeft={"10px"}
          width={"6vw"}
          type="submit"
        >
          Login
        </Button>
        {/* </div> */}
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => (
            <p className="text-red-600 text-sm my-2">{message}</p>
          )}
        />
      </form>
    </div>
  );
};

export default Root;
