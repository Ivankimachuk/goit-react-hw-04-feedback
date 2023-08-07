import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css"

const Section = ({ title,children }) => {
  return (
    <div className={style.section}>
      <h2  className={style.sectionTitle}>{title}</h2>
        {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
}
