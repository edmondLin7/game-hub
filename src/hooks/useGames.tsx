import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from './usePlatforms'
import APIClient from "../services/api-client";
import { MdLastPage } from "react-icons/md";

const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
    useInfiniteQuery<FetchResponse<Game>, Error> ({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
                .getAll({
                    params: { 
                        genres: gameQuery.genre?.id, 
                        platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    },
                }),
                getNextPageParam: (lastPage, allPages) => {
                    return lastPage.next ? allPages.length + 1 : undefined;
                }, staleTime: 24 * 60 * 60 * 1000 //24h
    });

export default useGames;