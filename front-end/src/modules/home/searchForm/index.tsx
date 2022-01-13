/**
 * @desc this
 * @author Vikram vikben@gmail.com
 */

import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

import { useContext, useCallback } from 'react';

import { AppContext } from '../../../context';
import {
  AppTextField,
  AppGrid,
  AppSelect,
  AppMenuItem,
  AppFormControl,
  AppInputLabel,
} from '../../../common/muiComponents';

function SearchForm() {
  const { state, dispatch } = useContext(AppContext);
  const { specialties } = state;
  const [selectedSpecialt, setSelectedSpecialt] = useState<string>('');

  const onChangeSearch = useCallback(
    (val: string) => {
      dispatch({
        type: 'FILTER_COMPANY',
        payload: {
          val,
          selectedSpecialt,
        },
      });
    },
    [selectedSpecialt]
  );

  const onChangeSpecialties = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      setSelectedSpecialt(event.target.value as string);
    },
    []
  );

  return (
    <>
      <AppGrid container alignItems='center' mb={1} mt={1} spacing={2}>
        <AppGrid item xs={6}>
          <AppTextField
            fullWidth
            placeholder='Search company by name ...'
            onChange={(e) => onChangeSearch(e.target.value)}
          />
        </AppGrid>
        <AppGrid item xs={6}>
          <AppFormControl fullWidth>
            <AppInputLabel id='specilties-label'>Specialties</AppInputLabel>
            <AppSelect
              labelId='specilties-label'
              value={selectedSpecialt}
              label='Specialties'
              onChange={(e) => onChangeSpecialties(e)}
              fullWidth
            >
              <AppMenuItem value=''>
                <em>None</em>
              </AppMenuItem>
              {specialties.map((specialt) => (
                <AppMenuItem key={specialt.value} value={specialt.value}>
                  {specialt.name}
                </AppMenuItem>
              ))}
            </AppSelect>
          </AppFormControl>
        </AppGrid>
      </AppGrid>
    </>
  );
}

export default SearchForm;
