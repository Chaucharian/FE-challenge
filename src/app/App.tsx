import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
// import { Layout } from "../screens/public/Layout";
import { Layout, Characters, Favourites } from "@/screens/public";
import { Error } from "@/screens/public/Error";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
