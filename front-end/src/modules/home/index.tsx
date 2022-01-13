/**
 * @desc this is the home comp. with form and graph comp.
 * @author Vikram vikben@gmail.com
 */

import { useContext, useEffect } from 'react';

import { AppContext } from '../../context';
import { useGetData } from '../../service/';

import { AppContainer } from '../../common/muiComponents/';
import Loading from '../../common/loader';
import CompaniesList from '../../components/companiesList';
import SearchForm from './searchForm';

function Home() {
  const [getData] = useGetData('/');
  const { state } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, [getData]);

  const { isLoading, hasError, errorMsg } = state;
  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <>{errorMsg}</>;
  }

  return (
    <AppContainer>
      <SearchForm />
      <CompaniesList />
    </AppContainer>
  );
}

export default Home;
