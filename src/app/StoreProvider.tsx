'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './redux'
import { PersistGate } from "redux-persist/integration/react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore | null>(null);
    if (!storeRef.current) {
    storeRef.current = makeStore();
    setupListeners(storeRef.current.dispatch);
    }
    const persistor = persistStore(storeRef.current);

    return (
    <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
        </PersistGate>
    </Provider>
    );
}