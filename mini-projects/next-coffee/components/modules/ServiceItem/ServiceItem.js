import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ title, desc, img, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
          <h4 className="d-flex align-items-baseline">
            {/* <i class="fa fa-truck service-icon"></i> */}
            <div
              style={{
                background: "#da9f5b",
                borderRadius: "100%",
                height: "35px",
                width: "40px",
                textAlign: "center",
                paddingTop: "2px",
              }}
            >
              <FontAwesomeIcon
                icon={Icons[icon]}
                style={{ fontSize: "1rem", margin: "0,auto", width: "20px" }}
              />
            </div>
            <p className="ml-3">{title}</p>
          </h4>
          <p class="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
