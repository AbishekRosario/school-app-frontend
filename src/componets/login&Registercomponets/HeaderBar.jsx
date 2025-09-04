import React from 'react';

const HeaderBar = () => {
  return (
    <header className="header-bar d-flex align-items-center justify-content-between px-4 py-3">
      <div className="d-flex align-items-center gap-3">
        {/* For public folder assets, always start with / */}
        <img src="/monfort_log.png" alt="Monfort Logo" className="header-logo" />
        <h5 className="m-0 fw-bold text-white">Montfort Matric Hr.Sec.School,Kolathur.</h5>
      </div>
      {/* <span className="text-white fw-semibold fst-italic d-none d-md-block">
        Empowering Through Education
      </span> */}
      <div className="d-none d-md-flex align-items-center gap-2">
        <img
          src="/Mon_Founder.png"
          alt="Founder"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover',
            imageRendering: 'high-quality', // Ensures better scaling
          }}
        />
        <span className="text-white fw-semibold fst-italic">
          Empowering Through Education
        </span>
      </div>

    </header>
  );
};

export default HeaderBar;
