import React from "react";
import "./impactsection.css";

function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-text">
        <h2>Bukan sekadar makan, ini gaya hidup cerdas</h2>
        <p>
          Dengan EcoFeast, setiap pesanan bukan hanya mengenyangkan,
          tapi juga berkontribusi pada bumi yang lebih bersih. Pantau konsumsi,
          kurangi limbah, dan dapatkan rekomendasi menu yang seimbang dari sistem kami.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-card big">
          <div className="impact-number">12.000+</div>
          <div className="impact-desc">
            <strong>wadah plastik</strong> yang diselamatkan pengguna kami
          </div>
        </div>

        <div className="impact-card small">
          <div className="impact-circle">±3</div>
          <p>
            <strong>wadah plastik</strong>
            <br />yang bisa Anda bantu hemat tiap minggu!
          </p>
        </div>

        <div className="impact-card small img">
          <div className="impact-circle">81%</div>
          <p>
            <strong>sampah makanan</strong>
            <br />yang biasanya Anda buang telah berhasil dihemat
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
