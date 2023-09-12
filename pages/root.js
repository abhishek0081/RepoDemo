// import { Button } from "bootstrap";

import Link from "next/link";
import { Fragment } from "react";

export default function Hi() {
  return (
    <Fragment>
      <div className="container mt-5 ">
        <button className="btn-lg btn-dark btn container-fluid mt-5 ">
          Hi I am a developer
        </button>
      </div>
      <Link
        href={"https://github.com/abhishek0081"}
        className="nav-link btn btn-lg-dark mt-5"
      >
        {" "}
        My GIT REPO
      </Link>
    </Fragment>
  );
}
