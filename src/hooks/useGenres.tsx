import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const apiClient = new APIClient<Genre>('/genres');

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres}
})

export default useGenre;