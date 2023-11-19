import axios from 'axios';
import { config } from '../configs';
import handleError from './handleError';

export async function getData(url, params) {
  try {
    let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

    const res = await axios.get(`${config.API_DEV}/${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res
  } catch (error) {
    return handleError(error)
  }
}

export async function postData(url, payload, formData) {
  try {
    let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
    const res = await axios.post(`${config.API_DEV}/${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': formData ? 'multipart/form-data' : 'application/json',
      },
    });
    return res
  } catch (error) {
    return handleError(error)
  }
}

export async function putData(url, payload) {
  try {
    let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
    const res = await axios.put(`${config.API_DEV}/${url}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res
  } catch (error) {
    return error
  }
}

export async function patchData(url, payload) {
  try {
    let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
    const res = await axios.patch(`${config.API_DEV}/${url}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res
  } catch (error) {
    return error
  }
}

export async function deleteData(url) {
  try {
    let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

    const res = await axios.delete(`${config.API_DEV}/${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res
  } catch (error) {
    return error
  }
}