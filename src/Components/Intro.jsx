import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">Your money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            aria-label="Your name"
            placeholder="What is your name?"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser"></input>
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Girl holding money" width={600} />
    </div>
  );
}
