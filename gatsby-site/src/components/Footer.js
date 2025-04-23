/* eslint-disable no-unused-vars */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../components/footer.css'; // Import styles
/* eslint-enable no-unused-vars */

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footer_menu1: wpMenu(name: { eq: "Footer Menu 1" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu2: wpMenu(name: { eq: "Footer Menu 2" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu3: wpMenu(name: { eq: "Footer Menu 3" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
      footer_menu4: wpMenu(name: { eq: "Primary Menu" }) {
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `);

  // Store menus in an array for easier mapping
  const menus = [
    {
      title: data?.footer_menu1?.name,
      items: data?.footer_menu1?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu2?.name,
      items: data?.footer_menu2?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu3?.name,
      items: data?.footer_menu3?.menuItems?.nodes,
    },
    {
      title: data?.footer_menu4?.name,
      items: data?.footer_menu4?.menuItems?.nodes,
    },
  ];

  console.log(data);

  return (
    <footer className="footer">
      <div className="footer-container">
        {menus.map((menu, index) => (
          <div key={index} className="footer-column">
            <h4>{menu.title}</h4>
            <ul>
              {menu.items?.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
