import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchSitesQuery } from "../api/tracktikAPI";

export const useMainPage = () =>{
    const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterQuery, setFilterQuery] = useState<string>("");
  const navigate = useNavigate();
  const [isSearchVisible, setISearchVisible] = useState<boolean>(false);
  const [isFilterVisible, setIFilterVisible] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data,isLoading,isSuccess } = useFetchSitesQuery({
    page,
    limit,
    searchQuery,
    filterQuery,
  });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };
  const handleSearchVisibility = () => {
    setISearchVisible(!isSearchVisible);
    setIFilterVisible(false);
  };
  const handleFilterVisibility = () => {
    setIFilterVisible(!isFilterVisible);
    setISearchVisible(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const handleNavigation = (id: string) => {
    navigate(`/list-detail-view?siteId=${id}`);
  };
    return{
data,
isLoading,
isSuccess,
searchQuery,
filterQuery,
isSearchVisible,
isFilterVisible,
page,
limit,
onChange,
handleFilter,
handleSearchVisibility,
handleFilterVisibility,
handlePageChange,
handleNavigation
    }
}