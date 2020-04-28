import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/auth/types";
import { userInfo } from "os";
import { Habit } from "../../../interfaces/Habit";
import CreateHabitForm from "../CreateHabitForm";
import { HabitNew } from "../CreateHabitForm/CreateHabitForm";

interface Props {
  myProp: string;
}

const Dashboard: React.FC<Props> = ({ myProp }: Props) => {
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    // Materialize.updateTextFields();
    console.log("-- GET HABITS INITIATE --");
    axios.get("/api/habits").then((res) => {
      console.log("-- GET HABITS SUCCESS --");
      console.log(res);
    });
  }, []);

  const handleCreateHabit = () => {
    setIsCreating((prevState) => !prevState);
  };

  const handleSubmitNew = (habit: HabitNew) => {
    console.log("-- HandleSubmitNew --");
    axios.post("/api/habits", habit);
  };

  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <button
              className="waves-effect waves-light btn"
              onClick={handleCreateHabit}
            >
              <i className="material-icons right">cloud</i>Add
            </button>
          </div>
        </div>
        <CreateHabitForm handleSubmitNew={handleSubmitNew} />
      </div>
    </main>
  );
};

export default Dashboard;
