import { deleteData } from "../helper";

import { redirect } from "react-router-dom";

export default async function LogoutAction() {
  deleteData({
    key: "userName",
  });

  return redirect("/");
}
