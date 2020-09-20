import React from "react";
import { Breadcrumbs, Item } from "@adobe/react-spectrum";

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs>
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
      <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
  );
}
