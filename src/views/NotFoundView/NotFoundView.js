import error from "../../404-error.jpg";

export default function NotFoundView() {
  return (
    <>
      <img src={error} alt="404 error" width="700px" height="525px" />
      <h1>404 Page not found</h1>
    </>
  );
}
