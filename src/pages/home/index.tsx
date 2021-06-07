import React from 'react';
import styles from './index.less';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>home</h1>
        <ul>
          <li>adf</li>
          <li>af</li>
          <li>asdf</li>
        </ul>
        <input
          type="text"
          aria-label="请输入"
          aria-required="true"
          name="namea"
          autoComplete="none"
        />
        <button aria-label="按钮" aria-required="true">
          按钮
        </button>
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_433041.png"
          alt="这是一个图片"
        />
      </div>
    );
  }
}

export default App;
