import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authSelectors from '../Redux/auth/auth-selectors';

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={(props) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
