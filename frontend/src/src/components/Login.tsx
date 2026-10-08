import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginProps {
  /** Optional error message passed from the backend (e.g., flash attribute). */
  errorMessage?: string;
}

const Login: React.FC<LoginProps> = ({ errorMessage }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  // No preventDefault – the form submits to the original backend endpoint.
  const handleSubmit = (_e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className="modern-container">
      {/* Navigation bar */}
      <nav className="navbar navbar-default">
        <a href="/" className="navbar-brand">Brand</a>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="/list-todos.do">Todos</a></li>
          <li><a href="http://www.in28minutes.com">In28Minutes</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/login.do">Login</a></li>
        </ul>
      </nav>

      {/* Login form card */}
      <div className="container">
        <div className="modern-card">
          <form action="/login.do" method="post" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="alert-box">
                <span className="badge">{errorMessage}</span>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;