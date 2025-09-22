
import AuthLogin from "@/components/Signin/indext";
import { Suspense } from "react";
const Singin = () => {

  return (
     <Suspense fallback={""}>
   <AuthLogin/>
   </Suspense>
  );
};

export default Singin;
