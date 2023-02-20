import { useEffect } from "react";
import { Count } from "../../components/count/Count";
import { Form } from "../../components/form/Form";
import { Headers } from "../../components/headers/Headers";
import "./SignUp.scss";

export const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Form />
      <div className="sing-up-footer"></div>
    </div>
  );
};
