import { Count } from "../../components/count/Count";
import { Headers } from "../../components/headers/Headers";
import "./SignUp.scss";

export const SignUp = () => {
  return (
    <div className="sing-up">
   <div className="sing-up-top">
   <Headers
        title={"Work smarter. Save time."}
        subtitle={
          "Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon."
        }
      />
      <Count light={true} />
   </div>
      <div className="sing-up-footer">

      </div>
    </div>
  );
};
