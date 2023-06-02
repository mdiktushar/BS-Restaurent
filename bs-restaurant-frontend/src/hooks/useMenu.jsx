// import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_ULR}menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])
    // return [menu, loading]

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch(`${import.meta.env.VITE_ULR}menu`);
            return res.json();
        }
    })

    return [menu, loading, refetch]
};

export default useMenu;