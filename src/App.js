import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useContext, useEffect, useState } from "react";
import { Loader } from "./ui/components/Loader";
import AdminRouterPage from "./ui/pages/admin/AdminRouterPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <UserManager />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;

function UserManager() {
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  if (load) {
    return <Loader />;
  } else if (user.role == 1) {
    return <AdminRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
