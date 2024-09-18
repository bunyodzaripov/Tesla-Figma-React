import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Home } from "@pages";
import {
   ModelG,
   Model3,
   ModelX,
   ModelY,
   SolarPanels,
   SolarRoof,
} from "@components";
const Index = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}>
               <Route path="/model-g" element={<ModelG />} />
               <Route path="/model-3" element={<Model3 />} />
               <Route path="/model-x" element={<ModelX />} />
               <Route path="/model-y" element={<ModelY />} />
               <Route path="/solar-panels" element={<SolarPanels />} />
               <Route path="/solar-roof" element={<SolarRoof />} />
            </Route>
         </Route>
      )
   );
   return <RouterProvider router={router} />;
};

export default Index;
