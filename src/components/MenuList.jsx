import { Menu, Button, Drawer } from "antd";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function MenuList() {
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 914);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 912);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {isLargeScreen ? (
        <Menu mode="inline" className="side-bar menu-bar" style={{ border: '4px solid rgb(1, 116, 1)' }}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="/body">
            <Link to="/body">Body</Link>
          </Menu.Item>

          <Menu.SubMenu key="face" title="Face">
            <Menu.Item key="See all">
              <Link to="/Face">See all</Link>
            </Menu.Item>

            <Menu.Item key="Moisturer">
              <Link to="/Moisturizer">Moisturizer</Link>
            </Menu.Item>

            <Menu.Item key="Toner">
              <Link to="Tonercard">Toner</Link>
            </Menu.Item>

            <Menu.Item key="Cleanser">
              <Link to="CleanserCard">Cleanser</Link>
            </Menu.Item>

            <Menu.Item key="Face Serum">
              <Link to="FaceSerumCard">Face Serum</Link>
            </Menu.Item>

            <Menu.Item key="Face Treatment Oils">
              <Link to="/FaceOilCard">Face Treatment Oils</Link>
            </Menu.Item>

            <Menu.Item key="Blemish & Imperfections">
              <Link to="/BlemishesCard">Blemish & Imperfections</Link>
            </Menu.Item>

            <Menu.Item key="Lip & Neck care">
              <Link to="/LipNeckCareCard">Lip & Neck care</Link>
            </Menu.Item>

            <Menu.Item key="Daily UV Protectors">
              Daily UV Protectors
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="/sunscreen">
            <Link to="/sunscreen">Sunscreen</Link>
          </Menu.Item>

          <Menu.SubMenu key="substack" title="Makeup">
            <Menu.Item key="Eyes">
              <Link to="/eyes">Eyes</Link>
            </Menu.Item>

            <Menu.Item key="Face">
              <Link to="/mface">Face</Link>
            </Menu.Item>

            <Menu.Item key="Lips">
              <Link to="/lips">Lips</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item key="/perfume">
            <Link to="/perfume">Perfume</Link>
          </Menu.Item>

          <Menu.Item key="/men">
            <Link to="/men">Men</Link>
          </Menu.Item>
        </Menu>
      ) : (
        <>
          <Button className="Menu-btn" type="primary" onClick={showDrawer}>
            Open Menu
          </Button>
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <Menu
              mode="inline"
              className="side-bar menu-bar"
              style={{ width: 250 }}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.Item key="/body">
                <Link to="/body">Body</Link>
              </Menu.Item>

              <Menu.SubMenu key="face" title="Face">
                <Menu.Item key="See all">
                  <Link to="/Face">See all</Link>
                </Menu.Item>

                <Menu.Item key="Moisturer">
                  <Link to="/Moisturizer">Moisturizer</Link>
                </Menu.Item>

                <Menu.Item key="Toner">
                  <Link to="Tonercard">Toner</Link>
                </Menu.Item>

                <Menu.Item key="Cleanser">
                  <Link to="CleanserCard">Cleanser</Link>
                </Menu.Item>

                <Menu.Item key="Face Serum">
                  <Link to="FaceSerumCard">Face Serum</Link>
                </Menu.Item>

                <Menu.Item key="Face Treatment Oils">
                  <Link to="/FaceOilCard">Face Treatment Oils</Link>
                </Menu.Item>

                <Menu.Item key="Blemish & Imperfections">
                  <Link to="/BlemishesCard">Blemish & Imperfections</Link>
                </Menu.Item>

                <Menu.Item key="Lip & Neck care">
                  <Link to="/LipNeckCareCard">Lip & Neck care</Link>
                </Menu.Item>

                <Menu.Item key="Daily UV Protectors">
                  Daily UV Protectors
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="/sunscreen">
                <Link to="/sunscreen">Sunscreen</Link>
              </Menu.Item>

              <Menu.SubMenu key="substack" title="Makeup">
                <Menu.Item key="Eyes">
                  <Link to="/eyes">Eyes</Link>
                </Menu.Item>

                <Menu.Item key="Face">
                  <Link to="/mface">Face</Link>
                </Menu.Item>

                <Menu.Item key="Lips">
                  <Link to="/lips">Lips</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="/perfume">
                <Link to="/perfume">Perfume</Link>
              </Menu.Item>

              <Menu.Item key="/men">
                <Link to="/men">Men</Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </>
      )}
    </>
  );
}

export default MenuList;