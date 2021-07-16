import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import "./index.css";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';


// <a href="http://localhost:3000/" onClick={() => {localStorage.clear()}}>Sair</a>

export default function TemporaryDrawer() {
    const history = useHistory()
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button onClick={() => {
                    history.push("/")
                }}>
                    <ListItemIcon><HomeIcon className="icon"/></ListItemIcon>
                    <ListItemText primary={"Início"} />
                </ListItem>
                <ListItem button onClick={() => {
                    history.push("/profile/")
                }}>
                    <ListItemIcon><AccountCircleIcon className="icon"/></ListItemIcon>
                    <ListItemText primary={"Minha Conta"} />
                </ListItem>
                <ListItem button onClick={() => {
                    history.push("/all/")
                }}>
                    <ListItemIcon><PeopleIcon className="icon"/></ListItemIcon>
                    <ListItemText primary={"Todos"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => {
                    localStorage.clear()
                    history.push("/")
                }}>
                    <ListItemIcon><ExitToAppIcon className="icon"/></ListItemIcon>
                    <ListItemText primary={"Sair"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer("right", true)}><MenuIcon className="icon burguer"/></Button>
            <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                {list("right")}
            </Drawer>
        </div>
    );
}
