import React from 'react';
import MainLayout from '@/Layout/MainLayout';

const HomeScreen = () => (
    <div className="flex flex-1  justify-center items-center text-white font-bold  text-3xl">
        HOME
    </div>
);

HomeScreen.layout = (page) => <MainLayout>{page}</MainLayout>;

export default HomeScreen;
