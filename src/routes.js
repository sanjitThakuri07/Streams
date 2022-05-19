import React from "react";
import StreamCreate from "./Components/Streams/StreamCreate";
import StreamDelete from "./Components/Streams/StreamDelete";
import StreamEdit from "./Components/Streams/StreamEdit";
import StreamList from "./Components/Streams/StreamList";

export const routes = [
  {
    title: "Stream List",
    path: "/",
    exact: true,
    component: StreamList,
  },
  {
    title: "Stream Create",
    path: "/streams/new",
    exact: true,
    component: StreamCreate,
  },
  {
    title: "Stream Edit",
    path: "/streams/edit",
    exact: true,
    component: StreamEdit,
  },
  {
    title: "Stream Delete",
    path: "/streams/delete",
    exact: true,
    component: StreamDelete,
  },
];
