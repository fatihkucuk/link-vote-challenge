import React from "react";
import "./LinkListItemDetail.css";

const LinkListItem = (props) => {
  const navigate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="link-list-item-detail-body">
      <p className="link-info description">
        Hepsiburada Türkiye'nin En Büyük Online Alışveriş Sitesi. Cep telefonu,
        bilgisayar, televizyon, kozmetik ve binlerce ürün uygun fiyatlarla
        hepsiburada.com'da. Ücretsiz kargo fırsatları ile her şey ayağına
        gelsin.
      </p>
    </div>
  );
};

export default LinkListItem;
