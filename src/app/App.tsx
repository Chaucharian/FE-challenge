import { Routes, Route } from "react-router-dom";
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
