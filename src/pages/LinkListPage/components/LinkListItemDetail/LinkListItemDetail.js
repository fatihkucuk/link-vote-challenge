import React from "react";
import "./LinkListItemDetail.css";

const LinkListItem = (props) => {
  return (
    <div className="link-list-item-detail-container">
      {/* <div className="circle-hb">
        <span className="link-info link-point">{props.link.points} POINTS</span>
      </div> */}
      <div className="circle-container">
        <svg viewBox="0 0 100 100" className="circle-svg">
          <circle cx="50" cy="50" r="45" className="hb-circle-color-orange" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-orange-dark"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-blue-light"
          />
          <circle cx="50" cy="50" r="45" className="hb-circle-color-purple" />
          <circle cx="50" cy="50" r="45" className="hb-circle-color-blue" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-purple second"
          />
        </svg>
        <span className="link-info link-points">
          {props.link.points} POINTS
        </span>
      </div>

      <a href={props.link.url} className="link-info link-name">
        {props.link.name}
      </a>
      <p className="link-info description">
        Hepsiburada Türkiye'nin En Büyük Online Alışveriş Sitesi. Cep telefonu,
        bilgisayar, televizyon, kozmetik ve binlerce ürün uygun fiyatlarla
        hepsiburada.com'da. Ücretsiz kargo fırsatları ile her şey ayağına
        gelsin.
      </p>
      <div className="footer">
        <button className="redirect-button">Hepsiburada.com</button>
      </div>
    </div>
  );
};

export default LinkListItem;
