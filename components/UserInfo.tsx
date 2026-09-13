type UserInfoProps = {
  name: string | null | undefined;
  email: string | null | undefined;
};

export default function UserInfo({
  name,
  email,
}: UserInfoProps) {
  return (
    <div>
      <h2>{name ?? "Unknown User"}</h2>
      <p>{email ?? "No email available"}</p>
    </div>
  );
}
