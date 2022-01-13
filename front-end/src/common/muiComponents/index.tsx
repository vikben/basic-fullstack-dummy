/**
 * @desc this file will contain all the material ui comp. that are going to be be used on the application
 * @author Vikram vikben@gmail.com
 */

import Container, { ContainerProps } from '@mui/material/Container';
import Grid, { GridProps } from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import InputLabel, {InputLabelProps} from '@mui/material/InputLabel';

export const AppContainer = (props: ContainerProps) => <Container {...props} />;
export const AppGrid = (props: GridProps) => <Grid {...props} />;
export const AppTextField = (props: TextFieldProps) => <TextField {...props} />;
export const AppFormControl = (props: FormControlProps) => <FormControl {...props} />;
export const AppSelect = (props: SelectProps) => <Select {...props} />;
export const AppMenuItem = (props: MenuItemProps) => <MenuItem {...props} />;
export const AppInputLabel = (props: InputLabelProps) => <InputLabel {...props} />;
