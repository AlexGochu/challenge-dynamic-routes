import Link from "next/link";

const User = () => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/1">User 1</Link>
      <br />
      <Link href="/users/2">User 2</Link>
    </div>
  );
};
export default User;
