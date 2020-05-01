/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React from 'react';
// import { useSelector } from 'react-redux';
import styles from './CreateHabitForm.module.scss';
// import { RootState } from '../../../store/auth/types';
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { FormInstance } from 'antd/lib/form';
// import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export interface HabitNew {
  title: string;
  description: string;
  category: string;
  userId: string;
}

interface Props {
  form: FormInstance | undefined;
}

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const CreateHabitForm: React.FC<Props> = ({ form }: Props) => {
  // const { user } = useSelector((state: RootState) => state.authState);

  // const [formValues, setFormValues] = useState({
  //   title: '',
  //   category: '',
  //   description: '',
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>,
  // ): void => {
  //   setFormValues({
  //     ...formValues,
  //     [e.currentTarget.name]: e.currentTarget.value,
  //   });
  // };

  const handleSubmit = (values: Store): void => {
    // event.preventDefault();
    console.log(values);
    // const habit = {
    //   ...formValues,
    //   userId: user?._id || '',
    // };
    // handleSubmitNew(habit);
  };

  const onFinishFailed = (errorInfo: Store) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <article className={styles.createHabitForm}>
      <Form
        layout="vertical"
        hideRequiredMark
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        form={form}
        initialValues={{
          scheduleType: 'days',
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter a habit title' }]}
            >
              <Input placeholder="Please enter a habit name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select placeholder="Please select a category">
                <Option value="health">Health</Option>
                <Option value="fitness">Fitness</Option>
                <Option value="professionaldevelopment">Professional Development</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="scheduleType"
              label="Schedule Type"
              rules={[{ required: true, message: 'Please select a schedule type' }]}
            >
              <Select placeholder="Please select schedule type">
                <Option value="days">Days</Option>
                <Option value="daysPerWeek">Days Per week</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="scheduleDays"
              label="Days"
              rules={[
                {
                  required: true,
                  message: 'Please choose the days you wish to set this habit for',
                },
              ]}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select Days"
                // defaultValue={['a10', 'c12']}
                // onChange={handleChange}
              >
                {daysOfTheWeek.map((day) => {
                  return (
                    <Option value={day.toLowerCase()} key={day}>
                      {day}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}></Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="duration" label="Duration">
              <DatePicker.RangePicker
                style={{ width: '100%' }}
                getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="colour" label="Colour">
              <Select placeholder="Please choose the colour">
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} placeholder="Enter a description if you would like" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {/* <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field col s6">
            <input
              id="title"
              name="title"
              type="text"
              className="validate"
              value={formValues.title}
              onChange={handleInputChange}
            />{' '}
            <Input id="TextInput-4" placeholder="Title" />
            <label htmlFor="title">Title</label>
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
      </div> */}
    </article>
  );
};

export default CreateHabitForm;
