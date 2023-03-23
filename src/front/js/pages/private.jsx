import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Private = () => {
  const { store } = useContext(Context);

  return (
    <section className="h-100 gradient-form" style={{"backgroundColor": "#eee"}}>
        <div>
            <h1>You made it!</h1>
        </div>
    </section>
  );
};
