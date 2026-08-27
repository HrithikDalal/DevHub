import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const AppRoutes = () => {
  return (
    <section className="container">
      <Alert />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="create-profile" element={<PrivateRoute component={ProfileForm} />} />
        <Route path="edit-profile" element={<PrivateRoute component={ProfileForm} />} />
        <Route path="add-experience" element={<PrivateRoute component={AddExperience} />} />
        <Route path="add-education" element={<PrivateRoute component={AddEducation} />} />
        <Route path="posts" element={<PrivateRoute component={Posts} />} />
        <Route path="posts/:id" element={<PrivateRoute component={Post} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default AppRoutes;
