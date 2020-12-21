import { Link } from "react-router-dom";
import logo from "../../img/sm-logo-text-green.png";
import styled from "styled-components";

const NavBarTop = (props) => {
  

  const navBarMenu = [
    {
      pageName: "หน้าหลัก",
      toPage: "/main",
    },
    {
      pageName: "สินค้า/บริการ",
      toPage: "/product",
    },
    {
      pageName: "ค่าบริการ",
      toPage: "/pricing",
    },
  ];

   const Nav = styled.nav`
    background-color: #fffefd;
   `;

  return (
  
    <Nav className="bd-navbar navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo}></img>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start ">
            
          </div>
          <hr></hr>
          <div className="navbar-end ">
            <div className="navbar-item">
              <div className="buttons  is-centered">
                <button className="button is-warning" >
                  <strong>
                    <Link to="/login" className="has-text-black is-block">เข้าสู่ระบบ</Link>
                  </strong>
                </button>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons  is-centered" > 
                <button className="button">
                  <strong>
                    <Link to="/register" className="has-text-black is-block">สมัครใช้งาน</Link>
                  </strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default NavBarTop;
