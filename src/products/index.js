import React from "react";
import BackLogo from "../assets/icon/back.svg";

import "./product.css";

class Products extends React.Component {
  script = document.createElement("script");
  config = {
    publishable_key: "sr_live_pk_0ac696797e14d49ca01f523ffb8d962e670f",
    options: {
      products_to_display: "all",
      categories: [],
      product_size: "medium",
      image_dimension_value: "crop",
      image_aspect_ratio: "portrait",
      button_style: "standard",
      variation_style: "on_hover",
      open_product_in: "in_page",
      button_position: "inline",
      product_default_sorting_order: "product_order",
      product_pagination_limit: "3",
      hide_out_of_stock: "0",
    },
    includes: {
      show_search_box: "1",
      show_sort_by: "1",
      show_per_page: "1",
      show_category_dropdown: "1",
      show_currency_dropdown: "1",
      show_language_dropdown: "1",
      show_product_filters: "1",
      show_product_name: "1",
      show_product_price: "1",
      show_product_image: "1",
      show_product_summary: "1",
      open_modal_on_image_click: "1",
      show_view_product_button: "1",
      show_add_to_cart_button: "1",
      show_min_max_order_quantity: "1",
      show_sale: "1",
      show_free_shipping: "1",
      show_new_product: "1",
      show_digital_download: "1",
      image_swap: "1",
      show_button_icons: "1",
    },
    product_popup: {
      show_product_name: "1",
      show_product_price: "1",
      show_product_summary: "1",
      show_product_description: "1",
      show_product_image: "1",
      show_select_quantity: "1",
      show_image_thumbnails: "1",
      show_product_reviews: "1",
      show_product_sku: "1",
      show_product_categories: "1",
      show_social_sharing_icons: "1",
      show_related_products: "1",
      thumbnail_layout: "horizontal_below",
      image_dimension_value: "crop",
      image_aspect_ratio: "portrait",
      variation_styling: "dropdown",
      show_min_max_order_quantity: "1",
      show_sale: "1",
      show_free_shipping: "1",
      show_new_product: "1",
      show_digital_download: "1",
      show_product_tabs: "1",
      image_zoom: "1",
      lightbox_gallery: "1",
    },
    styles: {
      align_content: "center",
      product_title: "#314d5d",
      product_price: "#2d2d2d",
      product_summary: "#777777",
      button_background: "#233642",
      button_color: "#ffffff",
      view_product_button_background: "#233642",
      view_product_button_color: "#ffffff",
      view_cart_button_background: "#233642",
      view_cart_button_color: "#ffffff",
      product_background: "#ffffff",
      modal_background: "#ffffff",
      popup: {
        colors: {
          product_title: "#333",
          product_price: "#666666",
          product_summary: "#666666",
          button_background: "#233642",
          button_color: "#ffffff",
          product_active_tab_background: "#f5f5f5",
        },
      },
    },
  };

  loadScript = () => {
    let body = document.body;
    this.script.innerHTML = "";
    this.script.src = "https://cdn.shoprocket.io/loader.js";
    this.script.async = true;
    this.script.defer = true;
    body.appendChild(this.script);
  };

  back = () => {
    this.script.remove();
    window.Shoprocket.Destroy();
    window.location.href = "/";
  };

  componentDidMount() {
    this.loadScript();
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div onClick={() => this.back()} className="back-link">
            <img className="back-logo" alt="Back" title="Back" src={BackLogo} />
            Back
          </div>
        </div>

        <div className="sr-element sr-products" data-embed="multiple_products">
          <script type="application/json">{JSON.stringify(this.config)}</script>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
