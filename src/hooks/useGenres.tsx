import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import genres from "../data/genres"

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null});

export default useGenres