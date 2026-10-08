import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Header component that mirrors the legacy header.jspf.
 * It sets the page title, includes the Bootstrap CSS from the
 * webjars location, and injects the legacy footer style.
 *
 * No state or event handlers are added because the original
 * fragment contains only static markup.
 */
const Header: React.FC = () => (
  <>
    <Helmet>
      <title>Todos</title>
      <link
        rel="stylesheet"
        href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
      />
      <style>{`
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px;
          background-color: #f5f5f5;
        }
      `}</style>
    </Helmet>
  </>
);

export default Header;