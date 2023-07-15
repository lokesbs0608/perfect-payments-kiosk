import React from "react";
import styles from "./styles.module.scss";
interface Props {
  title: string;
  onChange: (e: any) => void;
  type?: string;
}
const CutomInput = ({ title, onChange, type }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor="input">{title}</label> <br />
      <input onChange={(e)=>onChange(e)} name={title} type='text' multiple={true}/>
    </div>
  );
};

export default CutomInput;
