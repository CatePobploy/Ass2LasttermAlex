import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

// LOCAL MODULES
import * as styles from './Signup.css';
import authService from '../../services/authService';
import useAuth from '../../hook/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/CustomButton';

function Signup() {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const { username, email, password } = user;

  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await authService.register(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch (err) {
      console.log(err?.response);
      toast.error("Registration failed. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.imageSection}>
        <img src="/pictures/SignUpBG.png" alt="Elf Background" className={styles.elfImage} />
      </div>
      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>Hello! We are glad to see you :)</h2>
        <Form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <Form.Group controlId="username">
              <Form.Label className={styles.styledLabel}>Name</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="text"
                placeholder="Name"
                name="username"
                value={username}
                onChange={handleTextChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className={styles.styledLabel}>Email Address</Form.Label>
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

            <Form.Group controlId="password">
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

            <Form.Group controlId="password-confirm">
              <Form.Label className={styles.styledLabel}>Repeat Password</Form.Label>
              <Form.Control
                className={styles.styledInput}
                type="password"
                placeholder="Repeat Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
          </div>

          <Form.Group controlId="terms" className={styles.termsGroup}>
            <Form.Check
              type="checkbox"
              label={
                <>
                  I agree to the&nbsp;
                  <Link to="/terms">Terms of Service</Link>&nbsp;and&nbsp;
                  <Link to="/privacy">Privacy Policy</Link>
                </>
              }
              required
            />
          </Form.Group>

          <Button loadingState={loading} className={styles.submitButton}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
