import React, { useEffect, useState } from 'react';
import { Container, Fade } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SBreadCrumb from '../../components/BreadCrumbs';
import SButton from '../../components/Button';
// import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/actions';
import SAlert from '../../components/Alert';
import Swal from 'sweetalert2';
import { deleteData } from '../../utils/fetch';
import { setNotif } from '../../redux/notif/actions';
import { accessCategories } from '../../const';
import TableWithAction from '../../components/TableWithAction';

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  })

  const checkAccess = () => {
    let { role } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function(key, index) {
      if (accessCategories[key].indexOf(role >= 0)) {
        access[key] = true;
      }
    })

    setAccess(access)
  }

  useEffect(() => {
    checkAccess()
  }, [])
  

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);



  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`cms/categories/${id}`);

        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: `Berhasil hapus kategori ${res.data.data.name}`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });

        dispatch(
          setNotif(
            true,
            'success',
            `berhasil hapus kategori ${res.data.data.name}`
          )
        );

        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container>
      <SBreadCrumb textSecond={'Categories'} />
      {
        access.tambah && (
          <SButton className="mb-3 mt-3" onClick={() => navigate('/categories/create')}>Tambah</SButton>
        )
      }
      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}
      <TableWithAction
        status={categories.status}
        thead={['Nama', 'Aksi']}
        data={categories.data}
        tbody={['name']}
        editUrl={`/categories/edit`}
        deleteAction={(id) => handleDelete(id)}
        withoutPagination
      />
    </Container>
  );
}

export default Categories;