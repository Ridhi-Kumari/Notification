import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Notification from "./Pages/Noti";
import "./Styles/NotificationApp.css";

const routes = createBrowserRouter([
  {
    path: "/notification",
    element: <Notification/>,
  },
  {
    path: "*",
    element: <div>Not Found</div>
  }
]);

function App() {
  return (
    <div className=" Appcontainer">

    <div className=" Appcontainer2">
<h1>Notification</h1>
</div>
    <RouterProvider router={routes}>
      <Notification/>
    </RouterProvider>
    
   
    </div>
  );
}

export default App;



      