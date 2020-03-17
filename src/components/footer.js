import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>源码来自 <Link to="https://github.com/yb/uptime-status/" text="yb/uptime-status" /></p>
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2020 夜半观星 <Link to="https://t.ratodo.com/" text="T.RATODO.COM" /></p>
      </div>
    </div>
  );
}

export default Footer;
