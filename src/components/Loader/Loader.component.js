import React from "react";
import PropType from "prop-types";
import { BackDrop, Spinner } from "./Loader.styles";
import useLoader from "../../state/loader/hooks/useLoader";

const Loader = ({ show }) => {
  const [load] = useLoader();

  return show || load.active ? (
    <BackDrop>
      <Spinner />
    </BackDrop>
  ) : (
    ""
  );
};

Loader.defaultProps = {
  show: true
};

Loader.proptype = {
  show: PropType.bool
};

export default Loader;
