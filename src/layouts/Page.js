import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from "../pages/ProductListPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";

const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={ProductListPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/product/:id" component={ProductsPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
};

export default Page;