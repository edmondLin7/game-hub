import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import PlatformSelector from "../components/PlatformSelector";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>
        ('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: platforms.length, results: platforms}
})

export default usePlatforms;

/*
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>
        ('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres}
})

export default useGenres;
*/