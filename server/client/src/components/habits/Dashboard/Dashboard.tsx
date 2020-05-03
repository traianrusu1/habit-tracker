import React, { useEffect } from 'react';
import { Drawer, Button, Form } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import styles from './Dashboard.module.scss';
import CreateHabitForm from '../CreateHabitForm';
// import { HabitNew } from '../CreateHabitForm/CreateHabitForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabits, createHabit, deleteHabit } from '../../../actions/habitActions';
import { RootState } from '../../../store/auth/types';
import HabitList from '../HabitList';
import { Habit } from '../../../interfaces/Habit';

interface Props {
  showCreateHabit: boolean;
  handleShowCreateHabit: (show: boolean) => void;
}

const Dashboard: React.FC<Props> = ({ showCreateHabit, handleShowCreateHabit }: Props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const habitsState = useSelector((state: RootState) => state.habitsState);
  const { user } = useSelector((state: RootState) => state.authState);
  const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  console.log('-- Dashboard --', habitsState);
  console.log('-- SCREEN WIDTH --', screenWidth);

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  // const handleShowCreateHabit = (): void => {
  //   setIsCreating((prevState) => !prevState);
  // };

  const handleSubmitNew = async (): Promise<void> => {
    console.log('-- HandleSubmitNew --');
    console.log(form.getFieldsValue());
    form.getFieldsError();
    try {
      const valid = await form.validateFields();
      console.log('VALID: ', valid);
      // debugger;

      // const habit = { ...form.getFieldsValue(), userId: user?._id };

      try {
        const userId = user?._id || '';
        const fieldValues = form.getFieldsValue();
        await dispatch(createHabit({ ...fieldValues, userId: userId } as Habit));
        dispatch(fetchHabits());
        form.resetFields();
        handleShowCreateHabit(false);
      } catch (error) {
        console.error('ERROR -', error);
      } finally {
      }
    } catch (error) {
      console.error('ERROR -', error);
    }
  };

  const handleDeleteHabit = async (habitId: string): Promise<void> => {
    console.log('-- handleDeleteHabit --', habitId);
    try {
      await dispatch(deleteHabit(habitId));
      dispatch(fetchHabits());
    } catch (error) {
      console.error('ERROR -', error);
    }
  };

  const handleCreateHabitClose = (): void => {
    handleShowCreateHabit(false);
  };

  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className="row center">
          {/* <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">add_circle_outline</i>New
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">collections</i>Category
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">filter_list</i>Filter
            </button>
          </div>
          <div className="col s3">
            <button
              type="button"
              className="waves-effect waves-light btn"
              onClick={handleShowCreateHabit}
            >
              <i className="material-icons right">group</i>Group
            </button>
          </div> */}
        </div>
        {/* {showCreateHabit && <CreateHabitForm handleSubmitNew={handleSubmitNew} />} */}
        {/* <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel} */}
        <Drawer
          title="Create a new Habit"
          width={screenWidth < 750 ? screenWidth * 0.9 : 720}
          onClose={handleCreateHabitClose}
          visible={showCreateHabit}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={handleCreateHabitClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={handleSubmitNew} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <CreateHabitForm form={form} />
        </Drawer>

        <HabitList habits={habitsState?.habits} handleDeleteHabit={handleDeleteHabit} />
      </div>
    </main>
  );
};

export default Dashboard;
