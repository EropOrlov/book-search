import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';
import { useEffect } from 'react';

export default function Error() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);
  return <ToastContainer position="bottom-left" autoClose={2000} />;
}
