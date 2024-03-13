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
  const check = async () => {
    const res = await fetch(
      "http://127.0.0.1:5001/option-picker/us-central1/helloWorld"
    );
    const data = await res.text();
    console.log(data);
  };
  return (
    <div className="flex items-center h-screen">
      <form
        className="border-2 flex flex-col w-[40vw] mx-auto items-center justify-center gap-5 px-20 border-emerald-500 rounded-lg h-[60vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h5 className="font-madimi-one text-5xl mb-10 inline-block text-shadow after:content-['attr(data-shadow)'] after:absolute after:top-[0.06em] after:left-[0.06em] after:-z-[1] after:text-gradient ">
          Option Picker
        </h5>
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
          type="button"
          onClick={check}
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
