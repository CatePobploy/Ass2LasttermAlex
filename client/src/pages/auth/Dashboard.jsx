import useAuth from '../../hook/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/CustomButton';

const Dashboard = () => {
  const { user, logout } = useAuth();

  // If no user is available, show an error message (could be replaced with a loading state in a real app)
  if (!user) {
    return (
      <Card title="Profile" authform>
        <div className="text-center mb-4">
          Cannot Retrieve User
        </div>
      </Card>
    );
  }

  return (
    <Card title="Profile" authform>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}!</h4>
      </div>
      <p><strong>Email: </strong>{user.email}</p>
      {user.isAdmin && <p><strong>Secret: </strong>Hello Admin - nice to see you here</p>}

      {/* Log Out & Forces a Redirect */}
      <div className="mt-5">
        <Button onClick={logout}>
          Log Out
        </Button>
      </div>
    </Card>
  );
};

export default Dashboard;
