import React from 'react';
import styles from './index.less';
import { history } from 'umi';
import { MentItemType } from './index.d';

import { ReactComponent as Logo } from '../../icons/svg/react.svg';

/**
 * 数据列表
 */
const menuListData = [
  {
    label: 'Home',
    linkTo: '/home',
  },
  {
    label: 'About',
    linkTo: '/about',
  },
  {
    label: 'User',
    linkTo: '/user',
  },
  {
    label: 'List',
    linkTo: '/list',
  },
];

/**
 * 单个组件
 */
class MenuListItem extends React.Component<MentItemType> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push(this.props.itemInfo.linkTo);
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.itemInfo.label}</li>;
  }
}

/**
 * 数据循环拼接
 */
const menuListItems = menuListData.map((item) => {
  return <MenuListItem itemInfo={item} key={item.linkTo} />;
});

/**
 * 最终的header组件
 */
class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className="logo">
          <Logo width={90} height={120} className={styles.mylogo} />
        </div>
        <ul>{menuListItems}</ul>
      </div>
    );
  }
}

export default AppHeader;
