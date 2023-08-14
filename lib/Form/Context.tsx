import { createContext, FormEvent } from 'react';

export interface IContextValue {
	isValid: boolean;
	values: { [x: string]: any };
	touched: { [x: string]: boolean };
	errors: { [x: string]: any };
	isDirty: boolean;
	handleBlur: (e: any) => void;
	handleChange: (name: string, value: any, isTouched?: boolean) => void;
	handleSubmit: (e: FormEvent) => void;
}

export default createContext<Partial<IContextValue>>({});
