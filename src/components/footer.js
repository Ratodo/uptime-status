import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>源码来自 <Link to="https://github.com/yb/uptime-status/" text="yb" /></p>
        <p>&copy; 2020 <Link to="https://status.ratodo.com/" text="STATUS.RATODO.COM" /></p>
      </div>
    </div>
  );
}

export default Footer;
