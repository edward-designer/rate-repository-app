/*import { useState, useEffect } from "react";*/
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  const repositories = data?.repositories;

  {
    /*const [repositories, setRepositories] = useState();
     const [loading, setLoading] = useState(false);
    
     const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch("http://192.168.7.22:5000/api/repositories");
    const json = await response.json(); 

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);*/
  }

  return { repositories, loading, error };
};

export default useRepositories;