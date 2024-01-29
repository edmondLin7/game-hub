import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "../services/api-client";
//import apiClient from "../services/api-client";
import PlatformSelector from "../components/PlatformSelector";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: platforms.length, results: platforms}
});

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