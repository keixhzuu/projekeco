import React, { useEffect, useState } from "react";
import "./howitwork.css";
import { Gift, CalendarDays, Utensils, ChartLine } from "lucide-react";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animasi saat komponen muncul
    setTimeout(() => setVisible(true), 100);
  }, []);

  const steps = [
    {
      id: 1,
      icon: <Gift size={48} />,
      title: "Pilih Paket",
      desc: "Pilih dari berbagai catering terpercaya dan sesuaikan level paketmu.",
    },
    {
      id: 2,
      icon: <CalendarDays size={48} />,
      title: "Atur Jadwal dan Jumlah Makan",
      desc: "Pilih 1–3 kali makan per hari dan 4–6 hari per minggu.",
    },
    {
      id: 3,
      icon: <Utensils size={48} />,
      title: "Pilih Menu atau Gunakan Rekomendasi",
      desc: "Atur sendiri atau biarkan sistem pilih menu seimbang untukmu.",
    },
    {
      id: 4,
      icon: <ChartLine size={48} />,
      title: "Nikmati dan Pantau di Dashboard",
      desc: "Lihat statistik nutrisi dan food waste setiap minggu.",
    },
  ];

  return (
    <div className="how-it-works">
      <h2>Langkah cepat untuk memulai</h2>
      <p>Hanya 4 Langkah Mudah Menuju Pola Makan Sehatmu.</p>

      <div className="steps">
        {steps.map((step, index) => (
          <div
            className={`card ${visible ? "fade-up" : ""}`}
            key={step.id}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="step-number">{step.id}</div>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="timeline">
        <div className="line"></div>
        {steps.map((_, index) => (
          <div className="dot" key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
