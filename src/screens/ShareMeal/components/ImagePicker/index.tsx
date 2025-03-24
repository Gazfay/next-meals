'use client';

import { FC, useRef, useState } from 'react';
import classes from './imagePicker.module.css';
import Image from 'next/image';

export const ImagePicker: FC<{ name: string }> = ({ name }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const pickPickImageHandler = () => {
    imageInputRef.current?.click();
  };

  const changeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImageUrl(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageUrl(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imageUrl && <p>No image picked yet.</p>}
          {imageUrl && <Image src={imageUrl} fill alt='Picked Image' />}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type='file'
          id='image'
          accept='.jpg,.png,.jpeg'
          name={name}
          onChange={changeImageHandler}
          required
        />
        <button className={classes.button} type='button' onClick={pickPickImageHandler}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
