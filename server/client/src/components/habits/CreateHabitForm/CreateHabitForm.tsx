/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './CreateHabitForm.module.scss';
import { RootState } from '../../../store/auth/types';

export interface HabitNew {
  title: string;
  description: string;
  category: string;
  userId: string;
}

interface Props {
  handleSubmitNew: (habit: HabitNew) => void;
}

const CreateHabitForm: React.FC<Props> = ({ handleSubmitNew }: Props) => {
  const { user } = useSelector((state: RootState) => state.authState);

  const [formValues, setFormValues] = useState({
    title: '',
    category: '',
    description: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormValues({
      ...formValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const habit = {
      ...formValues,
      userId: user?._id || '',
    };
    handleSubmitNew(habit);
  };

  return (
    <article className={styles.createHabitForm}>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s6">
            {/* <input
              id="title"
              name="title"
              type="text"
              className="validate"
              value={formValues.title}
              onChange={handleInputChange}
            /> */}
            {/* <Input id="TextInput-4" placeholder="Title" /> */}
            {/* <label htmlFor="title">Title</label> */}
          </div>
          <div className="input-field col s6">
            <input
              id="category"
              name="category"
              type="text"
              className="validate"
              onChange={handleInputChange}
            />
            <label htmlFor="category">Category</label>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="description"
                name="description"
                className="materialize-textarea"
                onChange={handleInputChange}
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default CreateHabitForm;
