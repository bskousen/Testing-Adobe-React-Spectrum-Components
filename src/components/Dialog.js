import React from "react";
import {
  Dialog,
  ActionButton,
  Content,
  Heading,
  Button,
  ButtonGroup,
  DialogTrigger,
  Divider,
  Image,
} from "@adobe/react-spectrum";

export default function DialogDemo() {
  return (
    <DialogTrigger>
      <ActionButton>Upload</ActionButton>
      {(close) => (
        <Dialog>
          <Image
            slot="hero"
            alt=""
            src="https://i.imgur.com/Z7AzH2c.png"
            objectFit="cover"
          />
          <Heading>Upload file</Heading>
          <Divider />
          <Content>Are you sure you want to upload this file?</Content>
          <ButtonGroup>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" onPress={close} autoFocus>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
}
