import { Box, Button, Paper, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { findUserProfile, updateUser } from '../redux/actions/userActions';
import { USER_UPDATE_RESET } from '../redux/constants/userConstantes';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

const ProfileForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, data: user } = userProfile;

  const redirect = "/app";
  const navigate = useNavigate();

  const userUpdate = useSelector((state) => state.userUpdate);
  const { data: success, loading: loadingUpdate, error: errorUpdate } = userUpdate;

  

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  React.useEffect(()=>{
    dispatch(findUserProfile());
  },[dispatch])

  React.useEffect(()=>{
    if(user){
      setName(user.name)
      setEmail(user.email)
    }
  },[user])

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        user_id: user.user_id,
        name: name,
        email: email,
        password: password
      })
    );
  };

  React.useEffect(() => {
    if (success) {
      navigate(redirect);
      dispatch({type:USER_UPDATE_RESET})
    }
  }, [success])

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox type="error">{error}</MessageBox>
      ) : (
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '1rem',
          }}
        >
          <form>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                overflow: 'auto',
                height: '100%',
                '& > *': {
                  my: 1,
                },
              }}
            >
              <TextField
                name="name"
                variant="outlined"
                label="Nome"
                color="primary"
                fullWidth
                onChange={handleChangeName}
                value={name}
              />
              <TextField
                name="email"
                variant="outlined"
                label="Email"
                color="primary"
                fullWidth
                onChange={handleChangeEmail}
                type="email"
                value={email}
              />
              <TextField
                name="password"
                variant="outlined"
                label="Senha"
                color="primary"
                fullWidth
                onChange={handleChangePassword}
                value={password}
                type="password"
              />
              <Button
                type="submit"
                fullWidth
                onClick={handleUpdateSubmit}
                variant="contained"
                color="primary"
              >
                Salvar
              </Button>
            </Box>
          </form>
          {loadingUpdate && <LoadingBox />}
          {errorUpdate && <MessageBox type="error">{errorUpdate}</MessageBox>}
        </Paper>
      )}
    </>
  );
};

export default ProfileForm;
