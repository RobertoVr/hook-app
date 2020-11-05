
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Roberto',
        email: 'roberto@gmail.com'
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [data, handleInputChange, reset] = result.current;
        expect(data).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar el name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Citlaly'
                }
            });
        });
        const [data] = result.current;
        expect(data).not.toEqual(initialForm);
    });

    test('Debe de restablecer el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Citlaly'
                }
            });
            reset();
        });
        const [data] = result.current;
        expect(data).toEqual(initialForm);
    });
})
