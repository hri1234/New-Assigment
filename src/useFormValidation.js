// useFormValidation.js
import { useState, useEffect } from 'react';

const useFormValidation = (initialValues, validate) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validationErrors = validate(initialValues);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [initialValues, validate]);

  return { errors, isValid };
};

export default useFormValidation;