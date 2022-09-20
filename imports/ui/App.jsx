import React from 'react';
import {Latest} from "/imports/ui/pages/latest/Latest";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
    <>
        <Latest />
        <ToastContainer />
    </>
);
