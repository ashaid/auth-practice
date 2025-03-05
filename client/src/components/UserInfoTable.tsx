import { useAuth } from "../context/Authcontext";

export const UserInfoTable = () => {
  const { user } = useAuth();
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
        {user?.map((entry, index) => (
          <tr key={index}>
            <th>{entry.name}</th>
            <th>{entry.email}</th>
            <th>{entry.status}</th>
          </tr>
        ))}
      </table>
    </>
  );
};
