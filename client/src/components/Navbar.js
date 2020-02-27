import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';

//stateless functional component
const Navbar = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
    >
        <NavLink activeClassName="active" to="/signin">
            <Text size="x1" color="white">Sign In</Text>
        </NavLink>

        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
                <Box height={50} width={50} margin={2}>
                    <Image
                        src="./icons/logo.svg"
                        naturalHeight={1}
                        naturalWidth={1}
                        alt="BrewHaha Logo"
                    />
                </Box>
                <Heading size="xs" color="orange">
                    BrewHaha
            </Heading>
            </Box>
        </NavLink>

        <NavLink activeClassName="active" to="/signup">
            <Text size="x1" color="white">Sign Up</Text>
        </NavLink>
    </Box>
)

export default Navbar;