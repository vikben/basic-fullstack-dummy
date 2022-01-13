/**
 * @desc this file contains the interface for the application
 * @author Vikram vikben@gmail.com
 */

// context interface
export interface IContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}

// reducer state interface
export interface IState {
  isLoading: boolean;
  hasError: boolean;
  errorMsg: string;
  companySearchVal: string;
  companies: ICompany[];
  specialties: ISpecialties[];
  filteredCompanies: ICompany[];
}

// company data interface
export interface ICompany {
  id: string;
  name: string;
  logo: string;
  specialties: string;
  city: string;
}

// specialties data interface
export interface ISpecialties {
  value: string;
  name: string;
}
