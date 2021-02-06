import { Switch, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import { authOperations, authSelectors } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const ContactsView = lazy(() => import("./views/ContactsView/ContactsView"));
const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const NotFoundView = lazy(() => import("./views/NotFoundView/NotFoundView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView/LoginView"));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>

              <PublicRoute
                path="/register"
                redirectTo="/contacts"
                exact
                restricted
              >
                <RegisterView />
              </PublicRoute>

              <PublicRoute
                path="/login"
                redirectTo="/contacts"
                exact
                restricted
              >
                <LoginView />
              </PublicRoute>

              <Route>
                <NotFoundView />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
