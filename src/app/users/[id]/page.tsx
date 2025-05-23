interface UserProps {
  params: { id: string };
}
const User = async ({ params }: UserProps) => {
  const { id } = await params;
  return <div>User Profile: {id}</div>;
};
export default User;
