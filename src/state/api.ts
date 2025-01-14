import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    itemId: string;
    name: string;
    price: number; // Price of the item
    quantity: number;
    laptop: Laptop;
}

export interface Laptop {
    laptopId: string;
    serialNumber: string;
    itemId: string;
    modelName: string;
    processor: string;
    memory: string;
    storage: string;
    battLife: string;
}

export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage: number;
    date: string;
}
export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage: number;
    date: string;
}

export interface DashboardMetrics {
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["DashboardMetrics"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"]
        })
    }),

});

export const {
    useGetDashboardMetricsQuery
} = api;