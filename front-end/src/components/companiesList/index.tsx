/**
 * @desc this comp will display Companies List
 * @author Vikram vikben@gmail.com
 */

import { useContext } from 'react';

import { AppGrid } from '../../common/muiComponents';
import { AppContext } from '../../context';
import { ICompany } from '../../interface';

function CompaniesList() {
  const { state } = useContext(AppContext);
  const { companies, filteredCompanies, companySearchVal } = state;

  const getCompany = (company: ICompany) => {
    return (
      <AppGrid container alignItems='center' key={company.id} mb={2} mt={2}>
        <AppGrid item xs={3}>
          {company.name}
        </AppGrid>
        <AppGrid item xs={3}>
          <img src={company.logo} alt={company.name} />
        </AppGrid>
        <AppGrid item xs={3}>
          {company.specialties}
        </AppGrid>
        <AppGrid item xs={3}>
          {company.city}
        </AppGrid>
      </AppGrid>
    );
  };

  if (filteredCompanies.length) {
    return <>{filteredCompanies.map((company: ICompany) => getCompany(company))}</>;
  } else if(companySearchVal && !filteredCompanies.length){
    return <>No Company data found for this search value!</>;
  }

  if (companies.length) {
    return <>{companies.map((company: ICompany) => getCompany(company))}</>;
  }
  return <>No Company data found!</>;
}

export default CompaniesList;
