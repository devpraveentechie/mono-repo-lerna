import classNames from 'classnames';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formatDate from '../../../utils/formatDate';
import { useEffect, useRef } from 'react';
import { AnyObject } from 'yup';
export const CombinedFormField = ({
  id = '',
  name = '',
  label = '',
  type = 'text',
  placeholder = '',
  errors={},
  hideLabel = false,
  required = false,
  onChange=()=>{},
  onBlur=()=>{},
  value='',
  ref = null,
  options = [],
  multiselect = false,
  isSearchable = false,
  customStyles = {},
  selected,
  dateFormat = 'mm/dd/yyyy',
  minDate = formatDate(),
  showMonthYearPicker = false,
  disabled = false,
  isClearable = false,
  onKeyPress=()=>{},
  preventScrollChange = false
}:CombinedFormFieldInterface) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (preventScrollChange) {
      const preventScroll = (e:AnyObject) => {
        e.preventDefault();
      };
      const input:AnyObject = inputRef.current || {};
      if (input && type === 'number') {
        input?.addEventListener('wheel', preventScroll);
        return () => {
          input?.removeEventListener('wheel', preventScroll);
        };
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preventScrollChange]);
  switch (type) {
    case 'text':
      return (
        <div>
          <label
            htmlFor={id}
            className={classNames(
              'mb-3 block text-sm font-bold leading-[1.2em]',
              {
                'sr-only': hideLabel
              }
            )}
          >
            {label}
          </label>
          <div>
            <input
              ref={ref}
              id={id}
              className="h-9.5 block w-full rounded-md border border-bark-light-black py-2 px-3 text-base focus:outline-none sm:text-sm"
              placeholder={placeholder}
              name={name}
              required={required}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              disabled={disabled}
              value={value}
            />
            <div className="mt-[0.25em] text-red-700">
              {errors[name] && <span>This field is required</span>}
            </div>
          </div>
        </div>
      );
    case 'checkbox':
      return (
        <div className={'mr-[0.5rem] w-[30rem]'}>
          <input
            ref={ref}
            id={id}
            className="h-9.5 mr-2 w-full rounded-md border border-bark-light-black py-2 px-2 text-base focus:outline-none sm:text-sm"
            placeholder={placeholder}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
            checked={value}
            disabled={disabled}
          />
          <label
            htmlFor={id}
            className={classNames('mb-3 text-sm leading-[1.2em]', {
              'sr-only': hideLabel
            })}
          >
            {label}
          </label>
          <div className="mt-[0.25em] text-red-700">
            {errors[name] && <span>This field is required</span>}
          </div>
        </div>
      );
    case 'select':
      return (
        <div>
          {label && (
            <label
              htmlFor={id}
              className="mb-3 block text-sm font-bold leading-[1.2em]"
            >
              {label}
            </label>
          )}
          <Select
            options={options}
            name={name}
            id={id}
            isMulti={multiselect}
            value={value}
            isSearchable={isSearchable}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                ...customStyles
              })
            }}
            onChange={onChange}
            isClearable={isClearable}
            isDisabled={disabled}
          />
        </div>
      );
    case 'date':
      return (
        <>
          {!hideLabel && (
            <label
              htmlFor={id}
              className={classNames(
                'mb-3 block text-sm font-bold leading-[1.2em]',
                {
                  'sr-only': hidelabel
                }
              )}
            >
              {label}
            </label>
          )}
          <DatePicker
            selected={selected}
            onChange={onChange}
            name={name}
            id={id}
            dateFormat={dateFormat}
            minDate={minDate}
            showMonthYearPicker={showMonthYearPicker}
            disabled={disabled}
          />
        </>
      );
    case 'textarea':
      return (
        <>
          <label
            htmlFor={id}
            className={classNames(
              'mb-3 block text-sm font-bold leading-[1.2em]',
              {
                'sr-only': hideLabel
              }
            )}
          >
            {label}
          </label>
          <textarea
            id={id}
            rows={4}
            className="bg-white-50 block w-full rounded-lg border border-bark-light-black p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </>
      );
    default:
      return (
        <div>
          <label
            htmlFor={id}
            className={classNames(
              'mb-3 block text-sm font-bold leading-[1.2em]',
              {
                'sr-only': hideLabel
              }
            )}
          >
            {label}
          </label>
          <div className={'mr-[0.5rem] w-[15rem]'}>
            <input
              ref={ref}
              id={id}
              className="h-9.5 block w-full rounded-md border border-bark-light-black py-2 px-3 text-base focus:outline-none sm:text-sm"
              placeholder={placeholder}
              value={value}
              name={name}
              required={required}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
              onKeyPress={onKeyPress}
            />
            <div className="mt-[0.25em] text-red-700">
              {errors[name] && <span>This field is required</span>}
            </div>
          </div>
        </div>
      );
  }
};

interface CombinedFormFieldInterface {
    id?:string|undefined,
  name:string|undefined,
  label?:string | undefined,
  hideLabel?:boolean,
  type? :string | undefined,
  placeholder?:string | undefined,
  errors?: object,
  required?:boolean,
  onChange?:void|React.ChangeEventHandler<HTMLInputElement> | React.ChangeEventHandler<HTMLTextAreaElement> | undefined,
  onBlur?:Function,
  value?:string | number | readonly string[] | undefined,
  ref?:React.LegacyRef<HTMLInputElement> | undefined,
  options?:Array<object>,
  multiselect?:boolean,
  isSearchable?:boolean,
  customStyles?:object|undefined,
  selected?:Date | null | undefined,
  dateFormat?: string | undefined,
  minDate?:Date | 0 | undefined,
  showMonthYearPicker?:boolean,
  disabled?:boolean,
  isClearable?:boolean,
  onKeyPress?:Function,
  preventScrollChange?:boolean
}