import { Login, Signup } from "./auth";
import UserStatus from "./UserStatus";

export default function Home() {

  return (
    <>
      <UserStatus />
      <Login />
      <Signup />
    </>
  );
}
