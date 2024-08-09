import { toast } from "react-toastify";
import { deleteData } from "../helper";

import { redirect } from "react-router-dom";

export default async function LogoutAction() {
  deleteData({
    key: "userName",
  });
  toast.success("You have sucessfully deleted your account");

  return redirect("/logout");
}
