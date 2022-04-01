require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import MainLayout from '@/Layout/MainLayout';

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => {
        const page = import(`./Pages/${name}`);
        page.layout = page.layout || <MainLayout>{page}</MainLayout>;
        return page;
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
