/**
 * @desc this files contains reducer for home component
 * @author Vikram vikben@gmail.com
 */

import { IState, ICompany, ISpecialties } from '../interface/';

const LOADING = 'LOADING';
const SET_DATA = 'SET_DATA';
const FILTER_COMPANY = 'FILTER_COMPANY';

export const reducer = (
  state: IState,
  action: { type: string; payload: any }
) => {
  const newState = { ...state };
  switch (action.type) {
    case LOADING: {
      newState.isLoading = action.payload;
      return newState;
    }
    case SET_DATA: {
      newState.companies = action.payload.companies;
      const specialtiesMap = new Map();
      newState.companies.forEach((company: ICompany) => {
        const name = company.specialties.trim().toLowerCase();
        if (!specialtiesMap.has(name)) {
          specialtiesMap.set(name, {
            value: company.id,
            name: company.specialties,
          });
        }
      });
      newState.specialties = Array.from(specialtiesMap.values());
      return newState;
    }
    case FILTER_COMPANY: {
      const cloneCompany = [...newState.companies];
      newState.companySearchVal = action.payload.val;
      const tempSpecType = newState.specialties.filter((spec: ISpecialties) => spec.value === action.payload.selectedSpecialt);
      if (newState.companySearchVal !== '') {
        newState.filteredCompanies = cloneCompany.filter(
          (company: ICompany) => {
            return action.payload.selectedSpecialt
              ? tempSpecType[0].value === company.id &&
                  company.name.toLowerCase().includes(action.payload.val.toLowerCase())
              : company.name.toLowerCase().includes(action.payload.val.toLowerCase());
          }
        );
      } else {
        newState.filteredCompanies = [];
      }
      return newState;
    }
    default:
      return newState;
  }
};
