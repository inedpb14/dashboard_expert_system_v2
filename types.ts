export interface AnalysisRecord {
  id: number;
  name: string;
  date: string;
  subject: string;
  recommendation: string;
  status: 'Selesai' | 'Diproses';
  kelas: number;
}

export interface PieChartData {
    name: string;
    value: number;
    color: string;
}

export interface Karakteristik {
    id: string;
    kode: string;
    name: string;
}

export interface Aturan {
    id: string;
    kode: string;
    rules: string[]; // Array of Karakteristik.kode
    rekomendasi: string; // Rekomendasi.name
}

export interface Rekomendasi {
    id: string;
    kode: string;
    name: string;
    description: string;
}