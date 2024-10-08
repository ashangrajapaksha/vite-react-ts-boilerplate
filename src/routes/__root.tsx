import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};
export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className="ml-10 mt-10">
        <h1 className="text-3xl font-bold underline">
          Welcome to My React App Boilerplate!!
        </h1>
        <ul className="mt-10">
          <li>
            <Link to="/" activeProps={activeProps}>
              index
            </Link>
          </li>
          <li>
            <Link to="/home" activeProps={activeProps}>
              home
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  ),
});
