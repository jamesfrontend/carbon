import Image from "next/image";
import React from "react";
import classes from "./card.module.scss";

interface Props {
  src: string;
  name: string;
  house: string;
}
export const ApiCard = ({ src, name, house }: Props) => {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div
          style={{
            height: 227,
            aspectRatio: "163 / 227",
          }}
        >
          <Image
            src={src}
            height={227}
            width={163}
            layout="responsive"
            alt="image"
          />
        </div>
        <div className={classes.content}>
          <span className={classes.field}>{name}</span>
          <span className={classes.fieldTwo}>{house}</span>
        </div>
      </div>
    </>
  );
};
