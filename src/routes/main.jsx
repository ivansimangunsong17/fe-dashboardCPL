import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';

import {
  LoginPage,
  NotFoundPage,
  AdminUniversitasPage,
  DashboardUniv,
  DataAkunUniv,
  DataProdi,
  DataPerhitunganUniv,
  AdminProdiPage,
  DashboardProdi,
  PemetaanProdi,
  DataAkunProdi,
  DataMahasiswa,
  DataMatakuliah,
  DataPerhitunganProdi,
  DataProgramStudi,
  KaprodiPage,
  DashboardKaprodi
} from '../routes/index';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />, // Ganti errorElement dengan element
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  // Dashboard Universitas
  {
    path: '/dashboard-universitas',
    element: <AdminUniversitasPage />,
    children: [
      {
        path: '',
        element: <DashboardUniv />,
      },
      {
        path: 'data-akun',
        element: <DataAkunUniv />,
      },
      {
        path: 'data-prodi',
        element: <DataProdi />,
      },
      {
        path: 'hasil-perhitungan',
        element: <DataPerhitunganUniv />,
      },
    ],

  },

  //Dashboard Program Studi
  {
    path: '/dashboard-prodi',
    element: <AdminProdiPage />,
    children: [
      {
        path: '',
        element: <DashboardProdi />,
      },
      {
        path: 'data-prodi',
        element: <DataProgramStudi />,
      },
      {
        path: 'pemetaan-cpl',
        element: <PemetaanProdi />,
      },
      {
        path: 'data-akun',
        element: <DataAkunProdi />,
      },
      {
        path: 'data-mahasiswa',
        element: <DataMahasiswa />,
      },
      {
        path: 'data-matakuliah',
        element: <DataMatakuliah />,
      },
      {
        path: 'data-perhitungan',
        element: <DataPerhitunganProdi />,
      },

    ]
  },

  //Dashboard Kaprodi
  {
    path: 'dashboard-kaprodi',
    element: <KaprodiPage />,
    children: [
      {
        path: '',
        element: <DashboardKaprodi/>,
      },
    ]
  },

]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
