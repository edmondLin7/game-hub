import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Platform } from './usePlatforms'

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchResponse<Game>, Error> ({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Game>>('/games', {
                    params: { 
                        genres: gameQuery.genre?.id, 
                        platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    },
                })
                .then(res => res.data)
    });

export default useGames;