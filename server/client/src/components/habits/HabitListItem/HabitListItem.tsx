import React from 'react';
// import styles from './HabitListItem.module.scss';
import { Habit } from '../../../interfaces/Habit';
import { List, Button, Dropdown, Skeleton, Avatar, Menu } from 'antd';
import {
  CarryOutOutlined,
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { ClickParam } from 'antd/lib/menu';
import HabitListItemSchedule from '../HabitListItemSchedule';

interface Props {
  habit: Habit;
  handleMarkDone: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  handleEdit: (habitId: string) => void;
  handleDelete: (habitId: string) => void;
}

type HabitDropDownMenuTypes = 'edit' | 'delete';

const HabitListItem: React.FC<Props> = ({
  habit,
  handleMarkDone,
  handleEdit,
  handleDelete,
}: Props) => {
  const handleMenuItemClick = (type: HabitDropDownMenuTypes, habitId: string) => {
    switch (type) {
      case 'edit':
        handleEdit(habitId);
        break;
      case 'delete':
        handleDelete(habitId);
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu
      onClick={(param: ClickParam) =>
        handleMenuItemClick(param.key as HabitDropDownMenuTypes, habit._id as string)
      }
    >
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          shape="round"
          onClick={handleMarkDone}
          icon={<CarryOutOutlined />}
          size="large"
        >
          Done
        </Button>,
        <Dropdown trigger={['click']} overlay={menu} placement="bottomRight">
          <Button type="link">
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    >
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{habit.title}</a>}
          description={<HabitListItemSchedule habit={habit} />}
        />
      </Skeleton>
    </List.Item>
  );
};

export default HabitListItem;
