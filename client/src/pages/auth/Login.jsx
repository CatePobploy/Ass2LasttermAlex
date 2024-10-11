import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';

// LOCAL MODULES
import * as styles from './Login.css';
import authService from '../../services/authService';
import useAuth from '../../hook/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/CustomButton';

function Login() {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const { email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch (err) {
      console.log(err?.response);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.gifBackgroundContainer}>
      <div className={styles.formOverlay}>
        <Card title="Log In" authform>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className={styles.styledLabel}>Email</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleTextChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className={styles.styledLabel}>Password</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleTextChange}
                required
              />
            </Form.Group>

            <Button loadingState={loading}>
              {loading ? (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'Submit'
              )}
            </Button>
          </Form>

          <div className={styles.userNav}>
            <span>Not a member? &nbsp;
              <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
