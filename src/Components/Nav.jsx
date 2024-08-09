// rrd imports
import { NavLink, Form } from "react-router-dom";
// library
import { TrashIcon } from "@heroicons/react/24/solid";
//assets
import logoMark from "../assets/logomark.svg";

export default function NavBar({ userName }) {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logoMark} alt="logomark" />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete all users data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
