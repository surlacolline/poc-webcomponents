import React, { useState, useEffect } from 'react';
import '../index.css';
import { ShareGateTheme, ThemeProvider } from "@sharegate/orbit-ui";
import { Card, Heading, createThemeVars, Content, Item } from "@sharegate/orbit-ui";
import ApiClient from '../infra/apiClient.js';
import MenuOrbit from "../menuOrbit/MenuOrbit.js"

const Nav = ({ token }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        ApiClient.fetchDataWithToken(token)
        .then(responseData => {
            console.log(responseData)
            setData(responseData.data);
        })
        .catch(error => {
            setError(error.message);
        });
    }, [token]);

    createThemeVars([ShareGateTheme]);
    const menuItemsInternal = [{
        sectionTitle: "PRODUCTS from nav",
        items: [
            {
                icon: "Icon OV",
                title: "Officevibe",
                description: "Engage, recognize and manage performance",
                isNew: false,
                isExternal: false,
                redirectUrl: "https://www.officevibe.com/"
            }
        ]
    }, {
        sectionTitle: "DISCOVER",
        items: [
            {
                icon: "Icon OV",
                title: "LMS",
                description: "Item Description",
                isNew: true,
                isExternal: false,
                redirectUrl: "https://www.officevibe.com/"
            }
        ]
    }];
return (
    <ThemeProvider theme={ShareGateTheme} colorScheme="light">
    <Card>
    <Heading>Component nav displaying a product switcher</Heading>
    <Content>
    <div>
                            <h2>API Data</h2>
                            {error ? (
                                <div>Error: {error}</div>
                            ) : data ? (
                                <pre>{JSON.stringify(data, null, 2)}</pre>
                            ) : (
                                <p>Loading data...</p>
                            )}
                        </div>

                        <menuorbit-wc
        menu-items={JSON.stringify(menuItemsInternal)}
      ></menuorbit-wc>
        {/* <MenuOrbit menuItems={menuItemsInternal}></MenuOrbit>   */}
        </Content>
</Card>
</ThemeProvider>
)
};

export default Nav;
