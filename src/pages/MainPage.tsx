import { IconButton, Pagination, Typography } from "@mui/material";
import SearchField from "../components/SearchField";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ListCard from "../components/ListCard";
import { useMainPage } from "../hooks/useMainPage";
import LinearProgress from '@mui/material/LinearProgress';

const MainPage = () => {
  const {
    data,
    isLoading,
    isSuccess,
    searchQuery,
    filterQuery,
    isSearchVisible,
    isFilterVisible,
    page,
    onChange,
    handleFilter,
    handleSearchVisibility,
    handleFilterVisibility,
    handlePageChange,
    handleNavigation,
  } = useMainPage();
console.log({data});

  return (
    <div className="flex flex-col w-full px-2 md:p-5">
      <div className="flex flex-col mt-12 px-3 rounded-lg bg-white  pb-3">
        <div className="flex py-5  mb-10 ">
          <Typography
            variant="subtitle1"
            sx={{fontSize:'20px'}}
            className="flex w-full justify-start items-center text-2xl "
          >
            Site list
          </Typography>
          <div className="flex justify-between gap-3 items-center">
            {isFilterVisible && !isSearchVisible ? (
              <SearchField
                onChange={handleFilter}
                value={filterQuery}
                placeHolder="client give name"
                icon={<FilterListIcon />}
              />
            ) : (
              <IconButton onClick={handleFilterVisibility}>
                <FilterListIcon />
              </IconButton>
            )}
            {isSearchVisible && !isFilterVisible ? (
              <SearchField
                onChange={onChange}
                value={searchQuery}
                placeHolder="search"
                icon={<SearchIcon />}
              />
            ) : (
              <IconButton onClick={handleSearchVisibility}>
                <SearchIcon data-testid='SearchIcon'/>
              </IconButton>
            )}
          </div>
        </div>
{isLoading && <div className="w-full h-[100vh] justify-center items-center">  <LinearProgress /></div>}
{ isSuccess &&<>
  <div className="flex flex-wrap gap-7">
          { data?.data?.map((site) => (
            <ListCard
              imageUrl={site?.images[0]}
              siteName={site?.title}
              siteAddress={`${site?.address?.city},${site?.address?.city}`}
              siteContact={site?.contacts?.main?.phoneNumber}
              handleNavigation={() => handleNavigation(site?.id)}
              id={site?.id}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Pagination
            count={data?.totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                minWidth: "25px",
              },
            }}
          />
        </div>
</>}
       
      </div>
    </div>
  );
};

export default MainPage;
