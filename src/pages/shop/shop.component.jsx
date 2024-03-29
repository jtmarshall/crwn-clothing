import React from "react";
import SHOP_DATA from "./shopData.js";
import "../../components/collection-preview/collection-preview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
