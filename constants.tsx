import React from "react";
import type {
  AnalysisRecord,
  PieChartData,
  Karakteristik,
  Aturan,
  Rekomendasi,
} from "./types";

export const SIDEBAR_LINKS = [
  { name: "Dashboard", icon: <HomeIcon className="w-5 h-5" />, path: "/" },
  {
    name: "Analisis",
    icon: <ChartBarIcon className="w-5 h-5" />,
    path: "/analisis",
  },
  {
    name: "Basis Aturan",
    icon: <BookOpenIcon className="w-5 h-5" />,
    path: "/basis-aturan",
    children: [
      { name: "Karakteristik", path: "/basis-aturan/karakteristik" },
      { name: "Aturan", path: "/basis-aturan/aturan" },
      { name: "Rekomendasi", path: "/basis-aturan/rekomendasi" },
    ],
  },
  {
    name: "Riwayat",
    icon: <ClockIcon className="w-5 h-5" />,
    path: "/riwayat",
  },
  {
    name: "Pengaturan",
    icon: <CogIcon className="w-5 h-5" />,
    path: "/pengaturan",
  },
];

export const ANALYSIS_DATA: AnalysisRecord[] = [
  {
    id: 1,
    name: "Budi Santoso",
    date: "2024-07-21",
    subject: "Matematika",
    recommendation: "Problem-Based Learning",
    status: "Selesai",
    kelas: 6,
  },
  {
    id: 2,
    name: "Citra Lestari",
    date: "2024-07-21",
    subject: "Biologi",
    recommendation: "Inquiry-Based Learning",
    status: "Selesai",
    kelas: 5,
  },
  {
    id: 3,
    name: "Doni Firmansyah",
    date: "2024-07-20",
    subject: "Fisika",
    recommendation: "Project-Based Learning",
    status: "Selesai",
    kelas: 6,
  },
  {
    id: 4,
    name: "Eka Putri",
    date: "2024-07-20",
    subject: "Kimia",
    recommendation: "Cooperative Learning",
    status: "Selesai",
    kelas: 5,
  },
  {
    id: 5,
    name: "Fajar Nugraha",
    date: "2024-07-19",
    subject: "Sejarah",
    recommendation: "Contextual Learning",
    status: "Selesai",
    kelas: 6,
  },
  {
    id: 6,
    name: "Gita Amelia",
    date: "2024-07-19",
    subject: "Geografi",
    recommendation: "Inquiry-Based Learning",
    status: "Selesai",
    kelas: 5,
  },
  {
    id: 7,
    name: "Hadi Wibowo",
    date: "2024-07-18",
    subject: "Ekonomi",
    recommendation: "Problem-Based Learning",
    status: "Selesai",
    kelas: 6,
  },
  {
    id: 8,
    name: "Indah Permata",
    date: "2024-07-18",
    subject: "Sosiologi",
    recommendation: "Cooperative Learning",
    status: "Selesai",
    kelas: 5,
  },
  {
    id: 9,
    name: "Joko Susilo",
    date: "2024-07-17",
    subject: "Bahasa Indonesia",
    recommendation: "Inquiry-Based Learning",
    status: "Selesai",
    kelas: 6,
  },
  {
    id: 10,
    name: "Kartika Sari",
    date: "2024-07-17",
    subject: "Seni Budaya",
    recommendation: "Project-Based Learning",
    status: "Selesai",
    kelas: 5,
  },
];

export const PIE_CHART_DATA: PieChartData[] = [
  { name: "Problem-Based", value: 400, color: "#34d399" }, // emerald-400
  { name: "Inquiry-Based", value: 300, color: "#60a5fa" }, // blue-400
  { name: "Project-Based", value: 300, color: "#f87171" }, // red-400
  { name: "Cooperative", value: 200, color: "#fbbf24" }, // amber-400
  { name: "Lainnya", value: 150, color: "#a78bfa" }, // violet-400
];

export const INFO_CARDS_DATA = [
  {
    title: "Total Aturan",
    value: "124",
    icon: <BookOpenIcon className="w-8 h-8 text-white" />,
    color: "bg-emerald-500",
  },
  {
    title: "Karakteristik",
    value: "32",
    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Rekomendasi",
    value: "8",
    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
    color: "bg-amber-500",
  },
  {
    title: "Total Subjek",
    value: "15",
    icon: <TagIcon className="w-8 h-8 text-white" />,
    color: "bg-red-500",
  },
];

export const KARAKTERISTIK_DATA: Karakteristik[] = [
  { id: "1", kode: "K01", name: "Siswa aktif bertanya" },
  { id: "2", kode: "K02", name: "Siswa suka bekerja kelompok" },
  { id: "3", kode: "K03", name: "Siswa mandiri dalam belajar" },
  { id: "4", kode: "K04", name: "Siswa butuh bimbingan intensif" },
];

export const REKOMENDASI_DATA: Rekomendasi[] = [
  {
    id: "1",
    kode: "R01",
    name: "Problem-Based Learning",
    description: "Model pembelajaran berbasis masalah nyata.",
  },
  {
    id: "2",
    kode: "R02",
    name: "Project-Based Learning",
    description: "Model pembelajaran berbasis proyek/kegiatan.",
  },
  {
    id: "3",
    kode: "R03",
    name: "Cooperative Learning",
    description: "Model pembelajaran dengan kelompok kecil.",
  },
];

export const ATURAN_DATA: Aturan[] = [
  {
    id: "1",
    kode: "A01",
    rules: ["K01", "K03"],
    rekomendasi: "Problem-Based Learning",
  },
  {
    id: "2",
    kode: "A02",
    rules: ["K01", "K02"],
    rekomendasi: "Cooperative Learning",
  },
  {
    id: "3",
    kode: "A03",
    rules: ["K03"],
    rekomendasi: "Project-Based Learning",
  },
];

export const CURRENT_USER = {
  name: "Admin Utama",
  role: "Administrator",
  email: "admin.utama@sistempakar.com",
  phone: "0812-3456-7890",
  address: "Jl. Merdeka No. 1, Jakarta, Indonesia",
  bio: "Administrator utama untuk sistem pakar rekomendasi model pembelajaran. Bertanggung jawab atas pengelolaan data dan aturan sistem.",
  avatarUrl: "https://i.pravatar.cc/150?u=admin",
};

// Icon Components (Heroicons)
export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"
      />
    </svg>
  );
}

export function ChartBarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
}

export function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

export function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5"
      />
    </svg>
  );
}

export function UserGroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.054.994.097 1.482.137l-4.207 4.207a.75.75 0 01-1.06 0l-4.207-4.207a.75.75 0 010-1.06l4.207-4.207a.75.75 0 011.06 0l4.207 4.207a.75.75 0 010 1.06l-4.207 4.207z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.054.994.097 1.482.137l-4.207 4.207a.75.75 0 01-1.06 0l-4.207-4.207a.75.75 0 010-1.06l4.207-4.207a.75.75 0 011.06 0l4.207 4.207a.75.75 0 010 1.06l-4.207 4.207z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function LightBulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.631 6.01 6.01 0 00-3 0 6.01 6.01 0 001.5 11.631zm0 0H9.75m2.25 0H12m2.25 0h-2.25"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
    </svg>
  );
}

export function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6z"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

export function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
