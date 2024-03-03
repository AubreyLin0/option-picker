import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardHeader, Divider } from "@chakra-ui/react";
import { OptionType } from "../type";

type Props = {
  option: OptionType;
  deleteOption: (id: string) => void;
};

const Option = ({ option, deleteOption }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Button
          variant="ghost"
          colorScheme="red"
          borderRadius={"100%"}
          padding={"3px"}
          onClick={() => deleteOption(option.id)}
        >
          <DeleteIcon />
        </Button>
      </CardHeader>
      <Divider color={"gray.300"} />
      <CardBody>{option.text}</CardBody>
    </Card>
  );
};

export default Option;
